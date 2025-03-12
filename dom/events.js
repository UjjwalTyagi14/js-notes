//events
// let div=document.querySelector(".div");
// let btn=document.querySelector("#btn");
// btn.onclick=()=>{
//   div.style.backgroundColor='red';
  
// }
// div.onmouseover=()=>{
//   div.style.backgroundColor='blue';
// }

//event listener
// let btn=document.querySelector("#btn");
// btn.addEventListener("click",()=>{
//   document.body.style.backgroundColor="red";
// })

// let btn=document.querySelector("#btn"); //using event object
// btn.addEventListener("click",(e)=>{
//   console.log(e);
// });


//practice 
// let btn=document.createElement("button");  //creating button
// btn.innerHTML="mode changer";
// btn.id="btn2";
// document.body.append(btn);

// let btn2=document.querySelector("#btn2");
// let mode="light";
// btn2.addEventListener("click",()=>{
//   if(mode=="dark"){
//     mode="light";
//     document.body.style.backgroundColor="white";
//   }
//   else{
//     mode="dark";
//     document.body.style.backgroundColor="black";
//   }
//   console.log(mode);
// })


//event propagation

// let image=document.querySelector("#images");
// image.addEventListener("click",()=>{
//   console.log("clicked ul");
  
// },false)
// let three=document.querySelector("#three");
// three.addEventListener("click",()=>{
//   console.log("clicked three");
// },false)

// focus()
// let btn=document.querySelector("#focus");
// let inp=document.querySelector("#input")
// btn.addEventListener("click",()=>{
//   inp.focus();
// })
