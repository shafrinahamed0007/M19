/**
 * fist100 --> 100tk
 * 101TO200 --> 90tk
 * above --> 70 tk
 */

function layerDiscountTotal(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * 90;
    const total = first100Price + remainingTotal;
    return total;
  }else{
    const first100Total = 100* first100Price;
    const second100Total = 100*second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * 70;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}
