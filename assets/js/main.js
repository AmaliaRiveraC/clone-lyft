var logo = document.getElementById('logo');
var imgBlanco = document.createElement('img');
var botonAparecer = document.createElement('button');
var encabezado = document.getElementById('seccion1');

imgBlanco.src = "assets/img/logo-white.png" ;
imgBlanco.className = "logoBlanco";
encabezado.appendChild(botonAparecer);
logo.appendChild(imgBlanco);

document.addEventListener("scroll", function() {
  if(window.scrollY > 50){
    cambioClase();
    cambiarTexto();
    cambiarImagen();
    aparecerBoton();
  }else{
    cambioClaseN();
    cambiarTextoN();
    cambiarImagenN();
    aparecerBotonN();
  }
});

function cambioClase() {
  encabezado.style.background = "white";
  }
function cambioClaseN() {
    var encabezado = document.getElementById('seccion1');
    encabezado.style.background = "rgba(51,52,7,0.2)";
    }

function cambiarImagen() {
  imgBlanco.src = "assets/img/logo-pink.png";
}
function cambiarImagenN() {
  imgBlanco.src = "assets/img/logo-white.png" ;
}
function cambiarTexto() {
  var menu = document.getElementsByClassName("menu-li");
  for (var i = 0; i < menu.length; i++) {
    menu[i].className = "menu-li textoNegro";
  };
 };
function cambiarTextoN() {
   var menu = document.getElementsByClassName("menu-li");
   for (var i = 0; i < menu.length; i++) {
     menu[i].className = "menu-li textoBlanco";
   };
  };
function aparecerBoton() {
  var botonMostrar = document.getElementById('login');
  botonMostrar.style.display = "inline-block";
}
function aparecerBotonN() {
  var botonMostrar = document.getElementById('login');
  botonMostrar.style.display = "none";
}




var botonEnviarForm = document.getElementById("enviarFormulario");
var botonSignRide = document.getElementById("signRide");
var inputIngresarNumero = document.getElementById("ingresarNumero");

botonEnviarForm.addEventListener("click", mostrarFormularioCompleto);
botonSignRide.addEventListener("click", esconderFormularioCompleto);
inputIngresarNumero.addEventListener("click", mostrarFormularioCompleto);
var divformulario = document.getElementById("imputsEscondidos");

function mostrarFormularioCompleto() {
  /*esta funcion debe de extender el formulario completo*/
  divformulario.style.visibility = "visible";
  divformulario.className = "extenderFormulario"; //clase a checar con estilos
}

function esconderFormularioCompleto() {
  /*esta funcion debe de esconder el formulario*/
  divformulario.style.visibility = "hidden";
  divformulario.className = "esconderFormulario" //Esconde el formulario desde el css checar con estilos
}

function cambiarColorBotonARosa() {
  // esta funcion es para cambiar los colores de los botones del formulario

}
