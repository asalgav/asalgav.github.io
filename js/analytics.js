/**
 * Adrian Salas — Personal Portfolio
 * js/analytics.js — Visit tracking and analytics dashboard
 *
 * Depends on: firebase-firestore-compat (compat SDK), Chart.js
 * Globals expected: firebase (from firebase-app-compat + firebase-firestore-compat)
 */

(function () {
  'use strict';

  var COLLECTION = 'visits';
  var chart = null;
  var dashboardInitialized = false;

  // ── VISIT TRACKING ────────────────────────────────────────────────────────
  // Fires on every page load for all visitors (authenticated or not).
  // IP is resolved via ipify.org; failure is silently ignored.

  async function trackVisit() {
    try {
      var db = firebase.firestore();
      var ip = 'unknown';
      try {
        var res = await fetch('https://api.ipify.org?format=json');
        var data = await res.json();
        ip = data.ip || 'unknown';
      } catch (_) { /* silent — ipify unreachable */ }

      await db.collection(COLLECTION).add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        ip:        ip,
        userAgent: navigator.userAgent,
        page:      window.location.pathname,
      });
    } catch (e) {
      // Silent — never interrupt the user experience
      console.debug('[analytics] tracking error:', e);
    }
  }

  // ── DATA LOADING ──────────────────────────────────────────────────────────

  async function loadDashboard(days) {
    days = parseInt(days, 10) || 30;

    var errorEl = document.getElementById('analytics-error');
    if (errorEl) errorEl.textContent = '';

    try {
      var db = firebase.firestore();
      var cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);

      var snapshot = await db.collection(COLLECTION)
        .where('timestamp', '>=', cutoff)
        .orderBy('timestamp', 'desc')
        .get();

      var visits = snapshot.docs.map(function (doc) {
        return Object.assign({ id: doc.id }, doc.data());
      });

      renderChart(visits, days);
      renderTable(visits);
      updateSummary(visits, days);
    } catch (e) {
      console.error('[analytics] load error:', e);
      if (errorEl) errorEl.textContent = 'Could not load analytics data. Check Firestore rules.';
    }
  }

  // ── CHART ─────────────────────────────────────────────────────────────────

  function aggregateByDay(visits, days) {
    var counts = {};
    var labels = [];
    var today  = new Date();

    for (var i = days - 1; i >= 0; i--) {
      var d   = new Date(today);
      d.setDate(d.getDate() - i);
      var key = d.toISOString().split('T')[0];
      counts[key] = 0;
      labels.push(key);
    }

    visits.forEach(function (v) {
      if (v.timestamp) {
        var date = v.timestamp.toDate ? v.timestamp.toDate() : new Date(v.timestamp);
        var key  = date.toISOString().split('T')[0];
        if (key in counts) counts[key]++;
      }
    });

    return {
      labels: labels,
      data:   labels.map(function (l) { return counts[l]; }),
    };
  }

  function renderChart(visits, days) {
    var canvas = document.getElementById('analytics-chart');
    if (!canvas) return;

    var agg = aggregateByDay(visits, days);

    // Reduce x-axis label density for readability
    var shortLabels = agg.labels.map(function (l) {
      var d = new Date(l + 'T00:00:00');
      return d.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' });
    });

    if (chart) {
      chart.data.labels               = shortLabels;
      chart.data.datasets[0].data     = agg.data;
      chart.update();
      return;
    }

    chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels:   shortLabels,
        datasets: [{
          label:           'Visits',
          data:            agg.data,
          backgroundColor: 'rgba(201, 169, 110, 0.4)',
          borderColor:     '#c9a96e',
          borderWidth:     1,
          borderRadius:    3,
        }],
      },
      options: {
        responsive:          true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: function (items) { return items[0].label; },
              label: function (item)  {
                return item.raw + ' visit' + (item.raw !== 1 ? 's' : '');
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color:         '#888',
              font:          { family: "'JetBrains Mono', monospace", size: 10 },
              maxTicksLimit: 10,
              maxRotation:   0,
            },
            grid: { color: 'rgba(255,255,255,0.04)' },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color:     '#888',
              font:      { family: "'JetBrains Mono', monospace", size: 11 },
              precision: 0,
            },
            grid: { color: 'rgba(255,255,255,0.04)' },
          },
        },
      },
    });
  }

  // ── IP LOG TABLE ──────────────────────────────────────────────────────────

  function renderTable(visits) {
    var tbody = document.getElementById('analytics-tbody');
    if (!tbody) return;

    if (!visits.length) {
      tbody.innerHTML =
        '<tr><td colspan="3" style="text-align:center;color:#555;padding:1.2rem">No visits recorded yet</td></tr>';
      return;
    }

    tbody.innerHTML = visits.slice(0, 200).map(function (v) {
      var date = v.timestamp
        ? (v.timestamp.toDate ? v.timestamp.toDate() : new Date(v.timestamp))
            .toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })
        : '—';
      var ip = v.ip || '—';
      var ua = v.userAgent || '—';
      if (ua.length > 65) ua = ua.substring(0, 65) + '…';
      return (
        '<tr>' +
          '<td>' + escapeHtml(date) + '</td>' +
          '<td class="analytics-ip">' + escapeHtml(ip) + '</td>' +
          '<td class="analytics-ua">' + escapeHtml(ua) + '</td>' +
        '</tr>'
      );
    }).join('');
  }

  function updateSummary(visits, days) {
    var el = document.getElementById('analytics-summary');
    if (el) {
      el.textContent =
        visits.length + ' visit' + (visits.length !== 1 ? 's' : '') +
        ' in the last ' + days + ' day' + (days !== 1 ? 's' : '');
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── DASHBOARD INIT ────────────────────────────────────────────────────────
  // Called by auth.js when a user successfully authenticates.

  function initDashboard() {
    if (dashboardInitialized) {
      // Already wired up — just refresh data
      var sel = document.getElementById('analytics-days');
      loadDashboard(sel ? sel.value : 30);
      return;
    }
    dashboardInitialized = true;

    var daysSelect   = document.getElementById('analytics-days');
    var ipToggle     = document.getElementById('analytics-show-ips');
    var tableWrap    = document.getElementById('analytics-table-wrap');

    if (daysSelect) {
      daysSelect.addEventListener('change', function () {
        loadDashboard(this.value);
      });
    }

    if (ipToggle && tableWrap) {
      ipToggle.addEventListener('change', function () {
        tableWrap.style.display = this.checked ? '' : 'none';
      });
    }

    loadDashboard(daysSelect ? daysSelect.value : 30);
  }

  // ── BOOT ──────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    trackVisit();
  });

  window.initAnalyticsDashboard = initDashboard;

}());