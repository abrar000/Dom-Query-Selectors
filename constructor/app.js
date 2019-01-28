// person constructor

function person(name, age, dep){
  this.name = name;
  this.age = age;
  this.dep = dep;
}

// function hobbies(playing,reading,watching){
//   this.playing = playing;
//   this.reading = reading;
//   this.watching = watching;
// }
// const a = new hobbies("cricket", "book","movies")
// const b = new hobbies("hockey", "novels","news")
// const c = new hobbies("tabletanis", "book","movies")

const abrar = new person('abrar', 28 , "education");
const hadi = new person('hadi', 34 ,"biology");
const nousheen = new person('nousheen', 23 ,"english");

person.prototype.greet= function(){
  alert('jjhj')
}

console.log(abrar.greet);
