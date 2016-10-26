class Student {
	fullName: string;

	constructor(public firstName, public lastName) {
		this.fullName = firstName + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function sayHello(person: Person) {
	return "Hello " + person.firstName + " " +  person.lastName;
}

var user = new Student("Ilegitim","Vasile");

document.getElementById('content4').innerHTML = sayHello(user);