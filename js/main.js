


let abrar;
abrar = document;
abrar = document.all;
abrar = document.all[15];
abrar = document.head;
abrar = document.body;
abrar = document.all.length;
abrar = document.doctype;
abrar = document.domain;
abrar = document.URL;
abrar = document.contentType;
console.log(abrar);

let head2 = document.querySelectorAll('h2'); // it will help us to find all h2 tags in the body
console.log(head2);

let contain = document.getElementsByClassName('container'); //all the classes using same name of container
console.log(contain);
let col = document.getElementsByClassName('col-md-4'); 
console.log(col);

//// getElementById()

let waqar = document.getElementById('navbar-brand');
waqar.textContent = 'MyLoGo';
waqar.style.backgroundColor = 'red'
waqar.style.color ='black';

let button = document.getElementById('btn btn-success');

button.style.color = 'black';
button.textContent = 'click me';
button.style.width = '12rem';

//// querySelectorAll
let hello = document.querySelectorAll('.container');
hello[1].style.backgroundColor = 'yellow';

//// uerySelectorAll
let world = document.getElementsByTagName('h1');

world[0].style.color = 'red' 
// world[0].style.textAlign = 'center' 

let learn = document.getElementById('learn');
learn.style.textAlign ="center"
learn.style.color ="black"
learn.style.border ="2px solid";

let para = document.getElementsByTagName('p');
para[0].style.color = 'blue';
para[0].style.textAlign = 'center';

const heading = document.getElementsByClassName('col-md-4');
heading[0].style.color ='red'
heading[0].style.backgroundColor ='grey';
// heading[0].style.fontWeight ='900'; 
heading[0].style.fontSize ='20px';
heading[0].style.fontWeight ='bold';
heading[0].style.marginBottom ='10rem';
heading[1].style.color ='blue';
heading[1].style.marginBottom ='10rem'
// heading[1].style.fontWeight ='900'; 
heading[1].style.fontSize ='20px';
heading[1].style.fontWeight ='bold';
heading[1].style.backgroundColor ='yellow'
heading[2].style.color ='green'
heading[2].style.fontWeight ='bold';
heading[2].style.backgroundColor ='aqua'
// heading[2].style.fontWeight ='900'; 
heading[2].style.fontSize ='20px';

//// querrySelectorAll


let head = document.querySelectorAll('h2');

head[0].style.color ='blue';
head[0].style.fontWeight ='900';
head[1].style.color ='green';
head[1].textContent ='heading 2'
head[1].style.fontWeight ='900';
head[2].style.color ='orange';
head[2].style.fontWeight ='900';
head[2].textContent ='heading 3'

//// getElementsByClassName

let btnn = document.getElementsByClassName('btn btn-default');

btnn[0].style.color = 'white';
btnn[0].style.background = 'green';
// btnn[0].style.marginBottom = '2rem';
btnn[0].style.border = 'none';
btnn[0].style.letterSpacing = '5px';
btnn[1].style.background='orange';
btnn[1].style.color='white';
btnn[2].style.background='red';
btnn[2].style.color='white';

//// querySelectorAll

const items = document.querySelectorAll('p'); //if there is more than one p tags then we must use querySelectAll and define index for it
console.log(items);

let footer = document.querySelectorAll('p');
footer[8].style.color ='white';
footer[8].style.backgroundColor ='blue';
footer[8].style.letterSpacing = '5px';
















