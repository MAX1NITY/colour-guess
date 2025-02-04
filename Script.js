document.addEventListener("DOMContentLoaded", function() {
    let arr = [0, 1, 2, 3, 4, 5];
    let score = 0;  
    let index;  
    let timer;  
    let timeLeft = 30; 
    let isGameOver = false; 

    function startGame() {
        if (isGameOver) return; 
        if (timer) {
            clearInterval(timer);
        }

        timer = setInterval(updateTimer, 1000);

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        document.getElementById("colorBox").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        index = Math.floor(Math.random() * 6);
        document.getElementById(index).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        arr = [0, 1, 2, 3, 4, 5];
        arr.splice(index, 1);

        arr.forEach(i => {
            let rX = Math.floor(Math.random() * 256);
            let gX = Math.floor(Math.random() * 256);
            let bX = Math.floor(Math.random() * 256);

            document.getElementById(i).style.backgroundColor = `rgb(${rX}, ${gX}, ${bX})`;
        });

        document.querySelectorAll(".btn").forEach(button => {
            button.addEventListener("click", guess);
        });

        isGameOver = false;
    }

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timer").innerText = timeLeft;
        } else {

            clearInterval(timer); 
            document.getElementById("colorName").innerHTML = "Game Over!";
            isGameOver = true; 
            disableButtons(); 
        }
    }

 
    function disableButtons() {
        document.querySelectorAll(".btn").forEach(button => {
            button.removeEventListener("click", guess); 
        });
    }


    function guess(event) {
        if (isGameOver) return;  

        if (event.target.id === index.toString()) {
            document.getElementById("colorName").innerHTML = "Brilliant!!!";
            score++; 
            document.getElementById("score").innerText = score; 
        } else {
            document.getElementById("colorName").innerHTML = "Incorrect";
        }

        disableButtons();

        setTimeout(startGame, 1000);
    }

    startGame();
});

function replay(){
        window.location.reload();
        isGameOver=true

}

var modal = document.getElementById("myModal");

var openModalBtn = document.getElementById("openModalBtn");

var closeBtn = document.getElementById("closeBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}