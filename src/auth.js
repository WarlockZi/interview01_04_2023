import validate from "./validator/validator";
import ajaxDecorator from './ajax'

export default function auth() {
  let form = document.querySelector('form')
  if (form) {
    let context = {
      container: document.querySelector('#container'),
      loginBtn: document.querySelector('#login-button'),
      closeBtn: document.querySelector('.close-btn'),
      submitBtn: document.querySelector(`[type='submit']`),
      email: document.querySelector(`[name='email']`),
      password: document.querySelector(`[name='password']`),
      error: document.querySelector(`#error`)
    }

    if (context.loginBtn) {
      context.loginBtn.onclick = hideLogin.bind(context)
    }
    context.closeBtn.onclick = showLogin.bind(context)
    context.submitBtn.onclick = submit.bind(context)

  }

  async function submit(e) {
    e.preventDefault()
    let match = validate.email(this.email.value)
    if (!match) {
      this.email.style.border = '1px solid red'
      return false
    }

    let errors = validate.password(this.password.value)
    if (errors.length) {
      this.password.style.border = '1px solid red'
      renderErrors(errors, this)
      return false
    } else {

      let data = new FormData()
      data.append('email', this.email.value)
      data.append('password', this.password.value)
      let action = e.target.getAttribute('data-action')

      let res = await ajaxDecorator(`/auth/${action}`, data)
      if (res[0] === 'ok') {
        window.location.href  = '/tasks'
      } else {
        renderErrors(res, this)
      }
    }
  }

  function renderErrors(errors, context) {
    if (context.error.childNodes.length) {
      context.error.innerHTML = ''
    }
    errors.forEach((error) => {
      let div = document.createElement('div')
      div.innerText = ' - ' + error
      context.error.append(div)
    })
    context.error.style.display = 'flex'
    // this.container.style.height = this.container.scrollHeight + 'px'

  }

  function hideLogin() {
    this.loginBtn.classList.add('hide')
    this.container.classList.add('show')
  }

  function showLogin() {
    this.loginBtn.classList.remove('hide')
    this.container.classList.remove('show')
  }
}



