"use strict";

{

  // 2000 4 11
 //const d = new Date(2000,3,11);
 
 // 2000 2 末日？？？？？
 //3月0日（2月末日）を表示させることで、閏年を調べなくてもいい
 const d = new Date(2000, 2, 0);

 console.log(d.toLocaleDateString());



}