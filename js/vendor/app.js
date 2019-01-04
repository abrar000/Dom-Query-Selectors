

let a = document.querySelector("button");
let b = a.getAttribute('class');
let c = a.setAttribute("id","abrar");
let d = a.removeAttribute("id");
let e = a.hasAttribute("id");
let f = a.attributes;
console.log(e);


let con = document.querySelector('h2');
let g = con.setAttribute('id','reham');
let h = con.setAttribute('class','abrar');
con.style.color ='black';
console.log(con);


//unordered list
let unorderedList = document.querySelector('ul');
let i = unorderedList.setAttribute('id','item-list');
let j = unorderedList.setAttribute('class','item-list');
unorderedList.style.listStyleType ="none";
unorderedList.style.display="flex";
unorderedList.style.marginTop="5rem";
unorderedList.style.justifyContent="center";

console.log(unorderedList);


let link = document.querySelectorAll('a');
link[5].style.color = 'orange';
link[5].style.margin = '1rem';
link[5].style.fontWeight = 'bold';
link[6].style.color = 'blue';
link[6].style.margin = '1rem';
link[7].style.color = 'brown';
link[7].style.margin = '1rem';
link[7].style.fontWeight = 'bold';
link[8].style.color = 'purple';
link[8].style.margin = '1rem';
link[9].style.color = 'orange';
link[9].style.margin = '1rem';
link[9].style.fontWeight = 'bold';
link[10].style.color = 'orange';
console.log(link);
