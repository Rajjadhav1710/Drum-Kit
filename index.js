var buttons = document.querySelectorAll(".drum");


//  it's really important that if you're going to implement something in your own code, to find out what the code is doing and how it works.
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        // console.log(this.innerHTML);
        switch (this.innerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            default : console.log(this.innerHTML);
        }
    });

    buttons[i].addEventListener("mousedown",function(){
        // console.log(this.innerHTML);
        this.classList.toggle("pressed");
    });

    buttons[i].addEventListener("mouseup",function(){
        // console.log(this.innerHTML);
        this.classList.toggle("pressed");
    });
}

document.addEventListener("keydown",function(evt){
    switch (evt.key.toLowerCase()) {
        case "w":
            document.querySelector(".w").classList.toggle("pressed");
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            document.querySelector(".a").classList.toggle("pressed");
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            document.querySelector(".s").classList.toggle("pressed");
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            document.querySelector(".d").classList.toggle("pressed");
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            document.querySelector(".j").classList.toggle("pressed");
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            document.querySelector(".k").classList.toggle("pressed");
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            document.querySelector(".l").classList.toggle("pressed");
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default : console.log(evt.key);
    }
    // console.log(evt.key);
});


document.addEventListener("keyup",function(evt){
    switch (evt.key.toLowerCase()) {
        case "w":
            document.querySelector(".w").classList.toggle("pressed");
            break;
        case "a":
            document.querySelector(".a").classList.toggle("pressed");
            break;
        case "s":
            document.querySelector(".s").classList.toggle("pressed");
            break;
        case "d":
            document.querySelector(".d").classList.toggle("pressed");
            break;
        case "j":
            document.querySelector(".j").classList.toggle("pressed");
            break;
        case "k":
            document.querySelector(".k").classList.toggle("pressed");
            break;
        case "l":
            document.querySelector(".l").classList.toggle("pressed");
            break;
        default : console.log(evt.key);
    }
    // console.log(evt.key);
});