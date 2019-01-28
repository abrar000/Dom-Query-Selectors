


  document.getElementById('submit').addEventListener('click' , getapi);
function getapi(){
  let input = document.querySelector('#insert').value;
  const getPosts = async url => {
    try{
      const res = await fetch(url);
      return await res.json();
    }
      catch(err){
        console.log(err);
      }
      
    };
  getPosts(`https://api.github.com/users/${input}/repos`)
  .then(res => res.map(item =>item.name))
  .then(repos =>repos.forEach(element => {
    let list =document.querySelector('ol');
    let li = document.createElement('li');
    li.innerHTML= element;
    list.appendChild(li);
  }));
}