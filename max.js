const disha = 56;
const salman = 95;

if (disha > salman) {
  console.log("Disha will get the strawberry");
} else {
  console.log("Salman will eat the strawberry");
}

// inside a function

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = getMax(56, 79);
const max2 = getMax(56, 96);

console.log("Max of two is: ", max);
console.log("Max2 of two is: ", max2);

const ultimateMax = getMax(max, max2);

console.log("Ultimate max is:", ultimateMax);
