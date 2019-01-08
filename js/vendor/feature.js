

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

// // remove Element

// const lists = document.querySelectorAll('li');
// lists[0].remove();
// console.log(lists);

// // Classes 
const lis = document.querySelector('ul');
let a;
a = lis.className;

// //Attributes

abr = document.querySelector('ul');
aaa =abr.setAttribute('title', 'collection of items');
console.log(abr);
aaa =abr.hasAttribute('title', 'collections of items');
console.log(aaa);


let newLi = document.createElement('li');
newLi.innerHTML = 'Hello, world!';
collection.insertBefore(newLi, collection.children[1]);

ul.before('hi');
ul.after('bye');

let prepend = document.createElement('li');
prepend.innerHTML ='before';
ul.prepend(prepend);
prepend.style.color =''

let append = document.createElement('li');
append.innerHTML ="after"
ul.append(append);
append.style.color =''

