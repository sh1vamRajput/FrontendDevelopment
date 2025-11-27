
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    // Return Grade
    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }

    // Display Student Result
    printResult() {
        console.log(`Name: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
        console.log(`Grade: ${this.getGrade()}`);
        console.log("---------------------------");
    }
}

const s1 = new Student("Shivam", [85, 90, 88, 92]);
const s2 = new Student("Rahul", [60, 55, 70, 65]);
const s3 = new Student("Aditi", [40, 45, 38, 50]);

s1.printResult();
s2.printResult();
s3.printResult();
