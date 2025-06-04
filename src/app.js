import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

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
};