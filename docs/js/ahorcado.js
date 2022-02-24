var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");



//Comienza el Juego
function inicio() {
  palabraAzar();
  lineas(tamaño);
  base();
  validar();
}

//lineas
function lineas(tamaño) {
  console.log(tamaño);
  var x = 300;
  var y = 300;
  for (var i = 0; i < tamaño ; i++) {
    pincel.moveTo(x,y);
    pincel.lineTo(x,y);
    x = x + 20;
    pincel.lineTo(x,y);
    x = x + 30;
    pincel.moveTo(x,y);
    pincel.lineTo(x,y);
    pincel.stroke();
  }
}

function validar() {
  var x = 300;
  document.addEventListener("keydown", function() {
    console.log(event);
    var letraPrecionada = event.key.toUpperCase();

    for (var i = 0; i < split.length; i++) {
      console.log(letraPrecionada," - ",split[i]);
      if (letraPrecionada == split[i]) {
        pincel.font = "40px Georgia" //importamos la letra
        pincel.fillStyle = "blue"; //color del pincel
        pincel.fillText(event.key,x,40); //escritura de prueba
        x = x + 20;
        pincel.fillText(" - " ,x,40);
        x = x + 30;
      }else {
        pincel.font = "40px Georgia" //importamos la letra
        pincel.fillStyle = "red"; //color del pincel
        pincel.fillText(event.key,x,40); //escritura de prueba
        x = x + 20;
        pincel.fillText(" - " ,x,40);
        x = x + 30;
      }
    }
  })
}







function base(){
  pincel.fillStyle = "lightblue"
  pincel.fillRect(0,350,200,400);
}

function palo1() {
  pincel.moveTo(100, 350);
  pincel.lineTo(100, 50);
  pincel.stroke();
}
function palo2() {
  pincel.lineTo(200, 50);
  pincel.stroke();
}
function palo3() {
  pincel.lineTo(200, 70);
  pincel.stroke();
}
function cabeza() {
  function dibujarCirculo(x, y, radio) {
      pincel.beginPath();
      pincel.arc(x, y, radio, 0, 2*3.14);
      pincel.stroke();
  }
  dibujarCirculo(200,100,30);
}
function cuerpo() {
  pincel.moveTo(200,130);
  pincel.lineTo(200,250);
  pincel.stroke();
}
function brazoIzq() {
  pincel.moveTo(200,160);
  pincel.lineTo(170,130);
  pincel.stroke();
}
function brazoDer() {
  pincel.moveTo(200,160);
  pincel.lineTo(230,130);
  pincel.stroke();
}
function piernaIzq() {
  pincel.moveTo(200,250);
  pincel.lineTo(170,280);
  pincel.stroke();
}
function piernaDer() {
  pincel.moveTo(200,250);
  pincel.lineTo(230,280);
  pincel.stroke();
    //Cruz ojo izquierdo
  pincel.fillStyle = "red";
  pincel.beginPath();
  pincel.moveTo(180,100);
  pincel.lineTo(190,90);
  pincel.moveTo(180,90)
  pincel.lineTo(190,100);
  pincel.stroke();
    //Cruz ojo derecho
  pincel.moveTo(210,100);
  pincel.lineTo(220,90);
  pincel.moveTo(210,90)
  pincel.lineTo(220,100);
  pincel.stroke();
  alert("Perdiste, la palabra correcta era " + aleatorio);
}
