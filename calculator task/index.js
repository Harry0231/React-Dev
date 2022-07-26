let display = document.getElementById('inputs');

let buttons = Array.from(document.getElementsByClassName('button'));
// console.log(buttons);

buttons.map( (button) => {
    button.addEventListener('click', (e) => {
    // console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    // console.log(display.innerText);
                } catch {
                    display.innerText = "Error"
                    // console.log(display.innerText);
                }
                break;
            case 'Del.':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
