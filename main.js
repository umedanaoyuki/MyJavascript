"use strict";

{

  /**
   * 関数宣言は途中に書いても、コードの最上に書いたものと同じとみなされる
   */
  console.log(double(30));
  //関数宣言
   function double(num) {
     return num * 2;
   }


  //関数式（無名関数）
// const double = function(num) {
//     return num * 2;
//   };

  //  console.log(double(30));

}
