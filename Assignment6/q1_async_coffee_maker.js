"use strict";

/**
 * Q1: The Startup Morning - Async Coffee Maker
 * 
 * This file demonstrates:
 * - JavaScript Promises
 * - Asynchronous programming patterns
 * - Promise chaining with .then()
 * - Error handling with .catch()
 * - setTimeout for async simulation
 * - Random failure simulation
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  // Time delays for each step (in milliseconds)
  BOIL_WATER_TIME: 2000,      // 2 seconds
  BREW_COFFEE_TIME: 1500,     // 1.5 seconds
  POUR_COFFEE_TIME: 1000,     // 1 second
  
  // Failure probability (0.0 to 1.0)
  FAILURE_PROBABILITY: 0.2,   // 20% chance of failure at each step
  
  // Enable/disable random failures
  ENABLE_RANDOM_FAILURES: true
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Simulates a random failure based on probability
 * @param {string} stepName - Name of the step for error message
 * @returns {boolean} - True if failure should occur
 */
function shouldFail(stepName) {
  if (!CONFIG.ENABLE_RANDOM_FAILURES) {
    return false;
  }
  
  const randomValue = Math.random();
  const willFail = randomValue < CONFIG.FAILURE_PROBABILITY;
  
  if (willFail) {
    console.log(`   ⚠️  Random failure triggered! (${(randomValue * 100).toFixed(1)}% < ${(CONFIG.FAILURE_PROBABILITY * 100)}%)`);
  }
  
  return willFail;
}

/**
 * Gets current timestamp for logging
 * @returns {string} - Formatted timestamp
 */
function getTimestamp() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    fractionalSecondDigits: 3
  });
}

/**
 * Logs a message with timestamp and emoji
 * @param {string} emoji - Emoji to display
 * @param {string} message - Message to log
 */
function logWithTime(emoji, message) {
  console.log(`[${getTimestamp()}] ${emoji} ${message}`);
}

// ============================================================================
// COFFEE MAKING STEPS (PROMISE-BASED FUNCTIONS)
// ============================================================================

/**
 * Step 1: Boil Water
 * Simulates boiling water for coffee
 * @returns {Promise<string>} - Resolves with success message or rejects on failure
 */
function boilWater() {
  logWithTime("💧", "Starting to boil water...");
  
  return new Promise((resolve, reject) => {
    // Simulate asynchronous operation with setTimeout
    setTimeout(() => {
      // Check for random failure
      if (shouldFail("boilWater")) {
        reject(new Error("Failed to boil water: Kettle malfunction!"));
      } else {
        logWithTime("♨️", "Water boiled successfully!");
        resolve("Hot water ready");
      }
    }, CONFIG.BOIL_WATER_TIME);
  });
}

/**
 * Step 2: Brew Coffee
 * Simulates brewing coffee with hot water
 * @param {string} waterStatus - Status from previous step
 * @returns {Promise<string>} - Resolves with success message or rejects on failure
 */
function brewCoffee(waterStatus) {
  logWithTime("☕", `Brewing coffee with: ${waterStatus}...`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check for random failure
      if (shouldFail("brewCoffee")) {
        reject(new Error("Failed to brew coffee: No coffee grounds found!"));
      } else {
        logWithTime("🌟", "Coffee brewed perfectly!");
        resolve("Freshly brewed coffee");
      }
    }, CONFIG.BREW_COFFEE_TIME);
  });
}

/**
 * Step 3: Pour Coffee
 * Simulates pouring coffee into a cup
 * @param {string} coffeeStatus - Status from previous step
 * @returns {Promise<string>} - Resolves with success message or rejects on failure
 */
function pourCoffee(coffeeStatus) {
  logWithTime("🫗", `Pouring coffee: ${coffeeStatus}...`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check for random failure
      if (shouldFail("pourCoffee")) {
        reject(new Error("Failed to pour coffee: Cup broke!"));
      } else {
        logWithTime("✅", "Coffee poured into cup!");
        resolve("Coffee ready");
      }
    }, CONFIG.POUR_COFFEE_TIME);
  });
}

// ============================================================================
// MAIN COFFEE MAKING PROCESS
// ============================================================================

/**
 * Makes coffee using Promise chaining (.then())
 * Demonstrates sequential asynchronous operations
 */
