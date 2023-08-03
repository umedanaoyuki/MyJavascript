"use strict";

{
 const pElement = document.querySelector('p');
 const buttonElement = document.querySelector('button');
;

  //再帰関数
  function showclock() {
    setTimeout( () => {
      pElement.textContent = new Date();
      showclock();
  }, 1000);}

  showclock();

}