let modal = document.getElementById("modal");
let modalAnimation = document.getElementById("modal-container");
let signup = document.getElementById("signup-form");
let login = document.getElementById("login-form");

function signupModal() {
    modal.classList.add("open");
    modalAnimation.classList.add("opened");
    signup.classList.add("open-form");
    login.classList.remove("open-form");
}

function loginModal() {
    modal.classList.add("open");
    modalAnimation.classList.add("opened");
    login.classList.add("open-form");
    signup.classList.remove("open-form");
}

function closeModal() {
    modal.classList.remove("open");
    modalAnimation.classList.remove("opened");
    login.classList.remove("open-form");
    signup.classList.remove("open-form");
}

function toSignup() {
    login.classList.remove("open-form");
    signup.classList.add("open-form");
}

function toSignup() {
    login.classList.remove("open-form");
    signup.classList.add("open-form");
}

function toLogin() {
    login.classList.add("open-form");
    signup.classList.remove("open-form");
}