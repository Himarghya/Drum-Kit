const Drum = document.getElementsByClassName("drum");
//for event Listener
for(var i=0; i< Drum.length ; i++){
    Drum[i].addEventListener("click" , (event)=>{
        const DrumLetter = event.target.classList[0];
        DrumSound(DrumLetter);
        animation(DrumLetter);
    })
}
//for keyboard pressing
    document.addEventListener("keypress" , (event)=>{
        const DrumLetter1 = event.key;
        DrumSound(DrumLetter1);
        animation(DrumLetter1);
    })
//function Animation for button pressed
function animation(Aletter){
    const Ani = document.querySelector(`.${Aletter}`);
    Ani.classList.add("pressed");
    setTimeout(()=>{
        Ani.classList.remove("pressed");
    },100)
}
//Function for the sound
function DrumSound(Letter){
    switch(Letter){
        case("w"):
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
        case("a"):
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
        case("s"):
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
        case("d"):
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
        case("j"):
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
        case("k"):
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
        case("l"):
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break; 
    }
}
