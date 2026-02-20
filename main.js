document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value.trim();

        if(usuario === "" || password === "") {
            message.textContent = "Todos los campos son obligatorios.";
            message.className = "message error";
            return;
        }

        // Simulación de usuario válido
        if(usuario === "admin" && password === "1234") {
            message.textContent = "Inicio de sesión exitoso.";
            message.className = "message success";

            // Aquí puedes redirigir después
            // window.location.href = "dashboard.html";
        } else {
            message.textContent = "Usuario o contraseña incorrectos.";
            message.className = "message error";
        }

    });

});
