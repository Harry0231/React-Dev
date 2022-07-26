// for...loop

// for(let i=0; i<5; i++) {
//     console.log("hello")
// }


//do..while 

// let j=0;
// do{
//   console.log("harry")
// j++;
// }
// while(j<5);


//while..loop

// let i=0;
// while(i<5){
//     console.log("hey");
//     i++;    
// }

//For...in  loop

// in object

// let animals={
//     name:'cat',
//     leg: 4
// };
// for(key in animals){
    // console.log(key);                                                                              // only key output 
    // console.log(key, animals[key]);                                                                 //for both key and value
// }

// In Array

// let names=['harry','jay','sharma','cat'];
// for(index in names){
    // console.log(index);
    // console.log(index,names[index]);                                        // (. dot notation doesn't work in array)
  
// }


//For...OF loops

// let names=['harry','jay','car','cat'];
// for(  a of names){
//     console.log(a);

// }

//extra example
// let car = {
//     name: "Mercedes",
//     model: "C-Class Cabriolet",
//     toDrive: true
//   };
//   for (let key in car) {
//     // keys
//     console.log(key); // name, model, toDrive
//     // values for the keys
//     console.log(car[key]); // Mercedes, C-Class Cabriolet, true
//   }

// console.log(3 -'3')

// function abc(){

//     x++
//     console.log(x)
//     var x;

// } abc()


// let a="sharks";
// for(let i of a)
// {
//     console.log(i)
// }


// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//  console.log(myObject.fullName());