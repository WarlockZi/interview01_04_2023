export default class TaskDTO {

  constructor(props) {

    this.id = props.id ?? null
    this.todo = props.todo ?? null
    this.date = props.date ?? null
    this.check = +props.check ?? null
  }
}