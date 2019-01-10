


let button = document.querySelector('#button').addEventListener('click', function onclick(){
  let input = document.getElementById('add-items').value;
  if (input === ""){
    alert('Input Box Should not be Empty!!')
  }
  else{

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
  
  //remove all list
  remove.addEventListener('click', function(){

    let a = document.querySelectorAll('.list');
    for (let i = 0; i < a.length; i++){
      a[i].remove();
    }
  })
}
});


      
        
      

      // document.querySelector('.one').addEventListener('click', function(){
      //   console.log('one')
      // },true);
      // document.querySelector('.two').addEventListener('click', function(){
      //   console.log('two')
      // });
      // document.querySelector('.three').addEventListener('click', function(){
      //   console.log('three')
      // });







