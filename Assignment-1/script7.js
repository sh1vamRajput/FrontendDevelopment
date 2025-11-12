/*
 * ============================================
 * LIBRARY FINE CALCULATOR
 * ============================================
 * This program calculates total library fines for overdue
 * books based on delay duration. It applies progressive
 * fine rates and additional penalties for repeat offenders.
 */

// ============================================
// INPUT DATA - OVERDUE BOOKS
// ============================================
/*
 * Array containing delay days for each overdue book
 * Each element represents the number of days a book is late
 * Modify this array to test different scenarios
 */
let delayedBooks = [3, 8, 15, 2, 12];  // Days late for each book

// Optional: Book titles for better readability (parallel array)
let bookTitles = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Catcher in the Rye"
];

console.log("===== 📚 LIBRARY FINE CALCULATOR 📚 =====");
console.log("\n--- Overdue Books Information ---");
console.log(`Total Books Overdue: ${delayedBooks.length}`);

// Display each book with its delay
console.log("\n📖 Book Details:");
for (let i = 0; i < delayedBooks.length; i++) {
    console.log(`${i + 1}. ${bookTitles[i]}: ${delayedBooks[i]} day(s) late`);
}

// ============================================
// FINE CALCULATION LOGIC
// ============================================
/*
 * Function to calculate fine for a single book based on delay
 * Fine structure:
 * - 1-5 days: ₹10 per day
 * - 6-10 days: ₹20 per day
 * - 11+ days: ₹50 per day
 */
function calculateBookFine(daysLate) {
    let fine = 0;
    
    // Determine fine rate based on delay duration
    if (daysLate >= 1 && daysLate <= 5) {
        // Tier 1: Minimal delay (₹10/day)
        fine = daysLate * 10;
    } else if (daysLate >= 6 && daysLate <= 10) {
        // Tier 2: Moderate delay (₹20/day)
        fine = daysLate * 20;
    } else if (daysLate >= 11) {
        // Tier 3: Severe delay (₹50/day)
        fine = daysLate * 50;
    }
    
    return fine;
}

// ============================================
// CALCULATE INDIVIDUAL BOOK FINES
// ============================================
/*
 * Loop through all delayed books and calculate fine for each
 * Store individual fines in an array for detailed display
 */

let individualFines = [];  // Array to store fine for each book
let totalFineBeforePenalty = 0;  // Accumulator for total fine

console.log("\n--- Individual Book Fines ---");

// Process each overdue book
for (let i = 0; i < delayedBooks.length; i++) {
    let daysLate = delayedBooks[i];
    let bookFine = calculateBookFine(daysLate);
    
    // Store fine in array
    individualFines.push(bookFine);
    
    // Add to running total
    totalFineBeforePenalty += bookFine;
    
    // Determine fine tier for display
    let tier = "";
    let rate = 0;
    
    if (daysLate <= 5) {
        tier = "Tier 1 (1-5 days)";
        rate = 10;
    } else if (daysLate <= 10) {
        tier = "Tier 2 (6-10 days)";
        rate = 20;
    } else {
        tier = "Tier 3 (11+ days)";
        rate = 50;
    }
    
    // Display fine calculation for this book
    console.log(`\n📕 Book ${i + 1}: ${bookTitles[i]}`);
    console.log(`   Days Late: ${daysLate} days`);
    console.log(`   Fine Tier: ${tier}`);
    console.log(`   Calculation: ${daysLate} days × ₹${rate}/day = ₹${bookFine}`);
}

console.log(`\n💰 Subtotal (Before Penalty): ₹${totalFineBeforePenalty}`);

// ============================================
// REPEAT OFFENDER PENALTY
// ============================================
/*
 * Check if user is a repeat offender
 * If more than 3 books are delayed, apply ₹200 penalty
 * This encourages responsible borrowing behavior
 */

let repeatOffenderPenalty = 0;  // Initialize penalty
let numberOfDelayedBooks = delayedBooks.length;  // Count delayed books

