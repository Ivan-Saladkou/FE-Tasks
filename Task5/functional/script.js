function Animal(){
	this.Eat=function(){
		let message= "I can eat, mmm yummy!";
		
		return message;
	}
	this.Sleep=function(){
		let message="Zzzz...";
		
		return message;
	}

}

function Cat(name){
	Animal.apply(this, arguments);
	let Name = name;
	this.Meow=function(){
		let message="Meow";
		 
		return message;
	}
	this.Hunt=function(){
		let message="tsss! There is a mouse..."
		
		return message;
	}
	this.GetName= function(){
		return Name;
	}
	this.SetName= function(new_name){
		Name=new_name;
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

