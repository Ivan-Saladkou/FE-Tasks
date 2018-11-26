var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        var message = "I can eat, mmm yummy!";
        return message;
    };
    Animal.prototype.sleep = function () {
        var message = "Zzzz...";
        return message;
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(nickName) {
        var _this = _super.call(this) || this;
        _this.name = nickName;
        return _this;
    }
    Cat.prototype.meow = function () {
        var message = "Meow";
        return message;
    };
    Cat.prototype.hunt = function () {
        var message = "tsss! There is a mouse...";
        return message;
    };
    Cat.prototype.getName = function () {
        return name;
    };
    Cat.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Cat;
}(Animal));
var cat = new Cat("kitten");
function namePet() {
    var nickname = prompt("Enter cat name");
    cat.setName(nickname);
    alert(cat.getName() + " is your pet's name");
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
