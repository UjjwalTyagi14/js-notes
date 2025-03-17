//methoods in object
// const student={
//   fukkname:"ujjwal tyagi",
//   print(){
//     console.log("hello");
    
//   ;}
// };

//making prototype
// const employe={
//   calctax(){
//     console.log("10% tax");
    
//   }
// };
// const em1={
//   salary:80000,

// };
// em1.__proto__=employe; //this will prototype employe in em1

//calsses
// class toyota{
//   constructor(model,millage){
//     console.log("new object");
//     this.model=model;
//     this.millage=millage;
    
//   }
//   start(){
//     console.log("start");
    
//   }
//   stop(){
//     console.log("stop");
    
//   }
// };
// let fortuner=new toyota("fortuner",12);
// console.log(fortuner);
// let innova = new toyota("innova",16);
// console.log(innova);

//inheritence 
// class parent{
//   hello(){
//      console.log("parent");
//   }

// }
// class child extends parent{
//   bye(){
//     console.log("bye");
    
//   }
// }
// let c1=new child();

 // using super
//  class employ{
//   constructor(name){
//     this.Name=name;
//     console.log("you are now logged in");
    
//   }
//  }
//  class sd1 extends employ{
//   constructor(name,project){
//     super(name);   //invoking parent's constructor
//     this.project=project;
//     console.log("currently working on",this.project);
//   }
//  }
//  let sd=new sd1("ujjwal","javascript");