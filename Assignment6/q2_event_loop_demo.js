"use strict";

/**
 * Q2: Task Scheduler - Microtasks vs Macrotasks Challenge
 * 
 * This file demonstrates:
 * - JavaScript Event Loop execution order
 * - Synchronous code execution
 * - Microtasks (Promise.then, queueMicrotask)
 * - Macrotasks (setTimeout, setInterval, I/O)
 * - Why microtasks run before macrotasks
 * 
 * EXECUTION ORDER:
 * 1. Synchronous code (main thread)
 * 2. Microtasks (Promise.then, queueMicrotask)
 * 3. Macrotasks (setTimeout, setInterval)
 */

// ============================================================================
// BASIC DEMONSTRATION: REQUIRED TASK
// ============================================================================

console.log("═".repeat(80));
console.log("EVENT LOOP DEMONSTRATION: MICROTASKS vs MACROTASKS");
console.log("═".repeat(80));

console.log("\n" + "─".repeat(80));
console.log("BASIC DEMONSTRATION (Required Task)");
console.log("─".repeat(80) + "\n");

console.log("▶️  Start");

// MACROTASK: setTimeout (goes to macrotask queue)
// This will execute AFTER all synchronous code and microtasks
setTimeout(() => {
  console.log("⏰ setTimeout callback (MACROTASK)");
}, 0);
/*
 * WHY THIS RUNS LAST (even with 0ms delay):
 * - setTimeout is a MACROTASK (also called Task)
 * - Even with 0ms delay, it's scheduled in the macrotask queue
 * - The event loop processes macrotasks AFTER microtasks
 * - Flow: Call Stack → Microtask Queue → Macrotask Queue
 */

// MICROTASK: Promise.then (goes to microtask queue)
// This will execute BEFORE setTimeout, even though setTimeout is defined first
Promise.resolve().then(() => {
  console.log("✨ Promise.then callback (MICROTASK)");
});
/*
 * WHY THIS RUNS BEFORE setTimeout:
 * - Promise.then is a MICROTASK (also called Job)
 * - Microtasks have HIGHER PRIORITY than macrotasks
 * - The event loop checks the microtask queue before the macrotask queue
 * - All microtasks must complete before the next macrotask runs
 */

// SYNCHRONOUS CODE: Executed immediately
// This runs in the current call stack before any async code
console.log("📝 Synchronous log");
/*
 * WHY THIS RUNS SECOND (after "Start"):
 * - This is synchronous code
 * - It executes immediately on the call stack
 * - No queuing involved - runs line by line
 * - Synchronous code always runs before async code
 */

console.log("⏹️  End");
/*
 * WHY THIS RUNS THIRD (after synchronous log):
 * - Still synchronous code
 * - Executes in order on the call stack
 * - After this, the call stack is empty
 * - Then event loop processes microtasks, then macrotasks
 */

// ============================================================================
// EXPECTED OUTPUT ORDER:
// ============================================================================
/*
 * OUTPUT ORDER EXPLANATION:
 * 
 * 1. "▶️  Start"              - Synchronous (Call Stack)
 * 2. "📝 Synchronous log"     - Synchronous (Call Stack)
 * 3. "⏹️  End"                - Synchronous (Call Stack)
 * 4. "✨ Promise.then..."     - Microtask (Higher Priority)
 * 5. "⏰ setTimeout..."       - Macrotask (Lower Priority)
 * 
 * WHY THIS ORDER?
 * 
 * Phase 1: SYNCHRONOUS CODE
 * - JavaScript executes all synchronous code first
 * - Code runs line by line in the call stack
 * - No async operations interrupt this
 * 
 * Phase 2: MICROTASK QUEUE
 * - After call stack is empty, event loop checks microtask queue
 * - Promise.then callbacks are microtasks
 * - ALL microtasks run before ANY macrotask
 * - This ensures promises resolve quickly
 * 
 * Phase 3: MACROTASK QUEUE
 * - Only after microtask queue is empty
 * - setTimeout/setInterval callbacks are macrotasks
 * - Lower priority than microtasks
 * - Allows UI updates and I/O between macrotasks
 */

