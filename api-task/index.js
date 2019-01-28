
ES6 PROMISE

document.querySelector('#submit').addEventListener('click', function(e){
  let input = document.querySelector('#insert').value;
  let userName = `https://api.github.com/users/${input}/repos`;

class myHttp {
  constructor(){
    this.http = new XMLHttpRequest();
  }
   getPost (url){
    return new Promise((resolve, reject) => {
      this.http.open('GET', url, true);
      this.http.onload = () => {
        if (this.http.status === 200){
          let repo = [];
          repo = JSON.parse(this.http.responseText);
          let repos = repo.map(item =>item.name);
          repos.forEach(element => {
            let list = document.querySelector('ul');
            let li = document.createElement('li');
            li.innerHTML = element
            list.appendChild(li);
          });
          resolve();
        }
        else if(this.http.status === 500){
          reject('please check your internet connection');
        }
        else{
          reject('something went wrong');
        }
      };
      this.http.send();
      
    }
    )}
}


let obj = new myHttp();
obj.getPost(userName).then(res => {
  
  })
  .catch(err => console.log(err));
  e.preventDefault();
});