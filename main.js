"use strict";

{

  function showclock() {
    setTimeout( () => {
      console.log(new Date());
      showclock();
  }, 1000);}

  showclock();

}