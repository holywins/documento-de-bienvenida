let luna = document.getElementById('luna');
let sol = document.getElementById('sol');

luna.addEventListener("click", ()=> {
    let body = document.getElementById('body')
    let parrafo = document.getElementById('parrafo');
    siExiste = body.classList.contains("bodyWhite")
    siTambienExiste = parrafo.classList.contains("parrafoWhite");
    if (siExiste && siTambienExiste){
        body.classList.remove("bodyWhite");
        parrafo.classList.remove("parrafoWhite");
    }
    body.classList.add("bodyBlack");
    parrafo.classList.add("parrafoBlack");
});

sol.addEventListener("click", ()=>{
    let body = document.getElementById('body')
    let parrafo = document.getElementById('parrafo');
    body.classList.remove("bodyBlack");
    parrafo.classList.remove("parrafoBlack");
    body.classList.add("bodyWhite");
    parrafo.classList.add("parrafoWhite");
})