import './popup.scss'
import createEl from "../createEl";

export default function poppup(content) {


  let isVisible = document.querySelector('.popup')
  if (isVisible) {
    isVisible.remove()
  }


  let body = document.querySelector('body')
  let overlay = createEl('div', 'overlay')
  let popup = createEl('div', 'popup')
  let close = createEl('div', 'close', null, 'X')
  let submit = createEl('button', null, null, 'Сохранить', 'submit')


  overlay.append(popup)
  popup.append(close)
  popup.append(content)
  popup.append(submit)
  body.append(overlay)

  close.addEventListener('click', function (e) {
    e.target.closest('.overlay').remove()
  })
  overlay.addEventListener('click', function ({target}) {
    if (target.classList.contains('overlay')) {
      target.remove()
    }
  })

}