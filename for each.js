//foreach loop

const arr=[1,2,3,4,5,6,7,8,9];

// arr.forEach( function (val){
//   console.log(val);
// })

// arr.forEach((val)=>{
//   console.log(val);
// })

// function print(val){
//   console.log(val);
// }
// arr.forEach(print)

// arr.forEach((val,ind,arr) => {
//   console.log(val,ind,arr);
// })

const coding=[
  {
    language:"javascript",
    short:"js"
  },
  {
    language:"c plus plus",
    short:"c=="
  },
  {
    language:"python",
    short:"py"
  },
]
coding.forEach( (val)=>{
  console.log(val.short);
})

// const value=arr.forEach((val)=> {
//   return val;
// })
// console.log(value);

//filter
// const New=arr.filter( (val)=> val>4)
// console.log(New);

//map
// const arr2=arr.map( (val)=>val+10) 
// console.log(arr2);
//chaining
// const arr2=arr
//     .map( (val)=> val*10)
//     .map((val)=> val+10)
//     .filter((val)=> val>=40)
// console.log(arr2);


//reduce
// const total=arr.reduce((acc,curr)=> acc+curr,0)
// console.log(total);

const cart=[
  {
    course:"web dev",
    price : 5999
  },
  {
    course :"app dev",
    price : 12999
  },
  {
    course :"game dev",
    price : 9999
  },
]
const total=cart.reduce((acc,item)=> acc+item.price,0)
console.log(total);

//IIFE{immeditely ivoked function expression}
// (function name(){
//   console.log("hello");
// })();

// (function name(name){     //character iife
//   console.log(name);
// })("ujjwal")

// (()=>{
//   console.log("hi");
  
// })();


