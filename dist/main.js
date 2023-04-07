/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://interview/./src/index.scss?");

/***/ }),

/***/ "./src/popup/popup.scss":
/*!******************************!*\
  !*** ./src/popup/popup.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://interview/./src/popup/popup.scss?");

/***/ }),

/***/ "./src/tasks/tasks.scss":
/*!******************************!*\
  !*** ./src/tasks/tasks.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://interview/./src/tasks/tasks.scss?");

/***/ }),

/***/ "./src/ajax.js":
/*!*********************!*\
  !*** ./src/ajax.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ajaxDecorator)\n/* harmony export */ });\nasync function ajaxDecorator(url, data, method = \"POST\") {\r\n  return new Promise(async function (resolve, reject) {\r\n\r\n      let req = new XMLHttpRequest();\r\n      req.open(method, url, true);\r\n      req.setRequestHeader(\"X-Requested-With\", \"XMLHttpRequest\");\r\n      if (data instanceof FormData) {\r\n        req.send(data);\r\n      } else {\r\n        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n        req.send('param=' + JSON.stringify(data));\r\n      }\r\n      req.onerror = function (e) {\r\n        reject(Error(\"Network Error\" + e.message));\r\n      };\r\n      req.onload = function () {\r\n        const res = JSON.parse(req.response)\r\n        resolve(res);\r\n      }\r\n    }\r\n  )\r\n}\n\n//# sourceURL=webpack://interview/./src/ajax.js?");

/***/ }),

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator/validator */ \"./src/validator/validator.js\");\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax */ \"./src/ajax.js\");\n\r\n\r\n\r\nfunction auth() {\r\n  let form = document.querySelector('form')\r\n  if (form) {\r\n    let context = {\r\n      container: document.querySelector('#container'),\r\n      loginBtn: document.querySelector('#login-button'),\r\n      closeBtn: document.querySelector('.close-btn'),\r\n      submitBtn: document.querySelector(`[type='submit']`),\r\n      email: document.querySelector(`[name='email']`),\r\n      password: document.querySelector(`[name='password']`),\r\n      error: document.querySelector(`#error`)\r\n    }\r\n\r\n    if (context.loginBtn) {\r\n      context.loginBtn.onclick = hideLogin.bind(context)\r\n    }\r\n    context.closeBtn.onclick = showLogin.bind(context)\r\n    context.submitBtn.onclick = submit.bind(context)\r\n\r\n  }\r\n\r\n  async function submit(e) {\r\n    e.preventDefault()\r\n    let match = _validator_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].email(this.email.value)\r\n    if (!match) {\r\n      this.email.style.border = '1px solid red'\r\n      return false\r\n    }\r\n\r\n    let errors = _validator_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].password(this.password.value)\r\n    if (errors.length) {\r\n      this.password.style.border = '1px solid red'\r\n      renderErrors(errors, this)\r\n      return false\r\n    } else {\r\n\r\n      let data = new FormData()\r\n      data.append('email', this.email.value)\r\n      data.append('password', this.password.value)\r\n      let action = e.target.getAttribute('data-action')\r\n\r\n      let res = await (0,_ajax__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`/auth/${action}`, data)\r\n      if (res[0] === 'ok') {\r\n        window.location.href  = '/tasks'\r\n      } else {\r\n        renderErrors(res, this)\r\n      }\r\n    }\r\n  }\r\n\r\n  function renderErrors(errors, context) {\r\n    if (context.error.childNodes.length) {\r\n      context.error.innerHTML = ''\r\n    }\r\n    errors.forEach((error) => {\r\n      let div = document.createElement('div')\r\n      div.innerText = ' - ' + error\r\n      context.error.append(div)\r\n    })\r\n    context.error.style.display = 'flex'\r\n    // this.container.style.height = this.container.scrollHeight + 'px'\r\n\r\n  }\r\n\r\n  function hideLogin() {\r\n    this.loginBtn.classList.add('hide')\r\n    this.container.classList.add('show')\r\n  }\r\n\r\n  function showLogin() {\r\n    this.loginBtn.classList.remove('hide')\r\n    this.container.classList.remove('show')\r\n  }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://interview/./src/auth.js?");

/***/ }),

