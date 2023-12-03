let number = document.querySelector("#number");
let hesabBtn = document.querySelector("#hesabBtn")
let result = document.querySelector("#result");





hesabBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var inputNum = number.value;
    if (inputNum == 0 || inputNum == 1) {
        result.innerHTML = `1`;
    }

    if (inputNum > 1) {
        result.innerHTML = `${faktorial(inputNum)}`;
    }
    

});

function faktorial(inputNum) {
    if (inputNum < 1) return 1;
    return inputNum * faktorial(inputNum - 1);
}
