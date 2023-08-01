"use strict";

{

  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email) => {
     //console.log(email.replace('@example.com', ''));

     //splitで配列に入れて配列の0番を出力する
    const items = email.split('@');
    console.log(items[0]);

  });
}