let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let clearButton = document.getElementById("clear");
let equalsButton = document.getElementById("equals");

let expression = "";

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.getAttribute("data-value");
    if (value) {
      // Append value to expression and update the display
      expression += value;
      display.innerText = expression;
    }
  });
});

// Clear button functionality
clearButton.addEventListener("click", () => {
  expression = "";
  display.innerText = "0";
});

// Evaluate the expression on equals button click
equalsButton.addEventListener("click", () => {
  try {
    // Replace ÷ and × with JavaScript operators
    expression = expression.replace("÷", "/").replace("×", "*");
    expression = eval(expression);
    display.innerText = expression;
  } catch {
    display.innerText = "Error";
  }
});
