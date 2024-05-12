const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const text = inputText.value;
    if (text === "") {
        alert("Please input a value");
    } else {
        if (checkWord()) {
            result.textContent = `${text} is a palindrome`;
        } else {
            result.textContent = `${text} is not a palindrome`;
        }
    }
})
//regex should be fixed better
const checkWord = () => {
    const regex = /[^\w\s]+/gi;
    const text = inputText.value.replaceAll(regex, "").replaceAll("_", "").replaceAll(" ", "").toLowerCase();
    const revText = text.split("").reverse().join("").replaceAll(" ", "");
    return text === revText ? true : false;
}