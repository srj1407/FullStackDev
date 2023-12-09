/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result) {
    this.result = result;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  precedence(op) {
    if (op == "+" || op == "-") return 1;
    if (op == "*" || op == "/") return 2;
    return 0;
  }

  applyCal(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return 0;
    }
  }
  calculate(str) {
    str = str.trim();
    let op = [];
    let values = [];
    for (let i = 0; i < str.length; ) {
      let t = str[i];
      if (t == "(") {
        op.push(t);
        i++;
      } else if (t == ")") {
        while (op.length != 0 && op.top() != ")") {
          let b = values.top();
          values.pop();
          let a = values.top();
          values.pop();
          let top = op.top();
          op.pop();
          values.push(applyCal(a, b, top));
        }
        op.pop();
        i++;
      } else if (t == "+" || t == "-" || t == "*" || t == "/") {
        while (op.length != 0 && precedence(op.top()) >= precedence(t)) {
          let b = values.top();
          values.pop();
          let a = values.top();
          values.pop();
          let top = op.top();
          op.pop();
          values.push(applyCal(a, b, top));
        }
        op.push(token);
        i++;
      } else {
        let val = 0;
        while (!isNaN(str[i])) {
          val *= 10;
          val += parseInt(str[i], 10);
          i++;
        }
        values.push(val);
      }
    }
    while (op.length != 0) {
      let b = values.top();
      values.pop();
      let a = values.top();
      values.pop();
      let top = op.top();
      op.pop();
      values.push(applyCal(a, b, top));
    }
    return values.top();
  }
}

module.exports = Calculator;
