class Animal{
	constructor(){

	}
	Eat(){
		let message= "I can eat, mmm yummy!";
		return message;
	}

	Sleep(){
		let message="Zzzz...";
				return message;
	}

}
 class Cat extends Animal{
 
	constructor(name){
		super()
	 	this.name=name;
	}
	
	Meow(){
		let message="Meow";
		return message;
	}
	Hunt(){
		let message="tsss! There is a mouse..."
		
		return message;
	}
	GetName(){
		return name;
	}
	SetName(new_name){
		name=new_name;
	}
	
}
 
 var cat= new Cat("kitten");
 

function Name_pet(){
	let nickname=prompt("Enter cat name")
 	cat.SetName(nickname);
 	//cat.GetName();
 	alert(cat.GetName()+" is your pet's name")
}
function Eat_pet(){
	alert(cat.Eat());
}
function Sleep_pet(){
	alert(cat.Sleep());
}

 function Voice_pet(){
 	alert(cat.Meow());
 }
function Get_food(){
	alert(cat.Hunt());
}

