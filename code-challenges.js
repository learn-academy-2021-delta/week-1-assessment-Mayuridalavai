// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//here we have 3 varables.
//In this code I used 'if', 'elseif' and 'else' commands to know the boiling point temperature
//and console.log is used to print the data

var temp = 35
 var temp = 350
 var temp= 212
if(temp===35){
    console.log("35 is below boiling point")
}
else if(temp===350){
    console.log("350 is above boiling point")
}
else{console.log("212 is at boiling point")}

// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

//In This code I'm using concat command which is used to merge 2 or more arrays to form one combined array
//console.log is used to print the output

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

var allmynumbers = myNumbers1.concat(myNumbers2)
console.log(allmynumbers.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"
//In this code i used reverse command
//console log is used toprint output
var myString1 = "charlie"
var myString2 = "delta"

//type error : myString1function is not a function
//i have no idea what code is could you please help me?
console.log(myString1.reverse())
console.log(mystring2.reverse())



// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12
// In this code two variables are subtracted and - sign is used for subtraction and console.log is used to print the output
var number1 = 42
var number2 = 27

// var number1 = 7
// var number2 = 19
// In this code two variables are subtracted and - sign is used for subtraction
//conditional statement is used
//console.log is used to print the output


if(number1 > number2){
  console.log(number1 - number2)
}
else{
  console.log(number2 - number1)
  }

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3
//var numberRefactor1 = 42
//var numberRefactor2 = "hello"

var numberRefactor1 = 27
var numberRefactor2 = 24
//declare 2 variables
//In this code I used console.log cose to print the output
// conditional statement



if(numberRefactor1 > numberRefactor2){
  console.log(numberRefactor1 - numberRefactor2)
}
else if(numberRefactor1 < numberRefactor2){
  console.log(numberRefactor2 - numberRefactor1)
}
else{
  console.log("Your number is not a number")
  }
