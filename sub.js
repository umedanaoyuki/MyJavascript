'use strict'

//main.jsの方がHTMLで上にあるので、main.jsと被ってしまうのはNG
//ファイルごとに変数を自由に決めて他から参照されたくない場合は全体をスコープでくくる
{
let x = 20;
console.log(x);
}