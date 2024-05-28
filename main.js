const person = [
    person1 = {
        firstName: "Jhon",
        lastName: "Doe",
        id: 5566,
        address: "Ha Noi",
        fullName: function() {
        return `${this.firstName} ${this.lastName}`;
        }
    },
    person2 = {
        firstName: "Hana",
        lastName: "Kim",
        id: 4466,
        address: "Sai Gon",
            fullName: function() {
            return `${this.firstName} ${this.lastName}`;
            }
    },
    person3 = {
        firstName: "David",
        lastName: "Lee",
        id: 1155,
        address: "Ha Noi",
            fullName: function() {
            return `${this.firstName} ${this.lastName}`;
            }
    },
    person4 = {
        firstName: "Alex",
        lastName: "Vo",
        id: 2210,
        address: "Da Nang",
            fullName: function() {
            return `${this.firstName} ${this.lastName}`;
            }
    }
];
// main
for(let i = 0; i< person.length; i++) {
    if(person[i].address === "Ha Noi"){
        console.log(`ID: ${person[i].id}, ${person[i].fullName()}`);
    }
};
let j = 0;
while(j < person.length) {
    if(person[j].address === "Da Nang") {
        console.log(`ID: ${person[j].id}, ${person[j].fullName()}`);
    }
    j++;
}