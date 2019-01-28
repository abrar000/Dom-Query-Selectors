

// class Car {
//   constructor(name, make, price, model, year, description){
//     this.name = name;
//     this.make = make;
//     this.price = price;
//     this.model = model;
//     this.year = year;
//     this.description = description;
//   }
//   static display(){
//     const item = JSON.parse(localStorage.getItem("cars"));
//     if(item != null){
//       for(let i = 0; item.length > i; i++){
//         const list = document.getElementById('list');
//         const row = document.createElement('tr');
//         row.innerHTML =`
//         <td>${item[i].name}</td>
//         <td>${item[i].make}</td>
//         <td>${item[i].price}</td>
//         <td>${item[i].model}</td>
//         <td>${item[i].year}</td>
//         <td>${item[i].description}</td>
//         <td><button class="remove" value="${i}">X</td>
      
//         `;
//         list.appendChild(row);
//         //  console.log(i);
//       }
//     }
//     else{
//       localStorage.setItem('cars', JSON.stringify([]));
//     }
    
//     document.body.addEventListener('click',function(e){
//       if (e.target.className == "remove") {
//         removeItems();
//       } 
//     });

//     function removeItems(){
//       let storedVaue = JSON.parse(localStorage.getItem('cars'));
//       let removeBtn = document.querySelector('.remove');

//       removeBtn.parentElement.parentElement.remove();
//       for(let i=0;i<storedVaue.length;i++){
//           storedVaue.splice(i,1);
//           localStorage.setItem('cars',JSON.stringify([]));
//          break;
//       }
//     }

//   }
// }

// class Store extends Car {
//   constructor(name, make, price, model, year, description){
//     super(name, make, price, model, year, description);
//   }
//   insertCars(car){
//     let cars;
  
//     if (localStorage.getItem('cars') === null){
//       cars =[];
//     }
//     else {
//       cars =JSON.parse(localStorage.getItem('cars'));
//     }
//     cars.push(car);
//     localStorage.setItem('cars', JSON.stringify(cars));
//   }
// }

// Car.display();
// document.body.addEventListener("submit", function(e){
  
//   const name = document.getElementById("name").value;
//   const make = document.getElementById("make").value;
//   const price = document.getElementById("price").value;
//   const model = document.getElementById("model").value;
//   const year = document.getElementById("year").value;
//   const description = document.getElementById("description").value;
//   e.preventDefault();
//   const obj = new Store(name, make, price, model, year, description);
  
//   obj.insertCars(obj);
// });


// var students = [
//   {
//     name: 'Coolio',
//     age: 20,
//     grade: 'A+'
//   },
//   {
//     name: 'Mark',
//     age: 45,
//     grade: 'C+'
//   }
// ];
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }


// filter 

// let arr = [12,2,3,4,5,6];

// let newarray = arr.filter(item => item > 5);
// console.log(newarray);

var names = ['abrar','hussain','khan'];

var result = names.filter(words => words.length > 4);
console.log(result);