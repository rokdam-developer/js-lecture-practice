const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {           //함수 순서에 상관없이 돌아간다.
    localStorage.setItem(USER_LS, text);
}   
    


function askName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
    
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}



function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();