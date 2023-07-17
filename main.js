"use strict";

let price;
const rate = 1.1;

for (price = 150; price <= 160; price++) {
  console.log(`Price: ${price}`);

  for (let amount = 120; amount < 140; amount += 10) {
    console.log(price * amount * rate);
  }
}




// price = 150;
// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);

// price++;
// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);
