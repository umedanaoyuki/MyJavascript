"use strict";

{

  // let num = 10;

  // const numBackup = num;

  // num = 99;

  // console.log(num);
  // console.log(numBackup);

  const nums = [10, 20, 30];
  //スプレッド構文を使用すればnumsとnumsBackupを別にできる
  const numsBackup = [...nums];

  nums[0] = 99;

  console.log(nums);
  console.log(numsBackup);



}