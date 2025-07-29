firstNameTextBox = document.getElementById("firstName");
submitButton = document.getElementById("submit");
greetingContainer = document.getElementById("greeting");

submitButton.addEventListener("click", function () {
    greetingContainer.textContent = `Hello, ${firstNameTextBox.value}!`
    
})

// Can also write as greetingContainer.textContent = "Hello," + firstNameTextBox.value + "!"