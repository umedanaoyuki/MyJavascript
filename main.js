"use strict";

{

  let cnout = 3;
  //1秒後に実施される
  const intervalId = setInterval(() => {
    console.log(cnout);
    cnout--;

    if (cnout < 0) {
        clearInterval(intervalId);}
  }, 1000);

  //こちらが先に実行される
  console.log(`ID: ${intervalId}`);


}