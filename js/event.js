// login js
const btn=document.getElementById('login-submit').addEventListener('click',function(){
    const email=document.getElementById('email');
    const emailValue=email.value;
    const pass=document.getElementById('password');
    const passValue=pass.value;
    if(emailValue=='admin' && passValue=='admin')
    {
        window.location.href='bank.html';
    }
    else
    {
        alert('Please Enter valid email & password');
    }
})

// deposite js
