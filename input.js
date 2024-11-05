
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
