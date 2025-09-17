window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        document.getElementById('header').classList.add("scrolled");
    }
    else {
        document.getElementById('header').classList.remove('scrolled');  
    }
})

const formOpenBtn1 = document.querySelector('header .joinBtn');
const formOpenBtn2 = document.querySelectorAll('#prices .item .btn');

formOpenBtn1.addEventListener('click', ()=>{
    document.getElementById('form').style.transform = "translateX(0%)";
})

for(let i = 0; i<3; i++){
    formOpenBtn2[i].addEventListener('click', ()=>{
        document.getElementById('form').style.transform = "translateX(0%)";
    })
}

document.querySelector('#form ion-icon').addEventListener('click', ()=>{
    document.getElementById('form').style.transform = "translateX(110%)";
})

function validForm(){
    const name = document.getElementById('name').value;
    if (name.length == 0) {
        alert('Name is required');
        return false;
    }
    if (!name.match(/^[A-Za-z]/) || name.match(/^[0-9]/)) {
        alert('Only Characters');
        return false;
    }

    const phone = document.getElementById('phoneNumber').value;
    if (phone.length == 0) {
        alert('Phone Number is required');
        return false;
    }
    if (!phone.match(/^[0-9]/)) {
        alert('only digits');
        return false;
    }
    if (phone.length !== 10) {
        alert('Phone should be 10 digits');
        return false;
    }

    const email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('email is required');
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,9}$/)) {
        alert('invalid Email');
        return false;
    }

    const age = document.getElementById('age').value;

    if (age.length == 0) {
        alert('Age is required');
        return false;
    }
    if (!age.match(/^[0-9]/)) {
        alert('Enter age in digits');
        return false;
    }

    if(age <15 || age > 99){
        alert('Your age restricted');
    }
    return true;
}