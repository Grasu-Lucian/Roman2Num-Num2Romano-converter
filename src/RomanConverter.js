import React from "react";

export default function RomanConverter(number) {
  let roman = "";
  if (number > 3999) {
    return NaN;
  } else {
    while (Math.floor(number / 1000)) {
      roman = roman + "M";
      number = Math.floor(number - 1000);
    }
    if (Math.floor(number / 900)) {
      roman = roman + "CM";
      number = Math.floor(number - 900);
    }
    if (Math.floor(number / 500)) {
      roman = roman + "D";
      number = Math.floor(number - 500);
    }
    if (Math.floor(number / 400)) {
      roman = roman + "CD";
      number = Math.floor(number - 100);
    }
    while (Math.floor(number / 100)) {
      roman = roman + "C";
      number = Math.floor(number - 100);
    }
    if(Math.floor(number / 90)) {
      roman = roman + "XC";
      number = Math.floor(number - 90);
    }

    if(Math.floor(number / 50)) {
      roman = roman + "L";
      number = Math.floor(number - 50);
    }
    if(Math.floor(number / 40)) {
        roman = roman + "XL";
        number = Math.floor(number - 40);
      }
      while (Math.floor(number / 10)) {
        roman = roman + "X";
        number = Math.floor(number - 10);
      }
      if(Math.floor(number / 9)) {
        roman = roman + "IX";
        number = Math.floor(number - 9);
      }
      if(Math.floor(number / 5)) {
        roman = roman + "V";
        number = Math.floor(number - 5);
      }
      if(Math.floor(number / 4)) {
        roman = roman + "IV";
        number = Math.floor(number - 4);
      }
      while(Math.floor(number / 1)) {
        roman = roman + "I";
        number = Math.floor(number - 1);
      }
    return roman;
  }

  console.log(number);
  return null;
}
