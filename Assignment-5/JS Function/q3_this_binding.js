"use strict";

/**
 * Q3: Understanding 'this' Binding in Arrow Functions vs Normal Functions
 * 
 * This file demonstrates:
 * - How 'this' works in arrow functions
 * - How 'this' works in normal functions
 * - Why arrow functions don't have their own 'this'
 * - When to use each type of function
 * - Lexical scoping vs dynamic binding
 */

// ============================================================================
// PART 1: THE PROBLEM - ARROW FUNCTION (this.name is undefined)
// ============================================================================

console.log("═".repeat(80));
console.log("Q3: ARROW FUNCTIONS vs NORMAL FUNCTIONS - 'this' BINDING");
console.log("═".repeat(80));

console.log("\n" + "─".repeat(80));
console.log("PART 1: THE PROBLEM - Using Arrow Function");
console.log("─".repeat(80) + "\n");

// Create user object with arrow function (PROBLEM)
const userWithArrow = {
  name: "Alice",
  
  // Arrow function as method
  showName: () => {
    console.log("Inside showName (arrow function):");
    console.log("  this =", this);
    console.log("  this.name =", this.name);
    console.log("  Result: this.name is", this.name === undefined ? "undefined ❌" : this.name);
  }
};

console.log("Object created:");
console.log(userWithArrow);

console.log("\nCalling userWithArrow.showName():\n");
userWithArrow.showName();

// ============================================================================
// EXPLANATION: WHY THIS HAPPENS
// ============================================================================

console.log("\n" + "─".repeat(80));
console.log("EXPLANATION: Why this.name is undefined");
console.log("─".repeat(80) + "\n");

console.log("🔍 The Problem:");
console.log("   Arrow functions DO NOT have their own 'this' binding.");
console.log("   They inherit 'this' from the LEXICAL SCOPE (where they're defined).");

console.log("\n📝 What happens:");
console.log("   1. Arrow function is defined in the global/module scope");
console.log("   2. At global scope, 'this' refers to:");
console.log("      - In browsers (non-strict): window object");
console.log("      - In Node.js or strict mode: undefined or empty object {}");
console.log("   3. The arrow function captures this global 'this'");
console.log("   4. When called, it uses the captured 'this', not the object");

console.log("\n💡 In this case:");
console.log("   • 'this' in arrow function = global 'this' =", this);
console.log("   • 'this.name' = undefined (because global 'this' has no 'name' property)");
console.log("   • The object's 'name' property is NOT accessible");

console.log("\n❌ Why Arrow Functions Don't Work for Object Methods:");
console.log("   • Arrow functions inherit 'this' from parent scope");
console.log("   • They DON'T bind 'this' to the calling object");
console.log("   • They ignore the context in which they're called");
console.log("   • Perfect for callbacks, NOT for object methods");

// ============================================================================
// PART 2: THE SOLUTION - NORMAL FUNCTION (this.name works!)
// ============================================================================

console.log("\n\n" + "═".repeat(80));
console.log("PART 2: THE SOLUTION - Using Normal Function");
console.log("═".repeat(80) + "\n");

// Create user object with normal function (SOLUTION)
const userWithNormal = {
  name: "Alice",
  
  // Normal function as method
  showName: function() {
    console.log("Inside showName (normal function):");
    console.log("  this =", this);
    console.log("  this.name =", this.name);
    console.log("  Result: this.name is", this.name, "✅");
  }
};

console.log("Object created:");
console.log(userWithNormal);

console.log("\nCalling userWithNormal.showName():\n");
userWithNormal.showName();

// ============================================================================
// EXPLANATION: WHY THIS WORKS
// ============================================================================

console.log("\n" + "─".repeat(80));
console.log("EXPLANATION: Why Normal Function Works");
console.log("─".repeat(80) + "\n");

console.log("✅ The Solution:");
console.log("   Normal functions HAVE their own 'this' binding.");
console.log("   'this' is determined by HOW the function is CALLED.");

