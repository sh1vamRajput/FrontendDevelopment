"use strict";

/**
 * Q3: Bug Tracker - Callback to Promise Migration
 * 
 * This file demonstrates:
 * - Converting callback-based functions to Promises
 * - Promise creation with resolve/reject
 * - Error handling with .catch()
 * - Random failure simulation
 * - console.table() for data visualization
 * - Modern async patterns
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  API_DELAY: 1000,              // Simulated API delay (ms)
  FAILURE_PROBABILITY: 0.3,     // 30% chance of failure
  ENABLE_RANDOM_FAILURES: true  // Toggle random failures
};

// ============================================================================
// ORIGINAL CALLBACK-BASED IMPLEMENTATION (OLD CODE)
// ============================================================================

console.log("═".repeat(80));
console.log("BUG TRACKER: CALLBACK TO PROMISE MIGRATION");
console.log("═".repeat(80));

console.log("\n" + "─".repeat(80));
console.log("STEP 1: ORIGINAL CALLBACK-BASED CODE (OLD)");
console.log("─".repeat(80) + "\n");

/**
 * OLD: Callback-based function to fetch bugs
 * @param {function} callback - Callback function to handle bugs
 */
function fetchBugs(callback) {
  console.log("⏳ [OLD] Fetching bugs using callbacks...");
  
  setTimeout(() => {
    const bugs = ["UI glitch", "API timeout", "Login failure"];
    console.log("✅ [OLD] Bugs fetched successfully!");
    callback(bugs);
  }, CONFIG.API_DELAY);
}

// Demonstrate the old callback approach
console.log("Calling fetchBugs() with callback:\n");
fetchBugs((bugs) => {
  console.log("📋 [OLD] Received bugs via callback:");
  bugs.forEach((bug, index) => {
    console.log(`   ${index + 1}. ${bug}`);
  });
  
  console.log("\n❌ Problems with callbacks:");
  console.log("   - Callback hell with nested operations");
  console.log("   - No built-in error handling");
  console.log("   - Difficult to compose async operations");
  console.log("   - Hard to read and maintain\n");
});

// ============================================================================
// MODERNIZED PROMISE-BASED IMPLEMENTATION (NEW CODE)
// ============================================================================

setTimeout(() => {
  console.log("─".repeat(80));
  console.log("STEP 2: MODERNIZED PROMISE-BASED CODE (NEW)");
  console.log("─".repeat(80) + "\n");

  /**
   * NEW: Promise-based function to fetch bugs
   * @returns {Promise<Array>} - Promise that resolves with bugs array
   */
  function getBugs() {
    console.log("⏳ [NEW] Fetching bugs using Promises...");
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random API failure
        const shouldFail = CONFIG.ENABLE_RANDOM_FAILURES && 
                          Math.random() < CONFIG.FAILURE_PROBABILITY;
        
        if (shouldFail) {
          const errorMessage = "API request failed: Server unreachable";
          console.log(`❌ [NEW] Simulated failure: ${errorMessage}`);
          reject(new Error(errorMessage));
        } else {
          const bugs = [
            "UI glitch",
            "API timeout", 
            "Login failure"
          ];
          console.log("✅ [NEW] Bugs fetched successfully!");
          resolve(bugs);
        }
      }, CONFIG.API_DELAY);
    });
  }

  // ========================================================================
  // DEMONSTRATION 1: SUCCESSFUL PROMISE RESOLUTION
  // ========================================================================

  console.log("Demo 1: Using Promises with .then() and .catch()\n");

  // Temporarily disable failures for this demo
  const originalSetting = CONFIG.ENABLE_RANDOM_FAILURES;
  CONFIG.ENABLE_RANDOM_FAILURES = false;

  getBugs()
    .then((bugs) => {
      console.log("\n📊 [NEW] Displaying bugs using console.table():\n");
      
      // Convert array to objects for better console.table() display
      const bugObjects = bugs.map((bug, index) => ({
        ID: index + 1,
        Description: bug,
        Status: "Open",
        Priority: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)],
        ReportedDate: new Date().toLocaleDateString()
      }));
      
      console.table(bugObjects);
      
      console.log("✅ Benefits of Promises:");
      console.log("   ✓ Clean, readable syntax");
      console.log("   ✓ Built-in error handling with .catch()");
      console.log("   ✓ Easy to chain multiple operations");
      console.log("   ✓ Better error propagation");
      console.log("   ✓ Can use async/await syntax\n");
    })
    .catch((error) => {
      console.error(`🚨 [NEW] Error caught: ${error.message}`);
      console.log("💡 Error was handled gracefully using .catch()\n");
    });

  // Re-enable random failures for next demos
  setTimeout(() => {
    CONFIG.ENABLE_RANDOM_FAILURES = originalSetting;
  }, CONFIG.API_DELAY + 100);

}, CONFIG.API_DELAY + 500);

