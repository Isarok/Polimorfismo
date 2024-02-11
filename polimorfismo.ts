// Polymorphism of Subtypes

// We define a base class called Character
class Character {
    // Method to take damage
    receiveDamage() {
        console.log("Ouch! The character received damage.");
    }

    // Method to be healed
    beHealed() {
        console.log("Feeling better! The character was healed.");
    }
}

// We define a subclass called Hero that extends Character
class Hero extends Character {
    // Method to use a special ability
    useSpecialAbility() {
        console.log("The hero used their special ability!");
    }
}

// We create an instance of Hero and call its methods
const myHero = new Hero();
myHero.receiveDamage();
myHero.beHealed();

// Parametric Polymorphism

// We define a generic function called printElements
function printElements<T>(elements: T[]): void {
    // We iterate over the elements and print them
    for (let element of elements) {
        console.log(element);
    }
}

// We create some arrays of different types
const tasks: string[] = ["Buy groceries", "Call the doctor", "Send an email"];
const numbers: number[] = [1, 2, 3, 4, 5];

// We call the printElements function with different types of arrays
printElements(tasks);
printElements(numbers);

// Ad Hoc Polymorphism

// We define a function called calculateValue that sums the prices of a list of products
function calculateValue(products: { name: string, price: number }[]): number {
    let total = 0;
    // We iterate over the products and sum their prices
    for (let product of products) {
        total += product.price;
    }
    return total;
}

// We create some arrays of different types of products
const appliances = [{ name: "Refrigerator", price: 800 }, { name: "Television", price: 600 }];
const furniture = [{ name: "Sofa", price: 500 }, { name: "Table", price: 300 }];
const electronics = [{ name: "Phone", price: 400 }, { name: "Tablet", price: 300 }];

// We calculate the total value of each type of product
console.log("Total value of appliances:", calculateValue(appliances));
console.log("Total value of furniture:", calculateValue(furniture));
console.log("Total value of electronics:", calculateValue(electronics));

// Interface Inclusion Polymorphism

// We define an interface called Employee with common methods
interface Employee {
    calculateSalary(): number;
    printDetails(): void;
}

// We implement the interface for different types of employees
class FullTimeEmployee implements Employee {
    calculateSalary() {
        return 2000;
    }

    printDetails() {
        console.log("Full-time employee");
    }
}

class PartTimeEmployee implements Employee {
    calculateSalary() {
        return 1000;
    }

    printDetails() {
        console.log("Part-time employee");
    }
}

class Consultant implements Employee {
    calculateSalary() {
        return 50; // Hourly rate
    }

    printDetails() {
        console.log("Independent consultant");
    }
}

// We create instances of different types of employees
const fullTimeEmployee = new FullTimeEmployee();
const partTimeEmployee = new PartTimeEmployee();
const consultant = new Consultant();

// We call the methods of each type of employee
console.log("Salary of full-time employee:", fullTimeEmployee.calculateSalary());
console.log("Salary of part-time employee:", partTimeEmployee.calculateSalary());
console.log("Fees of consultant:", consultant.calculateSalary());
