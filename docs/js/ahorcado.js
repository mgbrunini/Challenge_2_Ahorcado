

function tipo() {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");
  //pincel.fillStyle = "green";
  //pincel.beginPath();
  //Es la horca
  pincel.moveTo(0, 350);
  pincel.lineTo(200, 350);
  pincel.moveTo(100, 350);
  pincel.lineTo(100, 50);
  pincel.lineTo(200, 50);
  pincel.lineTo(200, 70);
  pincel.stroke();
  //cabeza
  function dibujarCirculo(x, y, radio) {
      pincel.beginPath();
      pincel.arc(x, y, radio, 0, 2*3.14);
      pincel.stroke();
  }
  dibujarCirculo(200,100,30);

  //Cuerpo
  pincel.moveTo(200,130);
  pincel.lineTo(200,250);
  pincel.stroke();

  //brazo Izquierdo
  pincel.moveTo(200,160);
  pincel.lineTo(170,130);
  pincel.stroke();

  //brazo Derecho
  pincel.moveTo(200,160);
  pincel.lineTo(230,130);
  pincel.stroke();

  //Pierna Izquierda
  pincel.moveTo(200,250);
  pincel.lineTo(170,280);
  pincel.stroke();

  //Pierna Derecha
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
    //Cruz ojo derecho
  pincel.moveTo(210,100);
  pincel.lineTo(220,90);
  pincel.moveTo(210,90)
  pincel.lineTo(220,100);
  pincel.stroke();
}
