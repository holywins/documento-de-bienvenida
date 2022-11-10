
let boton = document.getElementById('boton');

boton.addEventListener("click", ()=>{
    let pass = document.getElementById('pass').value;
    if(pass == "holy.admin"){
        window.location.href = "https://holywins.github.io/documento-de-bienvenida/";
    } else {
        alert("Contraseña Incorrecta.");
    }
});


