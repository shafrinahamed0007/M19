const products = [
  { name: "Shampoo", price: 300, quantity: 2 },
  { name: "Chiruni", price: 100, quantity: 3 },
  { name: "shirt", price: 700, quantity: 5 },
  { name: "pant", price: 1200, quantity: 1 },
];

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
       total  = total + thisProductCost;
    }

    return total;
}


const shoppingCost = cartTotal(products);
console.log("Total Shopping Cost: ", shoppingCost, "TK");
