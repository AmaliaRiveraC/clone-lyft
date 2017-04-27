var logo = document.getElementById('logo');
var imgBlanco = document.createElement('img');

imgBlanco.src = "assets/img/logo-white.png";
imgBlanco.className = "logoBlanco";


logo.appendChild(imgBlanco);



document.addEventListener("scroll", function () {
cambioClase();
// cambiarTexto();
// cambiarImagen();
// aparecerBoton();
aparecerBoton();
});

function cambioClase() {
  var encabezado = document.getElementById('seccion1');
    encabezado.style.background = "white";
    imgBlanco.src = "assets/img/logo-pink.png";
    var menu= document.getElementsByClassName("menu-li");
    for (var i = 0; i < menu.length; i++) {
      menu[i].className = "menu-li textoNegro";
    }
}
// function cambiarImagen() {
//
// }
// function cambiarTexto() {
//
// };
function aparecerBoton() {
  var botonMostrar = document.getElementById('login');
  botonMostrar.style.display = "inline-block";
}




var botonEnviarForm = document.getElementById("enviarFormulario");
var botonSignRide = document.getElementById("signRide");
var inputIngresarNumero = document.getElementById("ingresarNumero");

botonEnviarForm.addEventListener("click",mostrarFormularioCompleto);

botonSignRide.addEventListener("click",esconderFormularioCompleto);
inputIngresarNumero.addEventListener("click",mostrarFormularioCompleto);
var divformulario= document.getElementById("imputsEscondidos");

function mostrarFormularioCompleto(){
  /*esta funcion debe de extender el formulario completo*/
  divformulario.style.visibility="visible";
  divformulario.className="extenderFormulario"; //clase a checar con estilos
}

function esconderFormularioCompleto(){
  /*esta funcion debe de esconder el formulario*/
  divformulario.style.visibility="hidden";
  divformulario.className="esconderFormulario" //Esconde el formulario desde el css checar con estilos
}

function cambiarColorBotonARosa(){
  //esta funcion es para cambiar los colores de los botones del formulario

}
