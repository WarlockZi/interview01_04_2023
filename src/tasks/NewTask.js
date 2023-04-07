import Task from "./Task";
import TaskDTO from "./TaskDTO";
import ajaxDecorator from "../ajax";
import createEl from "../createEl";

export default class newTask extends Task {
  constructor(row) {
    super();

    this.todoEl = row.querySelector("input[type='text']")
    this.todo = this.todoEl.value

    this.dateEl = row.querySelector("input[type='date']")
    this.date = this.dateEl.value

    this.checkEl = row.querySelector("input[type='checkbox']")
    this.check = this.checkEl.checked

    this.addBtn = row.querySelector('button')
    this.tasks = row.closest('.task-wrap').querySelector('.tasks')

  }

  async save() {
    if (!this.todo || !this.date) return false
    let dto = new TaskDTO(this)

    let res = await ajaxDecorator('/tasks', dto, "POST")
    if (res[0] === 'ok') {
      return   res[1]
    }
  }

  render(id) {

    let row = createEl('div', 'row', id)

    let task = createEl('div', 'todo', null, this.todo)
    let date = createEl('div', 'date', null,  this.date)
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

  clear(){
    this.checkEl.checked = false
    this.dateEl.value = ''
    this.todoEl.value = ''
  }

}