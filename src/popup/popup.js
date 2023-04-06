import './popup.scss'
import createEl from "../createEl";

export default function poppup(content) {


  let isVisible = document.querySelector('.popup')
  if (isVisible) {
    isVisible.remove()
  }


  let body = document.querySelector('body')
  let popup = createEl('div','popup')
  let close = createEl('div','close',null, 'X')
  // let html = createEl('div','content',null)
  let submit = createEl('button',null, null, 'Сохранить', 'submit')

  // html.append(content)

  popup.append(close)
  popup.append(content)
  // popup.append(html)
  popup.append(submit)
  body.append(popup)

  close.addEventListener('click',function (e) {
    e.target.closest('.popup').remove()
  })


}