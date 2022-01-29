function reloj() {
  var hoy = new Date();
  var hora = hoy.getHours();
  var minuto = hoy.getMinutes();
  var segundo = hoy.getSeconds();
  var horaD = 10;
  var minutoD = 00;
  var horaD2 = 16;
  var minutoD2 = 00;
  const music = new Audio('sonido.mp3');

  if (hora === horaD && minuto === minutoD) {
    if (segundo === 0){
      window.open("http://127.0.0.1:8000/", "_blank");
    }
    if (segundo >= 0 && segundo <= 10){
      music.play();
    }
    
  };

  if (hora === horaD2 && minuto === minutoD2) {
    if (segundo === 0){
      window.open("http://127.0.0.1:8000/", "_blank");
    }
    if (segundo >= 0 && segundo <= 10){
      music.play();
    }
    
  };
};

setInterval(reloj, 1000);

// Change the periodInMinutes property to set time interval