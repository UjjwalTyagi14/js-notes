// console.log(window);

// console.log(window.alert("hi"));

// console.log(document);
// console.dir(document);


// console.dir(document.body);
// console.log(document.body);


// by id
// let heading=document.getElementById("myid");
// console.dir(heading);

// by class (gives HTML collection which is similar to an array)
// let elements=document.getElementsByClassName("myclass");
// console.dir(elements);

// by tags
// let para=document.getElementsByTagName("p");
// console.dir(para);

// by quary selector
// let heading=document.querySelector("#myid");
// console.dir(heading);
// let elements=document.querySelector(".myclass");
// console.dir(elements);

// quary selector all (returns nodelist)
// let elements=document.querySelectorAll(".myclass");
// console.dir(elements);

// iterating in nodelist through forEach loop
// let elements=document.querySelectorAll(".myclass");
// elements.forEach((e)=>{
//   e.style.backgroundColor='white';
//   e.style.color='black';
//   e.style.fontSize='10px';
// })

// to iterate in html collection we need to convert it into array through Array.from()
// let elements=document.getElementsByClassName("myclass");
// console.log(elements);
// let arr=Array.from(elements);
// console.log(arr);
// arr.forEach((e)=>{
//   e.style.backgroundColor='white';
//   e.style.color='black';
//   e.style.fontSize='10px';
// })

// innertext
// let element=document.querySelectorAll("#myid");
// element[0].innerText='this is javascript';
//or
// let element=document.querySelector("#myid");
// element.innerText='tthis is javascript';

//innerHTML
// let element=document.querySelector("#id2");
// console.log(element.innerHTML);


//textContent (also displays the element with none property)
//difference btw innertext,textcontent,innerHTML
// let element=document.querySelector("#id2");
// console.log(element.innerText);
// console.log(element.textContent);
// console.log(element.innerHTML);

//firstchild,firstElementChild
// let a=document.querySelector("ul");
// console.log(a.firstChild);
// console.log(a.firstElementChild); //gives first element node

//textnode = space between two element
//comment node= comment line
// let b=document.querySelector("ul");
// console.log(b.childNodes);

//children (gives all element node childs)
// let a=document.querySelector("ul");
// console.log(a.children);

//nextelementSibling
// let a=document.querySelector("ul");
// console.log(a.children[1].nextElementSibling);
  
//nextsibling
// let a=document.querySelector("ul");
// console.log(a.children[1].nextSibling);


//question(for changing value of list using loop)
// let element=document.querySelectorAll("li");
// let ind=1;
// element.forEach(e=> {
//   e.innerText=`new value ${ind}`;
//   ind++;
// });

