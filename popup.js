function reloj() {
  var hoy = new Date();
  var hora = hoy.getHours();
  var minuto = hoy.getMinutes();
  var segundo = hoy.getSeconds();
  var horaD = hoy.getHours();
  var minutoD = 2;
  const music = new Audio('sonido.mp3');

  if (minuto < 10) {
    minuto = "0" + minuto
  };
  if (segundo < 10) {
    segundo = "0" + segundo
  };
  if (hora == horaD && minuto == minutoD && segundo == 00) {
    
    music.play();
    window.open("http://127.0.0.1:8000/");
    
  };
};

setInterval(reloj, 1000);

// Change the periodInMinutes property to set time interval