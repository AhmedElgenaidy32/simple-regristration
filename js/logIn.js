var loginBtn = document.getElementById("loginBtn");
var emailLoginInput = document.getElementById("emailLoginInput");
var alertMassage=document.getElementById("alertMassage");
var passwordLoginInput = document.getElementById("passwordLoginInput");

var userContainer = [];
if (localStorage.getItem("Users") != null) {
    userContainer = JSON.parse(localStorage.getItem("Users"));
}
function logIn() {
    if(checkInputsEmpty() == true)
    {
        getAlertMessage("All Inputs Are Required","red")
    }
    else
    {
        if(checkEmailPassword() == true)
        {
            window.location.href="home.html";
        }
        else
        {
            getAlertMessage("Email or Password notCorrect","red");
        }
    }
   
}
function checkEmailPassword() {
    for (var i= 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailLoginInput.value && userContainer[i].passwrod == passwordLoginInput.value) {
            localStorage.setItem("userName",userContainer[i].userName)
            return true;
        }
    }
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace("d-none", "d-block");
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function checkInputsEmpty() {
    if ( emailLoginInput.value == "" || passwordLoginInput.value == "")
        return true;
    else
        return false;
}
loginBtn.addEventListener("click", logIn);