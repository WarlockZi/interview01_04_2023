import './popup.scss'
import createEl from "../createEl";
import TaskDTO from "../tasks/TaskDTO";
import ajaxDecorator from "../ajax";
import NewTask from "../tasks/NewTask";

export default class Popup {

  constructor(content) {
    this.body = document.querySelector('body')
    this.overlay = createEl('div', 'overlay')
    this.popup = createEl('div', 'popup')
    this.close = createEl('div', 'close', null, 'X')
    this.submit = createEl('button', null, null, 'Сохранить', 'submit')

    this.overlay.append(this.popup)
    this.popup.append(this.close)
    this.popup.append(content)
    this.popup.append(this.submit)

    this.submit.addEventListener('click', this.save.bind(this))

    this.close.addEventListener('click',
      function ({target}) {
        target.closest('.overlay').remove()
      }
    )

    this.overlay.addEventListener('click',
      function ({target}) {
        if (target.classList.contains('overlay')) {
          target.remove()
        }
      }
    )
    return this
  }

  show() {
    let isVisible = document.querySelector('.popup')
    if (isVisible) {
      isVisible.remove()
    }
    this.body.append(this.overlay)
  }

  async save({target}) {
    let content = target.closest('.popup').querySelector('.content')
    let task = new NewTask(content)
    if (!task.todo || !task.date) return false

    let dto = new TaskDTO(task)
    dto.id = content.id
    let updated = await this.sendToServer(dto)
    task.rerender(dto)
    this.overlay.remove()
  }

  async sendToServer(dto) {
    let updated = await ajaxDecorator(`/tasks/${dto.id}`, dto, "POST")
    if (updated[4] === dto.id) {
      return updated
    }
  }


}