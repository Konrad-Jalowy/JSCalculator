class AbstractInputController {

    constructor() {
      if (this.constructor == AbstractInputController) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }
  
    processNumericInput(ipt){
        throw new Error("Method must be implemented.");
    }

    processZero(){
        throw new Error("Method must be implemented.");
    }

    processDot(){
        throw new Error("Method must be implemented.");
    }

    processOperatorInput(ipt){
        throw new Error("Method must be implemented.");
    }

    processEqualsInput(){
        throw new Error("Method must be implemented.");
    }

    processDelInput(){
        throw new Error("Method must be implemented.");
    }

    processACInput(){
        throw new Error("Method must be implemented.");
    }

    processNegative(){
        throw new Error("Method must be implemented.");
    }

    processPow2(){
        throw new Error("Method must be implemented.");
    }

    processPercent(){
        throw new Error("Method must be implemented.");
    }

    processFactorial(){
        throw new Error("Method must be implemented.");
    }

    processSqrt(){
        throw new Error("Method must be implemented.");
    }


  
    receiveInput(ipt){
        console.log(`Got input: ${ipt}`);
        switch(ipt){
            case "0":
                this.processZero();
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.processNumericInput(ipt);
                break;
            case ".":
                this.processDot();
                break;
            case "+":
            case "-":
            case "/":
            case "*":
                this.processOperatorInput(ipt);
                break;
            case "=":
                this.processEqualsInput();
                break;
            case "DEL":
                this.processDelInput();
                break;
            case "AC":
                this.processACInput();
                break;
            case "NEG":
                this.processNegative()
                break;
            case "%":
                this.processPercent();
                break;
            case "POW2":
                this.processPow2();
                break;
            case "SQRT":
                this.processSqrt();
                break;
            case "!":
                this.processFactorial();
                break;
            default:
                throw new Error("Unknown input");
        }
    }
  }

class Helper {
    constructor(){
        this.currOp = document.querySelector(".currOp");
        this.prevOp = document.querySelector(".prevOp");
    }

    update(curr, prev="", op=""){
        this.currOp.textContent = curr;
        this.prevOp.textContent = `${prev}${op}`;
    }

    compute(curr, prev, op){
        // if(curr.endsWith("!")){
        //     curr = this.computeFactorial(curr);
        // }
        let currFloat = parseFloat(curr);
        let prevFloat = parseFloat(prev);
        let output;
        switch(op){
            case "+":
                output = prevFloat + currFloat;
                break;
            case "-":
                output = prevFloat - currFloat;
                break;
            case "/":
                if(currFloat !== 0){
                    output = prevFloat / currFloat;
                } else {
                    output = 0;
                }
                break;
            case "*":
                output = prevFloat * currFloat;
                break;
        }
        return output;
    }

    factorial(number){
        let fact = 1;
        do {fact = fact * number--; } while (number > 1);
        return fact;
    }

    computeFactorial(numberAsString){
        let toNumber = parseFloat(numberAsString);
        let output = this.factorial(toNumber);
        return output.toString();
    }

    computePow2(numberAsString){
        let toNumber = parseFloat(numberAsString);
        let output = Math.pow(toNumber, 2);
        return output.toString();
    }

    computeSqrt(numberAsString){
        let toNumber = parseFloat(numberAsString);
        let output = Math.sqrt(toNumber);
        return output.toString();
    }

    animateWrongInput(){
        document.querySelector(".output").animate(
            [
              {border: `2px solid red`},
              {transform: 'translate(1px, 1px)', border: `2px solid red`},
              {transform: 'translate(-2px, -2px)', border: `1px solid red`},
              {transform: 'translate(2px, 2px)'},
              {transform: 'translate(-2px, 3px)'},
              {transform: 'translate(2px, -3px)'},
              
            ],
            {
              duration: 400,
              iterations: 1,
            },
          );
    }
}


class InputController extends AbstractInputController {
    constructor(){
        super();
        this.prev = '';
        this.op = '';
        this.curr = '';
        this.overwritingMode = false;
        this.helper = new Helper();
    }

    processFactorial(){
        if(this.curr === "") return;
        if(parseFloat(this.curr) >= 170 || parseFloat(this.curr) <1){
            console.error("Cant do that");
            this.helper.animateWrongInput();
            return;
        }
        this.curr = this.helper.computeFactorial(this.curr);
        this.update();
    }

    processSqrt(){
        if(this.curr === "") return;
        if(this.curr.startsWith("-")){
            console.error("Cant do that");
            this.helper.animateWrongInput();
            return;
        }
        this.curr = this.helper.computeSqrt(this.curr);
        this.update();
    }

    processNegative(){
        if(this.curr === "") return;
        if(this.curr === "0"){
            console.error("Cant do that");
            this.helper.animateWrongInput();
            return;
        }
        if(this.curr.startsWith("-")){
            this.curr = this.curr.slice(1);
            this.update();
            return;
        }
        this.curr = `-${this.curr}`;
        this.update();
    }

    processPow2(){
        if(this.curr === "") return;
        this.curr = this.helper.computePow2(this.curr);
        this.update();
    }

    processDot(){
        if(this.curr.includes(".")) return;
        if(this.curr === ""){
            this.curr = "0.";
            this.update();
            return;
        }
        this.processNumericInput(".");
    }

    processZero(){
        if(this.curr === "0") return;
        this.processNumericInput("0");
    }

    processNumericInput(ipt){
        console.log(`Processing numeric input: ${ipt}`);
        if(this.overwritingMode === true){
            this.curr = ipt;
            this.overwritingMode = false;
            this.update();
            return;
        }
        
        if(this.curr === ""){
            this.curr = ipt;
            this.update();
            return;
        } 
        this.curr = `${this.curr}${ipt}`;
        this.update();
        return;         
            
    }

    logCurr(){
        console.log("Curr: " + this.curr);
    }

    logPrev(){
        console.log("Prev: " + this.prev);
    }

    update(){
        this.helper.update(this.curr, this.prev, this.op);
        return true;
    }

    processOperatorInput(ipt){
        if(this.curr === '' && this.prev === '') return;
        if(this.prev !== '' && this.op !== '' && this.curr === ''){
            this.op = ipt;
            this.update();
            return;
        }
        if(this.prev === '' && this.op === ''){
            this.op = ipt;
            this.prev = this.curr;
            this.curr = '';
            this.update();
            return;
        }
        
        if(this.prev !== '' && this.curr !== '' && this.op !== ''){
            this.prev = this.compute();
            this.curr = '';
            this.op = ipt;
            this.update();
            return;
        }
    }

    processEqualsInput(){
        console.log(this.prev, this.curr, this.op)
        if(this.prev === "" || this.op === "" || this.curr === "")
            return;
        this.curr = this.compute()
        this.prev = "";
        this.op = "";
        this.overwritingMode = true;
        this.update();
        
    }

    processDelInput(){
        if(this.curr === "") return;
        if(this.overwritingMode !== true){
            this.curr = this.curr.slice(0, -1);
            if(this.curr.endsWith(".")) this.processDelInput();
            if(this.curr === "-") this.curr = "";
            if(this.curr === "-0") this.curr = "0";
            this.update();
            return;
            
        } else {
            this.curr = "";
            this.update();
            this.overwritingMode = false;
            return;
        }
    }
    processACInput(){
        this.curr = "";
        this.prev = "";
        this.op = "";
        this.overwritingMode = false;
        this.update();
        return;
    }

    compute(){
        return this.helper.compute(this.curr, this.prev, this.op);
    }
}

let ipt = new InputController();


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