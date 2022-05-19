class RegexCheck{
    
    constructor(...params){         //constructer for intialising variables
        this.pinCode=params[0];
    }
    set pinCode(pinCode){
        let pinCodeRegex=RegExp('^[1-9]{1}[0-9]{5}$');          //defining regex pattern for pincode
        if(pinCodeRegex.test(pinCode)){                 //Checking input pincode matches according to Regex validation
            this._pinCode=pinCode;
        }
        else{
            throw Error('Enter proper pincode!');           //throwing error if pincode doesnot match
        }
    }
    get pinCode(){
        return this.pinCode;
    }
    toString(){             //toString() method to print Pincode
        return "Pincode is : "+this._pinCode;
    }
}
//UC1 Checking Pincode will be Six Digit Number
try{
    let object=new RegexCheck(400088);
    console.log(object.toString());
}
catch (e){
    console.log(e);
}
//UC2 : Restricting taking Pincode other than Numbers at Begining.
try{
    let object2=new RegexCheck("A400088");
    console.log(object2.toString());
}
catch (e){
    console.log(e);
}

//UC3 : Restricting taking Pincode other than Numbers at Ending.

try{
    let object2=new RegexCheck("40008B");
    console.log(object2.toString());
}
catch (e){
    console.log(e);
}