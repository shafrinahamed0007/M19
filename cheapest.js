const mobile = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xiomi", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "IPhone", price: 100000, camera: "12mp", color: "black" },
  { name: "walton", price: 31000, camera: "12mp", color: "black" },
  { name: "htc", price: 27000, camera: "12mp", color: "black" },
];

// Find Cheapest Prices Phone
function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }

  return min;
}

// Find Highest Prices Phone

function getHighestPhone(phones) {
  let highest = phones[0];
  for (const phone of phones) {
    if (highest.price < phone.price) {
      highest = phone;
    }
  }
  return highest;
}

const cheap = getCheapestPhone(mobile);
console.log("Cheapest phone is: ", cheap);

const highest = getHighestPhone(mobile);
console.log("Highest Prices Phone: ", highest);
