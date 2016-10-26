var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = firstName + " " + lastName;
    }
    return Student;
}());
function sayHello(user) {
    return "Hello " + user.fullname;
}
var user = new Student("Trita", "Fanita");
document.getElementById('content3').innerHTML = sayHello(user);
