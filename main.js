"use strict";

//オブジェクトの宣言
{
  const scores = {
    math: 80,
    english: 90,
  };

  //オブジェクトを配列へ変更
  const enttries = Object.entries(scores);
  console.log(enttries);

  enttries.forEach((prop) => {
    //console.log(prop);
    //要素とvalueを別々で表示させる
    console.log(`${prop[0]}: ${prop[1]}`);
  }) 



}
