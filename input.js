
import InputController from "./InputController.js";

class InputControllerFacade {
    constructor(){
        this.iptController = new InputController();
        let btns = document.querySelectorAll("button[data-operation]");
        btns.forEach(button => {
            button.addEventListener('click', () => {
              this.sendInput(button.dataset.operation);
            });
          });
    }

    sendInput(ipt){
        this.iptController.receiveInput(ipt);
    }
}

let facade = new InputControllerFacade()

class RippleEffect {
    constructor() {
        const buttons = document.querySelectorAll("button.ripple-effect");
        for (const b of buttons) {
            this.addListenerToButton(b);
        }
    }

    addListenerToButton = (b) => {
        b.addEventListener("click", this.addRipple);
    }

    addRipple = (event) => {
        const button = event.currentTarget;
        const span = document.createElement("span");
        const size = Math.max(button.clientWidth, button.clientHeight);

        span.style.width = span.style.height = size + "px";

        const left = event.clientX - button.offsetLeft
                        + document.documentElement.scrollLeft ;
        span.style.left = left + "px";

        const top = event.clientY - button.offsetTop
                        + document.documentElement.scrollTop;
        span.style.top = top + "px";
        
        span.classList.add("ripple-el");

        setTimeout(() => {
            span.remove();
        }, 650);
        
        button.appendChild(span);
    }
}

const rippleEffect = new RippleEffect();
