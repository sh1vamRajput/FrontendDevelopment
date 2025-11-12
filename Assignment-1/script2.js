/*
 * ============================================
 * STUDENT MARKS ANALYZER
 * ============================================
 * This program analyzes a student's performance across
 * five subjects, calculates average, assigns grades, and
 * determines if the student needs to repeat the year.
 */

// ============================================
// INPUT DATA - STUDENT MARKS
// ============================================
/*
 * Array containing marks for 5 subjects (out of 100)
 * Modify these values to test different scenarios
 */
let marks = [85, 72, 38, 90, 65];

// Subject names for better readability in output
let subjects = ["Mathematics", "Science", "English", "History", "Computer Science"];

console.log("===== STUDENT MARKS ANALYZER =====");
console.log("\n--- Subject-wise Marks ---");

// Display each subject with its corresponding marks
for (let i = 0; i < marks.length; i++) {
    console.log(`${subjects[i]}: ${marks[i]}/100`);
}

// ============================================
// CALCULATE TOTAL MARKS
// ============================================
/*
 * Sum all marks using a loop to get the total
 * This will be used to calculate average and percentage
 */

let totalMarks = 0;  // Initialize accumulator variable

// Loop through marks array and add each mark to total
for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}

console.log(`\n📊 Total Marks: ${totalMarks}/500`);

// ============================================
// CALCULATE AVERAGE AND PERCENTAGE
// ============================================
/*
 * Average = Total Marks / Number of Subjects
 * Percentage = (Total Marks / Maximum Possible Marks) × 100
 */

// Calculate average marks (out of 100)
let average = totalMarks / marks.length;

// Calculate percentage (since each subject is out of 100, average = percentage)
let percentage = average;

// Round to 2 decimal places for better presentation
average = Math.round(average * 100) / 100;
percentage = Math.round(percentage * 100) / 100;

console.log(`📈 Average Marks: ${average}/100`);
console.log(`📊 Percentage: ${percentage}%`);

// ============================================
// COUNT FAILED SUBJECTS
// ============================================
/*
 * Check how many subjects the student failed in
 * A subject is failed if marks < 40
 * If failed in 2 or more subjects → Repeat Year
 */

let failedSubjects = 0;  // Counter for failed subjects
let failedSubjectNames = [];  // Array to store names of failed subjects

// Loop through marks to count failures
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 40) {
        failedSubjects++;  // Increment failure counter
        failedSubjectNames.push(subjects[i]);  // Store subject name
    }
}

// Display failure information if any
if (failedSubjects > 0) {
    console.log(`\n⚠️ Failed Subjects: ${failedSubjects}`);
    console.log(`Failed in: ${failedSubjectNames.join(", ")}`);
} else {
    console.log("\n✅ No failed subjects");
}

// ============================================
// DETERMINE GRADE
// ============================================
/*
 * Assign grade based on percentage:
 * 90-100 → A+
 * 75-89  → A
 * 60-74  → B
 * 40-59  → C
 * <40    → Fail
 */

let grade = "";  // Variable to store the grade

// Use if-else ladder to determine grade based on percentage
if (percentage >= 90 && percentage <= 100) {
    grade = "A+";
} else if (percentage >= 75 && percentage < 90) {
    grade = "A";
} else if (percentage >= 60 && percentage < 75) {
    grade = "B";
} else if (percentage >= 40 && percentage < 60) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log(`\n🎓 Grade Assigned: ${grade}`);

// ============================================
// REPEAT YEAR DETERMINATION
// ============================================
/*
 * Critical Rule: If student fails in 2 or more subjects,
 * they must repeat the year REGARDLESS of average marks
 */

let status = "";  // Variable to store final status

