"use strict";

{

  const names = ['Taro', 'Jiro', 'Saburo'];

  console.log(names.join('|'));

  //カンマでつなげる
console.log(names.join(''));
  
//そのまま繋げる
console.log(names.join());

const array = 'Taro|Jiro|Saburo';
console.log(array.split('|'));


}