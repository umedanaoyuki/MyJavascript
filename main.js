"use strict";

let amount = 100;

for (let year = 1; year <= 30; year++) {
  amount = amount * 1.05;

  if (amount < 200) {
    continue;
    //これ以降の処理は実施されないのでconsolo.logの中身が表示されず
    //今回のコードの場合は、200より少ない場合のconsole.logは表示されず
    //300より上のamountも表示されない
  }
  if (amount > 300) {
    break;
  }
  console.log(`Year ${year}: ${amount}`);
}


  