console.log("\n--- Repeat Offender Check ---");
console.log(`Number of Delayed Books: ${numberOfDelayedBooks}`);

// Check if penalty threshold is exceeded
if (numberOfDelayedBooks > 3) {
    repeatOffenderPenalty = 200;
    console.log(`⚠️ REPEAT OFFENDER DETECTED!`);
    console.log(`   More than 3 books delayed (${numberOfDelayedBooks} books)`);
    console.log(`   Additional Penalty: ₹${repeatOffenderPenalty}`);
} else {
    console.log(`✅ No repeat offender penalty`);
    console.log(`   (Penalty applies only when > 3 books delayed)`);
    
    // Show how many more delayed books would trigger penalty
    let booksUntilPenalty = 4 - numberOfDelayedBooks;
    if (booksUntilPenalty > 0) {
        console.log(`   ${booksUntilPenalty} more delayed book(s) would trigger penalty`);
    }
}

// ============================================
// CALCULATE TOTAL FINE
// ============================================
/*
 * Calculate the grand total fine
 * Total = Sum of individual book fines + Repeat offender penalty
 */

let totalFine = totalFineBeforePenalty + repeatOffenderPenalty;

console.log("\n--- Final Calculation ---");
console.log(`Subtotal (Book Fines): ₹${totalFineBeforePenalty}`);
console.log(`Repeat Offender Penalty: ₹${repeatOffenderPenalty}`);
console.log(`═══════════════════════════════`);
console.log(`TOTAL FINE: ₹${totalFine}`);

// ============================================
// DETAILED FINE SUMMARY
// ============================================
/*
 * Display a comprehensive, formatted summary
 * Similar to an actual library fine statement
 */

console.log("\n\n╔════════════════════════════════════════╗");
console.log("║       LIBRARY FINE STATEMENT           ║");
console.log("╚════════════════════════════════════════╝");

console.log("\n📋 OVERDUE BOOKS SUMMARY:");
console.log("─────────────────────────────────────────");

// Loop through and display each book with its fine
for (let i = 0; i < delayedBooks.length; i++) {
    console.log(`\n${i + 1}. ${bookTitles[i]}`);
    console.log(`   Days Overdue: ${delayedBooks[i]} days`);
    console.log(`   Fine Amount: ₹${individualFines[i]}`);
}

console.log("\n─────────────────────────────────────────");
console.log("\n💵 FINE BREAKDOWN:");
console.log(`   Individual Book Fines: ₹${totalFineBeforePenalty}`);

if (repeatOffenderPenalty > 0) {
    console.log(`   Repeat Offender Penalty: ₹${repeatOffenderPenalty}`);
    console.log(`   (${numberOfDelayedBooks} books delayed - exceeds 3 book limit)`);
}

console.log("\n─────────────────────────────────────────");
console.log(`\n💰 TOTAL AMOUNT DUE: ₹${totalFine}`);
console.log("\n─────────────────────────────────────────");

// ============================================
// FINE ANALYSIS
// ============================================
/*
 * Provide insights about the fine calculation
 * Help user understand breakdown by tier
 */

console.log("\n📊 FINE ANALYSIS BY TIER:");

// Count books in each tier
let tier1Count = 0;  // 1-5 days
let tier2Count = 0;  // 6-10 days
let tier3Count = 0;  // 11+ days

let tier1Fine = 0;
let tier2Fine = 0;
let tier3Fine = 0;

// Categorize each book into tiers
for (let i = 0; i < delayedBooks.length; i++) {
    let days = delayedBooks[i];
    let fine = individualFines[i];
    
    if (days <= 5) {
        tier1Count++;
        tier1Fine += fine;
    } else if (days <= 10) {
        tier2Count++;
        tier2Fine += fine;
    } else {
        tier3Count++;
        tier3Fine += fine;
    }
}

// Display tier analysis
console.log(`\nTier 1 (1-5 days @ ₹10/day):`);
console.log(`   Books: ${tier1Count} | Fine: ₹${tier1Fine}`);

