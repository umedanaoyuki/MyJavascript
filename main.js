"use strict";

{

  const string = prompt('Name?');

  //空白を抜く、文字をすべて小文字に変換
  if (string.toLowerCase().trim() === 'taro') {
    console.log('correct!');
  } else {
    console.log('wrong!')
  }


}