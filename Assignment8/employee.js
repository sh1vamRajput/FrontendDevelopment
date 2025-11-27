// Parent class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is doing regular employee tasks in ${this.department}.`;
    }
}

// Child class (inherits Employee)
class Manager extends Employee {
    constructor(name, department) {
        super(name, department); // call parent constructor
    }

    // Overriding work() method
    work() {
        return `${this.name} is managing the ${this.department} department and leading the team.`;
    }
}

const e1 = new Employee("Rahul", "IT");
const m1 = new Manager("Shivam", "IT");

// Storing objects in same array (polymorphism)
const staff = [e1, m1];

staff.forEach(person => {
    console.log(person.work()); // runtime polymorphism
});
