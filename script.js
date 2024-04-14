const inputField = document.getElementById('input-field');
const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const text = inputField.value;
  const result = text.toUpperCase();
  output.textContent = `Output: ${result}`;
});