"use strict";

{
  let start = 'Tokyo';
  let goal = 'Osaka';

  // start = goal;
  // goal = start;

  // console.log(start);
  // console.log(goal);
  
  //分割代入
[goal, start] = [start, goal];

console.log(start);
console.log(goal);

}