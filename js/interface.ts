interface Person {
	firstName: string;
	lastName: string;
}

function sayHello(person: Person) {
	return "Hello " +  person.firstName + " " + person.lastName;
}

var user = { firstName: "Mirel", lastName: "Joacabine" };

document.getElementById('content2').innerHTML = sayHello(user);