const form = document.getElementById('form')

// Form Submit
form.addEventListener('submit', (a) =>{
  a.preventDefault()
  const firstName = document.querySelector('input#FirstName')
  const lastName = document.querySelector('input#LastName')
  const emailAddress = document.querySelector('input#Email')
  const password = document.querySelector('input#Password')

  const inputs = [firstName, lastName, emailAddress, password]

  for (i of inputs){
    if (i.classList.contains('email')) {    
      verifyEmail(i)
    } else if (i.value.trim() == '') {
      error(i)
    } else {
      success(i)
    }
  }
});

// Funções

// Error
const error = (input =>{
  const parent = input.parentElement
  const errorMsg = parent.querySelector('span')
  const errorInput = parent.querySelector('input')

  errorMsg.classList.add('show-error')
  errorInput.classList.add('show-error')
})

// Success
const success = (input) =>{
  if (input.classList.contains('show-error')) {
    const parent = input.parentElement
    const errorMsg = parent.querySelector('span')
    i.classList.remove('show-error')
    errorMsg.classList.remove('show-error')
  }
}

// Verify Email
const verifyEmail = (input) =>{
  var emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const parent = input.parentElement
  const errorMsg = parent.querySelector('span')
  const errorInput = parent.querySelector('input')

  if (input.value.trim() == '') {
    errorMsg.classList.add('show-error')
    errorMsg.innerHTML = 'Email Address cannot be empty!'
    errorInput.classList.add('show-error')
  } else if (!input.value.trim().match(emailValidate)) {
    errorMsg.classList.add('show-error')
    errorInput.classList.add('show-error')
    errorMsg.innerHTML = 'Looks like this is not an email!'
  } else {
    success(input)
  }
}