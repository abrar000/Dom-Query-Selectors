

let a = document.querySelector("button");
let b = a.getAttribute('class');
let c = a.setAttribute("id","abrar");
let d = a.removeAttribute("id");
let e = a.hasAttribute("id");
let f = a.attributes;
console.log(a);


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


function validate(){
  var username=document.forms["register"]["uname"].value;
  var key1=document.forms["register"]["pass1"].value;
  var key2=document.forms["register"]["pass2"].value;

  if (username=="" || username.length<4){
    alert('name must be more than four characters');
    return false;
  }
  if (key1=="" || key1.length<4){
    alert('Password must be more than four characters');
    return false;
  }
  if (key2=="" || key2.length<4){
    alert('warning..!! confirm password should not be empty');
    return false;
  }
  if (key1 != key2){
    alert('Password Doesnot Match');
    return false;
  }
  else{
    alert('Form Submit Successfully.!!');
  }
}
let form = document.getElementById('val-form');
form.style.textAlign ='center';
form.style.border='2px solid'

let user = document.getElementById('user');
user.style.fontWeight='bold'
user.style.color='blue'

let pass = document.getElementById('password1');
pass.style.fontWeight='bold'
pass.style.color='brown'

let cnfrmpass= document.getElementById('password2');
cnfrmpass.style.fontWeight='bold'
cnfrmpass.style.color='grey'

let btn = document.getElementsByTagName('input');
console.log(btn);
 btn[5].setAttribute('id', 'Submit-button');
 btn[5].setAttribute('class', 'Submit-button');
console.log(btn);

let subBtn = document.querySelector('#Submit-button');  
subBtn.style.backgroundColor='red',
subBtn.style.color ='white'
subBtn.style.border ='none'
subBtn.style.borderRadius ='2px'
subBtn.style.margin ='1rem'
subBtn.style.padding ='1rem'
console.log(subBtn);

