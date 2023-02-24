const form = document.querySelector(".hero-form");
const formInput = document.querySelector(".hero-form-input");
const errorIcon = document.querySelector(".error-icon");
const submitBtn = document.querySelector(".hero-form-btn");
const errorMessage = document.querySelector(".error-message");
const emailRegex =
    /^[\w.! #$%&'*+=? ^_`{|}~-]+@[a-zA-Z0-9-]+([\.-]?\w+)*(\.\w{2,3})+$/gm;

const validateEmail = () => {
    const email = formInput.value;
    if (email.length === 0 || !email.match(emailRegex)) {
        formInput.classList.add("error");
        formInput.setAttribute("aria-invalid", "true");
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
        submitBtn.classList.add("submit");
        return false;
    }
    email.length === 0;
    formInput.classList.remove("error");
    formInput.setAttribute("aria-invalid", "false");
    errorIcon.style.display = "none";
    errorMessage.style.display = "none";
    submitBtn.classList.remove("submit");
    return true;
};

form.addEventListener("submit", (e) => {
    const isEmailValid = validateEmail();
    if (isEmailValid) {
        return true;
    } else {
        e.preventDefault();
    }
});
