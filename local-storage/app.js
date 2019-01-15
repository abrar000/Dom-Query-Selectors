

const inpkey = document.getElementById('inpkey');
const inpvalue = document.getElementById('inpvalue');
const btnInsert = document.getElementById('btn');
const outpt = document.getElementById('local');

btnInsert.onclick = function(){
  const key = inpkey.value;
  const value = inpvalue.value;

  if (key && value){
    localStorage.setItem(key, value);
    location.reload();
  }
};
for (let i = 0; i < localStorage.length;i++){
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  outpt.innerHTML +=`${key}: ${value}<br>`;
}