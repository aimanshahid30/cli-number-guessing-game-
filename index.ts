#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWellcome to aiman's - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() *5 + 1);

let answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter your guessed number from 1 to 6 :",
    }
]);

if (answer.UserGuessedNumber === randomNumber){

    console.log("Congratulations! you guessed correct number.");
}
else{
    console.log("Ops! Sorry you guessed a wrong number");
}

