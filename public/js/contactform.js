const contForm = document.querySelector('.contact-form');

const sendName = document.getElementById('name');
const subject = document.getElementById('Subject');
const email = document.getElementById('email');
const message = document.getElementById('message'); 

contForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: sendName.value,
        subject: subject.value,
        email: email.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Émail sent');
            
            sendName.value = '';
            email.value = '',
            subject.value = '',
            message.value = ''
        }else{
            alert('Something went wrong');
        }
    }

    // passing data to backend
    xhr.send(JSON.stringify(formData));
})