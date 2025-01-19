const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const passwordText = document.getElementById('password');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const lengthInput = document.getElementById('length');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
  let characters = '';
  let length = lengthInput.value;
  let password = '';

  if (uppercaseCheck.checked) characters += uppercase;
  if (lowercaseCheck.checked) characters += lowercase;
  if (numbersCheck.checked) characters += numbers;
  if (symbolsCheck.checked) characters += symbols;

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

generateBtn.addEventListener('click', () => {
  passwordText.value = generatePassword();
});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(passwordText.value);
    alert('Password copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy password: ', err);
  }
});