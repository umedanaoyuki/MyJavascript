"use strict";

{

  const n = Number(prompt('Yen?'));
  //2ケタ以降は四捨五入
  const amount = (n/ 138.91).toFixed(2)
  console.log(`USD: ${amount}`);


}