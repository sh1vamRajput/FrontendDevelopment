"use strict";

/**
 * Q1: Callback Function Demonstration
 * 
 * This file demonstrates:
 * - Basic callback function concept
 * - Function as a parameter
 * - Callback execution flow
 * - Synchronous callback patterns
 */

// ============================================================================
// CALLBACK FUNCTION DEFINITIONS
// ============================================================================

/**
 * greetUser - Greets a user and executes a callback function
 * 
 * @param {string} name - The name of the user to greet
 * @param {function} callback - A callback function to execute after greeting
 * 
 * Flow:
 * 1. Print greeting message with user's name
 * 2. Execute the callback function passed as parameter
 */
function greetUser(name, callback) {
  // Step 1: Print the greeting message
  console.log(`Hello ${name}`);
  
  // Step 2: Execute the callback function
  // The callback is invoked here, transferring control to it
  console.log("\n→ Executing callback function...");
  callback();
}

/**
 * showEndMessage - Callback function to display welcome message
 * 
 * This function is designed to be passed as a callback to greetUser()
 * It will be executed after the greeting is displayed
 */
function showEndMessage() {
  console.log("Welcome to the course!");
}

// ============================================================================
// DEMONSTRATION 1: BASIC CALLBACK FLOW
// ============================================================================

console.log("═".repeat(80));
console.log("Q1: CALLBACK FUNCTION DEMONSTRATION");
console.log("═".repeat(80));

console.log("\n" + "─".repeat(80));
console.log("DEMO 1: Basic Callback Flow");
console.log("─".repeat(80) + "\n");

console.log("Calling greetUser('Alice', showEndMessage):\n");

// Call greetUser with a name and the callback function
// Note: We pass showEndMessage without parentheses ()
// This passes the function reference, not its return value
greetUser("Alice", showEndMessage);

console.log("\n✓ Callback execution complete!");

// ============================================================================
// DEMONSTRATION 2: MULTIPLE USERS
// ============================================================================

console.log("\n" + "─".repeat(80));
console.log("DEMO 2: Multiple Users with Same Callback");
console.log("─".repeat(80) + "\n");

const users = ["Bob", "Charlie", "Diana"];

users.forEach((user, index) => {
  console.log(`[User ${index + 1}]`);
  greetUser(user, showEndMessage);
  console.log("");
});

// ============================================================================
// DEMONSTRATION 3: INLINE CALLBACK (ANONYMOUS FUNCTION)
// ============================================================================

console.log("─".repeat(80));
console.log("DEMO 3: Inline Anonymous Callback Function");
console.log("─".repeat(80) + "\n");

console.log("Using an anonymous function as callback:\n");

// Instead of passing a named function, we can pass an anonymous function
greetUser("Emma", function() {
  console.log("Welcome to the course!");
  console.log("This is an anonymous callback function.");
});

// ============================================================================
// DEMONSTRATION 4: ARROW FUNCTION CALLBACK
// ============================================================================

console.log("\n" + "─".repeat(80));
console.log("DEMO 4: Arrow Function Callback (ES6)");
console.log("─".repeat(80) + "\n");

console.log("Using an arrow function as callback:\n");

// ES6 arrow function syntax for callbacks
greetUser("Frank", () => {
  console.log("Welcome to the course!");
  console.log("This is an arrow function callback.");
});

// ============================================================================
// DEMONSTRATION 5: CALLBACK WITH CUSTOM MESSAGES
// ============================================================================

console.log("\n" + "─".repeat(80));
console.log("DEMO 5: Different Callback Functions");
console.log("─".repeat(80) + "\n");

// Define different callback functions
function showAdvancedMessage() {
  console.log("Welcome to the Advanced JavaScript course!");
  console.log("Get ready to master callbacks, promises, and async/await!");
}

function showBeginnerMessage() {
  console.log("Welcome to JavaScript Basics!");
  console.log("Let's start your coding journey!");
}

