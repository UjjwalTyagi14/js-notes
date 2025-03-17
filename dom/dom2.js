//getAttribute
// let div=document.querySelector("div");
// console.log(div.getAttribute("class"));
// //or
// let div2=document.querySelector("div");
// console.log(div2.getAttribute("id"));

//setAttribute(to change the attribute value)
// let div=document.querySelector("div");
// console.log(div.setAttribute("class","first-class"));
// console.log(div.getAttribute("class"));

//create new element
// let _new=document.createElement("button");
// _new.innerText="submit here";

//adding new element in dom tree(use upper element in below methoods)
// //1.append (node.append(el))
// let div=document.querySelector(".first");
// div.append(_new);

//2.prepend(node.prepend(el))
//1.append (node.append(el))
// let div=document.querySelector(".first");
// div.prepend(_new);

//before(adds before node but outside)
//1.append (node.append(el))
// let div=document.querySelector(".first");
// div.before(_new);

//after(adds after node but outside)
//1.append (node.append(el))
// let div=document.querySelector(".first");
// div.after(_new);

//practice
// let heading=document.createElement("h1");
// heading.innerHTML="<b>DOM part 2</b>"
// document.querySelector("body").prepend(heading);

//remove element(.remove)
// let para=document.querySelector("p");
// para.remove();

//question1
// let _new=document.createElement("button");
// _new.style.backgroundColor='red';
// _new.innerText="click me";
// _new.style.color='white';
// _new.style.border="none";
// document.querySelector("body").prepend(_new);

//classlist(to avoid overwriting of classname through setAttribute)

//.classlist.add(to add new class)
// let para=document.querySelector("p");
// para.classList.add("new");

//adding a new class to para which has a different styling in css so both class css will be there ,no overwriting

//classlist.remove()
// para.classList.remove("new");



