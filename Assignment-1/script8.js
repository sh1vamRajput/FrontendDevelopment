/*
 * ============================================
 * RANDOM COUPON GENERATOR
 * ============================================
 * This program generates random discount coupons for a
 * shopping platform. The discount value depends on a
 * randomly generated number, with bonus rewards for prime numbers.
 */

// ============================================
// GENERATE RANDOM COUPON NUMBER
// ============================================
/*
 * Generate a random number between 1 and 100 (inclusive)
 * 
 * Math.random() generates a decimal between 0 and 1 (exclusive)
 * Math.random() * 100 gives us 0 to 99.999...
 * Math.floor() rounds down to nearest integer (0 to 99)
 * Adding 1 gives us the range 1 to 100
 */

let couponNumber = Math.floor(Math.random() * 100) + 1;

console.log("===== 🎟️ RANDOM COUPON GENERATOR 🎟️ =====");
console.log("\n🎲 Generating your lucky coupon...");
console.log(`\n✨ Your Coupon Number: ${couponNumber}`);

// ============================================
// DETERMINE DISCOUNT BASED ON COUPON NUMBER
// ============================================
/*
 * Assign discount percentage based on coupon number ranges:
 * - 1 to 30: 10% discount
 * - 31 to 60: 20% discount
 * - 61 to 90: 30% discount
 * - 91 to 100: 50% Mega Offer (rare!)
 */

let discountPercentage = 0;  // Variable to store discount percentage
let rewardMessage = "";       // Variable to store reward message

console.log("\n--- Discount Determination ---");

// Use if-else ladder to check ranges and assign discount
if (couponNumber >= 1 && couponNumber <= 30) {
    discountPercentage = 10;
    rewardMessage = "You won a 10% discount";
    console.log("📊 Range: 1-30 (Common)");
    console.log("🎁 Reward: 10% Discount");
} else if (couponNumber >= 31 && couponNumber <= 60) {
    discountPercentage = 20;
    rewardMessage = "You won a 20% discount";
    console.log("📊 Range: 31-60 (Uncommon)");
    console.log("🎁 Reward: 20% Discount");
} else if (couponNumber >= 61 && couponNumber <= 90) {
    discountPercentage = 30;
    rewardMessage = "You won a 30% discount";
    console.log("📊 Range: 61-90 (Rare)");
    console.log("🎁 Reward: 30% Discount");
} else if (couponNumber >= 91 && couponNumber <= 100) {
    discountPercentage = 50;
    rewardMessage = "You won a 50% Mega Offer!";
    console.log("📊 Range: 91-100 (LEGENDARY!)");
    console.log("🎁 Reward: 50% MEGA OFFER!");
}

// ============================================
// PRIME NUMBER CHECK
// ============================================
/*
 * Check if the coupon number is a prime number
 * Prime numbers get a special bonus recognition
 * 
 * A prime number is a natural number greater than 1 that
 * has no positive divisors other than 1 and itself.
 */

console.log("\n--- Prime Number Bonus Check ---");

/**
 * Function to check if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} - True if prime, false otherwise
 */
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }
    
    // 2 is the only even prime number
    if (num === 2) {
        return true;
    }
    
    // Even numbers (except 2) are not prime
    if (num % 2 === 0) {
        return false;
    }
    
    // Check for divisors from 3 to square root of num
    // We only need to check up to sqrt(num) because if num has
    // a divisor greater than sqrt(num), it must also have a
    // corresponding divisor less than sqrt(num)
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;  // Found a divisor, not prime
        }
    }
    
    return true;  // No divisors found, it's prime
}

// Check if coupon number is prime
let isPrimeNumber = isPrime(couponNumber);
let primeBonus = false;  // Flag to track if prime bonus applies

if (isPrimeNumber) {
    primeBonus = true;
    console.log(`✨ ${couponNumber} is a PRIME NUMBER!`);
    console.log("🎊 Prime Number Bonus Applied!");
    console.log("   You receive extra loyalty points!");
} else {
    console.log(`${couponNumber} is not a prime number.`);
    console.log("   No prime bonus this time.");
}

// ============================================
// DISPLAY COUPON RESULTS
// ============================================
/*
 * Present the complete coupon information in a
 * visually appealing format
 */

console.log("\n\n╔════════════════════════════════════════╗");
console.log("║         YOUR COUPON REWARD!            ║");
console.log("╚════════════════════════════════════════╝");

console.log(`\n🎟️ Coupon Number: ${couponNumber}`);
console.log(`\n🎁 ${rewardMessage}`);

// Display discount percentage prominently
console.log(`\n💰 Discount: ${discountPercentage}% OFF`);