// ============================================================================
// COMPREHENSIVE DEMONSTRATION WITH MULTIPLE TASKS
// ============================================================================

setTimeout(() => {
  console.log("\n\n" + "═".repeat(80));
  console.log("COMPREHENSIVE DEMONSTRATION: MULTIPLE TASKS");
  console.log("═".repeat(80) + "\n");

  console.log("1️⃣  Start of comprehensive demo");

  // Multiple setTimeout (macrotasks)
  setTimeout(() => {
    console.log("7️⃣  setTimeout 1 (MACROTASK - 0ms)");
  }, 0);

  setTimeout(() => {
    console.log("8️⃣  setTimeout 2 (MACROTASK - 0ms)");
  }, 0);

  // Multiple Promise.then (microtasks)
  Promise.resolve().then(() => {
    console.log("4️⃣  Promise.then 1 (MICROTASK)");
  });

  Promise.resolve().then(() => {
    console.log("5️⃣  Promise.then 2 (MICROTASK)");
  });

  // Nested Promise (still microtask)
  Promise.resolve().then(() => {
    console.log("6️⃣  Promise.then 3 (MICROTASK)");
    // This creates another microtask, which runs before macrotasks
    Promise.resolve().then(() => {
      console.log("6️⃣.1 Nested Promise.then (MICROTASK)");
    });
  });

  console.log("2️⃣  Synchronous log 1");

  // queueMicrotask - another way to add microtasks
  queueMicrotask(() => {
    console.log("6️⃣.2 queueMicrotask (MICROTASK)");
  });

  console.log("3️⃣  End of comprehensive demo");

  /*
   * EXECUTION ORDER EXPLANATION:
   * 
   * 1️⃣  "Start of comprehensive demo"     - Sync
   * 2️⃣  "Synchronous log 1"               - Sync
   * 3️⃣  "End of comprehensive demo"       - Sync
   * 4️⃣  "Promise.then 1"                  - Microtask (added first)
   * 5️⃣  "Promise.then 2"                  - Microtask (added second)
   * 6️⃣  "Promise.then 3"                  - Microtask (added third)
   * 6️⃣.1 "Nested Promise.then"           - Microtask (created by 6️⃣)
   * 6️⃣.2 "queueMicrotask"                - Microtask
   * 7️⃣  "setTimeout 1"                    - Macrotask (added first)
   * 8️⃣  "setTimeout 2"                    - Macrotask (added second)
   * 
   * KEY INSIGHT: All microtasks (4-6.2) run before any macrotask (7-8)
   */

}, 100);

// ============================================================================
// VISUAL DIAGRAM OF EVENT LOOP
// ============================================================================

