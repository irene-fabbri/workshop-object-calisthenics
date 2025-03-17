function calculateItemTotal(item){
  let fullPrice = calculateItemTotal.price * item.quantity;
  let discount = item.discount ?? 0;
  return fullPrice - discount;
}

function calculateCartTotal(cart){
  let total = 0;
  for (item in cart){
    total += calculateItemTotal(item);
  }
  return total;
}