"use strict";

{

  const n = Number(prompt('Yen?'));
  //2ケタ以降は四捨五入
  //文字列
  const amount = (n/ 138.91).toFixed(2)
  //３ケタごとにコンマを入れる
  console.log(`USD: ${Number(amount).toLocaleString()}`);


}