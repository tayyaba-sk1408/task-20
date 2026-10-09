
const overlay = document.getElementById("overlay");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const signupForm = document.getElementById("signupForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

let dismissed = false;
let previousFocus = null;

function showModal() {
    if (dismissed) return;

    previousFocus = document.activeElement;
    overlay.classList.add("show");
    email.focus();
}

function hideModal() {
    overlay.classList.remove("show");
    dismissed = true;

    if (previousFocus) {
        previousFocus.focus();
    }
}

const popupTimer = setTimeout(showModal, 3000);

openModal.addEventListener("click", () => {
    clearTimeout(popupTimer);
    showModal();
});

closeModal.addEventListener("click", hideModal);

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        hideModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("show")) {
        hideModal();
    }
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!email.checkValidity()) {
        email.reportValidity();
        return;
    }

    message.textContent = "Thank you for subscribing!";
    signupForm.reset();
    dismissed = true;

    setTimeout(() => {
        overlay.classList.remove("show");
    }, 1500);
});