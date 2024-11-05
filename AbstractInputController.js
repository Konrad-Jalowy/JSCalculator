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

  export default AbstractInputController;