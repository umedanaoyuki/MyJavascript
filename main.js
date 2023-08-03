"use strict";

{

  let isDevMode = true;
  const pElement  = document.querySelector('p');
  const buttonElement = document.querySelector('button');

  buttonElement.addEventListener('click', () => {
    if (isDevMode === true) {
      pElement.textContent = 'Dev Mode is Off';
    } else {
      pElement.textContent = 'Dev Mode is On';
    }
    isDevMode = !isDevMode;
  });
}