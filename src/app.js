import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//crear la funcion para aleatorizar la carta
function cartaRandom() {
  //Crear arrays de palos y numeros
  const palos = ['♣','♠','♦','♥'];
  const numeros = ['A','2','3','4','5','6','7','8','9','J','Q','K'];

  //Randomizar la generacion de los palos y numeros
  let paloRandom = palos [Math.floor(Math.random()*palos.length)];
  let numeroRandom = numeros [Math.floor(Math.random()*numeros.length)];
  //Trebol y pica === negro, else ===rojo
  if (paloRandom === '♣'|| paloRandom === '♠') {
    //dibuja los datos
    document.querySelector('#logo1').innerHTML = paloRandom;
    document.querySelector('#logo2').innerHTML = paloRandom;
    document.querySelector('#numero').innerHTML = numeroRandom;
    //colorea los datos
    document.querySelector('#logo1').style.color = "black";
    document.querySelector('#logo2').style.color = "black";
    document.querySelector('#numero').style.color = "black";
  } else {
    //dibuja los datos
    document.querySelector('#logo1').innerHTML = paloRandom;
    document.querySelector('#logo2').innerHTML = paloRandom;
    document.querySelector('#numero').innerHTML = numeroRandom;
    //colorea los datos
    document.querySelector('#logo1').style.color = "red";
    document.querySelector('#logo2').style.color = "red";
    document.querySelector('#numero').style.color = "red";
    
  }
  //temporizador
     reinicio ();
};
// Hacer de window.onload una funcion para aleatorizar la carta
 window.onload = function() {
  cartaRandom();
};

// boton aleatorizar la carta
document.querySelector('#boton').addEventListener('click', cartaRandom) 

//temporizador
let intervalo;
const tTotal = 10;
//reiniciar tempo
function reinicio (){
  clearInterval(intervalo);
  let segundos = tTotal;
  document.getElementById('tiempo').textContent = segundos;
  // Cuenta regresiva
  intervalo = setInterval(() => {
    segundos--;
    document.getElementById('tiempo').textContent = segundos;
  // Generar nueva carta automáticamente cuando llegue a 0
    if(segundos <= 0) {
      cartaRandom(); 
    }
  }, 1000);
}