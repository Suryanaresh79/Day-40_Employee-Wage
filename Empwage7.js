/*getWorkingHours() method to check wether employee present full time ,part time or absent*/
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return IS_FULL_TIME;
        default:
            return 0;
    }
}

/*calcDailyWage() method to clauculate total wage*/

function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
/**Declaring variables  */
const IS_PART_TIME= 1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const  NO_OF_WORKING_DAYS =20;
const MAX_HRS_IN_MONTH=100;
const NUM_OF_WORKING_DAYS=10;
let empDailyWageArr=new Array();
let empDailyWageMap=new Map();

let totalEmphrs=0;
let totalWorkingDays=0;

/**Running while loop until max hours or total working days condition meets  */

while(totalEmphrs<=MAX_HRS_IN_MONTH && totalWorkingDays<=NUM_OF_WORKING_DAYS){
    totalWorkingDays++
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmphrs +=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}

let totalEmpWage=0;

/**sum() method to take dailyWage as input and returning total wage */
function sum(dailyWage){
    return totalEmpWage +=dailyWage;
}
empDailyWageArr.forEach(sum);

/**Printing result of UC7A */

console.log("UC7A - Total Days : "+totalWorkingDays+"Total Hrs : "+totalEmphrs+"Emp Wage : "+totalEmpWage);

function totalWages(totalWages,dailyWage){
    return totalWages+dailyWage;
}
/**caluculating totalWage using reduce  */
console.log("UC7A -Emp Wage with reduce : "+empDailyWageArr.reduce(totalWages,0));

//7B Showing Day along with DailyWage using Map Helper


let dailyCntr =0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}

let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map ");
console.log(mapDayWithWageArr);

//7C Showing Days when Fulltime Wage

function fulltimeWage(dailyWage){
    return dailyWage.includes("80");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");

console.log(fullDayWageArr);

//UC 7D Finding First occurance of Fulltime Wage

function findFulltimeWage(dailyWage){
    return dailyWage.includes("80");
}

console.log("UC7D - First time Fulltime Wage was earned on Day : "+mapDayWithWageArr.find(findFulltimeWage));

//UC 7E  Checking every element of fulltime wage is realy holding full time Wage

function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("80");
}

console.log("UC7E - Check All Elements have Full Time Wage : "+fullDayWageArr.every(isAllFulltimeWage));

//UC7F Checking if there is any Part time Wage

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes(40);
}

console.log("UC 7 F - Check if any Part Time Present or not : "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G finding the no of Days Employee Worked

function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}

console.log("UC7G - Number of Days Emp Worked : "+empDailyWageArr.reduce(totalDaysWorked,0));


//UC7A total wage using map

console.log("UC7A - Emp Wage Map Total Hrs : "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));