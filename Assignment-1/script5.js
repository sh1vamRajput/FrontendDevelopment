/*
 * ============================================
 * RESTAURANT BILLING WITH TIPS
 * ============================================
 * This program calculates the final restaurant bill including
 * GST, service tax (for dine-in), and recommended tips for
 * high-value orders. It provides a detailed billing summary.
 */

// ============================================
// INPUT VARIABLES - BILL DETAILS
// ============================================
/*
 * Customer order information
 * Modify these values to test different billing scenarios
 */
let baseCost = 2500;        // Base food cost in rupees (₹)
let isDiningIn = true;      // Dining type: true = Dine-in, false = Takeaway

console.log("===== 🍽️ RESTAURANT BILLING SYSTEM 🍽️ =====");
console.log("\n--- Order Details ---");
console.log(`🍕 Base Food Cost: ₹${baseCost.toFixed(2)}`);
console.log(`🪑 Dining Type: ${isDiningIn ? 'Dine-In' : 'Takeaway'}`);

// ============================================
// TAX CALCULATION - GST
// ============================================
/*
 * GST (Goods and Services Tax) Calculation
 * GST is a mandatory tax applied to all food orders
 * Rate: 5% of base cost
 */

// Calculate GST amount (5% of base cost)
let gstRate = 5;  // GST percentage
let gstAmount = (baseCost * gstRate) / 100;

// Round to 2 decimal places for currency precision
gstAmount = Math.round(gstAmount * 100) / 100;

console.log("\n--- Tax Calculation ---");
console.log(`💰 GST (${gstRate}%): ₹${gstAmount.toFixed(2)}`);

// ============================================
// SERVICE TAX CALCULATION
// ============================================
/*
 * Service Tax applies only for dine-in customers
 * This covers the cost of table service, ambiance, etc.
 * Rate: 10% of base cost (only if dining in)
 */

let serviceTaxRate = 10;  // Service tax percentage
let serviceTaxAmount = 0; // Initialize to 0 (default for takeaway)

// Check if customer is dining in
if (isDiningIn) {
    // Calculate service tax (10% of base cost)
    serviceTaxAmount = (baseCost * serviceTaxRate) / 100;
    
    // Round to 2 decimal places
    serviceTaxAmount = Math.round(serviceTaxAmount * 100) / 100;
    
    console.log(`🛎️ Service Tax (${serviceTaxRate}%): ₹${serviceTaxAmount.toFixed(2)}`);
    console.log("   (Applied for dine-in service)");
} else {
    console.log(`🛎️ Service Tax: ₹0.00`);
    console.log("   (Not applicable for takeaway)");
}

// ============================================
// CALCULATE BILL BEFORE TIP
// ============================================
/*
 * Calculate the subtotal including all taxes
 * This amount is used to determine if tip should be recommended
 */

// Sum: Base cost + GST + Service tax
let billBeforeTip = baseCost + gstAmount + serviceTaxAmount;

// Round to 2 decimal places
billBeforeTip = Math.round(billBeforeTip * 100) / 100;

console.log(`\n📊 Subtotal (Before Tip): ₹${billBeforeTip.toFixed(2)}`);

// ============================================
// TIP CALCULATION
// ============================================
/*
 * Recommended tip calculation
 * If total bill exceeds ₹2000, recommend an 8% tip
 * This is a suggested gratuity for quality service
 */

let tipRate = 8;        // Tip percentage
let tipAmount = 0;      // Initialize tip to 0

// Check if bill qualifies for recommended tip
if (billBeforeTip > 2000) {
    // Calculate recommended tip (8% of bill before tip)
    tipAmount = (billBeforeTip * tipRate) / 100;
    
    // Round to 2 decimal places
    tipAmount = Math.round(tipAmount * 100) / 100;
    
    console.log("\n--- Tip Recommendation ---");
    console.log(`💝 Bill exceeds ₹2000`);
    console.log(`💡 Recommended Tip (${tipRate}%): ₹${tipAmount.toFixed(2)}`);
    console.log("   (Thank you for your generosity!)");
} else {
    console.log("\n--- Tip Recommendation ---");
    console.log(`💝 Recommended Tip: ₹0.00`);
    console.log(`   (Bill under ₹2000 - tip not suggested)`);
    
    // Calculate how much more needed for tip recommendation
    let amountNeeded = 2001 - billBeforeTip;
    amountNeeded = Math.round(amountNeeded * 100) / 100;
    console.log(`   Tip suggested for bills above ₹2000`);
}

// ============================================
// FINAL TOTAL CALCULATION
// ============================================
/*
 * Calculate the grand total by adding all components:
 * Base cost + GST + Service tax + Tip
 */

// Sum all amounts
let finalTotal = baseCost + gstAmount + serviceTaxAmount + tipAmount;

// Round to 2 decimal places for final amount
finalTotal = Math.round(finalTotal * 100) / 100;

// ============================================
// COMPREHENSIVE BILLING SUMMARY
// ============================================
/*
 * Display a detailed, formatted bill showing all charges
 * Similar to an actual restaurant receipt
 */

