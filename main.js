'use strict';

//JavaScriptの場合は
//数字が文字列に自動的に変更される
console.log(50 + '20');

//promptの場合は入力された数は文字列になる
const n = prompt('Any number?');

//そのため、足し算する場合はキャストする必要がある
console.log(Number(n) + 10);

