#!/usr/bin/env node

import inquirer from "inquirer";

//initialize user balance and pin code
let myBalance = 10000;
let myPin = 1234;

console.log("welcome To Code With Sobia - ATM Machine");


let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      type: "number",
      message: "Enter your pin code:" , 
    }
])

if (pinAnswer.pin === myPin){
console.log("Pin is Correct, Login Successfully");
//console.log(`Current Account Balance is ${myBalance}`);

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation",
        choices: ["Withdraw Amount" , "Check Balance"]
    }
])
if(operationAns.operation === "Withdraw Amount"){
let amountAns = await inquirer.prompt([
{
    name: "amount",
    type: "number",
    message: "Enter the amount to Withdraw:",
}
])
if(amountAns.amount > myBalance){
    console.log("Insufficient Balance");
}
else{
    myBalance -= amountAns.amount;
    console.log(`${amountAns.answer} Withdraw Successfully`)
    console.log(`your remaining Balance is: ${myBalance}`);
}
}else if(operationAns.operation === "check Balance"){
    console.log(`Your Current Balance is: ${myBalance}`);
}
}
else{
    console.log("Pin is incorrect, Try Again");
}