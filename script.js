const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const text = inputText.value;
    if (text === "") {
        alert("Please input a value");
    }
    else if (checkWord()) {
        result.textContent = `${text} is a palindrome`;
    }
    else {
        result.textContent = `${text} is not a palindrome`;
    }
})

const checkWord = () => {
    const regex = /[^\w]+|\s|_/gi;
    const text = inputText.value.replaceAll(regex, "").toLowerCase();
    const revText = text.split("").reverse().join("");
    return text === revText ? true : false;
}