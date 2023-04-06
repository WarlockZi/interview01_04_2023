import './tasks.scss'
import ajaxDecorator from '../ajax'
import createEl from '../createEl'
import popup from "../popup/popup";


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
      taskRender(todo, res[1], this.tasks)
      this.newTaskInput.value = ''
    }
  }

  function taskRender(todo, id, tasks) {

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
    let task = taskDTO(row)
    // debugger
    popup(taskPopupContent(task))
    // let res = await ajaxDecorator('/tasks/' + task.id, task, "PUT")
    // if (res[0] === 'ok') {
    //   alert(res[1])
    //   row.remove()
    // }
  }

  function taskPopupContent(task) {
    let content = createEl('div', 'content', task.id)

    let todo = createEl('input', 'todo', null, task.todo, 'text')
    let date = createEl('input', 'date', null, task.date,'date')
    let check = createEl('input', 'important', null, '!','checkbox')

    content.append(todo)
    content.append(date)
    content.append(check)
    // debugger
    return content
  }

  function taskDTO(row) {
    return {
      id: row.id,
      todo: row.querySelector('.todo').innerText,
      important: row.querySelector('.important').innerText,
      date: row.querySelector('.date').innerText,
    }
  }
}
