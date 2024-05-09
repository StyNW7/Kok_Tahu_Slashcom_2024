document.addEventListener('keypress', function(event) {
    if(event.key == 'w') {
        audio = new Audio('Audio/Crash1.mp3');
        audio.play();
    }
    else if(event.key == 'a') {
        audio = new Audio('Audio/Kick.mp3');
        audio.play();
    }
    else if(event.key == 's') {
        audio = new Audio('Audio/Snare.mp3');
        audio.play();
    }
    else if(event.key == 'd') {
        audio = new Audio('Audio/SmallTom.mp3');
        audio.play();
    }
    else if(event.key == 'j') {
        audio = new Audio('Audio/MediumTom.mp3');
        audio.play();
    }
    else if(event.key == 'k') {
        audio = new Audio('Audio/FloorTom.mp3');
        audio.play();
    }
    else if(event.key == 'l') {
        audio = new Audio('Audio/ClosedHiHat.mp3');
        audio.play();
    }
    else if(event.key == 'o') {
        audio = new Audio('Audio/RideCymbal.mp3');
        audio.play();
    }
    else if(event.key == 'i') {
        audio = new Audio('Audio/RideCymbalBell.mp3');
        audio.play();
    }
    else if(event.key == 'p') {
        audio = new Audio('Audio/Crash2.mp3');
        audio.play();
    }
});

function hihat(){
    audio = new Audio("Audio/ClosedHiHat.mp3");
    audio.play();
}

function kick(){
    audio = new Audio('Audio/Kick.mp3');
    audio.play();
}

function snare(){
    audio = new Audio("Audio/Snare.mp3");
    audio.play();
}

function tom1(){
    audio = new Audio('Audio/SmallTom.mp3');
    audio.play();
}

function tom2(){
    audio = new Audio('Audio/MediumTom.mp3');
    audio.play();
}

function floor(){
    audio = new Audio('Audio/FloorTom.mp3');
    audio.play();
}

function ride(){
    audio = new Audio('Audio/RideCymbal.mp3');
    audio.play();
}

function ridebell(){
    audio = new Audio('Audio/RideCymbalBell.mp3');
    audio.play();
}

function crash2(){
    audio = new Audio("Audio/Crash2.mp3");
    audio.play();
}

function crash1(){
    audio = new Audio("Audio/Crash1.mp3");
    audio.play();
}