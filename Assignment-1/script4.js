/*
 * ============================================
 * GAME REWARD SYSTEM
 * ============================================
 * This program calculates player rewards based on their
 * level, performance score, and mission completion status.
 * It assigns coins and ranks players accordingly.
 */

// ============================================
// INPUT VARIABLES - PLAYER DATA
// ============================================
/*
 * Player statistics that determine reward calculation
 * Modify these values to test different player scenarios
 */
let level = 15;                        // Player's current level (integer)
let performanceScore = 85;             // Performance score (0-100 range typically)
let missionsCompleted = true;          // All missions completed status (boolean)

console.log("===== 🎮 GAME REWARD SYSTEM 🎮 =====");
console.log("\n--- Player Statistics ---");
console.log(`👤 Player Level: ${level}`);
console.log(`⭐ Performance Score: ${performanceScore}`);
console.log(`🎯 All Missions Completed: ${missionsCompleted ? 'Yes ✅' : 'No ❌'}`);

// ============================================
// COIN CALCULATION - BASE FORMULA
// ============================================
/*
 * Calculate base coins earned using the formula:
 * coins = (level × 50) + (performanceScore × 10)
 * 
 * This formula rewards both:
 * - Level progression (50 coins per level)
 * - Performance quality (10 coins per performance point)
 */

// Calculate level-based coins
// Higher levels earn more coins (50 coins per level)
let levelCoins = level * 50;

// Calculate performance-based coins
// Better performance earns more coins (10 coins per performance point)
let performanceCoins = performanceScore * 10;

// Sum both components to get base coins
let coins = levelCoins + performanceCoins;

console.log("\n--- Coin Calculation Breakdown ---");
console.log(`💰 Level Coins: ${level} × 50 = ${levelCoins} coins`);
console.log(`⭐ Performance Coins: ${performanceScore} × 10 = ${performanceCoins} coins`);
console.log(`📊 Base Coins Earned: ${coins} coins`);

// ============================================
// MISSION COMPLETION BONUS
// ============================================
/*
 * If the player completed all missions, they receive
 * a special bonus: coins are DOUBLED!
 * 
 * This is a significant reward for completing all objectives
 */

// Check if all missions are completed
if (missionsCompleted) {
    // Store original coins for display purposes
    let originalCoins = coins;
    
    // Double the coins as a reward
    coins = coins * 2;
    
    console.log("\n🎉 MISSION COMPLETION BONUS ACTIVATED!");
    console.log(`   All missions completed successfully!`);
    console.log(`   Reward: Coins DOUBLED!`);
    console.log(`   ${originalCoins} coins × 2 = ${coins} coins`);
} else {
    console.log("\n📋 Mission Status: Not all missions completed");
    console.log("   Complete all missions to double your coins!");
}

// ============================================
// RANK ASSIGNMENT
// ============================================
/*
 * Assign player rank based on total coins earned:
 * - Coins > 1000 → Elite Rank (top tier)
 * - Coins ≤ 1000 → Regular Rank (standard tier)
 * 
 * Elite rank indicates exceptional performance
 */

let rank = "";  // Variable to store the assigned rank

// Determine rank based on coin threshold
if (coins > 1000) {
    rank = "Elite";
    console.log("\n🏆 RANK ASSIGNMENT: ELITE");
    console.log("   Congratulations! You've achieved Elite status!");
    console.log("   Total coins exceed 1000 threshold");
} else {
    rank = "Regular";
    console.log("\n🎖️ RANK ASSIGNMENT: REGULAR");
    console.log("   Current rank: Regular");
    
    // Calculate how many more coins needed for Elite
    let coinsNeeded = 1001 - coins;
    console.log(`   Need ${coinsNeeded} more coins to reach Elite rank`);
}