// ============================================================================
// DEMONSTRATION 2: WITH RANDOM FAILURES ENABLED
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("STEP 3: TESTING WITH RANDOM FAILURES (30% chance)");
  console.log("═".repeat(80) + "\n");

  /**
   * Enhanced getBugs with detailed bug data
   * @returns {Promise<Array>} - Promise with detailed bug objects
   */
  function getBugsDetailed() {
    console.log("⏳ Fetching detailed bug data...");
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = CONFIG.ENABLE_RANDOM_FAILURES && 
                          Math.random() < CONFIG.FAILURE_PROBABILITY;
        
        if (shouldFail) {
          const errors = [
            "Network timeout",
            "Database connection failed",
            "Authentication token expired",
            "Rate limit exceeded",
            "Server returned 500 error"
          ];
          const randomError = errors[Math.floor(Math.random() * errors.length)];
          console.log(`❌ API Error: ${randomError}`);
          reject(new Error(randomError));
        } else {
          const bugs = [
            {
              id: 1001,
              title: "UI glitch",
              description: "Button alignment issue on mobile",
              severity: "Low",
              status: "Open",
              assignee: "Alice",
              reportedBy: "QA Team",
              date: "2025-11-25"
            },
            {
              id: 1002,
              title: "API timeout",
              description: "User endpoint taking >5s to respond",
              severity: "High",
              status: "In Progress",
              assignee: "Bob",
              reportedBy: "DevOps",
              date: "2025-11-26"
            },
            {
              id: 1003,
              title: "Login failure",
              description: "OAuth redirect not working",
              severity: "Critical",
              status: "Open",
              assignee: "Charlie",
              reportedBy: "Support",
              date: "2025-11-27"
            }
          ];
          console.log("✅ Successfully fetched detailed bug data!");
          resolve(bugs);
        }
      }, CONFIG.API_DELAY);
    });
  }

  // Make multiple attempts to show both success and failure scenarios
  console.log("Making 3 API calls to demonstrate random failures:\n");

  for (let attempt = 1; attempt <= 3; attempt++) {
    setTimeout(() => {
      console.log(`${"─".repeat(60)}`);
      console.log(`Attempt #${attempt}:`);
      console.log("─".repeat(60));
      
      getBugsDetailed()
        .then((bugs) => {
          console.log(`\n📊 Attempt #${attempt} - SUCCESS! Bugs retrieved:\n`);
          console.table(bugs);
        })
        .catch((error) => {
          console.error(`\n🚨 Attempt #${attempt} - FAILED!`);
          console.error(`Error: ${error.message}`);
          console.log("💡 Error was gracefully handled by .catch()");
          console.log("📝 In production, you would:");
          console.log("   - Log error to monitoring service");
          console.log("   - Show user-friendly message");
          console.log("   - Implement retry logic");
          console.log("   - Fall back to cached data\n");
        })
        .finally(() => {
          console.log(`✓ Attempt #${attempt} completed\n`);
        });
    }, (attempt - 1) * (CONFIG.API_DELAY + 500));
  }

}, CONFIG.API_DELAY * 2 + 1000);

