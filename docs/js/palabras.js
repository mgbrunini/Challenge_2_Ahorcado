var palabra = ['ALURA', 'ORACLE', 'ANANA'];

//boton cancelar - home
var cancelar = document.querySelector("#btnCancel");
cancelar.addEventListener("click",function() {
  document.getElementById("agregarPalabra").style.display = "none";
  document.getElementById("menu").style.display = "block";
})
var tamaño = 0;
var split = "";
var aleatorio = "";
function palabraAzar() {
  aleatorio = palabra[Math.floor(Math.random()*palabra.length)];
  console.log(aleatorio);
  split = aleatorio.split('');
  tamaño = split.length;
  return tamaño;
  return split;
  return aleatorio;
}
//Ingresar palabra
var nuevaPalabra = document.querySelector("#btnSave");
nuevaPalabra.addEventListener("click",function() {
  palabraagregada = document.querySelector("#ingresarPalabra");
  console.log(palabraagregada.value.toUpperCase());
  palabra.push(palabraagregada.value.toUpperCase())
  console.log(palabra);
  document.getElementById("agregarPalabra").style.display = "none";
  document.getElementById("juego").style.display = "block";
})
