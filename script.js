
let fontColorInput = document.querySelector('#fontClr');
let fontSizeInput = document.querySelector('#fontSize');
let fontFamilyInput = document.querySelector('#fontFamily');
let text = document.querySelector('#Textarea');
function updateText() {
    text.style.color = fontColorInput.value;  // Change the text color
    text.style.fontSize = fontSizeInput.value + 'px';  // Change the font size
    text.style.fontFamily = fontFamilyInput.value;  // Change the font family
}


fontColorInput.addEventListener('input', updateText);
fontSizeInput.addEventListener('input', updateText);
fontFamilyInput.addEventListener('change', updateText);

updateText(); // first update on page load
