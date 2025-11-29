// Array of motivational quotes for greeting changes
const motivationalQuotes = [
    "Believe you can and you're halfway there! 💪",
    "Success is not final, failure is not fatal! 🌟",
    "The only way to do great work is to love what you do! ❤️",
    "Dream big, start small, act now! 🚀",
    "Your limitation—it's only your imagination! 🎯"
];

// Counter to track which quote to show next
let quoteIndex = 0;

// Store original greeting for reference
let originalGreeting = "";

// jQuery Document Ready - executes when DOM is fully loaded
$(document).ready(function() {
    
    // SCENARIO 1: Display personalized greeting based on time of day
    setTimeBasedGreeting();
    
    // SCENARIO 2: Change greeting to motivational quote on button click
    $('#changeGreeting').on('click', function() {
        changeToMotivationalQuote();
    });
    
    // SCENARIO 3: Toggle visibility of welcome message
    $('#toggleMessage').on('click', function() {
        toggleWelcomeMessage();
    });
    
    // SCENARIO 4: Show alert when greeting is clicked
    $('#greeting').on('click', function() {
        showGreetingAlert();
    });
});

/**
 * FUNCTION 1: Set greeting based on current time
 * Morning: 5 AM - 11:59 AM
 * Afternoon: 12 PM - 5:59 PM
 * Evening: 6 PM - 4:59 AM
 */
function setTimeBasedGreeting() {
    // Get current hour (0-23)
    const currentHour = new Date().getHours();
    let greeting = "";
    let icon = "";
    
    // Determine greeting and icon based on time
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning!";
        icon = "🌅";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good Afternoon!";
        icon = "☀️";
    } else {
        greeting = "Good Evening!";
        icon = "🌙";
    }
    
    // Store original greeting
    originalGreeting = greeting;
    
    // Update DOM elements using jQuery
    $('#greeting').text(greeting);
    $('#time-icon').text(icon);
    
    // Add fade-in animation effect
    $('#greeting').hide().fadeIn(1000);
    $('#time-icon').hide().fadeIn(1000);
}

/**
 * FUNCTION 2: Change greeting to a motivational quote
 * Cycles through array of quotes
 */
function changeToMotivationalQuote() {
    // Get current quote from array
    const quote = motivationalQuotes[quoteIndex];
    
    // Update greeting with fade effect
    $('#greeting').fadeOut(300, function() {
        $(this).text(quote).fadeIn(300);
    });
    
    // Update icon to a star
    $('#time-icon').fadeOut(300, function() {
        $(this).text("✨").fadeIn(300);
    });
    
    // Move to next quote (cycle back to 0 if at end)
    quoteIndex = (quoteIndex + 1) % motivationalQuotes.length;
    
    // Change button text to show different action
    $('#changeGreeting').text('Next Quote');
}

/**
 * FUNCTION 3: Toggle visibility of welcome message
 * Uses jQuery's slideToggle for smooth animation
 */
function toggleWelcomeMessage() {
    // Toggle visibility with slide animation (400ms duration)
    $('#welcomeMessage').slideToggle(400);
    
    // Change button text based on visibility state
    if ($('#welcomeMessage').is(':visible')) {
        $('#toggleMessage').text('Hide Welcome Message');
    } else {
        $('#toggleMessage').text('Show Welcome Message');
    }
}

/**
 * FUNCTION 4: Show alert when greeting is clicked
 * Displays current greeting text in an alert
 */
function showGreetingAlert() {
    // Get current greeting text
    const currentGreeting = $('#greeting').text();
    
    // Show alert with greeting
    alert('🎉 You clicked the greeting!\n\nCurrent message: ' + currentGreeting);
    
    // Add a bounce animation effect using jQuery
    $('#greeting').addClass('bounce');
    
    // Add temporary scale animation
    $('#greeting').css('transform', 'scale(1.1)');
    setTimeout(function() {
        $('#greeting').css('transform', 'scale(1)');
    }, 200);
}
