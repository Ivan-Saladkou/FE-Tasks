function Animal() {
    this.eat = function() {
        let message = "I can eat, mmm yummy!";
        return message;
    }
    this.sleep = function() {
        let message = "Zzzz...";
        return message;
    }

}

function Cat(name) {
    Animal.apply(this, arguments);
    let Name = name;
    this.meow = function() {
        let message = "Meow";

        return message;
    }
    this.hunt = function() {
        let message = "tsss! There is a mouse..."

        return message;
    }
    this.getName = function() {
        return Name;
    }
    this.setName = function(newName) {
        Name = newName;
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