function makeCoffee() {
  console.log("═".repeat(80));
  console.log("☕ STARTUP MORNING COFFEE MAKER");
  console.log("═".repeat(80));
  console.log("\n🌅 Good morning, team! Starting coffee preparation...\n");
  
  const startTime = Date.now();
  
  // Promise chain: boilWater → brewCoffee → pourCoffee
  boilWater()
    .then((waterResult) => {
      // First step successful, move to brewing
      console.log(`   ↳ Step 1 complete: ${waterResult}\n`);
      return brewCoffee(waterResult);
    })
    .then((coffeeResult) => {
      // Second step successful, move to pouring
      console.log(`   ↳ Step 2 complete: ${coffeeResult}\n`);
      return pourCoffee(coffeeResult);
    })
    .then((finalResult) => {
      // All steps successful!
      console.log(`   ↳ Step 3 complete: ${finalResult}\n`);
      
      const endTime = Date.now();
      const totalTime = ((endTime - startTime) / 1000).toFixed(2);
      
      console.log("═".repeat(80));
      console.log("🎉 Coffee ready for the team!");
      console.log("═".repeat(80));
      console.log(`\n⏱️  Total preparation time: ${totalTime} seconds`);
      console.log("☕ Enjoy your coffee! Time to start coding!\n");
    })
    .catch((error) => {
      // Handle any error that occurred in the chain
      const endTime = Date.now();
      const totalTime = ((endTime - startTime) / 1000).toFixed(2);
      
      console.log("\n" + "═".repeat(80));
      console.log("❌ ERROR: Coffee preparation failed!");
      console.log("═".repeat(80));
      console.error(`\n🚨 ${error.message}`);
      console.log(`⏱️  Failed after: ${totalTime} seconds`);
      console.log("💡 Suggestion: Please restart the coffee maker.\n");
    })
    .finally(() => {
      // This runs regardless of success or failure
      console.log("─".repeat(80));
      console.log("🔚 Coffee making process completed.");
      console.log("─".repeat(80) + "\n");
    });
}

// ============================================================================
// DEMONSTRATION 1: SUCCESSFUL RUN (NO FAILURES)
// ============================================================================

console.log("═".repeat(80));
console.log("DEMONSTRATION 1: SUCCESSFUL COFFEE MAKING");
console.log("═".repeat(80));
console.log("(Random failures disabled for this demo)\n");

// Temporarily disable random failures
const originalSetting = CONFIG.ENABLE_RANDOM_FAILURES;
CONFIG.ENABLE_RANDOM_FAILURES = false;

makeCoffee();

// ============================================================================
// DEMONSTRATION 2: WITH RANDOM FAILURES
// ============================================================================

// Wait for first demo to complete, then run with random failures
setTimeout(() => {
  console.log("\n\n");
  console.log("═".repeat(80));
  console.log("DEMONSTRATION 2: WITH RANDOM FAILURES (20% chance)");
  console.log("═".repeat(80));
  console.log("(Each step has a 20% chance of failure)\n");
  
  // Re-enable random failures
  CONFIG.ENABLE_RANDOM_FAILURES = true;
  
  makeCoffee();
}, 6000);

// ============================================================================
// DEMONSTRATION 3: MULTIPLE ATTEMPTS
// ============================================================================

setTimeout(() => {
  console.log("\n\n");
  console.log("═".repeat(80));
  console.log("DEMONSTRATION 3: MULTIPLE COFFEE ORDERS");
  console.log("═".repeat(80));
  console.log("(Making 3 cups of coffee for the team)\n");
  
  // Make multiple coffees
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(`\n${"─".repeat(80)}`);
      console.log(`CUP #${i}`);
      console.log("─".repeat(80) + "\n");
      makeCoffee();
    }, (i - 1) * 7000);
  }
}, 13000);

// ============================================================================
// BONUS: ALTERNATIVE IMPLEMENTATIONS
// ============================================================================

