document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(usuario === "admin" && password === "1234"){
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    } else {
        message.innerHTML = "<p style='color:red'>Credenciales incorrectas</p>";
    }
});