console.log("\n\n╔════════════════════════════════════════╗");
console.log("║        RESTAURANT BILL SUMMARY         ║");
console.log("╚════════════════════════════════════════╝");

console.log("\n📋 ITEMIZED CHARGES:");
console.log("─────────────────────────────────────────");

// 1. Base amount
console.log(`\n1️⃣ Base Food Cost`);
console.log(`   Amount: ₹${baseCost.toFixed(2)}`);

// 2. Tax details
console.log(`\n2️⃣ Tax Details`);
console.log(`   GST (${gstRate}%): ₹${gstAmount.toFixed(2)}`);
console.log(`   Service Tax (${isDiningIn ? serviceTaxRate : 0}%): ₹${serviceTaxAmount.toFixed(2)}`);

// Calculate total tax
let totalTax = gstAmount + serviceTaxAmount;
totalTax = Math.round(totalTax * 100) / 100;
console.log(`   Total Tax: ₹${totalTax.toFixed(2)}`);

// 3. Tip amount
console.log(`\n3️⃣ Tip Amount`);
if (tipAmount > 0) {
    console.log(`   Recommended Tip (${tipRate}%): ₹${tipAmount.toFixed(2)}`);
} else {
    console.log(`   Tip: ₹${tipAmount.toFixed(2)}`);
}

// 4. Final total
console.log(`\n─────────────────────────────────────────`);
console.log(`4️⃣ FINAL TOTAL: ₹${finalTotal.toFixed(2)}`);
console.log(`─────────────────────────────────────────`);

// ============================================
// PAYMENT BREAKDOWN
// ============================================
/*
 * Show what percentage each component contributes
 * to the final bill
 */

console.log("\n📊 PAYMENT BREAKDOWN:");

// Calculate percentages
let basePercentage = (baseCost / finalTotal) * 100;
let taxPercentage = (totalTax / finalTotal) * 100;
let tipPercentage = (tipAmount / finalTotal) * 100;

// Round percentages
basePercentage = Math.round(basePercentage * 100) / 100;
taxPercentage = Math.round(taxPercentage * 100) / 100;
tipPercentage = Math.round(tipPercentage * 100) / 100;

console.log(`   Food Cost: ${basePercentage}%`);
console.log(`   Taxes: ${taxPercentage}%`);
console.log(`   Tip: ${tipPercentage}%`);

// ============================================
// DINING INFORMATION
// ============================================
console.log("\n🏪 DINING INFORMATION:");
console.log(`   Type: ${isDiningIn ? '🪑 Dine-In' : '🥡 Takeaway'}`);
console.log(`   Service Tax: ${isDiningIn ? 'Applied ✅' : 'Not Applied ❌'}`);

// ============================================
// THANK YOU MESSAGE
// ============================================
console.log("\n╔════════════════════════════════════════╗");
console.log("║     Thank you for dining with us!      ║");
console.log("║        Please visit us again! 😊       ║");
console.log("╚════════════════════════════════════════╝\n");

// ============================================
// TEST CASES FOR VERIFICATION
// ============================================
/*
 * Function to test various billing scenarios
 * Demonstrates how bills are calculated for different situations
 */

console.log("\n--- 🧪 Test Case Scenarios ---");

// Helper function to calculate restaurant bill
function calculateBill(base, dineIn, testName) {
    console.log(`\n${testName}:`);
    console.log(`Base: ₹${base} | Type: ${dineIn ? 'Dine-In' : 'Takeaway'}`);
    
    // Calculate GST (5%)
    let gst = Math.round((base * 5 / 100) * 100) / 100;
    
    // Calculate Service Tax (10% only if dine-in)
    let serviceTax = dineIn ? Math.round((base * 10 / 100) * 100) / 100 : 0;
    
    // Calculate subtotal
    let subtotal = Math.round((base + gst + serviceTax) * 100) / 100;
    
    // Calculate tip (8% if subtotal > 2000)
    let tip = subtotal > 2000 ? Math.round((subtotal * 8 / 100) * 100) / 100 : 0;
    
    // Calculate final total
    let total = Math.round((subtotal + tip) * 100) / 100;
    
    console.log(`GST: ₹${gst} | Service Tax: ₹${serviceTax} | Tip: ₹${tip}`);
    console.log(`Final Total: ₹${total}`);
}

// Test Case 1: Low bill, takeaway
calculateBill(500, false, "Test 1: Small Order, Takeaway");

// Test Case 2: Low bill, dine-in
calculateBill(800, true, "Test 2: Small Order, Dine-In");

// Test Case 3: High bill, takeaway with tip
calculateBill(2500, false, "Test 3: Large Order, Takeaway");

// Test Case 4: High bill, dine-in with tip
calculateBill(3000, true, "Test 4: Large Order, Dine-In");

// Test Case 5: Exactly at tip threshold
calculateBill(1800, false, "Test 5: Near Tip Threshold, Takeaway");

// Test Case 6: Just above tip threshold
calculateBill(1850, true, "Test 6: Just Above Tip Threshold, Dine-In");

// Test Case 7: Very high bill
calculateBill(5000, true, "Test 7: Premium Order, Dine-In");
