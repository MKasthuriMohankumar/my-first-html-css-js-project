const button = document.getElementById('greeting-btn');
const heading = document.getElementById('greeting-name');

button.addEventListener('click', function() {
    const userInput = prompt("Please enter your profession:");
    if(userInput !== null && userInput.trim() !== ""){
        heading.textContent = "Hello, " + userInput + "!";
    } 
});