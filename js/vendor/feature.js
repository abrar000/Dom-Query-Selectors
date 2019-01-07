

//create Element

const li = document.createElement('li');

li.className = 'collection-item'
li.id = 'collection-item';
li.setAttribute('title','New item');
li.appendChild(document.createTextNode('hello gilgit baltistan'));
document.querySelector('ul.collection').appendChild(li);

console.log(li);

let ul = document.querySelector('ul');
ul.id ='collection';
ul.style.listStyleType ="none";
ul.style.textAlign ="center";
const list = document.querySelectorAll('li');
list[0].style.color = 'green'
list[0].style.fontWeight = 'bold'
list[1].style.color = 'green'
list[1].style.fontWeight = 'bold'
list[2].style.color = 'green'
list[2].style.fontWeight = 'bold'
list[3].style.color = 'brown'
list[3].style.fontWeight = 'bold'
console.log(list);

// remove Element

// const lists = document.querySelectorAll('li');
// lists[0].remove();
// console.log(lists);

// Classes 
const lis = document.querySelector('ul');
// let a;
a = lis.className;

//Attributes

abr = document.querySelector('ul');
aaa =abr.setAttribute('title', 'collection of items');
aaa =abr.hasAttribute('title', 'collections of items');
console.log(aaa);


// form validation

function validate(){
  var username=document.forms["register"]["uname"].value;
  var key1=document.forms["register"]["pass1"].value;
  var key2=document.forms["register"]["pass2"].value;