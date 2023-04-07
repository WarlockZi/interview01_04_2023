import './tasks.scss'
import ajaxDecorator from '../ajax'
import createEl from '../createEl'
import popup from "../popup/popup";
import NewTask from "./NewTask";


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
        taskCreate(target)
      }
    })
  }

  async function taskCreate(target) {
    let row = target.closest('.new-task')

    let newTask = new NewTask(row)

    let res = await newTask.save()
    if (res) {
      newTask.render(res)
      newTask.clear()
    }

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

    let todo = createEl('input', 'todo', null, null, 'text')
    todo.value = task.todo
    let todoLabel = createEl('labbel', null, null, 'Задача')

    let date = createEl('input', 'date', null, task.date, 'date')
    date.value = task.date
    let dateLabel = createEl('labbel', null, null, 'Дата')

    let check = createEl('input', 'important', null, '!', 'checkbox')
    debugger
    check.checked = !!task.important
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

  function taskDTO(row) {
    return {
      id: row.id,
      todo: row.querySelector('.todo').innerText,
      important: row.querySelector('.important').innerText,
      date: row.querySelector('.date').innerText,
    }
  }
}
