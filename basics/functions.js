// function my_name(){//function defination
//   console.log("hello\nwe are learning js");
// }
// for (let i=0;i<5;i++){
//   my_name();//function call
// }

// function displayMessage(msg) {
//   console.log(msg);
// }
// let msg = prompt("Enter a message:");
// displayMessage(msg);


//sum of two
// function sum(x,y){
//   console.log(x+y);
// }

//sum using arrow
// const sum=(x,y)=>{
//   console.log(x+y);
// }
// sum(2,4);

//using return
// const sum=(x,y)=>{
//   return x+y;
// }

//multiplication using arrow
// const mult=(x,y)=>{
//   console.log(x*y);
// }
// mult(3,6);

//question1
// function vowel(str){
//   count=0;
//   for (let i of str){
//     if(i=="a"||i=="e"||i=="o"||i=="u"||i=="i"){
//       count++;
//     }
    
//   }
//   console.log(`number of vowels are ${count}`);
// }
// vowel("my name is ujjwal tyagi");

//question2
// const vowel=(str)=>{
//   count=0;
//   for (let i of str){
//     if(i=="a"||i=="e"||i=="o"||i=="u"||i=="i"){
//       count++;
//     }
    
//   }
//   console.log(`number of vowels are ${count}`);
// }
// vowel("my name is ujjwal tyagi");

//question3
// let arr=[90,67,98,67,89,96,95,74,73];
// let new_arr=arr.filter((val)=>{
//   return val>90;
// })
// console.log(new_arr);

//question4
// let num = Number(prompt("Enter a number"));
// let arr = [];
// for (let i = 1; i<=num;i++){
//     arr.push(i);
// }
// let sum=arr.reduce((res,cur)=>{
//   return res + cur;
// });
// console.log(sum);

// let pro=arr.reduce((res,cur)=>{
//   return res * cur;
// });
// console.log(pro);

//other way of filter
// let arr=[1,2,56,76,4,34,2,65];
// const greater=(e)=>{
//   if(e>7){
//     return true;
//   }
//   return false;

// }
// console.log(arr.filter(greater));
