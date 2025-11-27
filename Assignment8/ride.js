
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}


class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);     // calling User constructor
        this.vehicle = vehicle;
    }
}


class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    // Fare calculation: ₹10 per km
    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance! Distance must be a positive number.");
        }

        return this.distance * 10;
    }
}

// ----------------------------------------------
// Scenario Demonstration with Error Handling
// ----------------------------------------------

const driver1 = new Driver("Shivam", 4.9, "Maruti Suzuki Swift");
const user1 = new User("Rahul", 4.4);

// Valid trip
const trip1 = new Trip("Mathura", "Agra", 55);

// Invalid trip (negative distance)
const trip2 = new Trip("Delhi", "Noida", -10);

try {
    console.log("Fare for Trip 1:", trip1.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("Fare for Trip 2:", trip2.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}
