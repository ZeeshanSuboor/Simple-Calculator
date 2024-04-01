#! /usr/bin/env node
console.log("This is my simple calculator code");

import inquirer from "inquirer";

let num1 = await inquirer.prompt([{
    name: "name",
    message: "Enter first number: ?",
    type: "input",
}]);

//console.log("hello, " + num1.name + "!");

let num2 = await inquirer.prompt([{
    name: "name",
    message: "Enter second number: ?",
    type: "input",
}]);
//let num3 = +num1.name + +num2.name;
//console.log("The sum of " + num1.name + " and " + num2.name + " is " + num3);

//let num4 = +num1.name - +num2.name;
//console.log("The difference of " + num1.name + " and " + num2.name + " is " + num4);


import select, { Separator } from '@inquirer/select';

const answer = await select({
  message: 'Select an operation',
  choices: [
    {
      name: 'add',
      value: 'add',
      description: 'add the numbers',
    },
    {
      name: 'subtract',
      value: 'subtract',
      description: 'add the numbers',
    },
    {
      name: 'multiply',
      value: 'multiply',
      description: 'multiply the numbers',
    },
    {
      name: 'divide',
      value: 'divide',
      description: 'divide the numbers',
    },
  ],
});

console.log("You selected " + answer);

if (answer == "add")
{
    let num3 = +num1.name + +num2.name;
    console.log("The sum of " + num1.name + " and " + num2.name + " is " + num3);   
}
else if (answer == "subtract")
{
    let num3 = +num1.name - +num2.name;
    console.log("The difference of " + num1.name + " and " + num2.name + " is " + num3);   
}
else if (answer == "multiply")
{
    let num3 = +num1.name * +num2.name;
    console.log("The Product of " + num1.name + " and " + num2.name + " is " + num3);   
}
else if (answer == "divide")
{
    let num3 = +num1.name / +num2.name;
    console.log("The division of " + num1.name + " and " + num2.name + " is " + num3);   
}