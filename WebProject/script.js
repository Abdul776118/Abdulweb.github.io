function checkInput() {
    // Get the value from the input field
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const outputDiv = document.getElementById("output");

    if (userInput === "yes") {
        outputDiv.innerHTML = "Read this page to explore more about Ottomans!";
    } else if (userInput === "no") {
        outputDiv.innerHTML = "Read this page to Learn!";
    } else {
        outputDiv.innerHTML = "Please enter 'yes' or 'no'.";
    }
}
