"use strict";

/**
 * E-Commerce Product Manager
 * 
 * This module demonstrates:
 * - ES6 Class syntax
 * - Object-oriented programming principles
 * - Method implementation (discount, display)
 * - Array manipulation (filter, forEach)
 * - Encapsulation and data management
 */

// ============================================================================
// PRODUCT CLASS DEFINITION
// ============================================================================

/**
 * Product class represents an e-commerce product
 * Manages product data and provides methods for price manipulation and display
 */
class Product {
  /**
   * Constructor initializes a new product
   * @param {number} id - Unique product identifier
   * @param {string} name - Product name
   * @param {number} price - Product price (original)
   * @param {string} category - Product category
   */
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.originalPrice = price; // Store original price for reference
    this.category = category;
    this.discountApplied = 0; // Track total discount percentage applied
  }

  /**
   * Apply a discount to the product price
   * @param {number} percentage - Discount percentage (e.g., 10 for 10%)
   * @returns {object} - Object containing old price, new price, and discount amount
   */
  applyDiscount(percentage) {
    // Validate percentage input
    if (typeof percentage !== 'number' || percentage < 0 || percentage > 100) {
      console.error(`Invalid discount percentage: ${percentage}. Must be between 0 and 100.`);
      return null;
    }

    const oldPrice = this.price;
    const discountAmount = (this.price * percentage) / 100;
    const newPrice = this.price - discountAmount;

    // Update product price
    this.price = parseFloat(newPrice.toFixed(2)); // Round to 2 decimal places
    this.discountApplied += percentage;

    console.log(`✓ Discount applied to "${this.name}": ${percentage}% off`);
    console.log(`  Old Price: ₹${oldPrice.toFixed(2)} → New Price: ₹${this.price.toFixed(2)}`);
    console.log(`  You saved: ₹${discountAmount.toFixed(2)}\n`);

    return {
      oldPrice: oldPrice,
      newPrice: this.price,
      discountAmount: discountAmount,
      percentage: percentage
    };
  }

  /**
   * Display product details in a formatted string
   * @returns {string} - Formatted product information
   */
  displayDetails() {
    const border = "─".repeat(50);
    let details = `\n${border}\n`;
    details += `📦 PRODUCT DETAILS\n`;
    details += `${border}\n`;
    details += `ID:       ${this.id}\n`;
    details += `Name:     ${this.name}\n`;
    details += `Category: ${this.category}\n`;
    details += `Price:    ₹${this.price.toFixed(2)}`;
    
    // Show original price if discount was applied
    if (this.discountApplied > 0) {
      details += ` (Original: ₹${this.originalPrice.toFixed(2)})`;
      details += `\nDiscount: ${this.discountApplied}% OFF`;
      const savings = this.originalPrice - this.price;
      details += `\nSavings:  ₹${savings.toFixed(2)}`;
    }
    
    details += `\n${border}\n`;
    return details;
  }

  /**
   * Get a compact single-line display of product
   * @returns {string} - Compact product info
   */
  getCompactDisplay() {
    const priceDisplay = this.discountApplied > 0 
      ? `₹${this.price.toFixed(2)} (${this.discountApplied}% off)`
      : `₹${this.price.toFixed(2)}`;
    
    return `[ID: ${this.id}] ${this.name} - ${this.category} - ${priceDisplay}`;
  }

  /**
   * Check if product is premium (price > threshold)
   * @param {number} threshold - Price threshold
   * @returns {boolean}
   */
  isPremium(threshold = 1000) {
    return this.price > threshold;
  }

  /**
   * Get savings amount if discount was applied
   * @returns {number} - Amount saved
   */
  getSavings() {
    return this.originalPrice - this.price;
  }
}

// ============================================================================
// CREATE PRODUCT INVENTORY
// ============================================================================

console.log("═".repeat(80));
console.log("E-COMMERCE PRODUCT MANAGER");
console.log("═".repeat(80));

console.log("\n📋 INITIALIZING PRODUCT INVENTORY...\n");

// Create an array of products using the Product class
const products = [
  new Product(1, "Apple iPhone 15 Pro", 129900, "Electronics"),
  new Product(2, "Samsung 55\" 4K Smart TV", 54999, "Electronics"),
  new Product(3, "Sony WH-1000XM5 Headphones", 29990, "Electronics"),
  new Product(4, "Nike Air Jordan Sneakers", 12999, "Fashion"),
  new Product(5, "Levi's Denim Jacket", 3999, "Fashion"),
  new Product(6, "Wooden Coffee Table", 8999, "Furniture"),
  new Product(7, "Office Ergonomic Chair", 15999, "Furniture"),
  new Product(8, "Instant Pot Pressure Cooker", 7999, "Home & Kitchen"),
  new Product(9, "Dyson V15 Vacuum Cleaner", 54990, "Home Appliances"),
  new Product(10, "Canon EOS R6 Camera", 214999, "Electronics"),
  new Product(11, "Notebook Set (Pack of 5)", 299, "Stationery"),
  new Product(12, "Yoga Mat Premium", 1299, "Sports & Fitness")
];

console.log(`✓ Created ${products.length} products in inventory\n`);

// ============================================================================
// DISPLAY ALL PRODUCTS
// ============================================================================

console.log("═".repeat(80));
console.log("ALL PRODUCTS IN INVENTORY");
console.log("═".repeat(80));

