"use strict";

//オブジェクトの宣言
{

  const scores = {
    math: 80,
    english: 90
  }


  scores.physics = 70;
  console.log(scores);

  delete scores.english;
  console.log(scores);


}