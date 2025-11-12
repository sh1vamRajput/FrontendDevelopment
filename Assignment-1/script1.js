/*
 * ============================================
 * BANKING INTEREST CALCULATOR
 * ============================================
 * This program calculates the final balance after a given
 * number of years based on account type and deposit amount.
 * It applies compound interest with bonus rates for large deposits.
 */

// ============================================
// INPUT VARIABLES
// ============================================
// Define the account details for interest calculation
let accountType = "fixed";  // Account type: "savings" or "fixed"
let amount = 150000;         // Initial deposit amount in rupees
let years = 5;               // Investment period in years

console.log("===== BANKING INTEREST CALCULATOR =====");
console.log("\n--- Account Details ---");
console.log(`Account Type: ${accountType.charAt(0).toUpperCase() + accountType.slice(1)}`);
console.log(`Initial Deposit: ₹${amount.toLocaleString('en-IN')}`);
console.log(`Investment Period: ${years} year(s)`);

// ============================================
// INTEREST RATE DETERMINATION
// ============================================
/*
 * Interest rates vary based on account type:
 * - Savings account: 4% annual interest
 * - Fixed deposit: 6.5% annual interest
 * - Bonus: +1% for deposits above ₹1,00,000
 */

// Initialize the base interest rate
let interestRate = 0;

// Determine base interest rate based on account type
if (accountType.toLowerCase() === "savings") {
    interestRate = 4;  // 4% for savings account
    console.log("\n💰 Account Type: Savings");
    console.log(`Base Interest Rate: ${interestRate}%`);
} else if (accountType.toLowerCase() === "fixed") {
    interestRate = 6.5;  // 6.5% for fixed deposit
    console.log("\n💎 Account Type: Fixed Deposit");
    console.log(`Base Interest Rate: ${interestRate}%`);
} else {
    // Handle invalid account type
    console.log("\n❌ Error: Invalid account type. Use 'savings' or 'fixed'.");
    interestRate = 0;  // Set rate to 0 to prevent calculation errors
}

// ============================================
// BONUS INTEREST APPLICATION
// ============================================
/*
 * Check if the deposit qualifies for bonus interest
 * Deposits above ₹1,00,000 receive an additional 1% interest
 */

// Check if amount exceeds the bonus threshold
if (amount > 100000) {
    interestRate += 1;  // Add 1% bonus interest
    console.log("\n🎉 Bonus Applied: Deposit exceeds ₹1,00,000");
    console.log(`Bonus Interest: +1%`);
}

// Display the final interest rate being applied
console.log(`\n📊 Final Interest Rate: ${interestRate}%`);

// ============================================
// COMPOUND INTEREST CALCULATION
// ============================================
/*
 * Calculate final balance using compound interest formula:
 * Total = Principal × (1 + rate/100)^years
 * 
 * This formula applies interest on both the principal and
 * the accumulated interest from previous periods.
 */

// Apply the compound interest formula
let totalBalance = amount * Math.pow((1 + interestRate / 100), years);

// Round the result to 2 decimal places for currency precision
totalBalance = Math.round(totalBalance * 100) / 100;

// Calculate the total interest earned (difference between final and initial)
let interestEarned = totalBalance - amount;
interestEarned = Math.round(interestEarned * 100) / 100;

// ============================================
// OUTPUT RESULTS
// ============================================
// Display the calculation results in a formatted manner
console.log("\n===== CALCULATION RESULTS =====");
console.log(`\n💵 Initial Deposit: ₹${amount.toLocaleString('en-IN')}`);
console.log(`📈 Interest Earned: ₹${interestEarned.toLocaleString('en-IN')}`);
console.log(`\n🏦 Final Balance After ${years} Year(s): ₹${totalBalance.toLocaleString('en-IN')}`);
console.log("\n====================================");

// ============================================
// DETAILED BREAKDOWN (YEAR-BY-YEAR)
// ============================================
/*
 * Show how the balance grows each year
 * This helps visualize the compound interest effect
 */

console.log("\n--- Year-by-Year Breakdown ---");
let currentBalance = amount;

for (let year = 1; year <= years; year++) {
    // Calculate balance at the end of each year
    currentBalance = currentBalance * (1 + interestRate / 100);
    let yearEndBalance = Math.round(currentBalance * 100) / 100;
    
    console.log(`Year ${year}: ₹${yearEndBalance.toLocaleString('en-IN')}`);
}

// ============================================
// TEST CASES FOR VERIFICATION
// ============================================
/*
 * Different scenarios to verify the calculation logic
 * Uncomment to test various combinations
 */

console.log("\n\n--- Test Case Scenarios ---");

// Test Case 1: Savings account, amount ≤ ₹1,00,000, 3 years
console.log("\nTest 1: Savings, ₹50,000, 3 years");
console.log("Expected Rate: 4% | No bonus");
let test1 = 50000 * Math.pow((1 + 4/100), 3);
console.log(`Final Balance: ₹${Math.round(test1 * 100) / 100}`);

// Test Case 2: Fixed deposit, amount > ₹1,00,000, 5 years
console.log("\nTest 2: Fixed, ₹2,00,000, 5 years");
console.log("Expected Rate: 6.5% + 1% = 7.5% | With bonus");
let test2 = 200000 * Math.pow((1 + 7.5/100), 5);
console.log(`Final Balance: ₹${Math.round(test2 * 100) / 100}`);

// Test Case 3: Savings, exactly ₹1,00,000, 10 years
console.log("\nTest 3: Savings, ₹1,00,000, 10 years");
console.log("Expected Rate: 4% | No bonus (not more than ₹1,00,000)");
let test3 = 100000 * Math.pow((1 + 4/100), 10);
console.log(`Final Balance: ₹${Math.round(test3 * 100) / 100}`);

// Test Case 4: Fixed, ₹1,50,000, 1 year
console.log("\nTest 4: Fixed, ₹1,50,000, 1 year");
console.log("Expected Rate: 6.5% + 1% = 7.5% | With bonus");
let test4 = 150000 * Math.pow((1 + 7.5/100), 1);
console.log(`Final Balance: ₹${Math.round(test4 * 100) / 100}`);
