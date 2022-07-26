
let arrayN2 = [6, 7, 8, 9, 10];
let arrayS1 = ["adam", "brian", "camille", "damon", "ellen"];
let arrayS2 = ["francis", "grace", "harry", "imran", "john"];
let arrayN1 =[1,2,3,4,5,];

//concat method

// console.log(arrayN1.concat(arrayS1));

//Every method

// console.log(arrayN1.every(i=> i%2===0));

//filter 

// let a=[22,55,51,12,16,18,20,46];
// console.log(a.filter(age));
// function age(a){
//     return a>18;
// }

//map

// const a=[10,30,50,60,70,90];
// const b=a.map(num);
// function num(a){
//     return a*10;
// }
// console.log(b);

//reduce

// const a=[50,40,60,30,20];
// console.log(a.reduce(myy));
// function myy(total,num){
// return total+num;
// }

// find(left to right and first value return)
// const age=[3,5,6,99,88,4,55,13,25,18];
// console.log(age.find(check));
// function check(age){
//     return age<6;
// }

// for each

// const result= arrayN1.forEach(i=>console.log(i));

// index of (first index return and if value not find return -1, L-R)

// const a= console.log(arrayS2.indexOf("harry"));

// POP( REMOVE LAST ELEMENT AND RETURN THAT ELEMENT,CHANGE REAL ARRAY)

// const b= arrayN1.pop();
// console.log(b)

// push (ADD ELEMENT IN LAST ,RETURN NEW LENGTH OF ARRAY)
// const a=[5,3,2,1,4,7];
// a.push(6);
// console.log(a);

//slice(create new array copy element from start position till end  ,(n-1) )

// const a=[1,2,3,4,5,6];
// const b= a.slice(2,4);
// console.log(b)

// reverse

// const a=[1,2,3,4,5,6];
// console.log(a.reverse());

// shift (remove 1st element of array and reduce the size of real array by 1)
// const a=[1,2,3,4,5,6];
//  a.shift();
// console.log(a)

//UN-SHIFT (add new element  start point)
// let num=[2,3,6,5,4];
// num.unshift(1);
// console.log(num);

// splice (this method add and remove element)
// add

// const a=["as","jo","a","sfu","iui"];
// a.splice(1,3,"harry");
// console.log(a);

// remove splice

// const a=["as","jo","a","sfu","iui"];
// a.splice(1,3);
// console.log(a);

// //Some(check all element at least one is pass the condition if pass return true  then false and change original array)

// console.log(arrayS1.some(i=> i.length<4));

// sort
// const a=[1,7,9,2,3,5,6];
// // a.sort();
// console.log(a.sort());

// to string (return string w ith array value and seperated cooma doesn't change array)

// const a =["harry","xyz","hafh"];
// let b= a.toString();
// console.log(b)

// replace(return new string with value (xyz)replaced)
//replace single word in string
// let a ="red is good"
// let result=a.replace("red","blue");
// console.log(result)

// global replacement(use regular expression)

// let a="red, is red and, red is, good"
// let result= a.replace(/,/g,"    ");
// let result= a.replaceAll("red","pink");

// console.log(result)



//replaceAll--------------------------

// const message = "ball bat";

// // replace all occurrence of b with c
// let result = message.replaceAll('b', 'c');
// console.log(result);

// Output: call cat

// join(return array as string)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();
// console.log (text);


// last index of (this method specified value if value not found return -1)
// const a=["jh","xx","gf","jh","awe"];
// let b = a.lastIndexOf("jh");
// console.log(b);

// split(string into array of sub string (new array)if "" is used as separator , the string is split b/w words)
// let a="howareyou"
// let b= a.split("");
// console.log(b)


// mix of values
// let arr = ['Javascript', { sitename: 'W3Docs'}, true, function () {
//     console.log('welcome');
//   }];
//   // get the object at index 1 and then show its name
//   console.log(arr[1].sitename); // W3Docs
//   // get the function at index 3 and run it
//   arr[3](); // welcome



// let arr = [0,1,2,3,4,5]
// let newArr = [...arr]
// newArr.splice(1,1)
// console.log(arr)
// console.log(newArr)
// let arr=[1,2,3,4];
// for(let i=0; i<arr.length;arr[i++]=0)
// console.log(arr)

// const temp=[1,2,3,4,5,6,7,8,9];
// let results=temp.filter(n=>n%3==0);
// console.log(results);


// function countPositivesSumNegatives(input) {
//     let count = 0;
//      let neg = 0;
   
//      for (const i in input) {
//        if (input[i] > 0) {
//          count++;
//        } else if (input[i] < 0) {
//          neg += input[i];
//        }
//      }
     
//      return [count, neg];
//    }



// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }