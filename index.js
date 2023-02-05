function validateName(){
	var nameField = document.getElementById('name');
	var validName = /^[A-Za-z\s]+$/;
	var errorName = document.getElementById('nameError');

	if(nameField.value == 0){
		errorName.innerHTML = "Rellene este campo";
		nameField.classList.add("nok");
		nameField.classList.add("crossIcon");
		return false; 
	}
	else if(validName.test(nameField.value)){
		nameField.classList.remove("nok");
		nameField.classList.remove("crossIcon");
		errorName.innerHTML = "";
		nameField.classList.add("ok");
		nameField.classList.add("tickIcon");
		return true; 
	}
	else {
		errorName.innerHTML = "Nombre inválido";
		nameField.classList.add("nok");
		nameField.classList.add("crossIcon");
		return false; }
	}

function validateEmail(){
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	var errorEmail = document.getElementById('emailError');

	if(emailField.value == 0){
		errorEmail.innerHTML = "Rellene este campo";
		emailField.classList.add("nok");
		emailField.classList.add("crossIcon");
		return false; 
	}
	else if(validEmail.test(emailField.value) ){
		emailField.classList.remove("nok");
		emailField.classList.remove("crossIcon");
		errorEmail.innerHTML = "";
		emailField.classList.add("ok");
		emailField.classList.add("tickIcon");
		return true; 
	}
	else {
		errorEmail.innerHTML = "Email inválido";
		emailField.classList.add("nok");
		emailField.classList.add("crossIcon");
		return false; 
	}
} 

function validatePassword(){
	var passwordField = document.getElementById('password');
	var validPassword = /^[\s\S]{1,8}$/;
	var errorPassword = document.getElementById('passError');

	if(passwordField.value == 0){
		errorPassword.innerHTML = "Rellene este campo";
		passwordField.classList.add("nok");
		passwordField.classList.add("crossIcon");
		return false; }
	else if(validPassword.test(passwordField.value) ){
		passwordField.classList.remove("nok");
		passwordField.classList.remove("crossIcon");
		errorPassword.innerHTML = "";
		passwordField.classList.add("ok");
		passwordField.classList.add("tickIcon");
		return true; 
	}
	else {	
		errorPassword.innerHTML = "No debe tener más de 8 caracteres";
		passwordField.classList.add("nok");
		return false; }
}

function validateConfirm(){
	var passwordField = document.getElementById('password');
	var confirmField = document.getElementById('confirm');
	var errorConfirm = document.getElementById('confirmError');

	if(confirmField.value == 0){
		errorConfirm.innerHTML = "Rellene este campo";
		confirmField.classList.add("nok");
		confirmField.classList.add("crossIcon");
		return false;
	 }
	else if (passwordField.value == confirmField.value ){
		confirmField.classList.remove("nok");
		confirmField.classList.remove("crossIcon");
		errorConfirm.innerHTML = "";
		confirmField.classList.add("ok");
		confirmField.classList.add("tickIcon");
		return true; 
	}
	else {
		errorConfirm.innerHTML = "Las contraseñas no coinciden";
		confirmField.classList.add("nok");
		confirmField.classList.add("crossIcon");
		return false; 
	} 
}

function borderButton(){
	var borderButton = document.getElementById('button');
	borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor'); 	}
	borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor'); 	}
}
borderButton()

function validateForm(){

	if (validateConfirm() && validatePassword() && validateEmail() && validateName()){
		alert("La inscripción ha sido correcta");
		return true; }
	else {
		return false; }
}