import "./styles.css";

document.addEventListener("DOMContentLoaded", function() {
    
    const emailInput = document.querySelector('#exampleInputEmail');
    const  passwordInput = document.querySelectorAll('#exampleInputPassword1');
    const checkbox =document.querySelector('#exampleCheck1');
    const message = document.getElementById('message');
    const siblingElement = document.getElementById('siblingMessage');

    //adding the event listner 
    document.getElementById('Form').addEventListener('submit', handleSubmit);
    checkbox.addEventListener('change', handleCheckboxChange);

    function handleSubmit(event) {
        event.preventDefault();
        message.innerHTML = "Form submitted";

    function handleCheckedboxChange(event) {
        const isChecked = event.target.checked;

        if (isChecked) {
            message.innerText = "You have subscribed to email notifications.";

            siblingElement.style.display = "block";
        } else {
            message.innerText = "You have unsubscribed from email notifications.";
            siblingElement.style.display = "none";
    }
        }  
    } 
    });