setTimeout(() => {
  console.log("\n\n" + "═".repeat(80));
  console.log("EVENT LOOP ARCHITECTURE");
  console.log("═".repeat(80) + "\n");

  console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                        JAVASCRIPT EVENT LOOP                              ║
╚═══════════════════════════════════════════════════════════════════════════╝

    ┌─────────────────────────────────────────────────────────────┐
    │                      CALL STACK                             │
    │  ┌───────────────────────────────────────────────────────┐  │
    │  │  Synchronous Code Executes Here                       │  │
    │  │  - console.log()                                      │  │
    │  │  - Variable declarations                              │  │
    │  │  - Function calls                                     │  │
    │  └───────────────────────────────────────────────────────┘  │
    └─────────────────────────────────────────────────────────────┘
                            ⬇️
    ┌─────────────────────────────────────────────────────────────┐
    │               MICROTASK QUEUE (Higher Priority)             │
    │  ┌───────────────────────────────────────────────────────┐  │
    │  │     Promise.then()                                    │  │
    │  │     Promise.catch()                                   │  │
    │  │     Promise.finally()                                 │  │
    │  │     queueMicrotask()                                  │  │
    │  │     async/await (Promise-based)                       │  │
    │  │     MutationObserver                                  │  │
    │  └───────────────────────────────────────────────────────┘  │
    │                                                               │
    │  ALL microtasks must complete before moving to macrotasks    │
    └─────────────────────────────────────────────────────────────┘
                            ⬇️
    ┌─────────────────────────────────────────────────────────────┐
    │               MACROTASK QUEUE (Lower Priority)              │
    │  ┌───────────────────────────────────────────────────────┐  │
    │  │    setTimeout()                                       │  │
    │  │    setInterval()                                      │  │
    │  │     setImmediate() (Node.js)                          │  │
    │  │    I/O operations                                     │  │
    │  │    UI rendering                                       │  │
    │  │     requestAnimationFrame() (browser)                 │  │
    │  └───────────────────────────────────────────────────────┘  │
    │                                                               │
    │  One macrotask executes per event loop cycle                 │
    └─────────────────────────────────────────────────────────────┘

  `);

  console.log("EVENT LOOP CYCLE:");
  console.log("─".repeat(80));
  console.log("1. Execute synchronous code from call stack");
  console.log("2. Execute ALL microtasks (until queue is empty)");
  console.log("3. Execute ONE macrotask");
  console.log("4. Check microtask queue again (new microtasks from step 3)");
  console.log("5. Render UI updates (in browser)");
  console.log("6. Repeat from step 3\n");

}, 500);

// ============================================================================
// PRACTICAL EXAMPLE: WHY ORDER MATTERS
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("PRACTICAL EXAMPLE: WHY ORDER MATTERS");
  console.log("═".repeat(80) + "\n");

  console.log("Scenario: User clicks a button that triggers API call\n");

  // Simulate user action
  console.log("  User clicks button (Synchronous)");

  // API call returns (microtask)
  Promise.resolve({ data: "User profile" }).then((response) => {
    console.log(" API response received (MICROTASK)");
    console.log(`   Data: ${response.data}`);
    console.log("    This runs before UI update!");
  });

  // UI update scheduled (macrotask)
  setTimeout(() => {
    console.log(" UI update rendered (MACROTASK)");
    console.log("     This runs after API response is processed");
  }, 0);

  console.log("  Event handler finishes (Synchronous)\n");

  console.log(" WHY THIS ORDER IS IMPORTANT:");
  console.log("   - API response (microtask) processes BEFORE UI update");
  console.log("   - Ensures data is ready before rendering");
  console.log("   - Prevents showing stale/loading states");
  console.log("   - Better user experience\n");

}, 900);

// ============================================================================
// REAL-WORLD ANALOGY
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("REAL-WORLD ANALOGY: RESTAURANT KITCHEN");
  console.log("═".repeat(80) + "\n");

  console.log(`
Think of JavaScript execution like a restaurant kitchen:

 SYNCHRONOUS CODE = Chef cooking current order
   - Must finish current dish before starting next
   - No interruptions
   - Works on call stack (cooking station)

 MICROTASKS = Urgent modifications to current orders
   - "Make that medium-rare instead of well-done!"
   - "Add extra sauce on the side!"
   - Must be handled IMMEDIATELY after current dish
   - High priority, can't wait

 MACROTASKS = New orders coming in
   - Regular customer orders
   - Handled one at a time
   - Must wait for current order AND urgent modifications
   - Lower priority

EVENT LOOP = Kitchen Manager
   1. Chef finishes current dish (sync code)
   2. Check for urgent modifications (microtasks)
   3. Handle ALL urgent modifications
   4. Take next order (macrotask)
   5. Repeat

This ensures urgent changes happen BEFORE new orders are started!
  `);

}, 1300);

// ============================================================================
// COMMON PITFALLS AND SOLUTIONS
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("COMMON PITFALLS");
  console.log("═".repeat(80) + "\n");

  console.log(" PITFALL 1: Assuming setTimeout(fn, 0) runs immediately");
  console.log("   Solution: It's a macrotask - runs after all microtasks\n");

  console.log(" PITFALL 2: Infinite microtask loop");
  Promise.resolve().then(function infiniteMicrotask() {
    console.log("  Don't do this! Creates infinite microtasks");
    // Promise.resolve().then(infiniteMicrotask); // COMMENTED OUT - would freeze!
  });
  console.log("   Solution: Be careful with recursive Promise.then()\n");

  console.log(" PITFALL 3: Mixing sync and async without understanding order");
  setTimeout(() => console.log("   This prints last"), 0);
  Promise.resolve().then(() => console.log("   This prints second"));
  console.log("   This prints first");
  console.log("   Solution: Understand the execution order!\n");

}, 1700);

// ============================================================================
// PERFORMANCE IMPLICATIONS
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("PERFORMANCE IMPLICATIONS");
  console.log("═".repeat(80) + "\n");

  console.log(" BEST PRACTICES:");
  console.log("   ✓ Use microtasks for urgent, quick operations");
  console.log("   ✓ Use macrotasks for less urgent, heavy operations");
  console.log("   ✓ Break heavy work into chunks with setTimeout");
  console.log("   ✓ Be aware that microtasks can delay rendering");
  console.log("   ✓ Don't create infinite microtask loops\n");

  console.log(" TIMING CONSIDERATIONS:");
  console.log("   - Microtasks: ~0.1ms - 1ms");
  console.log("   - Macrotasks: ~4ms minimum (browser throttling)");
  console.log("   - UI rendering happens between macrotasks");
  console.log("   - Too many microtasks can block rendering\n");

}, 2100);

// ============================================================================
// SUMMARY AND KEY TAKEAWAYS
// ============================================================================

setTimeout(() => {
  console.log("\n" + "═".repeat(80));
  console.log("SUMMARY: MICROTASKS vs MACROTASKS");
  console.log("═".repeat(80) + "\n");

  const summary = [
    {
      Aspect: "Priority",
      Microtasks: " Higher",
      Macrotasks: "Lower"
    },
    {
      Aspect: "Examples",
      Microtasks: "Promise.then, queueMicrotask",
      Macrotasks: "setTimeout, setInterval"
    },
    {
      Aspect: "Execution",
      Microtasks: "ALL before next macrotask",
      Macrotasks: "ONE per event loop cycle"
    },
    {
      Aspect: "Use Case",
      Microtasks: "Urgent, quick operations",
      Macrotasks: "Deferred, heavy operations"
    },
    {
      Aspect: "Queue Clearing",
      Microtasks: "Must drain completely",
      Macrotasks: "One at a time"
    }
  ];

  console.table(summary);

  console.log("\n KEY TAKEAWAYS:");
  console.log("─".repeat(80));
  console.log("1. Execution Order: Sync → Microtasks → Macrotasks");
  console.log("2. Microtasks have HIGHER priority than macrotasks");
  console.log("3. ALL microtasks run before the NEXT macrotask");
  console.log("4. This ensures Promises resolve quickly");
  console.log("5. Understanding this is crucial for debugging async code");
  console.log("6. Event loop is the heart of JavaScript concurrency\n");

  console.log(" WHY MICROTASKS RUN BEFORE MACROTASKS:");
  console.log("─".repeat(80));
  console.log("• Promises need to resolve quickly for app responsiveness");
  console.log("• Microtasks are typically lightweight and fast");
  console.log("• Macrotasks can be heavy (I/O, rendering)");
  console.log("• This design prevents Promise resolution delays");
  console.log("• Maintains better user experience");
  console.log("• Allows for predictable async behavior\n");

  console.log("═".repeat(80));
  console.log("EVENT LOOP DEMONSTRATION COMPLETE");
  console.log("═".repeat(80) + "\n");

}, 2500);

// ============================================================================
// INTERACTIVE QUIZ (BONUS)
// ============================================================================

setTimeout(() => {
  console.log(" QUICK QUIZ: Can you predict the output?\n");
  
  console.log("Code:");
  console.log("─".repeat(80));
  console.log(`
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
  `);
  
  console.log("\nWhat's the output order?\n");
  console.log("Answer: A → D → C → B\n");
  console.log("Explanation:");
  console.log("• A: Synchronous");
  console.log("• D: Synchronous");
  console.log("• C: Microtask (Promise)");
  console.log("• B: Macrotask (setTimeout)\n");

}, 3000);

// Note: This program runs for approximately 3 seconds to show all demonstrations
// The timing is carefully orchestrated to show concepts sequentially
