//example 1

// function show(a){
// console.log("harry"+ a);
// }function john(callback){
//     var a=102;
//     callback(a);
// }
//  john(show);

//example 2

// console.log('start');
// function myName(name,callback){
//     setTimeout(()=> {
//         console.log("inside set time ");
//         callback(name);

//     },2000)
// }

// const nm = myName('harry',(nm)=>{ console.log(nm);})
// console.log("end");

// example 3 (call-back hell)

// console.log('start');
// function myName(name,callback){
//     setTimeout(()=> {
//         console.log("inside name set time ");
//         callback(name);

//     },2000)
// }
// function myHobbies(name,callback){
//     setTimeout(()=> {
//         console.log("inside hobbies set time ");
//         callback(['cricket','football','swim']);

//     },1000)
// }


// const nm = myName('harry',(nm)=>{ console.log(nm);
// myHobbies(nm,(hobbies)=>{console.log(hobbies);})
// })
// console.log("end");