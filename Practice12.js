class EmployeePayrollData{
    startDate;
    constructor(...params){                                     //Intialising variables using Spread operator
        this.id =params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
    get name(){
        return this.name;
    }
    set name(name){                                         //Setter for setting name
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');                //Regex for name
        if(nameRegex.test(name)){
        this._name=name;
        }
        else{
            throw Error('Name incorrect!');                 //throwing error if given name not matches regex
        } 
    }


    get id(){
        return this.id;
    }


    set id(id){                                         //Setting id of Employee using Setter
        let idRegex=RegExp('^[1-9]{1,}$');                  //Regex for Salary
        if(idRegex.test(id)){                           //Checking given name matches regex
            this._id=id;
        }else 
        {
            throw Error('ID not Correct!');             //Trowing error if id not matches regex
        }
    }

    get salary(){
        return this.salary;
    }
    set salary(salary){
        let salaryRegex=RegExp('^[0-9]{4,}$');
        if(salaryRegex.test(salary)){
            this._salary=salary;
        }
        else{
            throw Error('Salary not Correct!')
        }
    }
    get gender (){
        return this.gender;
    }
    set gender(gender){
        let genderRegex =RegExp('^[M F]{1}$');
        if(genderRegex.test(gender)){
            this._gender=gender;
        }
        else {
            throw Error('Gender is not Correct!')
        }
    }

    /**
     * 
     * toString() method to return string object of variables
     */ 
    toString(){
        const options ={ year: 'numeric',month:'long',day: 'numeric'};
        const empDate=this.startDate==undefined? "undefined": this.startDate.toLocaleDateString("en-US",options);
        return "id : "+this._id+" Name: "+this._name+" salary: "+this._salary+" Gender: "+this._gender+" Start Date : "+empDate;
    }
}
/*
try, catch block for catching errors thrown in setter
*/
try{
    let employeePayrollData = new EmployeePayrollData(1,"Mark", 300000,"M",new Date());
    console.log(employeePayrollData.toString());
}
catch (e){
        console.error(e);
}
let newEmployeePayrollData= new EmployeePayrollData(1,"Terissa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString()); 