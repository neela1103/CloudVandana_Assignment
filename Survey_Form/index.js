function showResults(event) {
    event.preventDefault(); // Prevent the form from submitting
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("Lname").value;
    const dob = document.getElementById("birthday").value;
    const country = document.getElementById("country").value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const genderElements = document.getElementsByName("Gender");
    let gender = "";
    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }

    const resultsPopup = document.getElementById("resultsPopup");
    const resultsDiv = document.getElementById("results");
    const message = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobile}
        Gender: ${gender}
    `;

    // Convert the message to an array of lines
    const messageLines = message.split('\n');

    // Create an HTML list for the lines
    const messageList = '<ul>' + messageLines.map(line => `<li>${line}</li>`).join('') + '</ul>';

    resultsDiv.innerHTML = messageList;
    resultsPopup.style.display = "block";
}

function closePopup() {
    const resultsPopup = document.getElementById("resultsPopup");
    resultsPopup.style.display = "none";
}

document.getElementById("submitButton").addEventListener("click", showResults);
document.getElementById("closePopup").addEventListener("click", closePopup);

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("surveyForm").reset();
});
