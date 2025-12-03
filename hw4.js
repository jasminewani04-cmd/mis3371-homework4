/*
 Program Name: patient-form.html
 Name: Jasmine Wani
 Date Created: 2025-10-22
 Date Modified: 2025-10-22
 Version: 1.0
 Description: MIS 3371 Homework 4 Patient Form
*/
// dynamic date javascript code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// name slider javascript code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {output.innerHTML = this.value;};

// first name validation
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//last name validation
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}

//middle initial validation
function validateMini() {
    mini = document.getElementById("mini").value;
    var namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

// date of birth validation
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//ssn validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// zip code validation
function validateZip() {
    // match the HTML input id (id="zip") and the error span id (id="zip-error")
    const zipInput = document.getElementById("zip");
    if (!zipInput) return false;
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zip-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//address validation
function validateAddress1() {
var ad1 = document.getElementById("address1").value;
console.log(ad1);
console.log(ad1.length);

if (ad1.length < 2) {
    document.getElementById("address1-error").innerHTML =
    "Please enter something on address line"
    return false;
}
else {
    document.getElementById("address1-error").innerHTML = "";
    return true;
}   
}

//email validation
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        document.getElementById("email-error").innerHTML =
        "Email cannot be empty";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

//phone number validation
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length !== 10) {
        document.getElementById("phone-error").innerHTML = 
        "Phone number cannot be left blank";
        return false;
    }
    const formattedPhone =
    phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

//username validation js code
function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}


//password validation
function validatePword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uid").value || "";

    const errorMessages = [];

    if (!/[a-z]/.test(pword)) {
        errorMessages.push("Enter at least one lowercase letter");
    }
    if (!/[A-Z]/.test(pword)) {
        errorMessages.push("Enter at least one uppercase letter");
    }
    if (!/[0-9]/.test(pword)) {
        errorMessages.push("Enter at least one number");
    }
    // allow common special characters
    if (!/[!@#$%&*_\-+.()]/.test(pword)) {
        errorMessages.push("Enter at least one special character");
    }
    if (uname && pword.toLowerCase().includes(uname.toLowerCase())) {
        errorMessages.push("Password can't contain user ID");
    }
    if (pword.length < 10) {
        errorMessages.push("Password must be at least 10 characters");
    }

    const errorContainer = document.querySelector(".pword-message");
    const pwordErrorShort = document.getElementById("pword-error");
    if (errorContainer) {
        if (errorMessages.length === 0) {
            errorContainer.innerHTML = '<span class="pword-success">Password looks good</span>';
            if (pwordErrorShort) pwordErrorShort.innerHTML = "";
        } else {
            errorContainer.innerHTML = errorMessages
                .map(msg => `<span class="pword-error">${msg}</span>`)
                .join("<br/>");
            if (pwordErrorShort) pwordErrorShort.innerHTML = "Password does not meet requirements";
        }
    } else if (errorMessages.length) {
        // fallback: log to console if container not found
        console.warn('Password validation errors:', errorMessages);
    }

    return errorMessages.length === 0;
}

//confirm password validation
function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    }
     else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

//review button implementation
function reviewInput() {
    const formcontent = document.getElementById("signup");
    if (!formcontent) {
        console.warn('reviewInput: form with id "signup" not found');
        return;
    }
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.elements.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                    case "button":
                    case "submit":
                    case "reset":
                        break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
// city validation (simple)
function validateCity() {
    const city = document.getElementById("city");
    if (!city) return true; // nothing to validate
    const val = city.value.trim();
    if (val.length < 2) {
        const span = document.getElementById("city-error");
        if (span) span.innerHTML = "Please enter a valid city";
        return false;
    }
    const span = document.getElementById("city-error");
    if (span) span.innerHTML = "";
    return true;
}
//alert box
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//validate all info
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZip()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }

//cookie for remembering information on form//
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
  var cookieName = name + "=";
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
}
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

var inputs = [
    { id: "fname", cookieName: "firstName" },
    { id: "lname", cookieName: "lastName" },
    { id: "mini", cookieName: "middleInitial" },
    { id: "dob", cookieName: "dob" },
    { id: "ssn", cookieName: "ssn" },
    { id: "address1", cookieName: "address1" },
    { id: "city", cookieName: "city" },
    { id: "state", cookieName: "state" },
    { id: "zip", cookieName: "zipCode" },
    { id: "email", cookieName: "email" },
    { id: "phone", cookieName: "phone" },
    { id: "uid", cookieName: "userName" },
];

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // If the element isn't present on this page, skip it to avoid exceptions
    if (!inputElement) return;

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

// manage welcome text and header for returning vs new visitors
// manage welcome text and header for returning vs new visitors
var headerH2 = document.querySelector('header h2');
var w1 = document.getElementById('welcome1');
var w2 = document.getElementById('welcome2');
var originalHeaderText = headerH2 ? headerH2.textContent : '';

var firstName = getCookie("firstName");
if (firstName && firstName.trim() !== "") {
    if (w1) w1.innerHTML = "Welcome back, " + firstName + "!<br>";
    if (w2) w2.innerHTML = "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    // the anchor with id 'new-user' is added above, so query it now
    var newUser = document.getElementById('new-user');
    if (newUser) {
        newUser.addEventListener('click', function () {
            inputs.forEach(function (input) {
                setCookie(input.cookieName, "", -1);
            });
            location.reload();
        });
    }

    if (headerH2) headerH2.textContent = originalHeaderText;
} else {
    // first-time visitor: update heading and show a welcome
    if (headerH2) headerH2.textContent = 'Welcome New User';
    if (w1) w1.innerHTML = 'Welcome to Wani Health Clinic!';
    if (w2) w2.innerHTML = 'Please fill out the form to register.';
}

document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});

//log to console that hw4.js is loaded
console.log('Homework 4 JS loaded');