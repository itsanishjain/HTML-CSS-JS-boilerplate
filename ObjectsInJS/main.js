const person = {
  name: "Anish",
  age: 21,
  status: function () {
    console.log("Learning and sharing WEB3");
    return "Nope"
  },
};


// console.log(person.status())


class Human{
    constructor(name){
        this.name=name
    }
}

const h = new Human("Anish Jain")
console.log("name is",h.name);

h.name = "Mark";
console.log("Update name is",h.name)