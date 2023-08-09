let displayValue = '';
let history = [];

function appendValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    addToHistory(displayValue, result);
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function addToHistory(expression, result) {
  history.push({ expression, result });
}

function showHistory() {
  let historyText = '';
  for (let i = 0; i < history.length; i++) {
    const { expression, result } = history[i];
    historyText += `${expression} = ${result}\n`;
  }
  alert("Calculation History:\n" + historyText);
}
