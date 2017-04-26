var logo = document.getElementById('logo');
var imgBlanco = document.createElement('img');
var imgRosa = document.createElement('img');


logo.style.border= 4;
imgBlanco.src = "assets/img/logo-white.png";
imgBlanco.className = "logoBlanco";
imgRosa.src = "assets/img/logo-pink.png";
imgRosa.className = "logoBlanco";


logo.appendChild(imgBlanco);
logo.appendChild(imgRosa);
var seccionCambio = document.getElementById('seccion2');
seccionCambio.addEventListener('moveend',function () {
window.scrollTo(0, 100);
});

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