console.log("\n📝 What happens:");
console.log("   1. Normal function is called as: userWithNormal.showName()");
console.log("   2. JavaScript sets 'this' to the object before the dot (userWithNormal)");
console.log("   3. Inside the function, 'this' refers to userWithNormal object");
console.log("   4. Therefore, 'this.name' accesses userWithNormal.name = 'Alice'");

console.log("\n💡 Key Concept:");
console.log("   • Normal functions: 'this' = object that called the method");
console.log("   • Arrow functions: 'this' = inherited from parent scope");

// ============================================================================
// PART 3: SIDE-BY-SIDE COMPARISON
// ============================================================================

console.log("\n\n" + "═".repeat(80));
console.log("PART 3: SIDE-BY-SIDE COMPARISON");
console.log("═".repeat(80) + "\n");

console.log("Creating two objects with different function types:\n");

const user1 = {
  name: "Bob",
  age: 25,
  showName: () => {
    return `Arrow: this.name = ${this.name}`;
  }
};

const user2 = {
  name: "Bob",
  age: 25,
  showName: function() {
    return `Normal: this.name = ${this.name}`;
  }
};

console.log("user1 (arrow function):");
console.log("  ", user1.showName(), "❌");

console.log("\nuser2 (normal function):");
console.log("  ", user2.showName(), "✅");

// ============================================================================
// PART 4: ES6 METHOD SHORTHAND (RECOMMENDED)
// ============================================================================

console.log("\n\n" + "═".repeat(80));
console.log("PART 4: ES6 METHOD SHORTHAND (Recommended Syntax)");
console.log("═".repeat(80) + "\n");

const userModern = {
  name: "Charlie",
  age: 28,
  
  // ES6 method shorthand (equivalent to normal function)
  showName() {
    console.log("Inside showName (ES6 method shorthand):");
    console.log("  this.name =", this.name, "✅");
    return this.name;
  },
  
  showAge() {
    console.log("  this.age =", this.age, "✅");
    return this.age;
  },
  
  showInfo() {
    console.log("  Full info:", `${this.name} is ${this.age} years old`, "✅");
    return `${this.name} is ${this.age} years old`;
  }
};

console.log("Modern ES6 syntax (cleaner and recommended):\n");
console.log("const userModern = {");
console.log("  name: 'Charlie',");
console.log("  showName() {  // ← No 'function' keyword needed!");
console.log("    return this.name;");
console.log("  }");
console.log("};\n");

console.log("Calling methods:\n");
userModern.showName();
userModern.showAge();
userModern.showInfo();

// ============================================================================
// PART 5: WHEN TO USE ARROW FUNCTIONS
// ============================================================================

console.log("\n\n" + "═".repeat(80));
console.log("PART 5: WHEN ARROW FUNCTIONS ARE PERFECT");
console.log("═".repeat(80) + "\n");

console.log("Arrow functions are GREAT for callbacks and nested functions!\n");

const userWithCallbacks = {
  name: "Diana",
  hobbies: ["reading", "coding", "gaming"],
  
  // Normal function for the method
  showHobbies: function() {
    console.log(`${this.name}'s hobbies:`);
    
    // Arrow function in callback - PERFECT USE CASE!
    // It inherits 'this' from showHobbies method
    this.hobbies.forEach((hobby) => {
      console.log(`  - ${this.name} likes ${hobby}`);
      // 'this.name' works here because arrow function
      // inherits 'this' from showHobbies()
    });
  },
  
  // What happens with normal function in callback?
  showHobbiesWrong: function() {
    console.log(`\n${this.name}'s hobbies (WRONG - normal function in callback):`);
    
    this.hobbies.forEach(function(hobby) {
      // 'this' is undefined here in strict mode!
      console.log(`  - ${this.name} likes ${hobby}`);
      // Output: "undefined likes reading" ❌
    });
  }
};

console.log("✅ Arrow function in callback (CORRECT):");
userWithCallbacks.showHobbies();

console.log("\n❌ Normal function in callback (WRONG):");
userWithCallbacks.showHobbiesWrong();

