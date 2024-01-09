var popupState = true;

const buttonConnexion = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
var loginT1 = document.getElementById('loginT1');
var loginT2 = document.getElementById('loginT2');
var loginT3 = document.getElementById('loginT3');
var popupHide1 = document.querySelector('.popupHide1');
var popupHide2 = document.querySelector('.popupHide2');


buttonConnexion.addEventListener('click', () => {
  loginT1.textContent = 'Connexion';
  loginT2.textContent = 'Crée un compte';
  loginT3.textContent = 'Se connecter';
  popup.style.display = 'block';
  popupHide1.style.display = 'none';
  popupHide2.style.display = 'none';
});

loginT2.addEventListener('click', () => {
  if (popupState) {
    loginT1.textContent = 'Connexion';
    loginT2.textContent = 'Crée un compte';
    loginT3.textContent = 'Se connecter';
    popup.style.display = 'block';
    popupHide1.style.display = 'none';
    popupHide2.style.display = 'none';
    popupState = false;
  } else {
    loginT1.textContent = 'Crée un compte';
    loginT2.textContent = 'Connexion';
    loginT3.textContent = 'S\'inscrire';
    popup.style.display = 'block';
    popupHide1.style.display = 'flex';
    popupHide2.style.display = 'flex';
    popupState = true;
  }
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

