const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordBodyOne = "";
let passwordBodyTwo = "";
let passwordOne = document.querySelector("#password-one");
let passwordTwo = document.querySelector("#password-two");
let passwordEl = document.querySelector("#password-el");
let copiedOneEl = document.querySelector("#copied-one");
let copiedTwoEl = document.querySelector("#copied-two")
let copiedOneActive = false
let copiedTwoActive = false

function generate() {
    for (let i = 0; i < 15; i++) {
        passwordBodyOne += characters[Math.floor( Math.random() * characters.length)]
        passwordOne.textContent = passwordBodyOne
        copyTextOne = passwordBodyOne
        passwordBodyTwo += characters[Math.floor( Math.random() * characters.length)]
        passwordTwo.textContent = passwordBodyTwo
        copyTextTwo = passwordBodyTwo
    }
    passwordBodyOne = ""
    passwordBodyTwo = ""
    passwordEl.textContent = "Generate new passwords"
    copiedOneEl.textContent = ""
    copiedTwoEl.textContent = ""
}

function copyOne() {
    copiedOneActive = true
    copiedTwoActive = false
    if (copiedOneActive === true && copiedTwoActive === false) {
        copiedOneEl.textContent = "Password copied"
        copiedTwoEl.textContent = ""
        navigator.clipboard.writeText(copyTextOne)
    } 
}

function copyTwo() {
    copiedTwoActive = true
    copiedOneActive = false
    if (copiedTwoActive === true && copiedOneActive === false) {
        copiedTwoEl.textContent = "Password copied"
        copiedOneEl.textContent = ""
        navigator.clipboard.writeText(copyTextTwo)   
    }
}