console.log(`\nTier 2 (6-10 days @ ₹20/day):`);
console.log(`   Books: ${tier2Count} | Fine: ₹${tier2Fine}`);

console.log(`\nTier 3 (11+ days @ ₹50/day):`);
console.log(`   Books: ${tier3Count} | Fine: ₹${tier3Fine}`);

// ============================================
// PAYMENT REMINDER
// ============================================
console.log("\n⚠️ PAYMENT REMINDER:");
console.log("   Please settle your outstanding dues promptly");
console.log("   to avoid account suspension.");
console.log("   Return books on time to prevent future fines.");

console.log("\n════════════════════════════════════════\n");

// ============================================
// STATISTICS
// ============================================
/*
 * Calculate and display useful statistics
 */

console.log("--- 📈 Statistics ---");

// Average delay per book
let totalDays = 0;
for (let i = 0; i < delayedBooks.length; i++) {
    totalDays += delayedBooks[i];
}
let averageDelay = totalDays / delayedBooks.length;
averageDelay = Math.round(averageDelay * 100) / 100;

console.log(`Average Delay per Book: ${averageDelay} days`);

// Average fine per book
let averageFine = totalFineBeforePenalty / delayedBooks.length;
averageFine = Math.round(averageFine * 100) / 100;

console.log(`Average Fine per Book: ₹${averageFine}`);

// Most expensive book fine
let maxFine = Math.max(...individualFines);
let maxFineIndex = individualFines.indexOf(maxFine);

console.log(`\nHighest Fine: ₹${maxFine}`);
console.log(`   Book: ${bookTitles[maxFineIndex]}`);
console.log(`   Delay: ${delayedBooks[maxFineIndex]} days`);

// Least expensive book fine
let minFine = Math.min(...individualFines);
let minFineIndex = individualFines.indexOf(minFine);

console.log(`\nLowest Fine: ₹${minFine}`);
console.log(`   Book: ${bookTitles[minFineIndex]}`);
console.log(`   Delay: ${delayedBooks[minFineIndex]} days`);

// ============================================
// TEST CASES FOR VERIFICATION
// ============================================
/*
 * Function to test various library fine scenarios
 * Demonstrates how fines are calculated for different cases
 */

console.log("\n\n--- 🧪 Test Case Scenarios ---");

// Helper function to calculate total library fine
function calculateLibraryFine(delays, testName) {
    console.log(`\n${testName}:`);
    console.log(`Delays: [${delays.join(", ")}] days`);
    console.log(`Number of books: ${delays.length}`);
    
    // Calculate individual fines
    let subtotal = 0;
    for (let i = 0; i < delays.length; i++) {
        let days = delays[i];
        let fine = 0;
        
        if (days <= 5) fine = days * 10;
        else if (days <= 10) fine = days * 20;
        else fine = days * 50;
        
        subtotal += fine;
    }
    
    // Check for repeat offender penalty
    let penalty = delays.length > 3 ? 200 : 0;
    let total = subtotal + penalty;
    
    console.log(`Subtotal: ₹${subtotal} | Penalty: ₹${penalty} | Total: ₹${total}`);
}

// Test Case 1: All books in Tier 1
calculateLibraryFine([2, 3, 5], "Test 1: All Minimal Delays");

// Test Case 2: Exactly 3 books (no penalty)
calculateLibraryFine([7, 12, 4], "Test 2: Exactly 3 Books");

// Test Case 3: 4 books (penalty triggered)
calculateLibraryFine([3, 6, 9, 15], "Test 3: 4 Books (Penalty)");

// Test Case 4: One book, severe delay
calculateLibraryFine([25], "Test 4: Single Book, Severe Delay");

// Test Case 5: Many books with mixed delays
calculateLibraryFine([1, 5, 8, 11, 20, 3], "Test 5: Many Books, Mixed");

// Test Case 6: All books severely delayed
calculateLibraryFine([15, 20, 25, 30], "Test 6: All Severe Delays");

// Test Case 7: Borderline cases
calculateLibraryFine([5, 6, 10, 11], "Test 7: Tier Boundaries");