// Check if student needs to repeat the year
if (failedSubjects >= 2) {
    status = "REPEAT YEAR";
    console.log("\n❌ RESULT: REPEAT YEAR");
    console.log(`   Reason: Failed in ${failedSubjects} or more subjects`);
} else if (grade === "Fail") {
    // If overall percentage is below 40 (even with < 2 failures)
    status = "FAIL";
    console.log("\n❌ RESULT: FAIL");
    console.log("   Reason: Overall percentage below 40%");
} else {
    // Student passes with their assigned grade
    status = "PASS";
    console.log("\n✅ RESULT: PASS");
    console.log(`   Grade: ${grade}`);
}

// ============================================
// FINAL SUMMARY
// ============================================
// Display complete summary in a formatted box
console.log("\n===== FINAL REPORT CARD =====");
console.log(`Student Performance Summary:`);
console.log(`---------------------------`);
console.log(`Total Marks:     ${totalMarks}/500`);
console.log(`Percentage:      ${percentage}%`);
console.log(`Average:         ${average}/100`);
console.log(`Grade:           ${grade}`);
console.log(`Failed Subjects: ${failedSubjects}`);
console.log(`Final Status:    ${status}`);
console.log(`=============================`);

// ============================================
// PERFORMANCE ANALYSIS
// ============================================
/*
 * Provide additional insights about student performance
 * Find highest and lowest scoring subjects
 */

console.log("\n--- Performance Analysis ---");

// Find highest marks using Math.max with spread operator
let highestMarks = Math.max(...marks);
let highestIndex = marks.indexOf(highestMarks);
console.log(`🏆 Highest Score: ${highestMarks} in ${subjects[highestIndex]}`);

// Find lowest marks using Math.min with spread operator
let lowestMarks = Math.min(...marks);
let lowestIndex = marks.indexOf(lowestMarks);
console.log(`⬇️ Lowest Score: ${lowestMarks} in ${subjects[lowestIndex]}`);

// ============================================
// TEST CASES FOR VERIFICATION
// ============================================
/*
 * Function to test different mark scenarios
 * This demonstrates how the analyzer works with various inputs
 */

console.log("\n\n--- Test Case Scenarios ---");

// Helper function to analyze any set of marks
function analyzeMarks(testMarks, testName) {
    console.log(`\n${testName}:`);
    console.log(`Marks: [${testMarks.join(", ")}]`);
    
    // Calculate total and average
    let total = 0;
    for (let i = 0; i < testMarks.length; i++) {
        total += testMarks[i];
    }
    let avg = total / testMarks.length;
    
    // Count failures
    let failures = 0;
    for (let i = 0; i < testMarks.length; i++) {
        if (testMarks[i] < 40) failures++;
    }
    
    // Determine grade
    let testGrade = "";
    if (avg >= 90) testGrade = "A+";
    else if (avg >= 75) testGrade = "A";
    else if (avg >= 60) testGrade = "B";
    else if (avg >= 40) testGrade = "C";
    else testGrade = "Fail";
    
    // Determine status
    let testStatus = failures >= 2 ? "REPEAT YEAR" : (testGrade === "Fail" ? "FAIL" : "PASS");
    
    console.log(`Average: ${Math.round(avg * 100) / 100}% | Grade: ${testGrade} | Failures: ${failures} | Status: ${testStatus}`);
}

// Test Case 1: Excellent student - all high marks
analyzeMarks([95, 92, 88, 90, 93], "Test 1: Excellent Student");

// Test Case 2: Failed in 2 subjects but overall average > 40
analyzeMarks([80, 35, 90, 38, 85], "Test 2: 2 Failures (Should Repeat)");

// Test Case 3: Failed in 1 subject, low average
analyzeMarks([50, 38, 45, 42, 48], "Test 3: 1 Failure, Low Average");

// Test Case 4: Borderline pass
analyzeMarks([40, 40, 40, 40, 40], "Test 4: Borderline Pass (Grade C)");

// Test Case 5: All subjects failed
analyzeMarks([35, 30, 25, 38, 32], "Test 5: All Failed (Repeat Year)");
