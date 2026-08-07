function averageOrderValue(orders) {
  if (Array.isArray(orders) === false) {
    return "Invalid";
  }
  if (orders.length === 0) {
    return "Invalid";
  }
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    
    if (typeof orders[i] !== "number") {
      return "Invalid";
    }
    
    total = total + orders[i];
  }
  return total / orders.length;
}

const result = averageOrderValue([200, 400, 300, 100])
console.log(result)