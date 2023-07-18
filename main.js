"use strict";

{

  const prices = [100, 150, 200];

  // const priceOver150 = [];

  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     priceOver150.push(price);
  //   }
  // })

const priceOver150 = prices.filter((price) => {
      return price >= 150;
  });

  console.log(priceOver150);

}