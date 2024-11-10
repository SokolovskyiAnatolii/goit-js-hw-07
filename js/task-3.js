const input = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

input.addEventListener('input', () => {
  nameOutput.textContent = input.value.trim() || 'Anonymous';
});