console.log("\n💡 Why arrow functions are perfect for callbacks:");
console.log("   • They inherit 'this' from the parent method");
console.log("   • No need for .bind() or 'self = this' workarounds");
console.log("   • Cleaner, more readable code");

// ============================================================================
// PART 6: DETAILED 'this' BINDING RULES
// ============================================================================

console.log("\n\n" + "═".repeat(80));
console.log("PART 6: COMPLETE 'this' BINDING RULES");
console.log("═".repeat(80) + "\n");

console.log("📚 THE FOUR RULES OF 'this' BINDING:\n");

console.log("1️⃣  DEFAULT BINDING (function called standalone)");
console.log("   ─────────────────────────────────────────────");
function standaloneFunction() {
  // In strict mode: undefined
  // In non-strict: global object (window/global)
  console.log("   this =", this);
}
console.log("   standaloneFunction();");
standaloneFunction();

console.log("\n2️⃣  IMPLICIT BINDING (method called on object)");
console.log("   ─────────────────────────────────────────────");
const obj = {
  value: 42,
  getValue: function() {
    console.log("   this.value =", this.value);
    return this.value;
  }
};
console.log("   obj.getValue();");
obj.getValue();
console.log("   'this' = obj (object before the dot)");

console.log("\n3️⃣  EXPLICIT BINDING (using call/apply/bind)");
console.log("   ─────────────────────────────────────────────");
const anotherObj = { value: 99 };
console.log("   obj.getValue.call(anotherObj);");
console.log("   this.value =", obj.getValue.call(anotherObj));
console.log("   'this' = anotherObj (explicitly set)");

console.log("\n4️⃣  NEW BINDING (constructor function)");
console.log("   ─────────────────────────────────────────────");
function Person(name) {
  this.name = name;
}
console.log("   const person = new Person('Eve');");
const person = new Person('Eve');
console.log("   person.name =", person.name);
console.log("   'this' = newly created object");

console.log("\n5️⃣  ARROW FUNCTION (NO 'this' BINDING - LEXICAL)");
console.log("   ─────────────────────────────────────────────");
console.log("   Arrow functions IGNORE all above rules!");
console.log("   They inherit 'this' from lexical scope (where defined)");

// ============================================================================
// PART 7: COMMON PITFALLS AND SOLUTIONS
// ============================================================================

console.log("\n\n" + "═".repeat(80));
console.log("PART 7: COMMON PITFALLS & SOLUTIONS");
console.log("═".repeat(80) + "\n");

console.log("❌ PITFALL 1: Using arrow functions for object methods\n");

const badExample = {
  name: "Bad Example",
  greet: () => {
    return `Hello, I'm ${this.name}`; // undefined!
  }
};
console.log("   Result:", badExample.greet());

console.log("\n✅ SOLUTION 1: Use normal function or method shorthand\n");

const goodExample = {
  name: "Good Example",
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};
console.log("   Result:", goodExample.greet());

console.log("\n─────────────────────────────────────────────────────");

console.log("\n❌ PITFALL 2: Losing 'this' context in callbacks\n");

const user = {
  name: "Frank",
  delayedGreet: function() {
    setTimeout(function() {
      console.log("   Hello, I'm", this.name); // undefined!
    }, 0);
  }
};
console.log("   Using normal function in setTimeout:");
user.delayedGreet();

setTimeout(() => {
  console.log("\n✅ SOLUTION 2A: Use arrow function in callback\n");
  
  const user2 = {
    name: "Frank",
    delayedGreet: function() {
      setTimeout(() => {
        console.log("   Hello, I'm", this.name); // Works!
      }, 0);
    }
  };
  console.log("   Using arrow function in setTimeout:");
  user2.delayedGreet();
}, 50);

setTimeout(() => {
  console.log("\n✅ SOLUTION 2B: Use .bind()\n");
  
  const user3 = {
    name: "Frank",
    delayedGreet: function() {
      setTimeout(function() {
        console.log("   Hello, I'm", this.name); // Works!
      }.bind(this), 0);
    }
  };
  console.log("   Using .bind(this):");
  user3.delayedGreet();
}, 100);

