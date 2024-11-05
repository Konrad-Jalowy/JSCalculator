class DOMHelper {
    constructor(){
        this.currOp = document.querySelector(".currOp");
        this.prevOp = document.querySelector(".prevOp");
    }

    update(curr, prev="", op=""){
        this.currOp.textContent = curr;
        this.prevOp.textContent = `${prev}${op}`;
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


class Helper {
    
    constructor(){
        this.DOMHelper = new DOMHelper();
    }

    update(curr, prev="", op=""){
        this.DOMHelper.update(curr, prev, op);
    }

    animateWrongInput(){
        this.DOMHelper.animateWrongInput();
    }

    compute(curr, prev, op){
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

}

export default Helper;