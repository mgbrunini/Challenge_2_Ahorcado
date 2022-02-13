//boton Iniciar juego
var btnNewGame = document.querySelector("#btnInicio");
btnNewGame.addEventListener("click",function() {
  console.log("se hizo click aqui");
  document.getElementById("menu").style.display = "none";
  document.getElementById("juego").style.display = "block";
})


//boton Añadir palabra
var btnNewWord = document.querySelector("#btnNueva");
btnNewWord.addEventListener("click",function() {
  console.log("se hizo click aqui en nueva palabra");
  document.getElementById("menu").style.display = "none";
  document.getElementById("agregarPalabra").style.display = "block";
})
