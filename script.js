var forms = document.getElementById('forms')

var userName = document.getElementById('user')
var password = document.getElementById('password')
var conPass = document.getElementById('conPassword')
var email = document.getElementById('email')
var conEmail = document.getElementById('conEmail')

var inputUser = document.getElementById('inputUser')
var inputPass = document.getElementById('inputPass')
var inputConPass = document.getElementById('inputConPass')
var inputEmail = document.getElementById('inputEmail')
var inputConEmail = document.getElementById('inputConEmail')

var captc = document.getElementById("captcha");
var userCaptc = document.getElementById("inputCaptcha");
var inputUsCaptcha = document.getElementById('inputUsCaptcha')

var allInput = userName.value + password.value + conPass.value + email.value + conEmail.value + userCaptc.value
console.log(allInput)

var formTrue = false;

function validateEmail(eMail){
	var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(eMail)
}

function captcha(){
  var capItem = ['56AbE456', '792hg53AB', '84AHB7n', '24GhBcG8', 'lJGne53', 'jg45AGNc'];
  for(i = 0; i < 3; i++){
    var a = capItem[Math.floor(Math.random() * capItem.length)];
  }
  var code = a ;
  document.getElementById("captcha").value = code
  console.log(code);
}


userName.addEventListener('input', function(){
	if(userName.value.length < 6){
		inputUser.innerHTML = 'Username Min 6 Character'
		inputUser.style.color = 'red'
		//console.log(formTrue)
		//return false
	}else{
		inputUser.innerHTML = 'Good'
		inputUser.style.color = 'green'
		//return true
		formTrue = true;
		//console.log(formTrue)
	}
})

password.addEventListener('input', function(){
	if(password.value.length < 6){
		inputPass.innerHTML = 'Password Min 6 Character'
		inputPass.style.color = 'red'
		//formTrue
		//return false
	}else{
		inputPass.innerHTML = 'Good'
		inputPass.style.color = 'green'
		formTrue = true;
		//return true
	}
})

conPass.addEventListener('input', function(){
	if(password.value !== conPass.value){
		inputConPass.innerHTML = 'Password Not Match'
		inputConPass.style.color = 'red'
		// formTrue
		//return false
	}else{
		inputConPass.innerHTML = 'Password Match'
		inputConPass.style.color = 'green'
		formTrue = true;
		//return true
	}
})

email.addEventListener('input', function(){
	if(!validateEmail(email.value)){
		inputEmail.innerHTML = 'Email Must Be Valid'
		inputEmail.style.color = 'red'
		// formTrue
		return false
	}else{
		inputEmail.innerHTML = 'Email Valid'
		inputEmail.style.color = 'green'
		// formTrue = true;
		return true
	}
})

conEmail.addEventListener('input', function(){
	if(email.value !== conEmail.value){
		inputConEmail.innerHTML = 'Email Not Match'
		inputConEmail.style.color = 'red'
		// formTrue
		return false
	}else{
		inputConEmail.innerHTML = 'Email Match'
		inputConEmail.style.color = 'green'
		// formTrue = true;
		return true
	}
})

userCaptc.addEventListener('input', function(){
	if(captc.value === userCaptc.value){
		inputUsCaptcha.innerHTML = 'Yes, You are Human!'
		inputUsCaptcha.style.color = 'green'
		// formTrue = true;
		return true
	}else{
		inputUsCaptcha.innerHTML = 'No, You are Monster! Please Go!'
		inputUsCaptcha.style.color = 'red'
		return false
	}
})
	
forms.addEventListener('submit', function(){
	var formTrues = false;

	if(userName.value === ''){
		inputUser.innerHTML = 'Please Insert Your Username!'
		inputUser.style.color = 'red'
	}else if(userName.value.length < 6){
		inputUser.innerHTML = 'Username Min 6 Character'
		inputUser.style.color = 'red'
	}else if(password.value === ''){
		inputPass.innerHTML = 'Please Insert Your Password'
		inputPass.style.color = 'red'
	}else if(password.value < 6){
		inputPass.innerHTML = 'Password Min 6 Character'
		inputPass.style.color = 'red'
	}else if(password.value !== conPass.value){
		inputConPass.innerHTML = 'Password Must Match'
		inputConPass.style.color = 'red'
	}else if(email.value === ''){
		inputEmail.innerHTML = 'Please Insert Your Email Address'
		inputEmail.style.color = 'red'
	}else if(!validateEmail(email.value)){
		inputEmail.innerHTML = 'Your Email Not Valid'
		inputEmail.style.color = 'red'
	}else if(email.value !== conEmail.value){
		inputConEmail.innerHTML = 'Your Email Not Match'
		inputConEmail.style.color = 'red'
	}else if(userCaptc.value === ''){
		inputUsCaptcha.innerHTML = 'Hey If You Human, Please Fill this Field'
		inputUsCaptcha.style.color = 'red'
	}else if(captc.value !== userCaptc.value){
		inputUsCaptcha.innerHTML = 'You are Monster! Please Go!'
		inputUsCaptcha.style.color = 'red'
	}else{
		alert('Hip Hip Hooray! You are Human! Congratulations! Kiss Kiss')
	}

}) 