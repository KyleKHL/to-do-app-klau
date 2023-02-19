// we have to create variables for input, ul, form
const formElement = document.querySelector('form');

const ulElement = document.querySelector('ul');

const inputElement = document.querySelector('input');


// Now I will create addEventListener for the submit event. 
submitHandler = function (event) {

    // in order to prevent page from refreshing, we need prevent default property
    event.preventDefault();

    // so when it submits I want it to record what was put into the input area and then put on the page
    // this gives me user input
    const userInput = inputElement.value.trim();

    if(userInput !== ""){

    // we want to create element to contain the text
    const liElement = document.createElement('li');

    // lets make the bullet point look better!
        liElement.innerHTML = '<i class="fa-sharp fa-solid fa-rocket"></i>';

    // Before we append, we need to create a text node that the userInput can be appended to
    const userText = document.createTextNode(userInput);

    // now we want to append the text in the container and then append container to the list element
    liElement.append(userText);
    ulElement.append(liElement);

    // In order to prevent user from entering in white blank spaces into the input, I will use a conditional statement and trim() function

    // we want to clear input value
    inputElement.value = "";

    } else {
        alert('please enter text!')
    }
}

formElement.addEventListener('submit', submitHandler);


