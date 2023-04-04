const validate = {
  emailPattern: '',
  passwordPattern: '',
  email: function (string) {
    let match = String(string)
      .toLowerCase()
      .match(
        /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i
      );
    // debugger
    return match??null
  },
  password: function (string) {
    let minLength = 8
    let upperCase = false
    let lowerCase = true
    let numbers = true
    let errors = []
    // debugger
    if (string.length < minLength) {
      errors.push(`Длина пароля должна быть длиннее ${minLength} символов`)
    }
    if (upperCase) {
      if (!string.match('[A-Z]')) {
        errors.push(`Пароль должен содержать большие латинские буквы`)
      }
    }
    if (lowerCase) {
      if (!string.match('[a-z]')) {
        errors.push(`Пароль должен содержать маленькие латинские буквы`)
      }
    }
    if (numbers) {
      if (!string.match('[0-9]')) {
        errors.push(`Пароль должен содержать цифры`)
      }
    }
    return errors

  },


}

export default validate