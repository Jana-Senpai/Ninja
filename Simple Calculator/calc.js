let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Ara-Ara~';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

let body = document.querySelector('body');
let btn = document.querySelector('.btn');
btn.onclick = function(){
    body.classList.toggle('light')
}