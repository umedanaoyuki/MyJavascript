"use strict";

//let command = Number(prompt("Menu 1,2,3 or 0 to exit"));

let command;

do {
  command = Number(prompt("Menu 1,2,3 or 0 to exit"));
  console.log(`Menu ${command} processed.`);
  if (command == 0) {
    console.log('終了');
  }

} while (command !== 0);
  
