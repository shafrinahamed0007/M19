const jim = 56;
const tim = 89;
const kim = 18;

if (jim > tim && jim > kim) {
  console.log("Jim is the ultimate boss");
} else if (tim > jim && tim > kim) {
  console.log("Tim is the ultimate boss");
} else {
  console.log("Kim is the ultimate boss");
}

function maxOfThree(jim, tim, kim) {
  if (jim > tim && jim > kim) {
    return console.log("Jim is the ultimate boss");
  } else if (tim > jim && tim > kim) {
    return console.log("Tim is the ultimate boss");
  } else {
    return console.log("Kim is the ultimate boss");
  }
}

let ultimateBoss = maxOfThree(jim, tim, kim);
console.log(ultimateBoss);

const max = Math.max(12, 20, 30,56,7);
console.log("Max is using Math max:", max);
