"use strict";

{

  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  emails.forEach((email) => {
      if (email.startsWith('taro') === true) {
        console.log(email);
      }

  });
}