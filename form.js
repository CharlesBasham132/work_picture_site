// String, Numbers, Boolean, null, undefined

// A method is a function accociated with an object

// Arrays - variables that hold multiple values

/* var, let, const  
(var not commonly used anymore,
let - reassignable value 
const - value that does not change, cannot be reassigned,
use const unless value is knowing to be changed.)
*/
// three === matches the data types, == matches just
// value.


/*
Single element selectors:
const form = document.getElementById('contact_form');
console.log(form);

console.log(document.querySelector('nav'))

Multiple element selectors:
console.log(document.querySelectorAll('h1'))
*/

/* The following are methods of removing elements:
const email_box = document.querySelector('.text_box_2');    //assign name and select element
email_box.remove();                                         //removes selected element
*/


//Form Script:
const contact_form = document.querySelector('#contact_form');
const first_name = document.querySelector('#fname');
const last_name = document.querySelector('#lname');
const email = document.querySelector('#email');
const user_message = document.querySelector('#message_1');

const error_message = document.querySelector('.error_message');
const user_confirm = document.querySelector('#user_confirm');

contact_form.addEventListener('submit', with_submit);

function with_submit(e) {
    e.preventDefault();
 
    if(first_name.value === '' || last_name.value === '' || email.value === '' || user_message.value ==='') { 
        error_message.innerHTML = 'ERROR: Please Enter All Fields';
        setTimeout(() => error_message.remove(), 2000);
    }
    else {user_confirm.innerHTML = 'Form Submitted, Thank you ' + (`${first_name.value}`);
    first_name.value = '';
    last_name.value = '';
    email.value = '';
    user_message.value = '';
    }
}