products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.getCompactDisplay()}`);
});

// ============================================================================
// APPLY DISCOUNTS TO SELECT PRODUCTS
// ============================================================================

console.log("\n" + "═".repeat(80));
console.log("APPLYING DISCOUNTS TO SELECT PRODUCTS");
console.log("═".repeat(80) + "\n");

// Apply 10% discount to iPhone
products[0].applyDiscount(10);

// Apply 15% discount to Smart TV
products[1].applyDiscount(15);

// Apply 20% discount to Camera
products[9].applyDiscount(20);

// Apply 5% discount to Yoga Mat
products[11].applyDiscount(5);

// ============================================================================
// DISPLAY DETAILED VIEW OF SAMPLE PRODUCTS
// ============================================================================

console.log("═".repeat(80));
console.log("DETAILED VIEW - SAMPLE PRODUCTS");
console.log("═".repeat(80));

// Display details of first 3 products
console.log(products[0].displayDetails());
console.log(products[1].displayDetails());
console.log(products[9].displayDetails());

// ============================================================================
// FILTER PRODUCTS WITH PRICE > 1000
// ============================================================================

console.log("═".repeat(80));
console.log("PREMIUM PRODUCTS (Price > ₹1000)");
console.log("═".repeat(80) + "\n");

// Use filter method to get products with price > 1000
const premiumProducts = products.filter(product => product.price > 1000);

console.log(`Found ${premiumProducts.length} premium products:\n`);

// Display premium products with enhanced formatting
premiumProducts.forEach((product, index) => {
  console.log(`${index + 1}. ${product.getCompactDisplay()}`);
  
  // Show additional info for discounted items
  if (product.discountApplied > 0) {
    console.log(`   💰 Savings: ₹${product.getSavings().toFixed(2)}`);
  }
  console.log("");
});

// ============================================================================
// STATISTICS AND ANALYTICS
// ============================================================================

console.log("═".repeat(80));
console.log("INVENTORY STATISTICS");
console.log("═".repeat(80) + "\n");

// Calculate total inventory value
const totalValue = products.reduce((sum, product) => sum + product.price, 0);
const averagePrice = totalValue / products.length;

// Count products by category
const categoryCount = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

// Calculate total savings from discounts
const totalSavings = products.reduce((sum, product) => sum + product.getSavings(), 0);

// Find most expensive and cheapest products
const mostExpensive = products.reduce((max, product) => 
  product.price > max.price ? product : max
);

const cheapest = products.reduce((min, product) => 
  product.price < min.price ? product : min
);

// Display statistics
console.log(`Total Products:        ${products.length}`);
console.log(`Total Inventory Value: ₹${totalValue.toFixed(2)}`);
console.log(`Average Product Price: ₹${averagePrice.toFixed(2)}`);
console.log(`Total Savings:         ₹${totalSavings.toFixed(2)}`);
console.log(`Premium Products:      ${premiumProducts.length} (${((premiumProducts.length/products.length)*100).toFixed(1)}%)`);

console.log("\nProducts by Category:");
for (const [category, count] of Object.entries(categoryCount)) {
  console.log(`  ${category}: ${count} product${count > 1 ? 's' : ''}`);
}

console.log("\nPrice Range:");
console.log(`  Most Expensive: ${mostExpensive.name} (₹${mostExpensive.price.toFixed(2)})`);
console.log(`  Cheapest:       ${cheapest.name} (₹${cheapest.price.toFixed(2)})`);

// ============================================================================
// ADDITIONAL FILTERING EXAMPLES
// ============================================================================

console.log("\n" + "═".repeat(80));
console.log("ADDITIONAL FILTER EXAMPLES");
console.log("═".repeat(80) + "\n");

// Filter by category
const electronicsProducts = products.filter(product => product.category === "Electronics");
console.log(`Electronics Products (${electronicsProducts.length}):`);
electronicsProducts.forEach(product => {
  console.log(`  • ${product.name} - ₹${product.price.toFixed(2)}`);
});

// Filter products with discounts
const discountedProducts = products.filter(product => product.discountApplied > 0);
console.log(`\nDiscounted Products (${discountedProducts.length}):`);
discountedProducts.forEach(product => {
  console.log(`  • ${product.name} - ${product.discountApplied}% off (Save ₹${product.getSavings().toFixed(2)})`);
});

// Filter affordable products (price <= 10000)
const affordableProducts = products.filter(product => product.price <= 10000);
console.log(`\nAffordable Products (≤ ₹10,000) - ${affordableProducts.length}:`);
affordableProducts.forEach(product => {
  console.log(`  • ${product.getCompactDisplay()}`);
});

// ============================================================================
// FINAL SUMMARY
// ============================================================================

console.log("\n" + "═".repeat(80));
console.log("SESSION SUMMARY");
console.log("═".repeat(80) + "\n");

console.log("✓ Product class created with properties: id, name, price, category");
console.log("✓ Methods implemented: applyDiscount(), displayDetails(), getCompactDisplay()");
console.log("✓ Created array of " + products.length + " product objects");
console.log("✓ Applied discounts to " + discountedProducts.length + " products");
console.log("✓ Filtered and displayed " + premiumProducts.length + " premium products (price > ₹1000)");
console.log("✓ Generated comprehensive statistics and analytics");

console.log("\n" + "═".repeat(80));
console.log("E-COMMERCE PRODUCT MANAGER - COMPLETE");
console.log("═".repeat(80) + "\n");
