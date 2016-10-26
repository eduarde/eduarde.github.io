function sayHello(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Mirel", lastName: "Joacabine" };
document.getElementById('content2').innerHTML = sayHello(user);
