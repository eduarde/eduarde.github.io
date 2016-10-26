var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function sayHello(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student("Ilegitim", "Vasile");
document.getElementById('content4').innerHTML = sayHello(user);
