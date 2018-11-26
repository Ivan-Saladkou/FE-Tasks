class Animal {
    constructor() {
        
    }
    eat():string {
        let message:string = "I can eat, mmm yummy!";
        return message;
    }
    sleep() {
        let message :string = "Zzzz...";
        return message;
    }

}
class Cat extends Animal {
    name: string;

    constructor(nickName:string) {
        super()
        this.name = nickName;
    }

    meow() {
        let message:string = "Meow";
        return message;
    }
    hunt() {
        let message :string= "tsss! There is a mouse..."
        return message;
    }
    getName() {
        return name;
    }
    setName(newName) {
        this.name = newName;
    }

}

var cat = new Cat("kitten");

function namePet():void {
    let nickname = prompt("Enter cat name")
    cat.setName(nickname);
    alert(cat.getName() + " is your pet's name")
}

function eatPet():void {
    alert(cat.eat());
}

function sleepPet():void {
    alert(cat.sleep());
}

function voicePet():void {
    alert(cat.meow());
}

function getFood():void {
    alert(cat.hunt());
}