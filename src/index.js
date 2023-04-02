import './index.scss';

let context = {
  container: document.querySelector('#container'),
  loginBtn: document.querySelector('#login-button'),
  closeBtn: document.querySelector('.close-btn')
}

context.loginBtn.onclick = hideLogin.bind(context)
context.closeBtn.onclick = showLogin.bind(context)

function hideLogin() {
  context.loginBtn.classList.add('hide')
  context.container.classList.add('show')
}

function showLogin() {
  context.loginBtn.classList.remove('hide')
  context.container.classList.remove('show')
}
//
// function showContainer() {
//   context.container.classList.add('show')
//
//   // context.container.style.height = '260px'
//   // context.container.style.width = '260px'
// }
//
//
// function hideContainer() {
//   context.container.classList.remove('show')
//   // context.container.style.height = '0'
//   // context.container.style.width = '0'
// }
