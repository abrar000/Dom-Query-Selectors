


let button = document.querySelector('#button').addEventListener('click', function onclick(){
  let input = document.getElementById('add-items').value;
  let ol = document.getElementById('item-list');
  let li = document.createElement("li");
  li.className = 'list';
  
const butn = document.createElement('button');
butn.className = "delete-item";
butn.style.cursor='pointer';
butn.innerHTML = 'clear';
butn.style.width ='5rem'
butn.style.borderRadius ='2px'
butn.style.border ='none'
butn.style.color ='orange'
butn.style.fontWeight ='bold'

butn.style.float ='right'
butn.style.backgroundColor ="red"
li.appendChild(butn);
console.log(li)

  ol.appendChild(li);
  let text = document.createTextNode(input);
  li.appendChild(text);

  // to target single element

  document.body.addEventListener('click', function(e){
    if(e.target.parentElement.classList.contains('list')){
      e.target.className==="delete-item"
      e.target.parentElement.remove();
    }
  })
});







