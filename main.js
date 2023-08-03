"use strict";

{

  // 2000 4 11
 const d = new Date(2000, 3, 11);

//  const dBackup = new Date(d.getFullYear, d.getMonth, d.getDay);
 const dBackup = new Date(d.getTime());
d.setDate(23);

// d.setDate(d.getDate() + 100);
 console.log(d.toLocaleDateString());
 console.log(dBackup.toLocaleDateString());


}