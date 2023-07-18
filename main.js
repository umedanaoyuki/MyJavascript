"use strict";

{
  const socres = [
    70,90,80,85
  ];

  
  //scoresは仮引数
  //配列の中には、値の後にindexがデフォルトで入っている
  socres.forEach((score, index) => {
    console.log(`${index}: ${score}`);
  });

}