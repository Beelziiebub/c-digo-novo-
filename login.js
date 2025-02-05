document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulação de login (email fixo)
        if (email === "admin@email.com" && password === "1234") {
            message.style.color = "green";
            message.textContent = "Login bem-sucedido!";
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redireciona para outra página
            }, 1000);
        } else {
            message.style.color = "red";
            message.textContent = "Email ou senha inválidos.";
        }
    });
});
