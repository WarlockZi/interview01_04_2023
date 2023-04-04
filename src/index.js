import './index.scss';
import validate from './validator/validator'

let context = {
  container: document.querySelector('#container'),
  loginBtn: document.querySelector('#login-button'),
  closeBtn: document.querySelector('.close-btn'),
  submitBtn: document.querySelector(`[type='submit']`),
  email: document.querySelector(`[name='email']`),
  password: document.querySelector(`[name='password']`),
  error: document.querySelector(`#error`)
}

context.loginBtn.onclick = hideLogin.bind(context)
context.closeBtn.onclick = showLogin.bind(context)
context.submitBtn.onclick = submit.bind(context)

function submit(e) {
  e.preventDefault()
  let match = validate.email(context.email.value)
  if (!match) {
    context.email.style.border = '1px solid red'
    return false
  }

  let errors = validate.password(context.password.value)
  if (errors.length) {
    context.password.style.border = '1px solid red'
    renderErrors(errors, context)
    return false
  } else {
    let email = context.email.value
    let password = context.password.value
    let data = new FormData()
    data.append('email', email)
    data.append('password', password)

    fetch('/auth/login', {
      method: "POST",
      body: data,
      // body: JSON.stringify(data),
      // headers: {"Content-Type": "application/json"},
    }).then(function (res) {
      return res.json()
    }).then((res) => {
      if (res === 'ok') {
        window.location = '/todo'
      }
      renderErrors(res,context)
    })
  }
}

function renderErrors(errors, context) {
  if (context.error.childNodes.length){
    context.error.innerHTML = ''
  }
  errors.forEach((error) => {
    let div = document.createElement('div')
    div.innerText = ' - ' + error
    context.error.append(div)
  })
  context.error.style.display = 'flex'
  context.container.style.height = context.container.scrollHeight + 'px'

}

function hideLogin() {
  context.loginBtn.classList.add('hide')
  context.container.classList.add('show')
}

function showLogin() {
  context.loginBtn.classList.remove('hide')
  context.container.classList.remove('show')
}

