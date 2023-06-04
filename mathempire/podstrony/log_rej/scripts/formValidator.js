const username = document.querySelector('.username')
const password = document.querySelector('.password')
const mail = document.querySelector('.email')
const submitBtn = document.querySelector('.submit')
const form = document.querySelector('form')


const letters = /[a-z]/i;
const numbers = /[0-9]/
const specialSigns = /[!@#$%^&*()]/
const minLength = 8

const password_validation = () => {
    if(password.value.length && password.value.match(letters) && password.value.match(numbers) && password.value.match(specialSigns)){
        submitBtn.disabled = false
    }
    else {
        submitBtn.disabled = true
    }
}
password.addEventListener('keyup', password_validation)