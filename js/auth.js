/**
 * Adrian Salas — Personal Portfolio
 * js/auth.js — Firebase Authentication logic
 *
 * Depends on: firebase-app-compat, firebase-auth-compat, auth-config.js
 * Globals expected: firebaseConfig, ALLOWED_EMAILS (from auth-config.js)
 */

(function () {
  'use strict';

  // ── INIT ──────────────────────────────────────────────────────────────────

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  let currentMode = 'signin'; // 'signin' | 'signup'

  // ── AUTH STATE ─────────────────────────────────────────────────────────────

  function initAuth() {
    auth.onAuthStateChanged(function (user) {
      var privateSection    = document.getElementById('private');
      var privateNavLi      = document.getElementById('nav-private-li');
      var mobileNavPrivate  = document.getElementById('mobile-nav-private');
      var signinBtn         = document.getElementById('nav-signin-btn');
      var signoutBtn        = document.getElementById('nav-signout-btn');
      var welcomeEmail      = document.getElementById('private-welcome-email');

      if (user) {
        privateSection   && privateSection.classList.remove('auth-hidden');
        privateNavLi     && privateNavLi.classList.remove('auth-hidden');
        mobileNavPrivate && mobileNavPrivate.classList.remove('auth-hidden');
        signinBtn        && signinBtn.classList.add('auth-hidden');
        signoutBtn       && signoutBtn.classList.remove('auth-hidden');
        if (welcomeEmail) welcomeEmail.textContent = user.email;
      } else {
        privateSection   && privateSection.classList.add('auth-hidden');
        privateNavLi     && privateNavLi.classList.add('auth-hidden');
        mobileNavPrivate && mobileNavPrivate.classList.add('auth-hidden');
        signinBtn        && signinBtn.classList.remove('auth-hidden');
        signoutBtn       && signoutBtn.classList.add('auth-hidden');
        if (welcomeEmail) welcomeEmail.textContent = '';
      }
    });
  }

  // ── MODAL ──────────────────────────────────────────────────────────────────

  function openAuthModal(mode) {
    currentMode = mode || 'signin';
    var overlay = document.getElementById('auth-modal-overlay');
    overlay.classList.remove('auth-hidden');
    updateModalMode();
    document.getElementById('auth-email').value    = '';
    document.getElementById('auth-password').value = '';
    document.getElementById('auth-error').textContent = '';
    setTimeout(function () {
      document.getElementById('auth-email').focus();
    }, 50);
  }

  function closeAuthModal() {
    document.getElementById('auth-modal-overlay').classList.add('auth-hidden');
  }

  function switchAuthTab(mode) {
    currentMode = mode;
    updateModalMode();
  }

  function updateModalMode() {
    var isSignin = currentMode === 'signin';
    document.getElementById('auth-tab-signin').classList.toggle('active', isSignin);
    document.getElementById('auth-tab-signup').classList.toggle('active', !isSignin);

    var submitBtn = document.getElementById('auth-submit-btn');
    submitBtn.setAttribute('data-i18n', isSignin ? 'authSignIn' : 'authSignUp');

    // Refresh translations so the button text updates
    var lang = localStorage.getItem('lang') || 'en';
    if (window.setLang) window.setLang(lang);

    document.getElementById('auth-error').textContent = '';
  }

  function handleOverlayClick(event) {
    if (event.target === document.getElementById('auth-modal-overlay')) {
      closeAuthModal();
    }
  }

  // ── FORM SUBMIT ────────────────────────────────────────────────────────────

  function handleAuthSubmit(event) {
    event.preventDefault();
    var email    = document.getElementById('auth-email').value.trim();
    var password = document.getElementById('auth-password').value;

    if (currentMode === 'signin') {
      handleSignIn(email, password);
    } else {
      handleSignUp(email, password);
    }
  }

  function handleSignIn(email, password) {
    clearAuthError();
    auth.signInWithEmailAndPassword(email, password)
      .then(function () { closeAuthModal(); })
      .catch(function (err) { showAuthError(err.message); });
  }

  function handleSignUp(email, password) {
    clearAuthError();
    if (!ALLOWED_EMAILS.includes(email.toLowerCase())) {
      showAuthError('This email is not authorised to register.');
      return;
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then(function () { closeAuthModal(); })
      .catch(function (err) { showAuthError(err.message); });
  }

  function handleSignOut() {
    auth.signOut().catch(function (err) { console.error('Sign-out error:', err); });
  }

  function showAuthError(message) {
    document.getElementById('auth-error').textContent = message;
  }

  function clearAuthError() {
    document.getElementById('auth-error').textContent = '';
  }

  // ── KEYBOARD ───────────────────────────────────────────────────────────────

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAuthModal();
  });

  // ── INIT ON DOM READY ─────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', initAuth);

  // ── EXPOSE GLOBALS ─────────────────────────────────────────────────────────

  window.openAuthModal    = openAuthModal;
  window.closeAuthModal   = closeAuthModal;
  window.switchAuthTab    = switchAuthTab;
  window.handleSignOut    = handleSignOut;
  window.handleAuthSubmit = handleAuthSubmit;
  window.handleOverlayClick = handleOverlayClick;

}());
