"use strict";
const apiData = [
  "25",
  "true",
  "false",
  "NaN",
  " ",
  "100px",
  "3.14",
  null,
  undefined
];

console.log("=".repeat(80));
console.log("DYNAMIC DATA PARSER");
console.log("=".repeat(80));
console.log("\nOriginal API Data:");
console.log(apiData);



 
function processValue(value, index) {
 
  var numValue = Number(value);
  
  
  var boolValue = Boolean(value);
  
  
  var strValue = String(value);
  
 
  var isValidNumber = !isNaN(numValue) && 
                      value !== null && 
                      value !== undefined &&
                      (typeof value === 'number' || 
                       (typeof value === 'string' && value.trim() !== '' && !isNaN(Number(value.trim()))));
  
  // Special handling for strings that partially contain numbers (like "100px")
  if (typeof value === 'string' && value.trim() !== '') {
    var trimmedValue = value.trim();
    // Check if string contains non-numeric characters (except decimal point and minus)
    if (!/^-?\d*\.?\d+$/.test(trimmedValue)) {
      isValidNumber = false;
    }
  }
  
  return {
    index: index,
    original: value,
    originalType: typeof value,
    conversions: {
      number: numValue,
      boolean: boolValue,
      string: strValue
    },
    isValidNumber: isValidNumber
  };
}


// PROCESSING ALL DATA

console.log("\n" + "=".repeat(80));
console.log("STEP 1: CONVERTING EACH VALUE");
console.log("=".repeat(80));

// Arrays to store results
// Note: Using const for arrays - the reference is constant, but contents can be modified
const validNumericData = [];
const invalidNumericData = [];
const allConversions = [];

// Process each value using a for loop
// Demonstrates traditional loop with var (function-scoped)
for (var i = 0; i < apiData.length; i++) {
  // Note: 'i' is hoisted to function scope due to 'var'
  var result = processValue(apiData[i], i);
  allConversions.push(result);
  
  // Categorize based on numeric validity
  if (result.isValidNumber) {
    validNumericData.push(result);
  } else {
    invalidNumericData.push(result);
  }
}

// Debug: Check if 'i' is accessible here (it is, due to var hoisting)
console.log("\nDebug - Loop variable 'i' after loop:", i); // Will be apiData.length
console.log("\n" + "=".repeat(80));
console.log("STEP 2: DETAILED CONVERSION REPORT");
console.log("=".repeat(80));

// Using forEach for cleaner iteration (demonstrates modern approach)
allConversions.forEach(function(item) {
  console.log("\n" + "-".repeat(60));
  console.log(`Index: ${item.index}`);
  console.log(`Original Value: ${item.original === null ? 'null' : item.original === undefined ? 'undefined' : JSON.stringify(item.original)}`);
  console.log(`Original Type: ${item.originalType}`);
  console.log("Conversions:");
  console.log(`  → Number:  ${item.conversions.number} ${isNaN(item.conversions.number) ? '(NaN)' : ''}`);
  console.log(`  → Boolean: ${item.conversions.boolean}`);
  console.log(`  → String:  "${item.conversions.string}"`);
  console.log(`Valid Number: ${item.isValidNumber ? '✓ YES' : '✗ NO'}`);
});
console.log("\n" + "=".repeat(80));
console.log("STEP 3: VALID NUMERIC DATA");
console.log("=".repeat(80));
console.log(`\nTotal Valid Numbers: ${validNumericData.length}\n`);

if (validNumericData.length > 0) {
  // Using a while loop for demonstration
  let idx = 0; // Note: 'let' is block-scoped
  while (idx < validNumericData.length) {
    const item = validNumericData[idx];
    console.log(`[${idx}] "${item.original}" → ${item.conversions.number}`);
    idx++;
  }
  
  // Debug: 'idx' is still accessible here because it's declared with 'let' in this block
  console.log(`\nDebug - Final idx value: ${idx}`);
  
  // Calculate statistics
  const numbers = validNumericData.map(item => item.conversions.number);
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const average = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  
  console.log("\nStatistics:");
  console.log(`  Sum: ${sum}`);
  console.log(`  Average: ${average.toFixed(2)}`);
  console.log(`  Min: ${min}`);
  console.log(`  Max: ${max}`);
} else {
  console.log("No valid numeric data found.");
}

console.log("\n" + "=".repeat(80));
console.log("STEP 4: INVALID NUMERIC DATA");
console.log("=".repeat(80));
console.log(`\nTotal Invalid Numbers: ${invalidNumericData.length}\n`);

if (invalidNumericData.length > 0) {
  // Using for...of loop for demonstration
  for (const item of invalidNumericData) {
    const originalDisplay = item.original === null ? 'null' : 
                           item.original === undefined ? 'undefined' : 
                           `"${item.original}"`;
    
    let reason = "";
    
    // Determine why it's invalid
    if (item.original === null) {
      reason = "null value";
    } else if (item.original === undefined) {
      reason = "undefined value";
    } else if (item.original === "NaN") {
      reason = "string 'NaN'";
    } else if (typeof item.original === 'string' && item.original.trim() === '') {
      reason = "empty/whitespace string";
    } else if (typeof item.original === 'string' && /[a-zA-Z]/.test(item.original)) {
      reason = "contains non-numeric characters";
    } else {
      reason = "cannot be converted to valid number";
    }
    
    console.log(`[${item.index}] ${originalDisplay.padEnd(15)} → Invalid (${reason})`);
  }
} else {
  console.log("All data converted successfully to numbers.");
}
console.log("\n" + "=".repeat(80));
console.log("FINAL SUMMARY");
console.log("=".repeat(80));

const summary = {
  totalItems: apiData.length,
  validNumbers: validNumericData.length,
  invalidNumbers: invalidNumericData.length,
  validPercentage: ((validNumericData.length / apiData.length) * 100).toFixed(1),
  invalidPercentage: ((invalidNumericData.length / apiData.length) * 100).toFixed(1)
};

console.log(`\nTotal Items Processed: ${summary.totalItems}`);
console.log(`Valid Numbers: ${summary.validNumbers} (${summary.validPercentage}%)`);
console.log(`Invalid Numbers: ${summary.invalidNumbers} (${summary.invalidPercentage}%)`);

console.log("\n" + "=".repeat(80));
console.log("PROCESSING COMPLETE");
console.log("=".repeat(80));


// HOISTING DEMONSTRATION


console.log("\n" + "=".repeat(80));
console.log("HOISTING NOTES");
console.log("=".repeat(80));

console.log("\n1. VAR HOISTING:");
console.log("   - The loop variable 'i' (declared with var) is hoisted to function scope");
console.log("   - It remains accessible after the loop ends");
console.log(`   - Current value of 'i': ${i}`);

console.log("\n2. LET/CONST HOISTING:");
console.log("   - Variables declared with let/const are hoisted but in 'temporal dead zone'");
console.log("   - They're block-scoped and not accessible outside their block");
console.log("   - The 'idx' variable in the while loop is not accessible here");

console.log("\n3. FUNCTION HOISTING:");
console.log("   - processValue() function is hoisted (function declaration)");
console.log("   - It's available throughout the entire script scope");

console.log("\n" + "=".repeat(80));
