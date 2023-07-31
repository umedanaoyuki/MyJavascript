"use strict";

{

 const moreSocres = [77, 88];
 //この書き方で配列をつなげる（スプレッド構文（右辺））
 const socres = [70, 90, 80, 85, ...moreSocres];
 //レスト構文（左辺）
 const [first, ...others]= socres;

 console.log(first);
 console.log(others);
 

}