"use strict";

{

  const double = (num) => {
    return num * 2;
  };

  // 仮引数にfuncという引数の関数を入力している（つまりnumをインプットすると
  // 何かしらの処理を自動的にしてくれるcalc関数を定義してくれている）
  const calc = (num, func) => {
    return func(num);
  };

  //今回　上で定義した仮引数の関数に対して doubleを指定している
  // double()にしない
  // console.log(calc(20, double));

  //わざわざアロー関数を書かずに、直接この中にアロー関数を書くことができる
  console.log(calc(20, (num) => {
    return num * 2;
  }));



}