setTimeout(() => {
  console.log("\n\n");
  console.log("═".repeat(80));
  console.log("BONUS DEMONSTRATIONS");
  console.log("═".repeat(80));
  
  // ========================================
  // BONUS 1: Using async/await
  // ========================================
  console.log("\n" + "─".repeat(80));
  console.log("BONUS 1: Using async/await syntax");
  console.log("─".repeat(80) + "\n");
  
  async function makeCoffeeAsync() {
    console.log("🌅 Starting coffee with async/await...\n");
    
    try {
      const waterResult = await boilWater();
      console.log(`   ↳ ${waterResult}\n`);
      
      const coffeeResult = await brewCoffee(waterResult);
      console.log(`   ↳ ${coffeeResult}\n`);
      
      const finalResult = await pourCoffee(coffeeResult);
      console.log(`   ↳ ${finalResult}\n`);
      
      console.log("🎉 Coffee ready for the team! (async/await version)\n");
    } catch (error) {
      console.error(`❌ Error with async/await: ${error.message}\n`);
    }
  }
  
  makeCoffeeAsync();
  
  // ========================================
  // BONUS 2: Parallel Coffee Making
  // ========================================
  setTimeout(() => {
    console.log("\n" + "─".repeat(80));
    console.log("BONUS 2: Making 3 coffees in parallel (Promise.all)");
    console.log("─".repeat(80) + "\n");
    
    CONFIG.ENABLE_RANDOM_FAILURES = false; // Disable for demo clarity
    
    const coffee1 = boilWater().then(brewCoffee).then(pourCoffee);
    const coffee2 = boilWater().then(brewCoffee).then(pourCoffee);
    const coffee3 = boilWater().then(brewCoffee).then(pourCoffee);
    
    Promise.all([coffee1, coffee2, coffee3])
      .then(() => {
        console.log("\n🎉 All 3 coffees ready! Team can start working!\n");
      })
      .catch((error) => {
        console.error(`❌ At least one coffee failed: ${error.message}\n`);
      });
  }, 5000);
  
  // ========================================
  // BONUS 3: Race condition
  // ========================================
  setTimeout(() => {
    console.log("\n" + "─".repeat(80));
    console.log("BONUS 3: Coffee race - first one ready wins!");
    console.log("─".repeat(80) + "\n");
    
    const coffee1 = boilWater().then(brewCoffee).then(pourCoffee).then(() => "Coffee Machine 1");
    const coffee2 = boilWater().then(brewCoffee).then(pourCoffee).then(() => "Coffee Machine 2");
    const coffee3 = boilWater().then(brewCoffee).then(pourCoffee).then(() => "Coffee Machine 3");
    
    Promise.race([coffee1, coffee2, coffee3])
      .then((winner) => {
        console.log(`\n🏆 ${winner} finished first!\n`);
      })
      .catch((error) => {
        console.error(`❌ All machines failed: ${error.message}\n`);
      });
  }, 11000);
  
}, 34000);

// ============================================================================
// KEY CONCEPTS SUMMARY
// ============================================================================

setTimeout(() => {
  console.log("\n\n");
  console.log("═".repeat(80));
  console.log("KEY CONCEPTS - PROMISES AND ASYNC PROGRAMMING");
  console.log("═".repeat(80) + "\n");
  
  console.log("1. PROMISES:");
  console.log("   - Represents eventual completion (or failure) of async operation");
  console.log("   - Three states: Pending → Fulfilled or Rejected");
  console.log("   - Created with: new Promise((resolve, reject) => {...})\n");
  
  console.log("2. PROMISE CHAINING:");
  console.log("   - .then() executes after promise resolves");
  console.log("   - Can chain multiple .then() for sequential operations");
  console.log("   - Each .then() returns a new Promise");
  console.log("   - Example: promise.then(step1).then(step2).then(step3)\n");
  
  console.log("3. ERROR HANDLING:");
  console.log("   - .catch() handles any error in the chain");
  console.log("   - Single .catch() can handle errors from all previous steps");
  console.log("   - .finally() runs regardless of success/failure\n");
  
  console.log("4. ASYNC PATTERNS DEMONSTRATED:");
  console.log("   ✓ Sequential execution with .then() chaining");
  console.log("   ✓ Error propagation through promise chain");
  console.log("   ✓ Random failure simulation with Math.random()");
  console.log("   ✓ async/await as alternative syntax");
  console.log("   ✓ Promise.all() for parallel execution");
  console.log("   ✓ Promise.race() for competitive execution\n");
  
  console.log("5. REAL-WORLD APPLICATIONS:");
  console.log("   - API calls to servers");
  console.log("   - File system operations");
  console.log("   - Database queries");
  console.log("   - User authentication flows");
  console.log("   - Multi-step workflows\n");
  
  console.log("═".repeat(80));
  console.log("PROGRAM COMPLETE - ALL DEMONSTRATIONS FINISHED");
  console.log("═".repeat(80) + "\n");
}, 50000);

// Note: The program will run for approximately 50 seconds to show all demonstrations
