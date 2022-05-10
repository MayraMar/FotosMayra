let verMas=document.querySelector(".mas")
let fotosOcultas=document.querySelectorAll(".d-none")
verMas.addEventListener("click", function(e){
    console.log("escucho el click");
    e.preventDefault;
    fotosOcultas.forEach(bloque => {
        bloque.classList.remove("d-none")});
    verMas.classList.add("d-none");
})