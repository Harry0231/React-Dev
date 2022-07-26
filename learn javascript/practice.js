// Q1 Square and sum the array elements using the arrow function and then find the average of the array.
// let num=[2,4,8,10,15,20]
// const sq= num.map(a=>a*a)
// console.log(sq);
// let avg= sq.reduce((acc,cur)=>acc+cur,0)/num.length;
// console.log(avg);

// Q2 From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
//  let a=[1,2,3,4,5,6,7,8,9,10];
//  let b=a.filter(num=>num%2===0);
//  console.log(b);
//  let c=b.map(num=>num+4);
//  console.log(c);
//  let d= c.reduce((acc,cur)=>acc+cur,0);
//  console.log(d);

// Q3 Create a new array whose elements is in uppercase of words present in the original array.

// let a=["car","rajput","money","singh"];
// let b= a.map(ax=>ax.toUpperCase());
// console.log(b);

// Q4 Use the .map() method on the heros array to return a new array.

// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.
// const heros = [
//   { name: 'Spider-Man' },
//   { name: 'Thor' },
//   { name: 'Black Panther' },
//   { name: 'Captain Marvel' },
//   { name: 'Silver Surfer' }
// ];
// EXPECTED OUTPUT (array of objects): 
// [
//   { id: 0, hero: 'Spider-Man' }, 
//   { id: 1, hero: 'Thor' }, 
//   { id: 2, hero: 'Black Panther' }, 
//   { id: 3, hero: 'Captain Marvel' }, 
//   { id: 4, hero: 'Silver Surfer' }
// ]



// const heros = [
//   { name: 'Spider-Man' },
//   { name: 'Thor' },
//   { name: 'Black Panther' },
//   { name: 'Captain Marvel' },
//   { name: 'Silver Surfer' }
// ];

// const arr=heros.map((hero,index)=>{
//     return {id:index, hero:hero.name};
// })
// console.log(arr);
// let nums = [11, 22, 33, 46, 75, 86, 97, 98];
// let b= nums.filter(a=>a%2===0);
// // console.log(b);
// let c=b.map(num=>num*num);
// console.log(c);
// let d=nums.reduce((acu,cur)=>acu+cur,0);
// console.log(d);


// function eachCons(array, n) {
//     const newArr = [];
//     for (let a=n, i=0; a <= array.length; i++, a++){
//       newArr.push(array.slice(i,a))
//     }
//     return newArr
//   }

// function lovefunc(flower1, flower2){
//     return (flower1 + flower2) % 2 === 1
//   }

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
// return n.toString().split("").reverse().map(Number);
// }
// function century(year) {
//     return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
//   }