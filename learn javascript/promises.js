//example 1
// const a=new Promise((resolve, reject) => {
//     // let req=true // done
//     let req=false // fail
//     if(req==true){
//         resolve('done');
//     }else{
//         reject('fail');
    
//     }
// }).then(
//     (value)=>{console.log(value);},
//     (error)=>{console.log(error);}

// );
//---------------------------------------------------------------------------------------------------------------------------
// chaining

// const a= new Promise((resolve, reject) => {
//     let num=10;
//     resolve(num);
// }).then(
//    (value)=>{console.log(value);
// return value + 10;
// }).then(
//     (value)=>{console.log(value);

//     });


//---------------------------------------------------------------------------------------------------------------------------

//then,catch,finally

// const a=new Promise((resolve, reject) => {
//     // let req=true     // done
//     let req=false       // fail
//     if(req==true){
//         resolve('done');
//     }else{
//         reject('fail');
    
//     }
// }).then(
//     (value)=>{console.log(value);
//     }).catch(
//     (error)=>{console.log(error);
//     }).finally(
//         ()=>{console.log('clear')
//     });

//---------------------------------------------------------------------------------------------------------------------------


//callback hell remove using promises

// console.log('start');
// function myName(name){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("inside name set time ");
//             resolve(name);
    
//         },2000)
//     })

// }
// function myHobbies(name,){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("inside hobbies set time ");
//             resolve(['cricket','football','swim']);
    
//         },1000)
//     })
 
// }


// myName('Harry')
// .then(nm=> myHobbies(nm))
// .then(Hobbies=> console.log(Hobbies))
// console.log("end");

//..............................................................................................................

//Examples.

// Promise: Best video on promises
// -resolve
// -reject
// -pending

// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Function: Your promise has been resolved')
//                 resolve();
//             }
//             else {
//                 console.log('Function: Your promise has not been resolved')
//                 reject('Sorry not fulfilled');
//             }
//         }, 2000);
//     })
// }

// func1().then(function(){
//     console.log("Harry: Thanks for resolving")
// }).catch(function(error){
//     console.log("Harry: Very bad bro. Reason: " + error)
// })


//..................................................................................................

// 