// Show prime bonus if applicable
if (primeBonus) {
    console.log("\n⭐ PRIME NUMBER BONUS APPLIED!");
    console.log("   +500 Loyalty Points added to your account");
}

console.log("\n════════════════════════════════════════");

// ============================================
// SAVINGS CALCULATOR
// ============================================
/*
 * Show potential savings on different purchase amounts
 * to help users understand the value of their coupon
 */

console.log("\n--- 💵 Potential Savings Calculator ---");
console.log("\nSee how much you can save with your coupon:");

// Sample purchase amounts
let sampleAmounts = [500, 1000, 2000, 5000];

// Calculate and display savings for each amount
for (let i = 0; i < sampleAmounts.length; i++) {
    let purchaseAmount = sampleAmounts[i];
    let savings = (purchaseAmount * discountPercentage) / 100;
    let finalPrice = purchaseAmount - savings;
    
    console.log(`\nOn ₹${purchaseAmount.toLocaleString('en-IN')} purchase:`);
    console.log(`   Discount: ₹${savings.toLocaleString('en-IN')}`);
    console.log(`   Final Price: ₹${finalPrice.toLocaleString('en-IN')}`);
}

// ============================================
// COUPON DETAILS & TERMS
// ============================================
console.log("\n\n--- 📋 Coupon Details ---");
console.log(`Coupon Code: LUCKY${couponNumber}`);
console.log(`Valid Until: 30 days from today`);
console.log(`Minimum Purchase: ₹${discountPercentage >= 30 ? 1000 : 500}`);
console.log(`Maximum Discount: ₹${discountPercentage * 100}`);

if (primeBonus) {
    console.log("\n🌟 Prime Bonus Details:");
    console.log("   +500 Loyalty Points");
    console.log("   Priority Customer Support");
    console.log("   Early Access to Sales");
}

// ============================================
// STATISTICAL INFORMATION
// ============================================
/*
 * Provide information about coupon rarity
 * to make users appreciate their luck!
 */

console.log("\n\n--- 📊 Coupon Rarity Statistics ---");

let rarity = "";
let probability = 0;

// Calculate probability based on range
if (discountPercentage === 10) {
    rarity = "Common";
    probability = 30;  // 30 out of 100
} else if (discountPercentage === 20) {
    rarity = "Uncommon";
    probability = 30;  // 30 out of 100
} else if (discountPercentage === 30) {
    rarity = "Rare";
    probability = 30;  // 30 out of 100
} else if (discountPercentage === 50) {
    rarity = "LEGENDARY";
    probability = 10;  // 10 out of 100
}

console.log(`Rarity Level: ${rarity}`);
console.log(`Probability: ${probability}% chance`);

// Count prime numbers in the range
let primeCount = 0;
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        primeCount++;
    }
}

console.log(`\nPrime Number Statistics:`);
console.log(`   Prime numbers between 1-100: ${primeCount}`);
console.log(`   Probability of prime: ${primeCount}%`);

if (isPrimeNumber) {
    console.log("   You got LUCKY with a prime number! 🍀");
}

// ============================================
// TEST MULTIPLE COUPONS
// ============================================
/*
 * Generate and test multiple coupons to see
 * the variety of possible outcomes
 */

console.log("\n\n--- 🎲 Sample Coupon Generations ---");
console.log("(Generating 5 random coupons for demonstration)\n");

// Generate 5 sample coupons
for (let i = 1; i <= 5; i++) {
    let testCoupon = Math.floor(Math.random() * 100) + 1;
    let testDiscount = 0;
    let testMessage = "";
    
    // Determine discount
    if (testCoupon <= 30) {
        testDiscount = 10;
        testMessage = "10% discount";
    } else if (testCoupon <= 60) {
        testDiscount = 20;
        testMessage = "20% discount";
    } else if (testCoupon <= 90) {
        testDiscount = 30;
        testMessage = "30% discount";
    } else {
        testDiscount = 50;
        testMessage = "50% Mega Offer!";
    }
    
    // Check if prime
    let testPrime = isPrime(testCoupon);
    
    console.log(`Sample ${i}: Number ${testCoupon} → ${testMessage}${testPrime ? " + PRIME BONUS ⭐" : ""}`);
}

console.log("\n════════════════════════════════════════");
console.log("       Thank you for shopping! 🛍️");
console.log("════════════════════════════════════════\n");

// ============================================
// EDUCATIONAL NOTE
// ============================================
console.log("📚 Fun Fact about Prime Numbers:");
console.log("The first 10 prime numbers are:");
console.log("2, 3, 5, 7, 11, 13, 17, 19, 23, 29");
console.log("\nPrime numbers have fascinated mathematicians");
console.log("for thousands of years!");