// ============================================================================
// PART 8: DECISION TREE
// ============================================================================

setTimeout(() => {
  console.log("\n\n" + "═".repeat(80));
  console.log("PART 8: WHEN TO USE WHICH?");
  console.log("═".repeat(80) + "\n");

  console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║                    FUNCTION TYPE DECISION TREE                             ║
╚════════════════════════════════════════════════════════════════════════════╝

    Do you need to access 'this' from the enclosing scope?
                    │
                    ├─── YES ──→ Use ARROW FUNCTION
                    │            ✓ Callbacks in array methods
                    │            ✓ setTimeout/setInterval
                    │            ✓ Event handlers (sometimes)
                    │            ✓ Promise chains
                    │
                    └─── NO  ──→ Is it an object method?
                                 │
                                 ├─── YES ──→ Use NORMAL FUNCTION or
                                 │            METHOD SHORTHAND
                                 │            ✓ Object methods
                                 │            ✓ Class methods
                                 │            ✓ Constructor functions
                                 │
                                 └─── NO  ──→ Either works, prefer
                                              ARROW for brevity

  `);

  console.log("📋 QUICK REFERENCE:\n");
  console.log("Object Methods:          Use normal function or method shorthand");
  console.log("Callbacks (forEach):     Use arrow function");
  console.log("Callbacks (setTimeout):  Use arrow function");
  console.log("Event Handlers:          Depends on needs");
  console.log("Class Methods:           Use normal function");
  console.log("Constructor Functions:   Use normal function");

}, 150);

// ============================================================================
// PART 9: SUMMARY
// ============================================================================

setTimeout(() => {
  console.log("\n\n" + "═".repeat(80));
  console.log("SUMMARY & KEY TAKEAWAYS");
  console.log("═".repeat(80) + "\n");

  console.log("🎯 THE MAIN PROBLEM:");
  console.log("   Arrow functions as object methods don't work because:");
  console.log("   • Arrow functions inherit 'this' from lexical scope");
  console.log("   • They don't bind 'this' to the calling object");
  console.log("   • Result: this.name is undefined\n");

  console.log("✅ THE SOLUTION:");
  console.log("   Use normal functions or ES6 method shorthand:");
  console.log("   • Normal functions bind 'this' to the calling object");
  console.log("   • Method shorthand is clean and modern");
  console.log("   • Result: this.name works correctly\n");

  console.log("📚 KEY DIFFERENCES:\n");
  
  const comparison = [
    {
      Feature: "'this' binding",
      "Arrow Function": "Lexical (inherited)",
      "Normal Function": "Dynamic (caller)"
    },
    {
      Feature: "Use for methods?",
      "Arrow Function": "❌ NO",
      "Normal Function": "✅ YES"
    },
    {
      Feature: "Use in callbacks?",
      "Arrow Function": "✅ YES",
      "Normal Function": "⚠️  Maybe"
    },
    {
      Feature: "Can use 'new'?",
      "Arrow Function": "❌ NO",
      "Normal Function": "✅ YES"
    },
    {
      Feature: "Has 'arguments'?",
      "Arrow Function": "❌ NO",
      "Normal Function": "✅ YES"
    }
  ];
  
  console.table(comparison);

  console.log("\n💡 BEST PRACTICES:");
  console.log("   1. Use normal functions/method shorthand for object methods");
  console.log("   2. Use arrow functions for callbacks and nested functions");
  console.log("   3. Remember: Arrow functions = inherit 'this'");
  console.log("   4. Remember: Normal functions = dynamic 'this'");
  console.log("   5. When in doubt, check what 'this' needs to be");

  console.log("\n" + "═".repeat(80));
  console.log("DEMONSTRATION COMPLETE");
  console.log("═".repeat(80) + "\n");

}, 200);

// Note: Some outputs use setTimeout to ensure proper ordering in the console
