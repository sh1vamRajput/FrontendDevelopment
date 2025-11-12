/*
 * ============================================
 * E-COMMERCE DELIVERY ESTIMATOR
 * ============================================
 * This program calculates the total cost and delivery time
 * for an e-commerce order based on order amount, premium
 * membership status, and delivery location.
 */

// ============================================
// INPUT VARIABLES
// ============================================
// Define the order details that will be used for calculations
let orderAmount = 450;      // Original order amount in rupees
let isPremium = false;       // Premium membership status (true/false)
let isRemote = true;         // Remote location flag (true/false)

console.log("===== E-COMMERCE DELIVERY ESTIMATOR =====");
console.log("\n--- Order Details ---");
console.log(`Order Amount: ₹${orderAmount}`);
console.log(`Premium Member: ${isPremium ? 'Yes' : 'No'}`);
console.log(`Remote Location: ${isRemote ? 'Yes' : 'No'}`);

// ============================================
// DELIVERY FEE CALCULATION
// ============================================
/*
 * Calculate delivery fee based on:
 * 1. Orders below ₹500 incur a ₹50 delivery fee
 * 2. Premium members get free delivery (fee waived)
 */

// Initialize delivery fee to 0 (assuming no fee initially)
let deliveryFee = 0;

// Check if delivery fee should be applied
// Logic: Fee applies if order is < 500 AND user is NOT premium
if (orderAmount < 500 && !isPremium) {
    deliveryFee = 50;
    console.log("\n⚠️ Order below ₹500 - Delivery fee applicable");
}

// If user is premium, delivery fee is waived regardless of order amount
if (isPremium) {
    deliveryFee = 0;
    console.log("\n✨ Premium member - Delivery fee waived!");
}

// Calculate total cost by adding order amount and delivery fee
let totalCost = orderAmount + deliveryFee;

// ============================================
// DELIVERY TIME CALCULATION
// ============================================
/*
 * Calculate estimated delivery time based on:
 * 1. Normal delivery: 3 days
 * 2. Remote locations: Add 2 extra days (total 5 days)
 */

// Start with base delivery time of 3 days
let deliveryTime = 3;

// Add 2 extra days if the location is remote
if (isRemote) {
    deliveryTime += 2;
    console.log("\n📍 Remote location detected - Extra 2 days added");
}

// ============================================
// OUTPUT RESULTS
// ============================================
// Display the final calculations to the console
console.log("\n===== DELIVERY ESTIMATE =====");
console.log(`\n💰 Total Cost: ₹${totalCost}`);
console.log(`   - Order Amount: ₹${orderAmount}`);
console.log(`   - Delivery Fee: ₹${deliveryFee}`);
console.log(`\n📦 Estimated Delivery Time: ${deliveryTime} days`);
console.log("\n=====================================");

// ============================================
// TEST CASES FOR VERIFICATION
// ============================================
/*
 * Below are different scenarios to test the logic:
 * Uncomment any scenario to test different conditions
 */

console.log("\n\n--- Additional Test Cases ---");

// Test Case 1: Order < 500, Not Premium, Not Remote
// Expected: Total = ₹450 + ₹50 = ₹500, Delivery = 3 days
console.log("\nTest 1: Low order, no premium, not remote");
console.log("Order: ₹450 | Premium: No | Remote: No");
console.log("Expected: ₹500 total, 3 days delivery");

// Test Case 2: Order < 500, Premium, Remote
// Expected: Total = ₹300 (no fee), Delivery = 5 days
console.log("\nTest 2: Low order, premium, remote");
console.log("Order: ₹300 | Premium: Yes | Remote: Yes");
console.log("Expected: ₹300 total, 5 days delivery");

// Test Case 3: Order > 500, Not Premium, Remote
// Expected: Total = ₹800 (no fee), Delivery = 5 days
console.log("\nTest 3: High order, no premium, remote");
console.log("Order: ₹800 | Premium: No | Remote: Yes");
console.log("Expected: ₹800 total, 5 days delivery");

// Test Case 4: Order > 500, Premium, Not Remote
// Expected: Total = ₹1000 (no fee), Delivery = 3 days
console.log("\nTest 4: High order, premium, not remote");
console.log("Order: ₹1000 | Premium: Yes | Remote: No");
console.log("Expected: ₹1000 total, 3 days delivery");
