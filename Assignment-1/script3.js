/*
 * ============================================
 * WEATHER ALERT SYSTEM
 * ============================================
 * This program checks weather conditions and determines
 * if an outdoor event can proceed safely. It evaluates
 * temperature, humidity, and wind speed to make decisions.
 */

// ============================================
// INPUT VARIABLES - WEATHER CONDITIONS
// ============================================
/*
 * Current weather parameters to be checked
 * Modify these values to test different weather scenarios
 */
let temperature = 38;    // Temperature in degrees Celsius (°C)
let humidity = 75;       // Humidity as a percentage (%)
let windSpeed = 25;      // Wind speed in kilometers per hour (km/h)

console.log("===== WEATHER ALERT SYSTEM =====");
console.log("\n--- Current Weather Conditions ---");
console.log(`🌡️ Temperature: ${temperature}°C`);
console.log(`💧 Humidity: ${humidity}%`);
console.log(`💨 Wind Speed: ${windSpeed} km/h`);

// ============================================
// SAFETY CHECK - EVENT CANCELLATION LOGIC
// ============================================
/*
 * Check if weather conditions are safe for outdoor events
 * 
 * Cancellation Rules:
 * 1. Heat Alert: Temperature > 35°C AND Humidity > 70%
 * 2. Cold/Windy Alert: Temperature < 10°C OR Wind Speed > 40 km/h
 * 
 * If none of these conditions met → Event Approved
 */

let eventStatus = "";  // Variable to store the event decision
let alertType = "";    // Variable to store the type of alert

console.log("\n--- Safety Analysis ---");

// Rule 1: Check for dangerous heat conditions
// Both temperature AND humidity must exceed thresholds
if (temperature > 35 && humidity > 70) {
    eventStatus = "CANCEL";
    alertType = "Heat Alert";
    
    console.log("⚠️ DANGER DETECTED: Extreme Heat Conditions");
    console.log(`   Temperature: ${temperature}°C (> 35°C)`);
    console.log(`   Humidity: ${humidity}% (> 70%)`);
    console.log("   Risk: Heat exhaustion, dehydration");
}
// Rule 2: Check for cold or windy conditions
// Either temperature OR wind speed can trigger this
else if (temperature < 10 || windSpeed > 40) {
    eventStatus = "CANCEL";
    alertType = "Cold/Windy Alert";
    
    console.log("⚠️ DANGER DETECTED: Extreme Cold or Wind");
    
    // Identify which condition triggered the alert
    if (temperature < 10) {
        console.log(`   Temperature: ${temperature}°C (< 10°C)`);
        console.log("   Risk: Hypothermia, frostbite");
    }
    if (windSpeed > 40) {
        console.log(`   Wind Speed: ${windSpeed} km/h (> 40 km/h)`);
        console.log("   Risk: Flying debris, structural damage");
    }
}
// Rule 3: All conditions are safe
else {
    eventStatus = "APPROVED";
    alertType = "No Alert";
    
    console.log("✅ Weather conditions are SAFE");
    console.log("   All parameters within acceptable ranges");
}

// ============================================
// DISPLAY EVENT DECISION
// ============================================
// Print the final decision in a clear format
console.log("\n===== EVENT DECISION =====");

if (eventStatus === "CANCEL") {
    console.log(`\n❌ CANCEL: ${alertType}`);
    console.log("   The outdoor event cannot proceed safely.");
    console.log("   Please reschedule or move to indoor venue.");
} else {
    console.log("\n✅ EVENT APPROVED");
    console.log("   Weather conditions are suitable for outdoor activities.");
}

// ============================================
// TEMPERATURE-BASED ADVISORY
// ============================================
/*
 * Provide clothing/hydration advice based on temperature
 * regardless of whether event is cancelled or approved
 * 
 * Advisory Rules:
 * - Below 20°C → Wear Jacket (cold weather)
 * - 20-30°C → Comfortable (ideal temperature)
 * - Above 30°C → Stay Hydrated (hot weather)
 */

console.log("\n--- Temperature Advisory ---");

let advisory = "";  // Variable to store the advisory message

