let body = document.querySelector('body');
let form = document.getElementById('form');
let button = document.getElementById('button');
let userName = document.getElementById('name');
let myPassword = document.getElementById('password');
let error = document.getElementById('error');
body.style.textAlign = 'center';
body.style.backgroundColor = '#ccc';
body.style.marginTop = '300px';


button.addEventListener('click', function() {
    if(userName.value === '' && myPassword.value.length < 8) {
        error.innerHTML = 'Username không được để trống, Mật khẩu ít nhất là 8 ký tự';
        error.style.color = 'red';
    } else if (myPassword.value.length < 8) {
        error.innerHTML = 'Mật khẩu ít nhất là 8 ký tự';
        error.style.color = 'red'
    } else if(userName.value === '' && myPassword.value.length >= 8 ) {
        error.innerHTML = 'Username không được để trống'
        error.style.color = 'red';
    }
    else if(myPassword.value.length >= 8) {
        error.innerHTML ='';
        return `${userName.value=''} ${myPassword.value=''}`
    }
})