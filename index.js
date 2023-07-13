var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButtons; i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){
    
    var buttonPressed = this.innerHTML;
    soundPlay(buttonPressed);

    animate(buttonPressed);

})
}

document.addEventListener("keypress",function(event){
    soundPlay(event.key);

    animate(event.key);
})

function soundPlay(key){
    switch(key){
        case "w" :
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a" :
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s" :
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d" :
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "j" :
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k" :
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "l" :
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
    }
}

// adding animation
function animate(button){
    var selectedButton = document.querySelector("."+button);
    selectedButton.classList.add("pressed");

    setTimeout(function(){
        selectedButton.classList.remove("pressed")
    },100);
}