"use strict";

{

  function getRamdomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  for (let i = 0; i < 10; i++) {
    //乱数を生成(0以上1未満)
    // const n = Math.random();

    //1から6のランダムな整数（サイコロ）を出力
    const n = getRamdomInteger(5) + 1;
    console.log(`${i}: ${(n)}`);
  }
  

}