/***/ "./src/createEl.js":
/*!*************************!*\
  !*** ./src/createEl.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEl)\n/* harmony export */ });\nfunction createEl(tag, className = null, id, text = null, type = null, checked = null) {\r\n  let el = document.createElement(tag)\r\n  if (className) el.classList.add(className)\r\n  if (id) el.id = id\r\n  if (text) el.innerText = text\r\n  if (type) el.setAttribute('type', type)\r\n  if (checked) el.setAttribute('checked', true)\r\n  return el\r\n}\n\n//# sourceURL=webpack://interview/./src/createEl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator/validator */ \"./src/validator/validator.js\");\n/* harmony import */ var _tasks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/index */ \"./src/tasks/index.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_tasks_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://interview/./src/index.js?");

/***/ }),

/***/ "./src/popup/popup.js":
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popup)\n/* harmony export */ });\n/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.scss */ \"./src/popup/popup.scss\");\n/* harmony import */ var _createEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createEl */ \"./src/createEl.js\");\n/* harmony import */ var _tasks_TaskDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/TaskDTO */ \"./src/tasks/TaskDTO.js\");\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ajax */ \"./src/ajax.js\");\n/* harmony import */ var _tasks_NewTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks/NewTask */ \"./src/tasks/NewTask.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Popup {\r\n\r\n  constructor(content) {\r\n    this.body = document.querySelector('body')\r\n    this.overlay = (0,_createEl__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'overlay')\r\n    this.popup = (0,_createEl__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'popup')\r\n    this.close = (0,_createEl__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'close', null, 'X')\r\n    this.submit = (0,_createEl__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', null, null, 'Сохранить', 'submit')\r\n\r\n    this.overlay.append(this.popup)\r\n    this.popup.append(this.close)\r\n    this.popup.append(content)\r\n    this.popup.append(this.submit)\r\n\r\n    this.submit.addEventListener('click', this.save.bind(this))\r\n\r\n    this.close.addEventListener('click',\r\n      function ({target}) {\r\n        target.closest('.overlay').remove()\r\n      }\r\n    )\r\n\r\n    this.overlay.addEventListener('click',\r\n      function ({target}) {\r\n        if (target.classList.contains('overlay')) {\r\n          target.remove()\r\n        }\r\n      }\r\n    )\r\n    return this\r\n  }\r\n\r\n  show() {\r\n    let isVisible = document.querySelector('.popup')\r\n    if (isVisible) {\r\n      isVisible.remove()\r\n    }\r\n    this.body.append(this.overlay)\r\n  }\r\n\r\n  async save({target}) {\r\n    let content = target.closest('.popup').querySelector('.content')\r\n    let task = new _tasks_NewTask__WEBPACK_IMPORTED_MODULE_4__[\"default\"](content)\r\n    if (!task.todo || !task.date) return false\r\n\r\n    let dto = new _tasks_TaskDTO__WEBPACK_IMPORTED_MODULE_2__[\"default\"](task)\r\n    dto.id = content.id\r\n    let updated = await this.sendToServer(dto)\r\n    task.rerender(dto)\r\n    this.overlay.remove()\r\n  }\r\n\r\n  async sendToServer(dto) {\r\n    let updated = await (0,_ajax__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(`/tasks/${dto.id}`, dto, \"POST\")\r\n    if (updated[4] === dto.id) {\r\n      return updated\r\n    }\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://interview/./src/popup/popup.js?");

/***/ }),