console.log("Advanced Course:");
greetUser("Grace", showAdvancedMessage);

console.log("\nBeginner Course:");
greetUser("Henry", showBeginnerMessage);

// ============================================================================
// DEMONSTRATION 6: CALLBACK FLOW VISUALIZATION
// ============================================================================

console.log("\n" + "═".repeat(80));
console.log("CALLBACK FLOW VISUALIZATION");
console.log("═".repeat(80) + "\n");

/**
 * Enhanced greetUser function with flow tracking
 */
function greetUserWithTracking(name, callback) {
  console.log("1. ▶ Entered greetUser function");
  console.log(`2. ▶ Printing greeting: Hello ${name}`);
  console.log(`Hello ${name}`);
  console.log("3. ▶ About to call the callback function");
  console.log("4. ▶ Transferring control to callback...\n");
  
  // Execute callback
  callback();
  
  console.log("\n5. ▶ Callback completed, control returned to greetUser");
  console.log("6. ▶ Exiting greetUser function");
}

function showEndMessageWithTracking() {
  console.log("   ↳ Inside callback: showEndMessage");
  console.log("   ↳ Executing callback logic...");
  console.log("Welcome to the course!");
  console.log("   ↳ Callback logic complete");
}

console.log("Detailed flow tracking:\n");
greetUserWithTracking("Iris", showEndMessageWithTracking);

// ============================================================================
// DEMONSTRATION 7: ERROR HANDLING IN CALLBACKS
// ============================================================================

console.log("\n" + "═".repeat(80));
console.log("BONUS: ERROR HANDLING WITH CALLBACKS");
console.log("═".repeat(80) + "\n");

/**
 * Safer version of greetUser with error handling
 */
function greetUserSafe(name, callback) {
  // Validate name parameter
  if (!name || typeof name !== 'string') {
    console.error("Error: Invalid name provided!");
    return;
  }
  
  // Validate callback parameter
  if (typeof callback !== 'function') {
    console.error("Error: Callback must be a function!");
    return;
  }
  
  console.log(`Hello ${name}`);
  
  // Execute callback with error handling
  try {
    callback();
  } catch (error) {
    console.error("Error executing callback:", error.message);
  }
}

console.log("Valid call:");
greetUserSafe("Jack", showEndMessage);

console.log("\nInvalid callback (not a function):");
greetUserSafe("Jack", "This is not a function");

console.log("\nInvalid name:");
greetUserSafe(null, showEndMessage);

// ============================================================================
// KEY CONCEPTS SUMMARY
// ============================================================================

console.log("\n" + "═".repeat(80));
console.log("KEY CONCEPTS - CALLBACKS");
console.log("═".repeat(80) + "\n");

console.log("1. WHAT IS A CALLBACK?");
console.log("   A callback is a function passed as an argument to another function");
console.log("   and executed at a later point in the program flow.\n");

console.log("2. CALLBACK SYNTAX:");
console.log("   - Named function:     greetUser('Name', showEndMessage)");
console.log("   - Anonymous function: greetUser('Name', function() {...})");
console.log("   - Arrow function:     greetUser('Name', () => {...})\n");

console.log("3. CALLBACK FLOW:");
console.log("   Step 1: Call main function with callback as parameter");
console.log("   Step 2: Main function executes its logic");
console.log("   Step 3: Main function invokes the callback");
console.log("   Step 4: Callback executes its logic");
console.log("   Step 5: Control returns to main function (if not ended)\n");

console.log("4. WHY USE CALLBACKS?");
console.log("   - Make functions more flexible and reusable");
console.log("   - Enable asynchronous programming");
console.log("   - Implement custom behavior without modifying the main function");
console.log("   - Follow the principle of separation of concerns\n");

console.log("═".repeat(80));
console.log("Q1 DEMONSTRATION COMPLETE");
console.log("═".repeat(80) + "\n");
