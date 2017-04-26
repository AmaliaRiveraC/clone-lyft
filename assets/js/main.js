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
