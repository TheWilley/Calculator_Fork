const buttons = document.querySelector("#btns").children
const inputField = document.getElementById("result");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        const buttonsValue = buttons[i].textContent;
        if (buttonsValue === "C") {
            resetResult();
        } else if (buttonsValue === "=") {
        } else {
            addValue(buttonsValue);
        }
    });
}

function addValue(buttonsValue) {
    inputField.value += buttonsValue;
}

function resetResult() {
    inputField.value = "";
}

function calcResult() {
    inputField.value = eval(inputField.value);
}
