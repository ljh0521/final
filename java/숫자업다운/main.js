let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")
let moneyArea = document.getElementById("money-area")
let chance = 5;
let money = 10000;
let gameOver = false;
let history = [];

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function () {
    userInput.value = "";
})

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1
    console.log("정답", computerNum)
}

function play() {
    let userValue = userInput.value;
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "범위값을 벗어났습니다";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다";
        return;
    }

    chance--;
    chanceArea.textContent = `남은기회:${chance}번`;
    console.log("chance", chance)

    money--;
    moneyArea.textContent = `소지금:${money}원`;
    console.log("money", money)

    
    if (userValue < computerNum) {
        resultArea.textContent = "UP";
    } else if (userValue > computerNum) {
        resultArea.textContent = "DOWN";
    } else {
        resultArea.textContent = "정답!";
    }

    history.push(userValue);
    console.log(history);

    if (chance < 1) {
        gameOver = true
    }
    if (gameOver == true) {
        playButton.disabled = true
    }
}
function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "새로운 번호 생성";
    
}
pickRandomNum();