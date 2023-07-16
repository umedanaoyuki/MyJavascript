'use strict';

//JavaScriptの場合は
//数字が文字列に自動的に変更される
console.log(50 + '20');

//promptの場合は入力された数は文字列になる
const score = Number(prompt('Any number?'));

if (score >= 90) {
  console.log('A!')
} else {
  console.log('not A!');
}
