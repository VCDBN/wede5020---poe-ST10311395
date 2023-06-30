function validateform (event){
    event.preventDefault();


var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var service = document.getElementById('service').value;

 
document.getElementById('nameError').textContent = '';
document.getElementById('emailError').textContent = '';
document.getElementById('serviceError').textContent = '';

if (name ==='') {
    document.getElementById('nameError').textContent = 'Please enter your name';
    return;
}

if (email ==='') {
    document.getElementById('emailError').textContent = 'Please enter your email'
return;
}

if (service ==='') {
    document.getElementById('serviceError').textContent = 'Please enter interested service'
return;
}

alert('Form submitted successfully!');


}

 var form = document.getElementById('regForm');
form.addEventListener('submit',validateform);