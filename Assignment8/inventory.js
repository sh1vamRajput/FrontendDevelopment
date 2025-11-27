// Sample product inventory
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Headphones", category: "Electronics", price: 2000, stock: 50 },
    { id: 3, name: "Shirt", category: "Clothing", price: 700, stock: 8 },
    { id: 4, name: "Shoes", category: "Footwear", price: 1500, stock: 3 },
    { id: 5, name: "Watch", category: "Accessories", price: 2500, stock: 2 }
];

function getLowStockProducts(products) {
    return products.filter(p => p.stock < 10);
}

function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => 
        total + (product.price * product.stock)
    , 0);
}

function groupByCategory(products) {
    return products.reduce((group, product) => {
        if (!group[product.category]) {
            group[product.category] = [];
        }
        group[product.category].push(product);
        return group;
    }, {});
}

console.log("Low Stock Products (<10):");
console.log(getLowStockProducts(products));

console.log("\nProducts Sorted by Price:");
console.log(sortProductsByPrice([...products])); 

console.log("\nTotal Inventory Value:");
console.log(calculateTotalInventoryValue(products));

console.log("\nProducts Grouped by Category:");
console.log(groupByCategory(products));
