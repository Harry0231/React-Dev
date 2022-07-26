//json into js object

// const text =`{"name":"harry","age":19}`;
// const obj = JSON.parse(text);
// console.log(obj);
// function sayHello( name, city, state ) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
//     }

// ---------------------------------------------------------------------------
// js object into json

// const obj={ name: 'harry', age: 19 }
// const myjson= JSON.stringify(obj);
// console.log(myjson);

//------------------------------------

// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));
// console.log(buttons);

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
    // console.log(e.target.innerText);
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error"
//                 }
//                 break;
//             case 'Del.':
//                 if (display.innerText){
//                    display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });
