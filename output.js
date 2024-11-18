//OLD CODE
//That was the idea, my first class that i wrote
//Then it got me thinking "whats next?"
//And i started input controller/abstract input controller 
//And somehow i never used this class
//But i included it anyways...


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