function verpassword() {
    const password = document.querySelector("#Password");
    const eyeIcon = document.querySelector("#OjoActivado");

    if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        password.type = "password"; 
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}
