"use strict";

{

  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email) => {
     const loc = email.indexOf('@');

    //@が出現する位置を割り出してその文字まで
    console.log(email.substring(0,loc));

  });
}