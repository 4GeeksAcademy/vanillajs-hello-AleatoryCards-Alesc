import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Valores de las Cartas
  const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const cardSymbols = ['♦', '♥', '♠', '♣']

  // generador de numeros aleatorios 
  const randomNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  const randomSymbol = cardSymbols[Math.floor(Math.random() * cardSymbols.length)];

  // Determinar el color segun el simbolo
  const cardColor = randomSymbol === '♦' || randomSymbol === '♥' ? 'red' : 'black';
  console.log(randomNumber);


//Actualizando el contenido de la carta en mi html
document.querySelector('.Value').innerHTML = randomNumber;
document.querySelectorAll('.Palo').forEach(palo => {
  palo.innerHTML = randomSymbol;
  palo.style.color = cardColor;
  });
};