/***/ "./src/tasks/NewTask.js":
/*!******************************!*\
  !*** ./src/tasks/NewTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/tasks/Task.js\");\n/* harmony import */ var _TaskDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskDTO */ \"./src/tasks/TaskDTO.js\");\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ajax */ \"./src/ajax.js\");\n/* harmony import */ var _createEl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createEl */ \"./src/createEl.js\");\n\r\n\r\n\r\n\r\n\r\nclass newTask {\r\n  constructor(row) {\r\n    this.todoEl = row.querySelector(\"input[type='text']\")\r\n    this.todo = this.todoEl.value\r\n\r\n    this.dateEl = row.querySelector(\"input[type='date']\")\r\n    this.date = this.dateEl.value\r\n\r\n    this.checkEl = row.querySelector(\"input[type='checkbox']\")\r\n    this.check = this.checkEl.checked\r\n\r\n    this.addBtn = row.querySelector('button')\r\n    if (this.addBtn) {\r\n      this.addBtn.addEventListener('click', this.save.bind(this))\r\n    }\r\n\r\n    this.tasks = row.closest('.task-wrap')?.querySelector('.tasks')\r\n  }\r\n\r\n  async save({target}) {\r\n    let row = target.closest('.new-task')\r\n\r\n    let newTask = new this.constructor(row)\r\n\r\n    if (!newTask.todo || !newTask.date) return false\r\n\r\n    let dto = new _TaskDTO__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newTask)\r\n    let id = await newTask.sendToServer(dto)\r\n    if (id) {\r\n      dto.id = id\r\n      newTask.render(dto)\r\n      newTask.clear()\r\n    }\r\n\r\n  }\r\n\r\n  async sendToServer(dto) {\r\n    let res = await (0,_ajax__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('/tasks', dto, \"POST\")\r\n    if (res[0] === 'ok') {\r\n      return res[1]\r\n    }\r\n  }\r\n\r\n  render(dto) {\r\n    let row = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'row', dto.id)\r\n\r\n    let task = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'todo', null, dto.todo)\r\n    let date = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'date', null, dto.date)\r\n    let check = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'important', null, '!')\r\n\r\n    let buttons = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'buttons')\r\n    let del = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'del', null, 'X')\r\n    let edit = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'edit', null, 'Редакт-ть')\r\n\r\n    buttons.append(del)\r\n    buttons.append(edit)\r\n\r\n    row.append(check)\r\n    row.append(date)\r\n    row.append(task)\r\n    row.append(buttons)\r\n    this.tasks.append(row)\r\n  }\r\n\r\n  rerender(dto){\r\n\r\n    let row = document.querySelector('.tasks').querySelector(`[id=\"${dto.id}\"]`)\r\n    let  updatedTask = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](row)\r\n    updatedTask.setCheck(dto.check)\r\n    updatedTask.setTodo(dto.todo)\r\n    updatedTask.setDate(dto.date)\r\n\r\n\r\n  }\r\n\r\n  clear() {\r\n    this.checkEl.checked = false\r\n    this.dateEl.value = ''\r\n    this.todoEl.value = ''\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://interview/./src/tasks/NewTask.js?");

/***/ }),

/***/ "./src/tasks/Task.js":
/*!***************************!*\
  !*** ./src/tasks/Task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ajax */ \"./src/ajax.js\");\n/* harmony import */ var _popup_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/popup */ \"./src/popup/popup.js\");\n/* harmony import */ var _TaskDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskDTO */ \"./src/tasks/TaskDTO.js\");\n/* harmony import */ var _createEl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createEl */ \"./src/createEl.js\");\n\r\n\r\n\r\n\r\n\r\nclass Task {\r\n  constructor(button) {\r\n    let row = this.row = button.closest('.row')\r\n    this.todoEl = row.querySelector(\".todo\")\r\n    this.todo = this.todoEl.innerText\r\n    this.dateEl = row.querySelector(\".date\")\r\n    this.date = this.dateEl.innerText\r\n    this.checkEl = row.querySelector(\".important\")\r\n    this.check = this.checkEl.innerText===\"!\"\r\n    this.id = this.row.id\r\n  }\r\n\r\n  setDate(date){\r\n    this.dateEl.innerText = date\r\n  }\r\n  setCheck(check){\r\n    this.checkEl.innerText = check?'!':''\r\n  }\r\n  setTodo(todo){\r\n    this.todoEl.innerText = todo\r\n  }\r\n  async del(){\r\n    debugger\r\n    let data = {id:this.id}\r\n    let res = await (0,_ajax__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('/tasks/' + this.id, data, \"DELETE\")\r\n    if (res[0] === 'ok') {\r\n      alert(res[1])\r\n      this.row.remove()\r\n    }\r\n  }\r\n\r\n  edit(){\r\n    let task = new _TaskDTO__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this)\r\n    let popup = new _popup_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.taskPopupContent(task))\r\n    popup.show()\r\n  }\r\n\r\n  taskPopupContent(task) {\r\n    let content = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('div', 'content', task.id)\r\n\r\n    let todo = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('input', 'todo', null, null, 'text')\r\n    todo.value = task.todo\r\n    let todoLabel = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('labbel', null, null, 'Задача')\r\n\r\n    let date = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('input', 'date', null, null, 'date')\r\n    date.value = task.date\r\n    let dateLabel = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('labbel', null, null, 'Дата')\r\n\r\n    let check = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('input', 'important', null, '!', 'checkbox')\r\n    check.checked = !!task.check\r\n    let checkLabel = (0,_createEl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('labbel', null, null, 'Важная')\r\n\r\n    content.append(todoLabel)\r\n    content.append(todo)\r\n    content.append(dateLabel)\r\n    content.append(date)\r\n    content.append(checkLabel)\r\n    content.append(check)\r\n    // debugger\r\n    return content\r\n  }\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://interview/./src/tasks/Task.js?");

