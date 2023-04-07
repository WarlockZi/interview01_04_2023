import Task from "./Task";

export default class Tasks{
  constructor(tasks){
    this.tasks = tasks
    tasks.addEventListener('click', function ({target}) {
      if (target.classList.contains('del')){
        debugger
        let task = new Task(target)
        task.del()
      } else if (target.classList.contains('edit')){
        let task = new Task(target)
        task.edit()
      }
    })
  }
}