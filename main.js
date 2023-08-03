"use strict";

{
 const pElement = document.querySelector('p');
 const buttonElement = document.querySelector('button');
 let timeoutId;

  //再帰関数
  function showclock() {
    timeoutId = setTimeout( () => {
      pElement.textContent = new Date();
      showclock();
  }, 1000);}

  buttonElement.addEventListener('click', () => {
    clearTimeout(timeoutId);
  });

  showclock();

}