/***/ }),

/***/ "./src/tasks/TaskDTO.js":
/*!******************************!*\
  !*** ./src/tasks/TaskDTO.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskDTO)\n/* harmony export */ });\nclass TaskDTO {\r\n\r\n  constructor(props) {\r\n\r\n    this.id = props.id ?? null\r\n    this.todo = props.todo ?? null\r\n    this.date = props.date ?? null\r\n    this.check = +props.check ?? null\r\n  }\r\n}\n\n//# sourceURL=webpack://interview/./src/tasks/TaskDTO.js?");

/***/ }),

/***/ "./src/tasks/Tasks.js":
/*!****************************!*\
  !*** ./src/tasks/Tasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/tasks/Task.js\");\n\r\n\r\nclass Tasks{\r\n  constructor(tasks){\r\n    this.tasks = tasks\r\n    tasks.addEventListener('click', function ({target}) {\r\n      if (target.classList.contains('del')){\r\n        debugger\r\n        let task = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](target)\r\n        task.del()\r\n      } else if (target.classList.contains('edit')){\r\n        let task = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](target)\r\n        task.edit()\r\n      }\r\n    })\r\n  }\r\n}\n\n//# sourceURL=webpack://interview/./src/tasks/Tasks.js?");

/***/ }),

/***/ "./src/tasks/index.js":
/*!****************************!*\
  !*** ./src/tasks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var _tasks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.scss */ \"./src/tasks/tasks.scss\");\n/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewTask */ \"./src/tasks/NewTask.js\");\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tasks */ \"./src/tasks/Tasks.js\");\n\r\n\r\n\r\n\r\n\r\nfunction index() {\r\n  let taskWrap = document.querySelector('.task-wrap')\r\n  if (taskWrap) {\r\n    new _NewTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskWrap.querySelector('.new-task'))\r\n    new _Tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskWrap.querySelector('.tasks'))\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://interview/./src/tasks/index.js?");

/***/ }),

/***/ "./src/validator/validator.js":
/*!************************************!*\
  !*** ./src/validator/validator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = {\r\n  emailPattern: '',\r\n  passwordPattern: '',\r\n  email: function (string) {\r\n    let match = String(string)\r\n      .toLowerCase()\r\n      .match(\r\n        /^[\\w]{1}[\\w-\\.]*@[\\w-]+\\.[a-z]{2,4}$/i\r\n      );\r\n    // debugger\r\n    return match??null\r\n  },\r\n  password: function (string) {\r\n    let minLength = 6\r\n    let upperCase = false\r\n    let lowerCase = false\r\n    let numbers = true\r\n    let errors = []\r\n    // debugger\r\n    if (string.length < minLength) {\r\n      errors.push(`Длина пароля должна быть длиннее ${minLength} символов`)\r\n    }\r\n    if (upperCase) {\r\n      if (!string.match('[A-Z]')) {\r\n        errors.push(`Пароль должен содержать большие латинские буквы`)\r\n      }\r\n    }\r\n    if (lowerCase) {\r\n      if (!string.match('[a-z]')) {\r\n        errors.push(`Пароль должен содержать маленькие латинские буквы`)\r\n      }\r\n    }\r\n    if (numbers) {\r\n      if (!string.match('[0-9]')) {\r\n        errors.push(`Пароль должен содержать цифры`)\r\n      }\r\n    }\r\n    return errors\r\n\r\n  },\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://interview/./src/validator/validator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;