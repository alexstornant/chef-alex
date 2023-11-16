// index.js
function submitForm() {
    var form = document.getElementById("recipeForm");

    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var recipeName = form.elements["recipeName"].value;
    var ingredients = form.elements["ingredients"].value;
    var directions = form.elements["directions"].value;
    var notes = form.elements["notes"].value;

    new_message = `
    Name: ${name}

    Email: ${email}

    Recipe Name:
    ${recipeName}

    Ingredients:
    ${ingredients}

    Directions:
    ${directions}

    Notes:
    ${notes}

    `

    var params = {
        from_name: name,
        message: new_message
    };

    // check if values valid
    if (name === '' || email === '' || recipeName === '' || ingredients === '' || directions === '') {
        showErrorMessage();
    }
    else {
        form.reset();
        sendEmail(params);
        showSuccessMessage();
    }
}

function showErrorMessage() {
    var successMessage = document.getElementById('error-message');

    successMessage.style.display = 'block';

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    setTimeout(function () {
        successMessage.style.opacity = '0'; 
        setTimeout(function () {
            successMessage.style.display = 'none';
            successMessage.style.opacity = '1';
        }, 1000);
    }, 2000);
}

function showSuccessMessage() {
    var successMessage = document.getElementById('success-message');

    successMessage.style.display = 'block';

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    setTimeout(function () {
        successMessage.style.opacity = '0'; 
        setTimeout(function () {
            successMessage.style.display = 'none';
            window.location.href = 'index.html';
        }, 1000);
    }, 2000);
}

function sendEmail(params) {
    emailjs.send('service_cu97r0c','template_6n7czes', params).then(function (res) {
        console.log("Email Status: " + res.status);
    });
}
