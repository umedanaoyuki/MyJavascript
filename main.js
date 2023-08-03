"use strict";

{

  // 2000 4 11
 const d = new Date(2000, 3, 11);
console.log(d);
//1970/1/1からの経過ミリ秒(Unix Time Stamp)
console.log(d.getTime());

const d2 = new Date(d.getTime() + 1000);
console.log(d2);

}