var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price: function () {
    var total = 0;
    for (var key in this) {
      if (typeof this[key] === "string") {
        total += parseInt(this[key]);
      }
    }
    return total + " грн";
  },

  minPrice: function () {
    var min = Infinity;
    for (var key in this) {
      if (typeof this[key] === "string") {
        var currentPrice = parseInt(this[key]);
        if (currentPrice < min) {
          min = currentPrice;
        }
      }
    }
    return min + " грн";
  },

  maxPrice: function () {
    var max = 0;
    for (var key in this) {
      if (typeof this[key] === "string") {
        var currentPrice = parseInt(this[key]);
        if (currentPrice > max) {
          max = currentPrice;
        }
      }
    }
    return max + " грн";
  }
};

services['Розбити скло'] = "200 грн";

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());