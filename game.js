// Iteration 1: Declare variables required for this game
const body = document.getElementById("game-body")
let seconds = document.getElementById("timer").innerHTML;
let zombie_id = 1;
// Iteration 1.2: Add shotgun sound

let shotgun_sound = new Audio("assets/shotgun.wav");

body.onclick = () => {
    shotgun_sound.pause();
    shotgun_sound.currentTime = 0;
    shotgun_sound.play();
}

// Iteration 1.3: Add background sound
let bgm = new Audio("assets/bgm.mp3")
bgm.play();

bgm.loop = true;

// Iteration 1.4: Add lives
let lives = 4;

// Iteration 2: Write a function to make a zombie
function makeZombie() {
    body.innerHTML += `<img src='assets/zombie-${getRandomInt(1, 6)}.png' class='zombie-image' id='zombie${zombie_id}' /> `;
    let currZombie = document.querySelector(`#zombie${zombie_id}`);
    console.log(currZombie)
    currZombie.style.transform = `translateX(${getRandomInt(20, 80)}vw)`;
    currZombie.onclick = () => {
        destroy(currZombie);
    };

}


// Iteration 3: Write a function to check if the player missed a zombie
function check_zombie(zombie) {
    console.log(zombie.getBoundingClientRect());
    if (zombie.getBoundingClientRect().top <= 0) {
        lives--;
        destroy(zombie);
       if(lives == 0){
        location.href = "game-over.html"
       }
    }
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function destroy(zombie) {
    zombie.style.display = 'none';
    zombie_id++;
    makeZombie();
}

// Iteration 5: Creating timer
var timer = setInterval(() => {
    seconds--;
    document.getElementById("timer").innerHTML = seconds;
    if (seconds == 0) {
        location.href = "win.html";
    }
    let currZombie = document.querySelector(`#zombie${zombie_id}`);
    check_zombie(currZombie)
    
}, 1000)

// Iteration 6: Write a code to start the game by calling the first zombie

makeZombie();
// Iteration 7: Write the helper function to get random integer
function getRandomInt(min, max) {
    return min + Math.ceil(Math.random() * (max - min));
}
getRandomInt(30, 40)