import {parse, format} from "fecha";

export default class TaskDTO {

  constructor(props) {

    let date = props.date
    // if (date) {
    //   date = parse(date, "YYYY-MM-DD")
    //   debugger
    //   date = format(date, "DD-MM-YYYY")
    // }
    this.id = props.id ?? null
    this.todo = props.todo ?? null
    debugger
    this.date = date ?? null
    this.check = +props.check ?? null
  }
}