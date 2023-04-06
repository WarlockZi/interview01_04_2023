export default function createEl(tag, className = null, id, text = null, type = null, checked = null) {
  let el = document.createElement(tag)
  if (className) el.classList.add(className)
  if (id) el.id = id
  if (text) el.innerText = text
  if (type) el.setAttribute('type', type)
  if (checked) el.setAttribute('checked', true)
  return el
}