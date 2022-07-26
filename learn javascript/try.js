
let arrayN2 = [6, 7, 8, 9, 10];
let arrayN1 = [1,2,3,4,5];

let arrayS1 = ["adam", "brian", "camille", "damon", "ellen"];
let arrayS2 = ["francis", "grace", "harry", "imran", "john"];
   
   

// const number=[30,50,60,80,90,10];

// console.log(number.map(num));
// function num(number){
//   return number*10;
  
// }
// const number=[100,500,200,150,50];
// console.log(number.reduce(mynum));

// function mynum(total,num){
//   return total+num;
// }

// const age=[3,6,5,7,8,22,99,55,13,20,18];
// console.log(age.find(acheckage));
// function acheckage(age){
//   return age<99;
// }


// let arrayN3 = [1, 2, 3, 4, 5];
// const result1 = arrayN3.forEach(i => console.log(i));


// const func = (function(a){
//     delete a;
//     return a;
// })(5);

//     console.log(func);
        


// function my1(){
//     let name= "harry";
//     function m2(){
//     let name= "harry";

//         console.log(name);

//     }
//     m2()
// }my1()

// const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } return arr;
//     };

// const result1 = console.log(arrayN1.indexOf(5));

// const result1= console.log(arrayN1.reverse());

// console.log(arrayN1.shift());
// let arrayN1 = [1, 2, 3, 4, 5,6,7];
// arrayN1.splice(2,4)
// console.log();
// n-1
//  let b= arrayN1.slice(2,4);                        
// console.log(b)
// console.log(arrayN1.slice(2,4));
// let b= arrayN1.some()

// console.log(arrayS1.some(i=> i.length<4));

// let a= [2,5,1,8,89,23];
// console.log(a.sort(a,b => a-b));

// let points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//     return a-b
// });
//  console.log(points);
// const fruits={1,2};
// let a= Array.isArray(fruits);
// console.log(a);

// const fruits =["mango","harry","hgh"];
// let a= fruits.toString();
// console.log(a);


// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8];
// const arr3=[...arr1,...arr2];
// console.log(arr3);


// var x=5;
// var y=6;

// console.log(`sum of variable ${x} and ${y} is: ${x+y}`);

// let text = "harry and harry or harry";
// let a= text.replace(/harry/g, "marry");
// console.log(a);

// const arr1 = [1,2,3,4,5];
// const arr2 = arr1.pop();
// console.log(arr1);
// arr1.push(8);
// console.log(arr1)
// const fruits =[ "ss","aa","sk"];
// fruits.push("harry");
// console.log(fruits);


// let num=[3,5,8,7];
// num.unshift(1,2);
// console.log(num);

// function mergeArrays(a, b) {
//     return [...new Set(a.concat(b))].sort((a,b)=>a-b)
//   }



// let a=[30,50,60,70,100];
// let b= a.map(my)
// function my(a){
//     return a*10;

// }
// console.log(b)

// function sayHello( name, city, state ) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
//     }


// const a=[12,22,33,12,25];
// const b=a.filter(age);
// function age (a){
//     return a>=18;
// }console.log(b)


// function squareOrSquareRoot(array) {
//     let arr = array
//     for (i = 0; i < array.length; i++){
//       if (Number.isInteger(Math.sqrt(arr[i])) ){
//         arr[i] = Math.sqrt(arr[i])
//       } 
//       else {
//         arr[i] = arr[i] * arr[i] 
//       }
//     } return arr;  
//   }



// const arr = [2,20,3,42,100,23,64,12];
// let d=arr.sort(function(x, y){return x - y});

// const first = d[0];
// const [g]=arr
// console.log(first); 

// const last = d[d.length - 1];
// console.log(last); 

// let a= last-g;
// console.log(a)




// type of

// let num = ["h",7,true]; 
// console.log(typeof num[0]);
// console.log(typeof num[1]);
// console.log(typeof num[2]);

// let a = [1,2,3,4,5]

// let b= a.splice(0,4).slice(0,2);
// b[1]=9;
// console.log(b)
// b=a.splice(0,4).slice(0,2);
// b[0]=9;
// console.log(b)

// const a="ball bat"
// b=a.replace(/[bl]/,'c');
// // c=b.replaceAll('l','c');
// console.log(b)
// b = a.replaceAll('b','c');
// console.log(b)

// function my(a,b=89,c){
//     console.log(a,b,c)

// }my(2,90);
// let obj={
// a:2,
// b:8,
// c:0
// }

// let{b:xy}=obj
// console.log(xy);
// console.log(typeof typeof 2);
// let x=null;
// if(10<x<100){
//     console.log("true");
// }else{
//     console.log("false");
// }
// console.log(('b' + 'a' + + 'a' + 'a'));
// console.log(1 + + '2' );


// function calculate(a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;
  
//    console.log([add, subtract, multiply, divide]) ;
//   }
  
//    calculate(4, 7)
  
