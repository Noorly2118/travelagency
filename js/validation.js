document
.getElementById("feedbackForm")
.addEventListener("submit", validateForm);

function validateForm(event){

    event.preventDefault();

    let name =
    document.getElementById("fullName").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let message =
    document.getElementById("message").value.trim();

    let emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let phoneRegex =
    /^[0-9]{10,15}$/;

    if(name === ""){

        alert("Name is required");

        return;
    }

    if(!emailRegex.test(email)){

        alert("Enter a valid email");

        return;
    }

    if(!phoneRegex.test(phone)){

        alert("Enter a valid phone number");

        return;
    }

    if(message.length < 10){

        alert(
        "Message must contain at least 10 characters"
        );

        return;
    }

    document
    .getElementById("successMessage")
    .innerHTML =
    "<div class='alert alert-success'>Feedback submitted successfully!</div>";

    document
    .getElementById("feedbackForm")
    .reset();
}