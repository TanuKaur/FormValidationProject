let username = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let validUsername=false;
let validEmail=false;
let validPhone=false;
failure.classList.add("d-none");
success.classList.add("d-none");
username.addEventListener("blur", function () {
    let regex = /^[A-Za-z]([A-za-z0-9]){5,10}$/;
    let str = username.value;
    if (regex.test(str)) {
        console.log("Your username is valid");
        username.classList.remove("is-invalid");
         validUsername=true;
    }
    else {
        console.log("Your username is invalid");
        username.classList.add("is-invalid");
        validUsername=false;
    }
})
email.addEventListener("blur", function () {
    let regex = /^([_\-\.0-9A-za-z]+)@([\-\._0-9A-za-z]+)\.([a-zA-z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove("is-invalid");
        validEmail=true;
    }
    else {
        console.log("Your email is invalid");
        email.classList.add("is-invalid");
         validEmail=false;
    }
})
phone.addEventListener("blur", function () {
    let regex = /^[0-9]{10}/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log("Your phone is valid");
        phone.classList.remove("is-invalid");
        validPhone=true;
    }
    else {
        console.log("Your phone is invalid");
        phone.classList.add("is-invalid");
        validPhone=false;
    }
})
let submit=document.getElementById("submit");

submit.addEventListener("click",function(e){
    e.preventDefault();
    let success=document.getElementById("success");
    let failure=document.getElementById("failure");
    if(validUsername && validEmail && validPhone){
    console.log("Your username, email and phone number are valid. Submitting the form");
    failure.classList.add("d-none");
    failure.classList.remove("show");
        success.classList.add("show"); 
    success.classList.remove("d-none");
    }
    else{
        console.log("One or more out of username, email and phone number are invalid. Please correct the errors and try again.");
        success.classList.add("d-none");
        success.classList.remove("show");
        failure.classList.add("show");
        failure.classList.remove("d-none");
    }
})