// ============================================================================
// DEMONSTRATION 3: ASYNC/AWAIT SYNTAX (MODERN APPROACH)
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("STEP 4: USING ASYNC/AWAIT (MOST MODERN APPROACH)");
  console.log("═".repeat(80) + "\n");

  /**
   * Fetch bugs using async/await syntax
   */
  async function fetchAndDisplayBugs() {
    console.log("⏳ Using async/await to fetch bugs...\n");
    
    try {
      // Temporarily disable failures for cleaner demo
      CONFIG.ENABLE_RANDOM_FAILURES = false;
      
      const bugs = await getBugs();
      
      console.log("✅ Bugs fetched with async/await!\n");
      console.log("📊 Displaying with console.table():\n");
      
      const bugData = bugs.map((bug, index) => ({
        "#": index + 1,
        Bug: bug,
        Status: "Open",
        Assigned: ["Team A", "Team B", "Team C"][index % 3]
      }));
      
      console.table(bugData);
      
      console.log("🌟 async/await advantages:");
      console.log("   ✓ Even cleaner syntax than .then()");
      console.log("   ✓ Looks like synchronous code");
      console.log("   ✓ Easy to use with try/catch");
      console.log("   ✓ Better readability");
      console.log("   ✓ Easier debugging\n");
      
      // Re-enable failures
      CONFIG.ENABLE_RANDOM_FAILURES = true;
      
    } catch (error) {
      console.error(`🚨 Error in async/await: ${error.message}`);
    }
  }

  fetchAndDisplayBugs();

}, CONFIG.API_DELAY * 5);

// ============================================================================
// DEMONSTRATION 4: PROMISE CHAINING
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("STEP 5: PROMISE CHAINING FOR COMPLEX WORKFLOWS");
  console.log("═".repeat(80) + "\n");

  /**
   * Simulated function to filter bugs by severity
   * @param {Array} bugs - Array of bug objects
   * @returns {Promise<Array>} - Filtered bugs
   */
  function filterCriticalBugs(bugs) {
    console.log("🔍 Filtering critical bugs...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const critical = bugs.filter(bug => 
          bug.severity === "Critical" || bug.severity === "High"
        );
        console.log(`✅ Found ${critical.length} critical bugs`);
        resolve(critical);
      }, 500);
    });
  }

  /**
   * Simulated function to assign bugs to team
   * @param {Array} bugs - Array of bugs
   * @returns {Promise<Array>} - Assigned bugs
   */
  function assignToTeam(bugs) {
    console.log("👥 Assigning bugs to team members...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const assigned = bugs.map(bug => ({
          ...bug,
          assignedTo: ["Alice", "Bob", "Charlie"][Math.floor(Math.random() * 3)],
          assignedDate: new Date().toISOString().split('T')[0]
        }));
        console.log(`✅ Assigned ${assigned.length} bugs`);
        resolve(assigned);
      }, 500);
    });
  }

  // Disable failures for cleaner demo
  CONFIG.ENABLE_RANDOM_FAILURES = false;

  console.log("Demonstrating Promise chaining workflow:\n");
  console.log("getBugs() → filterCriticalBugs() → assignToTeam()\n");

  getBugs()
    .then((bugs) => {
      console.log(`📋 Step 1: Fetched ${bugs.length} bugs`);
      
      // Convert to detailed format
      const detailedBugs = bugs.map((bug, index) => ({
        id: 1000 + index,
        title: bug,
        severity: ["Low", "High", "Critical"][index % 3]
      }));
      
      return detailedBugs;
    })
    .then(filterCriticalBugs)
    .then(assignToTeam)
    .then((finalBugs) => {
      console.log("\n📊 Final result - Critical bugs assigned to team:\n");
      console.table(finalBugs);
      
      console.log("✅ Promise chaining completed successfully!");
      console.log("   All three async operations executed in sequence\n");
    })
    .catch((error) => {
      console.error(`🚨 Error in chain: ${error.message}`);
    });

}, CONFIG.API_DELAY * 6 + 2000);

