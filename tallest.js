const heights = [65, 66, 68, 300, 72, 78, 62, 102];

// Way-1 -> find out highest number
// function getMax(numbers) {
//     let highestValue = '';
//   for (const number of numbers) {
//     if(Math.max(number)>Math.max(highestValue)){
//         highestValue = number;
//     }
//   }
//   return highestValue;
// }

// way-2 -> find out highest number

function getMax(numbers) {
  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }

  return max;
}

// way-1 -> find out minimum number

function getMin(numbers) {
  let minimum = numbers[0];
  for (const number of numbers) {
    if (Math.min(number) < Math.min(minimum)) {
        minimum = number;
    }
  }
  return minimum;
}



const max = getMax(heights);
console.log("Max value is: ", max);

const min = getMin(heights);
console.log("Min value is: ", min);
