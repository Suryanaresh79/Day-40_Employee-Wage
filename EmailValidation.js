class EmailValidation{
    
    constructor(...params){         //Constructor for intialising variable
        this.emailId=params[0];
    }

    set emailId(emailId){                               //setter for setting email
        let emailIDRegex=RegExp('^(abc)[\\.]{1}[a-z,A-Z_,+-.]{3}[\\@]{1}(bridgelabz)[\\.]{1}(co)[\\.][a-z]{2}$');            //Regex for validating Email Address
        if(emailIDRegex.test(emailId)){
            this._emailId=emailId;
        }
        else{
            throw Error('Enter proper Email ID!');                                          //Throwing error if email is not correct
        }
    }
    get emailId(){
        return this.emailId;
    }
    toString(){
        return "Email ID is : "+this._emailId;                  //toString() method to print EmailID
    }
}
//UC1 Checking Email Id for abc.xyz@bridgelabz.co.in
try{                                                                        //try catch block to handle errors when user enter wrong emailID
    let object1=new EmailValidation("abc.xyz@bridgelabz.co.in");
    console.log(object1.toString());
}
catch (e){
    console.log(e);
}
//UC2 Ensure @ and validating manadatary bridgelabz 
try{                                                                        //try catch block to handle errors when user enter wrong emailID
    let object2=new EmailValidation("abc.xyz@google.co.in");                     //insted of mandatory bridgelabz part putting google to throw error
    console.log(object2.toString());
}
catch (e){
    console.log(e);
}
try{                                                                        //try catch block to handle errors when user enter wrong emailID
    let object3=new EmailValidation("abc.xyz!bridgelabz.co.in");             //insted of @ symbol inputting ! symbol to throw error 
    console.log(object3.toString());
}
catch (e){
    console.log(e);
}
//UC3 Ensuring "." after bridgelabz third part i.e co part

try{                                                                        //try catch block to handle errors when user enter wrong emailID
    let object4=new EmailValidation("abc.xyz@bridgelabz.co.in");                     //insted of mandatory bridgelabz part putting google to throw error
    console.log(object4.toString());
}
catch (e){
    console.log(e);
}
try{                                                                        //try catch block to handle errors when user enter wrong emailID
    let object5=new EmailValidation("abc.xyz!bridgelabz.com.in");             //insted of @ symbol inputting ! symbol to throw error 
    console.log(object5.toString());
}
catch (e){
    console.log(e);
}

//UC4 Handling optional part xyz

try{                                                                        //try catch block to handle errors when user enter wrong emailID
    let object6=new EmailValidation("abc.ab+@bridgelabz.co.in");             //handling optional part 
    console.log(object6.toString());
}
catch (e){
    console.log(e);
}