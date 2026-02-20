if(localStorage.getItem("login") !== "true"){
    window.location.href = "index.html";
}

function logout(){
    localStorage.removeItem("login");
    window.location.href = "index.html";
}

let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

function agregarAlumno(){
    const nombre = document.getElementById("nombreAlumno").value;

    if(nombre === "") return;

    alumnos.push({
        nombre:nombre,
        asistencia:"Presente",
        fecha:new Date().toLocaleDateString()
    });

    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    document.getElementById("nombreAlumno").value="";
    mostrarAlumnos();
}

function mostrarAlumnos(){
    const tabla = document.getElementById("tablaAlumnos");
    tabla.innerHTML="";

    alumnos.forEach(alumno=>{
        tabla.innerHTML+=`
            <tr>
                <td>${alumno.nombre}</td>
                <td>${alumno.asistencia}</td>
                <td>${alumno.fecha}</td>
            </tr>
        `;
    });
}

mostrarAlumnos();
