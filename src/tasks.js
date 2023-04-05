import './tasks.scss'
import ajaxDecorator from './ajax'

export default function tasks() {
  let taskWrap = document.querySelector('.task-wrap')
  if (taskWrap) {
    let context = {
      newTask: taskWrap.querySelector('.new-task'),
      newTaskBtn: taskWrap.querySelector('.new-task button'),
      newTaskInput: taskWrap.querySelector(".new-task input[type='text']"),
      newTaskDate: taskWrap.querySelector(".new-task input[type='date']"),
      newTaskCheck: taskWrap.querySelector(".new-task input[type='checkbox']"),
      tasks: document.querySelector('.tasks')
    }

    taskWrap.addEventListener('click', function ({target}) {
      if (target.classList.contains('del')) {
        taskDelete(target)

      } else if (target.classList.contains('edit')) {
        taskEdit(target)
      } else if (target === context.newTaskBtn) {
        taskCreate.apply(context)
      }
    })
  }

  async function taskCreate() {
    let todo = this.newTaskInput.value
    if (!todo) return false
    let isImportant = this.newTaskInput.value
    let data = {todo}
    let res = await ajaxDecorator('/tasks', data, "POST")
    if (res[0] === 'ok') {
      renderTask(todo, res[1], this.tasks)
      this.newTaskInput.value = ''
    }
  }

  function renderTask(todo, id, tasks) {

    let row = createEl('div', 'row', id)

    let task = createEl('div', 'todo', null, todo)
    let date = ('div', 'date', null)
    let check = ('div', 'important', null, '!')

    let buttons = createEl('div', 'buttons')
    let del = ('div', 'del', null, 'X')
    let edit = ('div', 'edit', null, 'Редакт-ть')


    buttons.append(del)
    buttons.append(edit)

    row.append(check)
    row.append(date)
    row.append(task)
    row.append(buttons)
    tasks.append(row)
  }

  function createEl(tag, className = null, id, text = null, type = null, checked = null) {
    let el = document.createElement(tag)
    if (className) el.classList.add(className)
    if (id) el.id = id
    if (text) el.innerText = text
    if (type) el.setAttribute('type', type)
    if (checked) el.setAttribute('checked', true)
    return el
  }

  async function taskDelete(target) {
    let row = target.closest('.row')
    let id = row.id
    let data = {id}
    let res = await ajaxDecorator('/tasks/' + id, data, "DELETE")
    if (res[0] === 'ok') {
      alert(res[1])
      row.remove()
    }
  }

  async function taskEdit(target) {
    let row = target.closest('.row')
    let text = row.querySelector('.text')
    let id = row.id
    let data = {id}
    let res = await ajaxDecorator('/tasks/' + id, data, "PUT")
    if (res[0] === 'ok') {
      alert(res[1])
      row.remove()
    }
  }
}
