import Task from "./Task";
import TaskDTO from "./TaskDTO";
import ajaxDecorator from "../ajax";
import createEl from "../createEl";

export default class newTask {
  constructor(row) {
    this.todoEl = row.querySelector("input[type='text']")
    this.todo = this.todoEl.value

    this.dateEl = row.querySelector("input[type='date']")
    this.date = this.dateEl.value

    this.checkEl = row.querySelector("input[type='checkbox']")
    this.check = +this.checkEl.checked

    this.addBtn = row.querySelector('button')
    if (this.addBtn) {
      this.addBtn.addEventListener('click', this.save.bind(this))
    }

    this.tasks = row.closest('.task-wrap')?.querySelector('.tasks')
  }

  async save({target}) {
    debugger
    let row = target.closest('.new-task')

    let newTask = new this.constructor(row)

    if (!newTask.todo || !newTask.date) return false

    let dto = new TaskDTO(newTask)
    let id = await newTask.sendToServer(dto)
    if (id) {
      dto.id = id
      newTask.render(dto)
      newTask.clear()
    }

  }

  async sendToServer(dto) {
    let res = await ajaxDecorator('/tasks', dto, "POST")
    if (res[0] === 'ok') {
      return res[1]
    }
  }

  render(dto) {
    let row = createEl('div', 'row', dto.id)

    let task = createEl('div', 'todo', null, dto.todo)
    let date = createEl('div', 'date', null, dto.date)
    let check = createEl('div', 'important', null, '!')

    let buttons = createEl('div', 'buttons')
    let del = createEl('div', 'del', null, 'X')
    let edit = createEl('div', 'edit', null, 'Редакт-ть')

    buttons.append(del)
    buttons.append(edit)

    row.append(check)
    row.append(date)
    row.append(task)
    row.append(buttons)
    this.tasks.append(row)
  }

  rerender(dto){

    let row = document.querySelector('.tasks').querySelector(`[id="${dto.id}"]`)
    let  updatedTask = new Task(row)
    updatedTask.setCheck(dto.check)
    updatedTask.setTodo(dto.todo)
    updatedTask.setDate(dto.date)


  }

  clear() {
    this.checkEl.checked = false
    this.dateEl.value = ''
    this.todoEl.value = ''
  }

}