// ============================================
// FINAL REWARD SUMMARY
// ============================================
// Display complete player reward information
console.log("\n===== 🎁 FINAL REWARD SUMMARY 🎁 =====");
console.log("\n╔════════════════════════════════════╗");
console.log("║      PLAYER REWARD DETAILS         ║");
console.log("╚════════════════════════════════════╝");
console.log(`\n👤 Player Level:        ${level}`);
console.log(`⭐ Performance Score:   ${performanceScore}/100`);
console.log(`🎯 Missions Completed:  ${missionsCompleted ? 'Yes ✅' : 'No ❌'}`);
console.log(`\n💰 Total Coins Earned:  ${coins} coins`);
console.log(`🏆 Player Rank:         ${rank.toUpperCase()}`);

// Additional rank description
if (rank === "Elite") {
    console.log(`\n✨ Elite Perks Unlocked:`);
    console.log(`   • Exclusive items available`);
    console.log(`   • VIP access to special areas`);
    console.log(`   • Bonus XP multiplier active`);
} else {
    console.log(`\n📈 Keep playing to reach Elite rank!`);
    console.log(`   • Complete more missions`);
    console.log(`   • Improve your performance score`);
    console.log(`   • Level up your character`);
}

console.log("\n========================================");

// ============================================
// PERFORMANCE ANALYSIS
// ============================================
/*
 * Provide feedback on player performance
 * Help players understand their reward calculation
 */

console.log("\n--- 📊 Performance Analysis ---");

// Analyze level contribution
let levelPercentage = (levelCoins / (levelCoins + performanceCoins)) * 100;
levelPercentage = Math.round(levelPercentage * 100) / 100;
console.log(`Level Contribution: ${levelPercentage}% of base coins`);

// Analyze performance contribution
let performancePercentage = (performanceCoins / (levelCoins + performanceCoins)) * 100;
performancePercentage = Math.round(performancePercentage * 100) / 100;
console.log(`Performance Contribution: ${performancePercentage}% of base coins`);

// Provide improvement suggestions
console.log("\n💡 Tips for More Coins:");
if (level < 20) {
    console.log("   • Continue leveling up for more coins per level");
}
if (performanceScore < 90) {
    console.log("   • Improve your performance score for bonus coins");
}
if (!missionsCompleted) {
    console.log("   • Complete all missions to DOUBLE your coins!");
}
if (coins <= 1000) {
    console.log("   • Aim for 1000+ coins to achieve Elite rank");
}

// ============================================
// TEST CASES FOR VERIFICATION
// ============================================
/*
 * Function to test various player scenarios
 * Demonstrates how rewards are calculated for different situations
 */

console.log("\n\n--- 🧪 Test Case Scenarios ---");

// Helper function to calculate rewards for any player
function calculateRewards(lvl, perf, missions, testName) {
    console.log(`\n${testName}:`);
    console.log(`Level: ${lvl} | Performance: ${perf} | Missions: ${missions ? 'Yes' : 'No'}`);
    
    // Calculate base coins
    let baseCoins = (lvl * 50) + (perf * 10);
    
    // Apply mission bonus
    let totalCoins = missions ? baseCoins * 2 : baseCoins;
    
    // Determine rank
    let playerRank = totalCoins > 1000 ? "Elite" : "Regular";
    
    console.log(`Base Coins: ${baseCoins} | Final Coins: ${totalCoins} | Rank: ${playerRank}`);
}

// Test Case 1: Beginner player, no missions completed
calculateRewards(5, 40, false, "Test 1: Beginner Player");

// Test Case 2: Mid-level player with missions completed
calculateRewards(10, 70, true, "Test 2: Mid-Level with Missions");

// Test Case 3: High-level player, low performance, no missions
calculateRewards(20, 30, false, "Test 3: High Level, Low Performance");

// Test Case 4: Perfect performance, missions completed
calculateRewards(15, 100, true, "Test 4: Perfect Performance");

// Test Case 5: Just below Elite threshold
calculateRewards(8, 60, true, "Test 5: Near Elite Threshold");

// Test Case 6: Maximum level, high performance
calculateRewards(50, 95, true, "Test 6: Maximum Level Player");

// Test Case 7: Exactly at Elite threshold
calculateRewards(10, 50, true, "Test 7: Exactly 1000 Coins");
