"use strict";

//1.
//
// function getByNumber(n){
//   if(n%3===0 && n%7===0){
//       console.log("the number entered is divisible by 3 and 7");
//   }else{
//     console.log("the number entered is not divisible by 3 and 7");
//   }
// }
//let number = prompt("Please enter number");
//getByNumber(number);


//2.

// function getFactorial(number){
//     let result=1;
//     for(let i=1;i<=number;i++){
//         result*=i;
//     }
//     return result;
// }
// let number = prompt("Please enter number");
// console.log(getFactorial(number));

//3.

// function sumOfSquaresOfEvenNumbers(numbers){
//  let sum=0;
//  for(let i=0; i<numbers.length; i++){
//     if(numbers[i]%2===0){
//         sum += numbers[i]**2;
//     }
//  }
//  return sum;
// }
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(sumOfSquaresOfEvenNumbers(numbers));

//4.
// let email = prompt("Please enter email");
// let password = prompt("Please enter password");
// function isNullOrWhitespace(value) {

//     if (value === null || value === undefined || value.trim().length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// isNullOrWhitespace(password, password)
// function emailAndPasswordBox(email, password) {
//     let stremail = "cavid@code.edu.az";
//     let strpassword = "12345";
//     if (isNullOrWhitespace(email) || isNullOrWhitespace(password)) {
//         console.log("Please add email or password");
//         return;
//     }

//     if (stremail === email && strpassword === password) {
//         console.log("Login Successful");
//     } else {
//         console.log("Email and password are incorrect");
//     }

// }
// emailAndPasswordBox(email, password);


//5.


// function sumOfOddNumbers(nums){
//     let sum=0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i]%2!==0){
//            sum+=nums[i];
//         }
//     }
//     return sum;
// }
// let numbers=[12,3,7,13,17,19];
// console.log(sumOfOddNumbers(numbers));



//6.

// function countOfEvenNumbers(nums){
//     let count=0;

//     for (let i = 0; i <nums.length; i++) {
//         if(nums[i]%2==0){
//             count++;
//         }
//     }
//     return count;
// }
// let numbers=[2,4,7,9,12,14,18]
// console.log(countOfEvenNumbers(numbers));

