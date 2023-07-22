"use strict";

{

  const moreSores = [77,88];
  //スプレッド構文でmoreSoresに入れる
  const scores = [70, 80, 90, 85, ...moreSores];

  //レスト構文
  const [first, ...others] = scores;

  console.log(first);
  console.log(others);

}