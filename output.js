//OLD CODE


// class OutputController {
//     constructor(currOpSelector, prevOpSelector){
//         this.currOpElement = document.querySelector(currOpSelector);
//         this.prevOpElement = document.querySelector(prevOpSelector);
//     }

//     clearCurrentOp(){
//         this.currOpElement.textContent = "";
//     }

//     clearPreviousOp(){
//         this.prevOpElement.textContent = "";
//     }

//     replaceCurrentOp(replacement){
//         this.currOpElement.textContent = replacement;
//     }

//     replacePreviousOp(replacement){
//         this.prevOpElement.textContent = replacement;
//     }

//     addDigitToCurrent(digit){
//         let currentNumber = this.currOpElement.textContent;
//         this.currOpElement.textContent = `${currentNumber}${digit}`;
//     }

//     previousUpdateOperator(operator){
//         let previousString = this.prevOpElement.textContent.slice(0,-1);
//         this.prevOpElement.textContent = `${previousString}${operator}`;
//     }
// }

// let cont = new OutputController(".currOp", ".prevOp");