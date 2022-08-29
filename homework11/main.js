// B1:
let button = document.createElement('button');
let bodyElm = document.querySelector('body');
button.innerHTML = 'Hãy click';
document.body.appendChild(button);
button.style.fontSize = '100px';
bodyElm.style.textAlign ='center'
bodyElm.style.marginTop = '200px'
let colors = ['red', 'orange', 'yellow', 'blue', 'green', 'cyan', 'violet']
function randomColor() {
    let random = colors[Math.floor(Math.random() * colors.length)];
    bodyElm.style.backgroundColor= random;
    return random;
}

button.onclick = randomColor

//B2
// let button = document.createElement('button');
// let bodyElm = document.querySelector('body');
// button.innerHTML = '0';
// button.id = 'btn';
// button.style.width = '96px';
// button.style.height = '48px';
// button.style.fontSize = '24px';
// bodyElm.style.textAlign = 'center'
// document.body.appendChild(button);
// function press() {
//     button.innerHTML++;
//     if(button.innerHTML > 10) { button.innerHTML='0' }
// }

// button.onclick = press