// Product constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method to apply discount
Product.prototype.applyDiscount = function(percent) {
    const discountAmount = (this.price * percent) / 100;
    const newPrice = this.price - discountAmount;
    return newPrice;
};

// Creating 3 products
const p1 = new Product("Laptop", 50000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Smartphone", 30000);

// Applying discounts
console.log("Final Price of Laptop:", p1.applyDiscount(10));       // 10% discount
console.log("Final Price of Headphones:", p2.applyDiscount(25));  // 25% discount
console.log("Final Price of Smartphone:", p3.applyDiscount(15));  // 15% discount
