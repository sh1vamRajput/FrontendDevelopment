/*
 * ============================================
 * EMPLOYEE BONUS DISTRIBUTION SYSTEM
 * ============================================
 * This program calculates annual bonuses for employees
 * based on their performance rating, years of experience,
 * and base salary. It applies bonus caps where necessary.
 */

// ============================================
// INPUT VARIABLES - EMPLOYEE DATA
// ============================================
/*
 * Employee information used for bonus calculation
 * Modify these values to test different scenarios
 */
let baseSalary = 120000;        // Employee's base annual salary in rupees (₹)
let performanceRating = 4;      // Performance rating (1-5 scale)
let experienceYears = 7;        // Years of experience with the company

console.log("===== 💼 EMPLOYEE BONUS DISTRIBUTION 💼 =====");
console.log("\n--- Employee Information ---");
console.log(`👤 Base Salary: ₹${baseSalary.toLocaleString('en-IN')}`);
console.log(`⭐ Performance Rating: ${performanceRating}/5`);
console.log(`📅 Years of Experience: ${experienceYears} years`);

// ============================================
// PERFORMANCE-BASED BONUS CALCULATION
// ============================================
/*
 * Calculate base bonus percentage based on performance rating:
 * Rating 5 → 20% bonus
 * Rating 4 → 15% bonus
 * Rating 3 → 10% bonus
 * Rating < 3 → 0% bonus (no bonus)
 */

let bonusPercentage = 0;  // Initialize bonus percentage

console.log("\n--- Performance-Based Bonus Calculation ---");

// Determine bonus percentage using if-else ladder
if (performanceRating === 5) {
    bonusPercentage = 20;
    console.log(`🌟 Excellent Performance (Rating 5)`);
    console.log(`   Base Bonus: ${bonusPercentage}%`);
} else if (performanceRating === 4) {
    bonusPercentage = 15;
    console.log(`⭐ Good Performance (Rating 4)`);
    console.log(`   Base Bonus: ${bonusPercentage}%`);
} else if (performanceRating === 3) {
    bonusPercentage = 10;
    console.log(`✓ Satisfactory Performance (Rating 3)`);
    console.log(`   Base Bonus: ${bonusPercentage}%`);
} else {
    bonusPercentage = 0;
    console.log(`❌ Below Expectations (Rating < 3)`);
    console.log(`   Base Bonus: ${bonusPercentage}% (No bonus awarded)`);
}

// ============================================
// EXPERIENCE BONUS
// ============================================
/*
 * Add extra bonus for experienced employees
 * If experience > 5 years, add an additional 5% bonus
 * This rewards loyalty and expertise
 */

let experienceBonus = 0;  // Initialize experience bonus percentage

console.log("\n--- Experience Bonus Calculation ---");

// Check if employee qualifies for experience bonus
if (experienceYears > 5) {
    experienceBonus = 5;
    console.log(`🎓 Experienced Employee (${experienceYears} years)`);
    console.log(`   Experience Bonus: +${experienceBonus}%`);
    console.log("   (Awarded for > 5 years of service)");
} else {
    console.log(`📋 Experience: ${experienceYears} years`);
    console.log("   Experience Bonus: 0%");
    console.log(`   (Bonus applies after 5 years of service)`);
    
    // Show years remaining until experience bonus
    let yearsRemaining = 6 - experienceYears;
    if (yearsRemaining > 0) {
        console.log(`   ${yearsRemaining} more year(s) needed for experience bonus`);
    }
}

// ============================================
// TOTAL BONUS PERCENTAGE
// ============================================
/*
 * Combine performance bonus and experience bonus
 * Total bonus % = Performance bonus % + Experience bonus %
 */

let totalBonusPercentage = bonusPercentage + experienceBonus;

console.log("\n--- Total Bonus Percentage ---");
console.log(`📊 Performance Bonus: ${bonusPercentage}%`);
console.log(`📊 Experience Bonus: ${experienceBonus}%`);
console.log(`📊 Total Bonus Percentage: ${totalBonusPercentage}%`);

// ============================================
// CALCULATE BONUS AMOUNT
// ============================================
/*
 * Calculate the actual bonus amount in rupees
 * Calculated Bonus = (Base Salary × Total Bonus Percentage) / 100
 */

