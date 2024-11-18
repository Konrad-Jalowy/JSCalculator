class Computator {
    constructor(prev, curr, op){
        this.prev = prev;
        this.curr = curr;
        this.op = op;
    }

    compute() {
        let computation
        const prev = parseFloat(this.prev)
        const current = parseFloat(this.curr)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.op) {
          case '+':
            computation = prev + current
            break
          case '-':
            computation = prev - current
            break
          case '*':
            computation = prev * current
            break
          case '÷':
            computation = prev / current
            break
          default:
            return
        }
        return computation;
    }
}