"use strict";

const english = Number(prompt('English?'));

const math = Number(prompt('Math?'));

if (!(english > 80 && math > 80)) {
  console.log('B');
} else {
  console.log('A');
}