// Ajustamos la fecha que necesitamos hacerle el countdown
let countDownDate = new Date("Sept 19, 2019 12:00:00").getTime();

// actualiza el contador cada segundo
let x = setInterval(function() {

// Obtiene la fecha actual
let now = new Date().getTime();

// Halla la distancia entre la fecha actual y la fecha final
let distance = countDownDate - now;

// Calculos de tiempo para día, fecha, hora y segundos
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// muesta el resultado en el id 
document.getElementById("days").innerHTML =  " Days " + `<p class="no-bold">${days}</>` ;
document.getElementById("hours").innerHTML =  " Hours " + `<p class="no-bold">${hours}</>`;
document.getElementById("minutes").innerHTML =  "Minutes" + `<p class="no-bold">${minutes}</>`;
document.getElementById("seconds").innerHTML =  " Seconds" + `<p class="no-bold">${seconds}</>`;
document.getElementById("daysFooter").innerHTML =  " Days" + `<p class="no-bold">${days}</>` ;
document.getElementById("hoursFooter").innerHTML =  " Hours" + `<p class="no-bold">${hours}</>`;
document.getElementById("minutesFooter").innerHTML =  " Minutes" + `<p class="no-bold">${minutes}</>`;
document.getElementById("secondsFooter").innerHTML =  " Seconds" + `<p class="no-bold">${seconds}</>`;
// Si el contador llega a cero mostrar texto
if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "Disfruta de Eyewallet Pro";
}
}, 1000);