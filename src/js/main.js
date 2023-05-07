let abrirMenu = document.querySelector("#btnMovil");
let cerrarMenu = document.querySelector("#btnMovil_cerrar");
let menuMovil = document.querySelector(".navMob");
let linkMob = document.querySelectorAll(".linkMob");
let abrirChat = document.querySelector("#atenCliente");
let chat = document.querySelector("#atenChat");
let subProd = document.querySelectorAll(".filtroEnlace");
let modal = document.querySelector(".modal");
let cerrarModal = document.querySelector("#cerrarModal");

/*FUNCION MENU MOVIL*/

abrirMenu.addEventListener("click", () => {

    menuMovil.classList.remove("ocultar");
});

cerrarMenu.addEventListener("click", () => {

    menuMovil.classList.add("ocultar");
});

/*FUNCION LISTA MOVIL*/

for(let link of linkMob) {

    link.addEventListener("click", () => {

        link.classList.toggle("abrir");
    }) 
}

/*FUNCION ABRIR CHAT CLIENTE*/

abrirChat.addEventListener("click", () => {

    abrirChat.classList.toggle("chat");
})

/*FUNCION MOSTRAR LISTA DE PRODUCTOS*/

for(let sub of subProd) {

    sub.addEventListener("click", () => {

        sub.classList.toggle("mostrar");
    })
}

/*FUNCION MODAL*/

cerrarModal.addEventListener("click", () => {

    modal.classList.add("cerrar");
})