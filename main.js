"use strict";

{

  const scores = [70, 90, 80, 85];

  scores.splice(2, 0, 77, 88);
  // 70, 90, 77, 88, 80, 85

  //console.log(scores);
  const deleted = scores.splice(3,1);
  // 70, 90, 77, 80, 85
  // deleted = [88] deleted が88が1つだけ入った配列

  scores.splice(2,2,30);
  // 70, 90, 30, 85

  console.log(scores);
  console.log(deleted);

}