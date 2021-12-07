class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} like ${like}`
        })

        return bio;
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0];
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes=[]);
        this.position = position;
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes=[]);
        this.grade = grade;
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing';
        return `${this.firstName} is ${status} the class`
    }
    updateGrade(change) {
        this.grade += change;
    }
}

// const me = new Student('Ahmed', 'Radi', 20, 90, ['gaming','teaching']);
// console.log(me.getBio())
// me.updateGrade(-50)
// console.log(me.getBio())

const me = new Employee('Ahmed', 'Radi', 21, 'Gamer', ['games', 'study']);
me.fullName = 'Ahmed Radi'
console.log(me.getBio())
console.log(me.getYearsLeft())

// const me = new Employee('Ahmed', 'Radi', 21, ['games', 'study']);
// me.fullName('Mo la')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const player2 = new Person('ali', 'Radi', 21);
// console.log(player2.getBio())