var palabra = ['ALURA', 'ORACLE', 'ONE'];

//boton cancelar - home
var cancelar = document.querySelector("#btnCancel");
cancelar.addEventListener("click",function() {
  document.getElementById("agregarPalabra").style.display = "none";
  document.getElementById("menu").style.display = "block";
})

function palabraAzar() {
  let aleatorio = palabra[Math.floor(Math.random()*palabra.length)];
  console.log(aleatorio);
  let split = aleatorio.split('');
  console.log(split);
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
