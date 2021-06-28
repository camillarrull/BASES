//TARJETAS
const recetarios = [
    {
        "id": 1,
        "titulo": "Recetas dulces",
        "imagen": './img/recetasDulces.jpeg',
        "precio": 500


    },
    {
        "id": 2,
        "titulo": "Recetas saladas",
        "imagen": './img/recSaladas1.jpeg',
        "precio": 500
    },

]
window.onload = cargaPagina;
function cargaPagina() {
    crearTarjetas();
    eventos();

}

function crearTarjetas() {
    for (const receta of recetarios) {
        const containterTarjetas = document.getElementById('tarjetas');
        let card = document.createElement('div')
        card.classList.add('estiloTarjeta')
        containterTarjetas.appendChild(card)
        let foto = document.createElement('img')
        foto.src = receta.imagen;
        foto.classList.add('estiloImagen')
        card.appendChild(foto)
        let titulo = document.createElement("p")
        titulo.innerHTML = receta.titulo
        titulo.classList.add('tituloRecetario')
        card.appendChild(titulo)
        let precioRecetario = document.createElement("p")
        precioRecetario.innerHTML = "$" + receta.precio
        precioRecetario.classList.add('precioRecetario')
        card.appendChild(precioRecetario)
        let botonRecetario = document.createElement('button')
        botonRecetario.innerHTML = 'Comprar'
        botonRecetario.classList.add('botonRecetario')
        botonRecetario.setAttribute('id', 'btn' + receta.id)
        card.appendChild(botonRecetario)



    }
}
//INFO RECETAS

function apareceMenuDulce() {
    let tarjetas = document.getElementById('tarjetas')
    let recetario = document.getElementById('contenedorIndice')
    document.body.addEventListener("click", () => {
        recetario.style.display = 'flex';
        tarjetas.style.display = 'none'
    });

}
function desapareceMenuDulce() {
    let tarjetas = document.getElementById('tarjetas')
    let recetario = document.getElementById('contenedorIndice')
    document.body.addEventListener("click", () => {
        recetario.style.display = 'none';
        tarjetas.style.display = 'flex'
    });
}

function apareceMenuSalado() {
    let tarjetas = document.getElementById('tarjetas')
    let recetario = document.getElementById('contenedorIndiceSalado')
    document.body.addEventListener("click", () => {
        recetario.style.display = 'flex';
        tarjetas.style.display = 'none'
    });

}
function desapareceMenuSalado() {
    let tarjetas = document.getElementById('tarjetas')
    let recetario = document.getElementById('contenedorIndiceSalado')
    document.body.addEventListener("click", () => {
        recetario.style.display = 'none';
        tarjetas.style.display = 'flex'
    });
}
function eventos() {
    document.getElementById("btn1").addEventListener("click", apareceMenuDulce);
    document.getElementById("cruz").addEventListener("click", desapareceMenuDulce);
    document.getElementById("btn2").addEventListener("click", apareceMenuSalado);
    document.getElementById("cruzSaladas").addEventListener("click", desapareceMenuSalado);

}