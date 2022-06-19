const volumeDirection = 0.3;

function playGameOverSound() {
    new Audio('sounds/gameover.wav').play()
}

function playAppleEatingSound() {
    new Audio('sounds/apple-eating.mp3').play()
}

function playDownSound() {
    const audio = new Audio('sounds/down.mp3');

    audio.volume = volumeDirection;
    audio.play()
}

function playUpSound() {
    const audio = new Audio('sounds/up.mp3')

    audio.volume = volumeDirection;
    audio.play()
}

function playLeftSound() {
    const audio = new Audio('sounds/left.mp3')

    audio.volume = volumeDirection;
    audio.play()
}

function playRightSound() {
    const audio = new Audio('sounds/right.mp3')

    audio.volume = volumeDirection;
    audio.play();
}

function playPauseSound() {
    new Audio('sounds/pause.mp3').play()
}

function playUnpauseSound() {
    new Audio('sounds/unpause.mp3').play()
}