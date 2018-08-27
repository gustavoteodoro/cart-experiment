export function sumCartItemsValue(cart) {
  let total = 0;
  cart.map((item) => {
    total += (item.value * item.amount);
    return false;
  });
  return total;
}

export function sumCartItemsAmount(cart) {
  let total = 0;
  cart.map((item) => {
    total += item.amount;
    return false;
  });
  return total;
}

export function sumCartTaxes(cart) {
  const total = sumCartItemsValue(cart);
  if (total > 0) {
    return Number((total * 0.080678386432271).toFixed(2));
  }
  return 0;
}

export function sumCartTotal(cart) {
  const totalValue = sumCartItemsValue(cart);
  const taxes = sumCartTaxes(cart);
  return totalValue + taxes;
}
