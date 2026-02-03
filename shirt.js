/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */

function totalPrice(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 500;
  const pantPrice = 300;
  const shoePrice = 900;

  const shirtTotalPrice = shirtQuantity * shirtPrice;
  const pantTotalPrice = pantQuantity * pantPrice;
  const shoeTotalPrice = shoeQuantity * shoePrice;

  const totalAmount = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

  return totalAmount;
}

const totalAmount = totalPrice(4,2,1);
console.log("Total Amount: ", totalAmount, "TK");