let calculatedBonus = (baseSalary * totalBonusPercentage) / 100;

// Round to 2 decimal places
calculatedBonus = Math.round(calculatedBonus * 100) / 100;

console.log("\n💰 Calculated Bonus: ₹" + calculatedBonus.toLocaleString('en-IN'));

// ============================================
// APPLY BONUS CAP
// ============================================
/*
 * For high earners (base salary > ₹1,00,000), cap the bonus at ₹25,000
 * This ensures fair distribution across salary ranges
 */

let finalBonus = calculatedBonus;  // Initialize with calculated bonus
let bonusCapped = false;            // Flag to track if cap was applied

console.log("\n--- Bonus Cap Application ---");

// Check if salary exceeds cap threshold
if (baseSalary > 100000) {
    console.log(`⚠️ High Salary Detected: ₹${baseSalary.toLocaleString('en-IN')} (> ₹1,00,000)`);
    console.log("   Bonus cap of ₹25,000 applies");
    
    // Apply cap if calculated bonus exceeds maximum
    if (calculatedBonus > 25000) {
        finalBonus = 25000;
        bonusCapped = true;
        
        console.log(`\n🔒 Bonus Capped!`);
        console.log(`   Calculated Bonus: ₹${calculatedBonus.toLocaleString('en-IN')}`);
        console.log(`   Final Bonus (Capped): ₹${finalBonus.toLocaleString('en-IN')}`);
        
        // Show how much was reduced due to cap
        let reductionAmount = calculatedBonus - finalBonus;
        reductionAmount = Math.round(reductionAmount * 100) / 100;
        console.log(`   Reduction: ₹${reductionAmount.toLocaleString('en-IN')}`);
    } else {
        console.log(`✅ Calculated bonus (₹${calculatedBonus.toLocaleString('en-IN')}) is within cap limit`);
        console.log("   No capping required");
    }
} else {
    console.log(`✅ Salary ≤ ₹1,00,000 - No bonus cap applies`);
    console.log(`   Full calculated bonus will be awarded`);
}

// ============================================
// CALCULATE TOTAL SALARY
// ============================================
/*
 * Calculate the total annual compensation
 * Total Salary = Base Salary + Final Bonus
 */

let totalSalary = baseSalary + finalBonus;

// Round to 2 decimal places
totalSalary = Math.round(totalSalary * 100) / 100;

console.log("\n--- Total Compensation ---");
console.log(`💵 Base Salary: ₹${baseSalary.toLocaleString('en-IN')}`);
console.log(`🎁 Final Bonus: ₹${finalBonus.toLocaleString('en-IN')}`);
console.log(`💰 Total Salary: ₹${totalSalary.toLocaleString('en-IN')}`);

// ============================================
// COMPREHENSIVE BONUS SUMMARY
// ============================================
/*
 * Display complete bonus calculation details
 * in a formatted, easy-to-read summary
 */

console.log("\n\n╔════════════════════════════════════════╗");
console.log("║      BONUS CALCULATION SUMMARY         ║");
console.log("╚════════════════════════════════════════╝");

console.log("\n📋 EMPLOYEE DETAILS:");
console.log(`   Base Salary: ₹${baseSalary.toLocaleString('en-IN')}`);
console.log(`   Performance Rating: ${performanceRating}/5`);
console.log(`   Experience: ${experienceYears} years`);

console.log("\n📊 BONUS BREAKDOWN:");
console.log(`   Performance Bonus: ${bonusPercentage}%`);
console.log(`   Experience Bonus: ${experienceBonus}%`);
console.log(`   Total Bonus %: ${totalBonusPercentage}%`);

console.log("\n💰 CALCULATED BONUS:");
console.log(`   ₹${calculatedBonus.toLocaleString('en-IN')}`);

console.log("\n🎁 FINAL BONUS:");
if (bonusCapped) {
    console.log(`   ₹${finalBonus.toLocaleString('en-IN')} (⚠️ CAPPED)`);
} else {
    console.log(`   ₹${finalBonus.toLocaleString('en-IN')} (✅ NO CAP)`);
}

console.log("\n💵 TOTAL ANNUAL SALARY:");
console.log(`   ₹${totalSalary.toLocaleString('en-IN')}`);

