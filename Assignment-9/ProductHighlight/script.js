/**
 * PRODUCT HIGHLIGHT E-COMMERCE SCRIPT
 * jQuery-based interactive product card functionality
 */

// jQuery Document Ready - executes when DOM is fully loaded
$(document).ready(function() {
    
    // SCENARIO 1: Click on product to highlight background
    setupProductHighlight();
    
    // SCENARIO 2: Hover over product to show additional details
    setupProductHover();
    
    // SCENARIO 3: Toggle favorite/selected class on heart icon click
    setupFavoriteToggle();
    
    // SCENARIO 4: Apply special styles to discounted products (already in CSS)
    // Using attribute selector: .product-card[data-discount]
    applyDiscountStyles();
    
    // SCENARIO 5: Show alert for out-of-stock products
    setupStockAlert();
});

/**
 * SCENARIO 1: Product Highlight on Click
 * When user clicks a product card, toggle highlighted background
 */
function setupProductHighlight() {
    // Use event delegation for better performance
    $('.product-card').on('click', function(event) {
        // Prevent highlighting when clicking on favorite icon or button
        if ($(event.target).hasClass('favorite-icon') || 
            $(event.target).hasClass('add-to-cart')) {
            return;
        }
        
        // Toggle 'highlighted' class on clicked product
        $(this).toggleClass('highlighted');
        
        // Optional: Remove highlight from other products (uncomment for single selection)
        // $('.product-card').not(this).removeClass('highlighted');
        
        // Get product name for console feedback
        const productName = $(this).find('.product-name').text();
        console.log('Product clicked: ' + productName);
    });
}

/**
 * SCENARIO 2: Show Additional Details on Hover
 * Display product details when user hovers over product card
 */
function setupProductHover() {
    // Use mouseenter event to show details
    $('.product-card').on('mouseenter', function() {
        // Find the product-details div within this specific card
        // Use slideDown for smooth reveal animation (400ms)
        $(this).find('.product-details').slideDown(400);
    });
    
    // Use mouseleave event to hide details
    $('.product-card').on('mouseleave', function() {
        // Find the product-details div and hide it
        // Use slideUp for smooth hide animation (400ms)
        $(this).find('.product-details').slideUp(400);
    });
}

/**
 * SCENARIO 3: Toggle Favorite/Selected Class
 * When user clicks the heart icon, toggle selected state
 */
function setupFavoriteToggle() {
    // Click event on favorite icon
    $('.favorite-icon').on('click', function(event) {
        // Prevent the click from bubbling to parent product-card
        event.stopPropagation();
        
        // Find the parent product card
        const productCard = $(this).closest('.product-card');
        
        // Toggle 'selected' class on the product card
        productCard.toggleClass('selected');
        
        // Change heart icon based on selected state
        if (productCard.hasClass('selected')) {
            // Filled heart for selected/favorite
            $(this).text('♥');
            
            // Add bounce animation
            $(this).css('transform', 'scale(1.3)');
            setTimeout(() => {
                $(this).css('transform', 'scale(1)');
            }, 200);
            
            console.log('Added to favorites');
        } else {
            // Empty heart for non-selected
            $(this).text('♡');
            console.log('Removed from favorites');
        }
    });
}

/**
 * SCENARIO 4: Apply Discount Styles Using Attribute Selector
 * Enhance visual appearance of discounted products
 */
function applyDiscountStyles() {
    // Select all products with data-discount attribute
    // This demonstrates jQuery attribute selector
    $('[data-discount]').each(function() {
        // Get discount percentage from data attribute
        const discount = $(this).attr('data-discount');
        
        // Add visual enhancement - pulse animation on load
        $(this).css({
            'animation': 'pulse 2s infinite',
            'animation-delay': Math.random() + 's'
        });
        
        // Log discounted products
        const productName = $(this).find('.product-name').text();
        console.log(`${productName} has ${discount}% discount`);
    });
    
    // Add CSS animation for pulse effect dynamically
    if (!$('#discount-animation').length) {
        $('<style id="discount-animation">')
            .text(`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                }
            `)
            .appendTo('head');
    }
}

/**
 * SCENARIO 5: Alert for Out-of-Stock Products
 * Show alert message when user tries to interact with out-of-stock items
 */
function setupStockAlert() {
    // Select products with data-stock="false" attribute
    $('[data-stock="false"]').on('click', function(event) {
        // Prevent highlighting for out-of-stock products
        event.stopPropagation();
        
        // Get product name
        const productName = $(this).find('.product-name').text();
        
        // Get product ID
        const productId = $(this).attr('data-id');
        
        // Check if it has a discount
        const hasDiscount = $(this).attr('data-discount');
        let discountMsg = '';
        
        if (hasDiscount) {
            discountMsg = `\n\n💰 Good news: This item has ${hasDiscount}% OFF when it's back in stock!`;
        }
        
        // Display alert with product information
        alert(`⚠️ OUT OF STOCK\n\n${productName} is currently unavailable.\n\nProduct ID: ${productId}\n\nWe'll notify you when it's back in stock!${discountMsg}`);
        
        // Add shake animation to indicate unavailable
        $(this).addClass('shake');
        setTimeout(() => {
            $(this).removeClass('shake');
        }, 500);
    });
    
    // Add shake animation CSS
    if (!$('#shake-animation').length) {
        $('<style id="shake-animation">')
            .text(`
                .shake {
                    animation: shake 0.5s;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }
            `)
            .appendTo('head');
    }
    
    // Also show alert when clicking disabled button
    $('[data-stock="false"] .add-to-cart').on('click', function(event) {
        event.stopPropagation();
        const productCard = $(this).closest('.product-card');
        const productName = productCard.find('.product-name').text();
        
        alert(`❌ Cannot add "${productName}" to cart.\n\nThis product is currently out of stock.`);
    });
}

/**
 * ADDITIONAL ENHANCEMENT: Add to Cart functionality
 * Provides feedback when adding items to cart
 */
$('.add-to-cart').not(':disabled').on('click', function(event) {
    event.stopPropagation();
    
    const productCard = $(this).closest('.product-card');
    const productName = productCard.find('.product-name').text();
    const productPrice = productCard.find('.product-price').text();
    
    // Change button text temporarily
    const originalText = $(this).text();
    $(this).text('✓ Added!').css('background', '#27ae60');
    
    // Show success message
    console.log(`Added to cart: ${productName} - ${productPrice}`);
    
    // Reset button after 2 seconds
    setTimeout(() => {
        $(this).text(originalText).css('background', '');
    }, 2000);
});
