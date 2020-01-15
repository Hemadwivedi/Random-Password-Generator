var generateBtn = document.querySelector("#generate");
var textPassword = document.querySelector("#password");
var lengthEl = document.querySelector("#length");
var clipBoardEl=document.querySelector("#clipBoard");


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbol = '!@#$%^&*(){}[]+<>.?,';
    return symbol[Math.floor(Math.random() * symbol.length)];
}

generateBtn.addEventListener('click', () => {


    var passwordRequriement = {
        isLower: false,
        isUpper: false,
        isNumber: false,
        isSymbol: false, 

        /*
        Password requirement should be valid 
        only if any of the given reqriement is set 
        */
        isValid : function () {
            return this.isLower 
            || this.isUpper 
            || this.isNumber 
            || this.isSymbol  
        } 
    }

    length = prompt("length of your password", "8");

    if (length < 8 || length > 128) {
        alert("Password should at least 8 characters and no more than 128 characters ");
        return;
    }

    const hasLower = confirm("Include lowercase latter");
    if (hasLower) {
        passwordRequriement.isLower = true;
    }
    const hasUpper = confirm("Include uppercase latter");
    if (hasUpper) {
        passwordRequriement.isUpper = true;
    }
    const hasNumber = confirm("Include numbers");
    if (hasNumber) {
        passwordRequriement.isNumber = true;
    }
    const hasSymbol = confirm("Include  symbols");
    if (hasSymbol) {
        passwordRequriement.isSymbol = true;
    }
    if (passwordRequriement.isValid()) {
        textPassword.innerText = generatePassword(passwordRequriement, length);
    } else {
        alert("At least one character type should be selected");
        return
    }
});


function generatePassword(passwordRequriement, length) {
    var selectedRequirement = buildSelectedRequirement(passwordRequriement)
    var password = "";
    for (var i = 1; i <= length; i++) {
        var index = getRndInteger(0, selectedRequirement.length - 1);
        password += selectedRequirement[index]();
    }
    return password
}

function buildSelectedRequirement(passwordRequriement){
    var selectedRequirement= [];
    if (passwordRequriement.isLower) {
        selectedRequirement.push(getRandomLower);
    }
    if (passwordRequriement.isUpper) {
        selectedRequirement.push(getRandomUpper)
    }
    if (passwordRequriement.isNumber) {
        selectedRequirement.push(getRandomNumber)
    }
    if (passwordRequriement.isSymbol) {
        selectedRequirement.push(getRandomSymbol)
    }
    return selectedRequirement;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
clipBoardEl.addEventListener('click', () => {
    const copyPassword = textPassword.innerHTML;
    if(!copyPassword) { return; }
    const el = document.createElement('textarea');
    el.value = copyPassword;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
	alert('Password copied to clipboard');
});
