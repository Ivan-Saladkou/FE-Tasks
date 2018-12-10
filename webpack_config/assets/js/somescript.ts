class User{
    constructor(n){
        this.name=n;
    }
    private name:string;
    whoAreYou():void {
        console.log("User name is "+this.name)
    }
}
 let user=new User("Vasia");
 user.whoAreYou();