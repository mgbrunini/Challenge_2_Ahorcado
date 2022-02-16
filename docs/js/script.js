//boton Iniciar juego
var btnNewGame = document.querySelector("#btnInicio");
btnNewGame.addEventListener("click",function() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("juego").style.display = "block";
  inicio();
})

//boton Añadir palabra
var btnNewWord = document.querySelector("#btnNueva");
btnNewWord.addEventListener("click",function() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("agregarPalabra").style.display = "block";
})

//Boton Alura como home
var iconAlura = document.querySelector("#iconAlura");
iconAlura.addEventListener("click",function() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("juego").style.display = "none";
  document.getElementById("agregarPalabra").style.display = "none";
})
