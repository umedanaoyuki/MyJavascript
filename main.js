"use strict";

{

  const scores = [70, 90, 80, 75];

  //最大値を出力
  // console.log(Math.max(...scores));

  //forEachを使用すればこのような書き方
  let max = 0;
  scores.forEach((score) => 
  {
    if (score > max) {
      max = score;
    }
  });

  console.log(max);

}