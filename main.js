"use strict";

{

  let cnout = 3;
  const intervalId = setInterval(() => {
    console.log(cnout);
    cnout--;

    if (cnout < 0) {
        clearInterval(intervalId);}
  }, 1000);




}