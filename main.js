

//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약 유저가 번호를 맞추면 ,맞췄습니다
// 번호가 < 유저번호 down
// 번호가 > 유저번호 up
// reset 게임리셋
// 기회는 5번 (더이상 추측 불가,버튼 비활성화)
// 1~100 범위 밖의 숫자는 알려주며 기회를 깍지 않음
// 이미 입력한 숫자 또 입력하면 알려주며 기회를 깍지 않음

let randomNum = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resultArea  = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chancesArea = document.getElementById("chances-area")
let chances = 5
let gameOver = false
let win = false
let history = []

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){userInput.value = ""})

function pickRandom(){
    randomNum = Math.floor(Math.random()*100)+1;
    console.log("정답",randomNum);
}

function play(){
    let userValue = userInput.value

    if(userValue > 100 || userValue < 1){
        resultArea.textContent = "1~100 안의 숫자를 적어주세요"
        return
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력했던 숫자입니다"
        return
    }

    chances --;
    chancesArea.textContent =`남은기회${chances}번`

    if(userValue > randomNum){
        resultArea.textContent = "다운"
    }else if(userValue < randomNum){
        resultArea.textContent = "업!"
    }else if(userValue == randomNum){
        win = true
    }

    history.push(userValue)

    if(chances<1){
        gameOver = true
    }

    if(win){
        playButton.disabled = true
        resultArea.textContent = "정답입니다!"
    }

    if(gameOver){
        playButton.disabled = true
        resultArea.textContent = "게임오버"
    }
}

function reset(){
    userInput.value = ""
    chances =5
    history = []
    resultArea.textContent =""
    chancesArea.textContent =`남은기회${chances}번`
    gameOver = false
    win = false
    playButton.disabled = false
}

pickRandom();


