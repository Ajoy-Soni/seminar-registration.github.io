var strings = document.getElementsByClassName("stringVerify");
var flag = 0;
stringLength = strings.length;
for (let i = 0; i < stringLength; i++) {

    strings[i].oninput = stringVerification;
    strings[i].maxLength = 30;
}
function stringVerification() {

    let str = this.value;
    let strLength = str.length;
    let az = "az";
    let AZ = "AZ";
    let sp = " ";

    flag = 0;

    for (let i = 0; i < strLength; i++) {

        temp = str.charCodeAt(i);
        if (temp === sp.charCodeAt(0)) {
            continue;
        }
        else if ((temp >= az.charCodeAt(0) && temp <= az.charCodeAt(1)) ||
            (temp >= AZ.charCodeAt(0) && temp <= AZ.charCodeAt(1))) {
            continue;
        }
        else {
            flag = 1;
            this.style.background = "#b8595991";
            break;
        }
    }
    if (flag === 0) {
        this.style.background = "black";
        document.getElementById("proceed").disabled = false;
        document.getElementById("submit").disabled = false;
    }
}

document.getElementById("proceed").onclick = checkErrors1;
document.getElementById("submit").onclick = checkErrors2;

function checkErrors1() {

    var nameElements = document.getElementById("form-one").elements;
    for (let i = 0; i < nameElements.length; i++) {
        if (nameElements[i].style.background === 'rgba(184, 89, 89, 0.57)') {
            document.getElementById("proceed").disabled = true;
            document.getElementById("submit").disabled = true;

            break;
        }
        document.getElementById("proceed").disabled = false;
        document.getElementById("submit").disabled = false;
    }

}

function checkErrors2() {

    var nameElements = document.getElementById("form-three").elements;
    for (let i = 0; i < nameElements.length; i++) {
        if (nameElements[i].style.background === 'rgba(184, 89, 89, 0.57)') {
            document.getElementById("proceed").disabled = true;
            document.getElementById("submit").disabled = true;

            break;
        }
        document.getElementById("proceed").disabled = false;
        document.getElementById("submit").disabled = false;
    }

}

document.getElementById("form-2").onsubmit = function () {
    var totalAmount = 0;
    var hotelPrices = [3000, 3000, 4000, 4000];
    var servicePrices = [500, 600, 1500, 1000, 1200, 500];
    var hotel = document.getElementById("hotel-select");
    var hotelSelect = hotel.value;
    hotelSelect = parseInt(hotelSelect);
    totalAmount = hotelPrices[hotelSelect];
    var services = document.querySelectorAll(".checkbox");
    for (let x of services) {
        if (x.checked) {
            totalAmount += servicePrices[parseInt(x.value)];
        }
    }
    document.getElementById("total-amount").innerHTML = "Rs " + totalAmount + "  or  " + "$ " + totalAmount / 75;
    this.style.display = "none";
    document.getElementById("form-3").style.display = "block";
    return false;
}


document.getElementById("phoneNum").oninput = function () {

    if (this.value.length === 10 || this.value.length === 0) {
        this.style.background = "black";
        document.getElementById("proceed").disabled = false;

    }
    else {
        this.style.background = "#b8595991";
        document.getElementById("proceed").disabled = true;
    }
}

document.getElementById("form-1").onsubmit = function () {
    this.style.display = "none";
    document.getElementById("form-2").style.display = "block";
    return false;
}


document.getElementById("cardNum").oninput = function () {

    if (this.value.length === 16 || this.value.length === 0) {
        this.style.background = "black";
        document.getElementById("submit").disabled = false;

    }
    else {
        this.style.background = "#b8595991";
        document.getElementById("submit").disabled = true;
    }
}

document.getElementById("cvvNum").oninput = function () {

    if (this.value.length === 3 || this.value.length === 0 || this.value.length === 4) {
        this.style.background = "black";
        document.getElementById("submit").disabled = false;

    }
    else {
        this.style.background = "#b8595991";
        document.getElementById("submit").disabled = true;
    }
}


document.getElementById("otp").onclick = function () {
    document.getElementById("authentication").disabled = false;
    document.getElementById("otp-enter").value = "1234"
}



document.getElementById("form-3").onsubmit = function () {
    alert("Form submitted successfully");
}
