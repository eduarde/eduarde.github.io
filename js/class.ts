class Student {

	fullname: string;

	constructor(public firstName, public lastName) {
		this.fullname = firstName + " " + lastName;
	}
}

function sayHello(user: Student) {
	return "Hello " + user.fullname;
}

var user = new Student("Trita","Fanita");

document.getElementById('content3').innerHTML = sayHello(user);