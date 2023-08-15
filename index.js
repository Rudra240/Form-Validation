var nameError = document.getElementById("name-error");
var numberError = document.getElementById("number-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName(){
    var name = document.getElementById("contact-name").value;
     if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
     }
     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
     }
     nameError.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
     return true;
}

function validateNumber(){
    var number = document.getElementById("contact-number").value;
    if(number.length == 0){
        numberError.innerHTML='Phone no is required';
        return false;
    }
    if(number.length != 10){
        numberError.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        numberError.innerHTML='Only digits please';
        return false;
    }
    number.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML='Email is invalid';
        return false;
    }
    emailError.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required- message.length;
    if(left>0){
        messageError.innerHTML= left +' more characters required';
        return false;
    }
    messageError.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateNumber() || !validateEmail() || !validateEmail() || !validateMessage())
    submitError.style.display='block'; 
    submitError.innerHTML='Please fix error to submit'
    setTimeout(function(){submitError.style.display='none';},2000);
     return false;
}