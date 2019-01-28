
// CALLBACK FUNCTIONS

document.querySelector("#submit").addEventListener('click', function(){
  let input = document.querySelector('#insert').value;
  

  class myhttp {
    constructor(){
      this.http = new XMLHttpRequest();
    }
    getpost(callback, url){
      this.http.open('GET' , url, true);
      this.http.onload = () =>{
        callback(this.http.responseText);
        let repo =[];
        repo = JSON.parse(this.http.responseText);
        let repos = repo.map(item=>item.full_name);
        repos.forEach(element => {
          let list =document.querySelector('ol');
          let li = document.createElement('li');
          li.innerHTML= element;
          list.appendChild(li);
        })
        resolve()
      };
      this.http.send();
    }
  }
  const obj = new myhttp();
  obj.getpost(Response => console.log(Response),`https://api.github.com/users/${input}/repos`)
});