import './tasks.scss'
import ajaxDecorator from './ajax'

export default function tasks() {
  let taskWrap = document.querySelector('.task-wrap')
  if (taskWrap) {
    let context = {
      newTask: taskWrap.querySelector('.new-task'),
      newTaskBtn: taskWrap.querySelector('.new-task button'),
      newTaskInput: taskWrap.querySelector(".new-task input"),
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
    // context.newTaskBtn.addEventListener('click', function () {
    //   let todo = context.newTaskInput.value
    //   fetchDecorator('/task', {todo})
    // })
  }

  async function taskCreate() {
    let todo = this.newTaskInput.value
    let data = {todo}
    let res = await ajaxDecorator('/task', data, "POST")
    if (res[0] === 'ok') {
      renderTask(todo, res[1],this.tasks)
      this.newTaskInput.value = ''
    }
  }

  function renderTask(todo, id,tasks) {
    let row = document.createElement('div')
    row.classList.add('row')
    row.id = id
    let task = document.createElement('div')
    task.classList.add('todo')
    task.innerText = todo
    let buttons = document.createElement('div')
    buttons.classList.add('buttons')
    let del = document.createElement('div')
    del.classList.add('del')
    del.innerText = 'X'
    let edit = document.createElement('div')
    edit.classList.add('edit')
    edit.innerText = 'Редакт-ть'

    buttons.append(del)
    buttons.append(edit)
    row.append(task)
    row.append(buttons)
    tasks.append(row)
  }


  async function taskDelete(target) {
    let row = target.closest('.row')
    let id = row.id
    let data = {id}
    let res = await ajaxDecorator('/task/' + id, data, "DELETE")
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
    let res = await ajaxDecorator('/task/' + id, data, "PUT")
    if (res[0] === 'ok') {
      alert(res[1])
      row.remove()
    }
  }
}