// Determine advisory based on temperature ranges
if (temperature < 20) {
    advisory = "Wear Jacket";
    console.log("🧥 Advisory: Wear Jacket");
    console.log("   Temperature is below comfortable range.");
    console.log("   Bring warm clothing to prevent cold exposure.");
} else if (temperature >= 20 && temperature <= 30) {
    advisory = "Comfortable";
    console.log("😊 Advisory: Comfortable");
    console.log("   Temperature is in the ideal range.");
    console.log("   Standard clothing is sufficient.");
} else {
    // temperature > 30
    advisory = "Stay Hydrated";
    console.log("💧 Advisory: Stay Hydrated");
    console.log("   Temperature is above comfortable range.");
    console.log("   Drink plenty of water and avoid prolonged sun exposure.");
}

// ============================================
// COMPREHENSIVE WEATHER REPORT
// ============================================
// Display a complete summary of all checks and recommendations
console.log("\n===== COMPLETE WEATHER REPORT =====");
console.log(`Weather Conditions:`);
console.log(`  Temperature:  ${temperature}°C`);
console.log(`  Humidity:     ${humidity}%`);
console.log(`  Wind Speed:   ${windSpeed} km/h`);
console.log(`\nEvent Status:   ${eventStatus}`);
console.log(`Alert Type:     ${alertType}`);
console.log(`Advisory:       ${advisory}`);
console.log(`====================================`);

// ============================================
// ADDITIONAL WEATHER INSIGHTS
// ============================================
/*
 * Provide additional context about weather conditions
 * to help understand the decision better
 */

console.log("\n--- Weather Classification ---");

// Classify temperature
if (temperature < 0) {
    console.log("🥶 Temperature: Freezing");
} else if (temperature < 10) {
    console.log("❄️ Temperature: Very Cold");
} else if (temperature < 20) {
    console.log("🌡️ Temperature: Cool");
} else if (temperature <= 30) {
    console.log("☀️ Temperature: Warm");
} else if (temperature <= 35) {
    console.log("🔥 Temperature: Hot");
} else {
    console.log("🌡️ Temperature: Very Hot");
}

// Classify humidity
if (humidity < 30) {
    console.log("💨 Humidity: Dry");
} else if (humidity <= 60) {
    console.log("💧 Humidity: Moderate");
} else if (humidity <= 80) {
    console.log("💦 Humidity: High");
} else {
    console.log("☔ Humidity: Very High");
}

// Classify wind speed
if (windSpeed < 10) {
    console.log("🍃 Wind: Calm");
} else if (windSpeed < 30) {
    console.log("💨 Wind: Moderate");
} else if (windSpeed < 50) {
    console.log("🌬️ Wind: Strong");
} else {
    console.log("🌪️ Wind: Very Strong");
}

// ============================================
// TEST CASES FOR VERIFICATION
// ============================================
/*
 * Function to test various weather scenarios
 * Demonstrates how the system responds to different conditions
 */

console.log("\n\n--- Test Case Scenarios ---");

// Helper function to check weather conditions
function checkWeather(temp, hum, wind, testName) {
    console.log(`\n${testName}:`);
    console.log(`Conditions: ${temp}°C, ${hum}% humidity, ${wind} km/h wind`);
    
    let status = "";
    let alert = "";
    
    // Check cancellation conditions
    if (temp > 35 && hum > 70) {
        status = "CANCEL";
        alert = "Heat Alert";
    } else if (temp < 10 || wind > 40) {
        status = "CANCEL";
        alert = "Cold/Windy Alert";
    } else {
        status = "APPROVED";
        alert = "No Alert";
    }
    
    // Determine advisory
    let adv = "";
    if (temp < 20) adv = "Wear Jacket";
    else if (temp <= 30) adv = "Comfortable";
    else adv = "Stay Hydrated";
    
    console.log(`Result: ${status} | Alert: ${alert} | Advisory: ${adv}`);
}

// Test Case 1: Perfect weather conditions
checkWeather(25, 50, 15, "Test 1: Perfect Weather");

// Test Case 2: Extreme heat with high humidity
checkWeather(38, 80, 10, "Test 2: Extreme Heat (Cancel)");

// Test Case 3: Very cold temperature
checkWeather(5, 40, 20, "Test 3: Very Cold (Cancel)");

// Test Case 4: High wind speed
checkWeather(22, 55, 45, "Test 4: Strong Winds (Cancel)");

// Test Case 5: Hot but low humidity (safe)
checkWeather(36, 50, 12, "Test 5: Hot but Low Humidity (Approved)");

// Test Case 6: Cold but above threshold
checkWeather(12, 60, 35, "Test 6: Cool but Safe (Approved)");

// Test Case 7: Borderline heat conditions
checkWeather(35, 70, 15, "Test 7: Borderline Heat (Approved)");
