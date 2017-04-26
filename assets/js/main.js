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
