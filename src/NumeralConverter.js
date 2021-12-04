import React from "react";

export default function NumeralConverter(number) {
  let normalnumber = 0;
  let last;
  let l = 1,
    d = 1;
  let Array = number.toUpperCase().split("");
  last = Array[0];
  Array.shift();
  switch (last) {
    case "M":
      normalnumber = normalnumber + 1000;
      break;
    case "D":
      normalnumber = normalnumber + 500;
      break;
    case "C":
      normalnumber = normalnumber + 100;
      break;
    case "L":
      normalnumber = normalnumber + 50;
      break;
    case "X":
      normalnumber = normalnumber + 10;
      break;
    case "V":
      normalnumber = normalnumber + 5;
      break;
    case "I":
      normalnumber = normalnumber + 1;
      break;
    default:
      normalnumber = NaN;
      break;
  }
  Array.forEach((number) => {
    if (
      (last === "I" && number === "I") ||
      (last === "X" && number === "X") ||
      (last === "C" && number === "C") ||
      (last === "M" && number === "M")
    ) {
      l = l + 1;
    } else {
      l = 0;
    }
    if (
        (last === "V" && number === "V") ||
        (last === "L" && number === "L") ||
        (last === "D" && number === "D")
      ){
        normalnumber=NaN;
      }
    if (l === 4) {
      normalnumber = NaN;
    }
    switch (number) {
      case "M":
        normalnumber = normalnumber + 1000;
        break;
      case "D":
        normalnumber = normalnumber + 500;
        break;
      case "C":
        normalnumber = normalnumber + 100;
        break;
      case "L":
        normalnumber = normalnumber + 50;
        break;
      case "X":
        normalnumber = normalnumber + 10;
        break;
      case "V":
        normalnumber = normalnumber + 5;
        break;
      case "I":
        normalnumber = normalnumber + 1;
        break;
      default:
        normalnumber = NaN;
        break;
    }
    switch (last + number) {
      case "CM":
        normalnumber = normalnumber - 200;
        break;
      case "CD":
        normalnumber = normalnumber - 200;
        break;
      case "XC":
        normalnumber = normalnumber - 20;
        break;
      case "XL":
        normalnumber = normalnumber - 20;
        break;
      case "IX":
        normalnumber = normalnumber - 2;
        break;
      case "IV":
        normalnumber = normalnumber - 2;
        break;
      case "DM":
      case "LM":
      case "XM":
      case "VM":
      case "IM":
      case "LD":
      case "XD":
      case "VD":
      case "ID":
      case "LC":
      case "VC":
      case "IC":
      case "VL":
      case "IL":
      case "VX":
      case "IX":
        normalnumber = NaN;
      default:
        break;
    }
  });

  return normalnumber;
}
