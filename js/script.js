const modal = document.getElementById("modal");
const catalogo = document.querySelectorAll(".catalogo-item");
const enlaces = document.querySelectorAll(".enlaces-catalogo");





enlaces.forEach((cadaEnlace,i)=>{
    cadaEnlace.addEventListener("click",(e)=>{
        e.preventDefault();
        catalogo.forEach((cadaCatalogo,j)=>{
            catalogo[j].classList.remove("activo");
            enlaces[j].classList.remove("activo");
        })
        enlaces[i].classList.add("activo");
        catalogo[i].classList.add("activo");
    })
})


//Oculta la ventana modal
modal.onclick = ()=>{
    ocultarModal("none");
}

function ocultarModal(params) {
    modal.style.display = params;
}