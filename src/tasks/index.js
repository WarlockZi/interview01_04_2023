import './tasks.scss'
import NewTask from "./NewTask";
import Tasks from "./Tasks";


export default function index() {
  let taskWrap = document.querySelector('.task-wrap')
  if (taskWrap) {
    new NewTask(taskWrap.querySelector('.new-task'))
    new Tasks(taskWrap.querySelector('.tasks'))
  }
}
