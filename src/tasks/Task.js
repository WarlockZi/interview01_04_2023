export default class Task {


  DTO(row) {
    return {
      id: row.id,
      text: row.querySelector('.todo').innerText,
      important: row.querySelector('.important').innerText,
      date: row.querySelector('.date').innerText,
    }
  }
}