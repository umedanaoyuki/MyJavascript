"use strict";

//オブジェクトの宣言
{
  const scores = {
    math: 80,
    english: 90,
  };

 let sum = 0;

 //配列に要素を追加
 scores.physics = 70;

  //オブジェクトを配列へ変更
  const enttries = Object.entries(scores);
  console.log(enttries);

  enttries.forEach((prop) => {
    sum += prop[1];
    //console.log(prop);
    //要素とvalueを別々で表示させる
    console.log(`${prop[0]}: ${prop[1]}`);
  }) 
  
  //合計
  console.log(`SUM: ${sum}`);
  //平均
  console.log(`Average: ${sum / enttries.length}`);



}
