class EmailValidation{

    constructor(...params){         //Constructor for intialising variable
        this.emailId=params[0];
    }

    set emailId(emailId){                               //setter for setting email
        let emailIDRegex=RegExp('^(abc)[\\.]{1}[a-z,A-Z]{3}[\\@]{1}(bridgelabz)[\\.]{1}(co)[\\.][a-z]{2}$');            //Regex for validating Email Address
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
    let object=new EmailValidation("abc.xyz@bridgelabz.co.in");
    console.log(object.toString());
}
catch (e){
    console.log(e);
}