// ============================================================================
// DEMONSTRATION 5: COMPARISON SUMMARY
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("MIGRATION SUMMARY: CALLBACKS vs PROMISES");
  console.log("═".repeat(80) + "\n");

  console.log("📝 CALLBACK APPROACH (OLD):");
  console.log("─".repeat(60));
  console.log(`
function fetchBugs(callback) {
  setTimeout(() => {
    callback(["UI glitch", "API timeout", "Login failure"]);
  }, 1000);
}

// Usage:
fetchBugs((bugs) => {
  console.log(bugs);
  // Problem: What if we need to chain operations?
  // Problem: How do we handle errors?
});
  `);

  console.log("✨ PROMISE APPROACH (NEW):");
  console.log("─".repeat(60));
  console.log(`
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;
      if (shouldFail) {
        reject(new Error("API failed"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// Usage:
getBugs()
  .then((bugs) => {
    console.table(bugs);
    return bugs; // Easy to chain!
  })
  .catch((error) => {
    console.error(error); // Built-in error handling!
  });
  `);

  console.log("🚀 ASYNC/AWAIT APPROACH (MOST MODERN):");
  console.log("─".repeat(60));
  console.log(`
async function displayBugs() {
  try {
    const bugs = await getBugs();
    console.table(bugs);
  } catch (error) {
    console.error(error);
  }
}
  `);

  console.log("\n📊 COMPARISON TABLE:\n");
  
  const comparison = [
    {
      Feature: "Readability",
      Callbacks: "⭐⭐",
      Promises: "⭐⭐⭐⭐",
      "Async/Await": "⭐⭐⭐⭐⭐"
    },
    {
      Feature: "Error Handling",
      Callbacks: "Manual",
      Promises: "Built-in (.catch)",
      "Async/Await": "try/catch"
    },
    {
      Feature: "Chaining",
      Callbacks: "Nested (hell)",
      Promises: ".then() chains",
      "Async/Await": "Sequential"
    },
    {
      Feature: "Debugging",
      Callbacks: "Difficult",
      Promises: "Better",
      "Async/Await": "Easy"
    },
    {
      Feature: "Code Maintenance",
      Callbacks: "Hard",
      Promises: "Moderate",
      "Async/Await": "Easy"
    }
  ];
  
  console.table(comparison);

  console.log("\n✅ MIGRATION BENEFITS:");
  console.log("   ✓ Cleaner, more readable code");
  console.log("   ✓ Built-in error handling");
  console.log("   ✓ Easy to chain async operations");
  console.log("   ✓ Better debugging experience");
  console.log("   ✓ Modern JavaScript standard");
  console.log("   ✓ Works great with async/await");

  console.log("\n💡 BEST PRACTICES:");
  console.log("   • Always include .catch() for error handling");
  console.log("   • Use .finally() for cleanup operations");
  console.log("   • Consider async/await for better readability");
  console.log("   • Handle rejected promises properly");
  console.log("   • Use Promise.all() for parallel operations");
  console.log("   • Implement proper error messages");

  console.log("\n" + "═".repeat(80));
  console.log("MIGRATION DEMONSTRATION COMPLETE");
  console.log("═".repeat(80) + "\n");
  
  console.log("🎓 Key Takeaways:");
  console.log("   1. Promises provide better control flow than callbacks");
  console.log("   2. Error handling is built-in and consistent");
  console.log("   3. Code is more maintainable and testable");
  console.log("   4. async/await makes async code look synchronous");
  console.log("   5. Modern JavaScript embraces Promise-based APIs\n");

}, CONFIG.API_DELAY * 8 + 4000);

// Note: This program runs for approximately 12 seconds to show all demonstrations
