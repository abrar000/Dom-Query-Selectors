
// console.log(ul);

let button = document.querySelector('#button').addEventListener('click', function onclick(){
  let input = document.getElementById('add-items').value;
  let ul = document.getElementById('item-list');
  ul.style.listStyleType ='none'
  let li = document.createElement('li');
  li.id='list'
  ul.appendChild(li);
  let text = document.createTextNode(input);
  li.appendChild(text);
});

// let remove = document.getElementsByTagName('button').addEventListener('click' , onclick);
// function onclick(){

// }
function removeAll(){
  let x = document.getElementById("list");
  x.remove();
}