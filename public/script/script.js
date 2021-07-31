//BURGER NAV

let boton_nav = document.querySelector('.navbar-burger');
let nav_menu = document.querySelector('.navbar-menu');

boton_nav.addEventListener('click', function () {
    nav_menu.classList.toggle('is-active');
});

//ANIMATE TITLE

$(document).ready(function () {
    $('#titulo').animate({ left: '200px' }
        , 2000, function () {
            $('#subtitulo').fadeIn('slow');
        });
});

//
document.addEventListener("DOMContentLoaded", function () {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
    OverlayScrollbars(document.querySelectorAll("body"), {});
});

// SKILLS PROGRESS 

let progressArr1 = [5, 15, 30, 40, 60, 65, 80, 90, 95];

function fillProgress1() {

    progressArr1.forEach(function (num, index) {
        setTimeout(function () {
            $('#html-progr').val(num);
        }, 200 * index);
    });
};

let progressArr2 = [5, 15, 30, 40, 60, 65, 80, 90, 95];

function fillProgress2() {

    progressArr2.forEach(function (num, index) {
        setTimeout(function () {
            $('#css-progr').val(num);
        }, 200 * index);
    });
};

let progressArr3 = [5, 15, 30, 40, 60, 65, 80, 85];

function fillProgress3() {

    progressArr3.forEach(function (num, index) {
        setTimeout(function () {
            $('#js-progr').val(num);
        }, 200 * index);
    });
};

let progressArr4 = [5, 15, 30, 40, 60, 65, 80, 85];

function fillProgress4() {

    progressArr4.forEach(function (num, index) {
        setTimeout(function () {
            $('#jq-progr').val(num);
        }, 200 * index);
    });
    ;
}

let progressArr5 = [5, 15, 30, 40, 50];

function fillProgress5() {

    progressArr5.forEach(function (num, index) {

        setTimeout(function () {
            $('#back-progr').val(num);
        }, 200 * index);
    });
};

let waypoint = new Waypoint({
    element: document.getElementById('skills'),
    handler: function (direction) {
        console.log('skills are working!')
        fillProgress1();
        fillProgress2();
        fillProgress3();
        fillProgress4();
        fillProgress5();
    }
});




/* document.getElementById("day").addEventListener("click", temaDay);

function temaDay() {
    let body = document.querySelector("body");
    body.classList.remove("modoDark");
}

function displayMenuBuscador() {
    let menu = document.getElementById("menuBuscador");
    let busqueda = document.getElementById("input-buscar");
    if (busqueda !== null) {
        menu.style.display = "block";
        document.body.addEventListener("click", () => {
            menu.style.display = "none";
        });
    }
} */