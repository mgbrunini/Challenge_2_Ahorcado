//boton Iniciar juego
var btnNewGame = document.querySelector("#btnInicio");
btnNewGame.addEventListener("click",function() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("juego").style.display = "block";
  palabraAzar();
  tipo();
})

//boton Añadir palabra
var btnNewWord = document.querySelector("#btnNueva");
btnNewWord.addEventListener("click",function() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("agregarPalabra").style.display = "block";
})