// Calculate salary increase percentage
let salaryIncrease = ((finalBonus / baseSalary) * 100);
salaryIncrease = Math.round(salaryIncrease * 100) / 100;
console.log(`   (${salaryIncrease}% increase)`);

console.log("\n════════════════════════════════════════\n");

// ============================================
// BONUS INSIGHTS
// ============================================
/*
 * Provide additional insights about the bonus calculation
 */

console.log("--- 📈 Bonus Insights ---");

// Show potential bonus if performance improves
if (performanceRating < 5) {
    let nextRatingBonus = performanceRating === 4 ? 20 : (performanceRating === 3 ? 15 : 10);
    let potentialBonus = (baseSalary * (nextRatingBonus + experienceBonus)) / 100;
    potentialBonus = Math.round(potentialBonus * 100) / 100;
    
    // Apply cap if necessary
    if (baseSalary > 100000 && potentialBonus > 25000) {
        potentialBonus = 25000;
    }
    
    console.log(`💡 Potential bonus at next rating level: ₹${potentialBonus.toLocaleString('en-IN')}`);
}

// Show experience bonus eligibility
if (experienceYears <= 5) {
    let futureBonus = (baseSalary * (bonusPercentage + 5)) / 100;
    futureBonus = Math.round(futureBonus * 100) / 100;
    
    // Apply cap if necessary
    if (baseSalary > 100000 && futureBonus > 25000) {
        futureBonus = 25000;
    }
    
    console.log(`🎓 Bonus with experience > 5 years: ₹${futureBonus.toLocaleString('en-IN')}`);
}

// ============================================
// TEST CASES FOR VERIFICATION
// ============================================
/*
 * Function to test various employee scenarios
 * Demonstrates how bonuses are calculated for different cases
 */

console.log("\n\n--- 🧪 Test Case Scenarios ---");

// Helper function to calculate employee bonus
function calculateBonus(salary, rating, years, testName) {
    console.log(`\n${testName}:`);
    console.log(`Salary: ₹${salary.toLocaleString('en-IN')} | Rating: ${rating}/5 | Experience: ${years} years`);
    
    // Determine performance bonus
    let perfBonus = 0;
    if (rating === 5) perfBonus = 20;
    else if (rating === 4) perfBonus = 15;
    else if (rating === 3) perfBonus = 10;
    
    // Determine experience bonus
    let expBonus = years > 5 ? 5 : 0;
    
    // Calculate total bonus %
    let totalPercent = perfBonus + expBonus;
    
    // Calculate bonus amount
    let calcBonus = Math.round((salary * totalPercent / 100) * 100) / 100;
    
    // Apply cap if needed
    let final = calcBonus;
    let capped = false;
    if (salary > 100000 && calcBonus > 25000) {
        final = 25000;
        capped = true;
    }
    
    // Calculate total salary
    let total = salary + final;
    
    console.log(`Bonus: ${totalPercent}% (Perf: ${perfBonus}% + Exp: ${expBonus}%)`);
    console.log(`Calculated: ₹${calcBonus.toLocaleString('en-IN')} | Final: ₹${final.toLocaleString('en-IN')} ${capped ? '(CAPPED)' : ''}`);
    console.log(`Total Salary: ₹${total.toLocaleString('en-IN')}`);
}

// Test Case 1: Low salary, excellent performance, experienced
calculateBonus(80000, 5, 8, "Test 1: Below Cap Threshold");

// Test Case 2: High salary, excellent performance, experienced (cap applies)
calculateBonus(150000, 5, 10, "Test 2: High Salary (Cap Applied)");

// Test Case 3: Poor performance, no bonus
calculateBonus(90000, 2, 3, "Test 3: Below Standard Performance");

// Test Case 4: Average performance, new employee
calculateBonus(60000, 3, 2, "Test 4: New Employee, Average");

// Test Case 5: Good performance, exactly at cap threshold
calculateBonus(100000, 4, 6, "Test 5: At Cap Threshold");

// Test Case 6: Excellent performance, exactly 5 years (no exp bonus)
calculateBonus(120000, 5, 5, "Test 6: Exactly 5 Years Experience");

// Test Case 7: Maximum everything
calculateBonus(200000, 5, 15, "Test 7: Maximum Everything");
