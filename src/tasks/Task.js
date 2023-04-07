import ajaxDecorator from "../ajax";
import Popup from "../popup/popup";
import TaskDTO from "./TaskDTO";
import createEl from "../createEl";

export default class Task {
  constructor(button) {
    let row = this.row = button.closest('.row')
    this.todoEl = row.querySelector(".todo")
    this.todo = this.todoEl.innerText
    this.dateEl = row.querySelector(".date")
    this.date = this.dateEl.innerText
    this.checkEl = row.querySelector(".important")
    this.check = this.checkEl.innerText==="!"
    this.id = this.row.id
  }

  setDate(date){
    this.dateEl.innerText = date
  }
  setCheck(check){
    this.checkEl.innerText = check?'!':''
  }
  setTodo(todo){
    this.todoEl.innerText = todo
  }
  async del(){
    debugger
    let data = {id:this.id}
    let res = await ajaxDecorator('/tasks/' + this.id, data, "DELETE")
    if (res[0] === 'ok') {
      alert(res[1])
      this.row.remove()
    }
  }

  edit(){
    let task = new TaskDTO(this)
    let popup = new Popup(this.taskPopupContent(task))
    popup.show()
  }

  taskPopupContent(task) {
    let content = createEl('div', 'content', task.id)

    let todo = createEl('input', 'todo', null, null, 'text')
    todo.value = task.todo
    let todoLabel = createEl('labbel', null, null, 'Задача')

    let date = createEl('input', 'date', null, null, 'date')
    date.value = task.date
    let dateLabel = createEl('labbel', null, null, 'Дата')

    let check = createEl('input', 'important', null, '!', 'checkbox')
    check.checked = !!task.check
    let checkLabel = createEl('labbel', null, null, 'Важная')

    content.append(todoLabel)
    content.append(todo)
    content.append(dateLabel)
    content.append(date)
    content.append(checkLabel)
    content.append(check)
    // debugger
    return content
  }




}