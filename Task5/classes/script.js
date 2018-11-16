class Animal {
    constructor() {
        
    }
    eat() {
        let message = "I can eat, mmm yummy!";
        return message;
    }
    sleep() {
        let message = "Zzzz...";
        return message;
    }

}
class Cat extends Animal {

    constructor(name) {
        super()
        this.name = name;
    }

    meow() {
        let message = "Meow";
        return message;
    }
    hunt() {
        let message = "tsss! There is a mouse..."
        return message;
    }
    getName() {
        return name;
    }
    setName(newName) {
        name = newName;
    }

}

var cat = new Cat("kitten");

function namePet() {
    let nickname = prompt("Enter cat name")
    cat.setName(nickname);
    alert(cat.getName() + " is your pet's name")
}

function eatPet() {
    alert(cat.eat());
}

function sleepPet() {
    alert(cat.sleep());
}

function voicePet() {
    alert(cat.meow());
}

function getFood() {
    alert(cat.hunt());
}