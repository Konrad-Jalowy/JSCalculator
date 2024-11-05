import AbstractInputController from "./AbstractInputController.js";
import Helper from "./Helper.js";

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

export default InputController;