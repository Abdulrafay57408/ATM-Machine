#! /usr/bin/env node

import inquirer from "inquirer"

let Balance = 15000
let atmPin = 1234

// Welcome Message
console.log("\n\tWelcome to our ATM Machine\n")

// Ask to Enter pin from user
let pinMessage = await inquirer.prompt([
    {
        name : "enterPin",
        message : "Enter your ATM pin: ",
        type : "number"
    }
])

// Check Pin code

if (pinMessage.enterPin == atmPin){
    console.log("\nPin is correct, successfully! login to your account.")

    // provide operations after login
    while (true){
        let optionsMessage = await inquirer.prompt([
            {
                name: "options",
                message:"Choose an Operation: ",
                type:"list",
                choices:["Check Balance", "Fast Cash", "Withdraw Amount"]
            }
        ])

        // For Check Balance
        if (optionsMessage.options == "Check Balance"){
            console.log(`\nYour current Balance is: Rs ${Balance}`)
        
        } 
        
        // For Withdraw Amount
        else if (optionsMessage.options == "Withdraw Amount"){
            let amount = await inquirer.prompt({
                name:"enterAmount",
                message: "\nEnter an amount to withdraw: ",
                type:"number"
            })
            if (amount.enterAmount > Balance){
                console.log("\nInsufficient Balance!")
            } else {
                console.log(`\nRs ${amount.enterAmount} withdraw successfully!\nYour Remaining balance is: Rs ${Balance - amount.enterAmount}`)
                console.log("Thank You!")
                break
            }

        } 
        
        // For Fast Cash
        else if (optionsMessage.options == "Fast Cash") {

            let fastCash = await inquirer.prompt({
                name: "fastCashAmount",
                message:"Choose an Amount to Withdraw",
                type:"list",
                choices:["Rs 500","Rs 1000", "Rs 2000","Rs 5000","Rs 10000","Rs 20000","Rs 25000" ]
            })

            if (fastCash.fastCashAmount == "Rs 500"){
                let withdrawCash = 500
                if(withdrawCash > Balance){
                    console.log("\nInsufficient Balance")
                } else {
                    console.log(`\nRs ${withdrawCash} withdraw successfully!\nYour Remaining balance is: Rs ${Balance - withdrawCash}`)
                    console.log("Thank You!")
                    break
                }                
            } else if (fastCash.fastCashAmount == "Rs 1000"){
                let withdrawCash = 1000
                if(withdrawCash > Balance){
                    console.log("\nInsufficient Balance")
                } else {
                    console.log(`\nRs ${withdrawCash} withdraw successfully!\nYour Remaining balance is: Rs ${Balance - withdrawCash}`)
                    console.log("Thank You!")
                    break
                }                
            } else if (fastCash.fastCashAmount == "Rs 2000"){
                let withdrawCash = 2000
                if(withdrawCash > Balance){
                    console.log("\nInsufficient Balance")
                } else {
                    console.log(`\nRs ${withdrawCash} withdraw successfully!\nYour Remaining balance is: Rs ${Balance - withdrawCash}`)
                    console.log("Thank You!")
                    break
                }                
            } else if (fastCash.fastCashAmount == "Rs 5000"){
                let withdrawCash = 5000
                if(withdrawCash > Balance){
                    console.log("\nInsufficient Balance")
                } else {
                    console.log(`\nRs ${withdrawCash} withdraw successfully!\nYour Remaining balance is: Rs ${Balance - withdrawCash}`)
                    console.log("Thank You!")
                    break
                }                
            } else if (fastCash.fastCashAmount == "Rs 10000"){
                let withdrawCash = 10000
                if(withdrawCash > Balance){
                    console.log("\nInsufficient Balance")
                } else {
                    console.log(`\nRs ${withdrawCash} withdraw successfully!\nYour Remaining balance is: Rs ${Balance - withdrawCash}`)
                    console.log("Thank You!")
                    break
                }                
            } else if (fastCash.fastCashAmount == "Rs 20000"){
                let withdrawCash = 20000
                if(withdrawCash > Balance){
                    console.log("\nInsufficient Balance")
                } else {
                    console.log(`\nRs ${withdrawCash} withdraw successfully!\nYour Remaining balance is: Rs ${Balance - withdrawCash}`)
                    console.log("Thank You!")
                    break
                }                
            } else if (fastCash.fastCashAmount == "Rs 25000"){
                let withdrawCash = 25000
                if(withdrawCash > Balance){
                    console.log("\nInsufficient Balance")
                } else {
                    console.log(`\nRs ${withdrawCash} withdraw successfully!\nYour Remaining balance is: Rs ${Balance - withdrawCash}`)
                    console.log("Thank You!")
                    break
                }                
            }
        }

        // Ask for Exit or not
        let break1 = await inquirer.prompt(
            {
                name:"break2",
                message:"Do you want to Exit?",
                type:"list",
                choices:["yes","no"]
            }
        )

        if (break1.break2 == "yes"){
            console.log("\nThank You!")
            break
        }
    }
}

// If pin code wrong 
else{
    console.log("Pin is Incorrect, Please Enter correct pin.")
}
