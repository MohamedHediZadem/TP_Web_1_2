// Select input elements
let fontColorInput = document.querySelector('#fontClr');
let fontSizeInput = document.querySelector('#fontSize');
let fontFamilyInput = document.querySelector('#fontFamily');
let text = document.querySelector('#Textarea'); // Ensure this ID is correct in HTML

// Function to update text styles
function updateText() {
    text.style.color = fontColorInput.value;  // Change text color
    text.style.fontSize = fontSizeInput.value + 'px';  // Change font size
    text.style.fontFamily = fontFamilyInput.value;  // Change font family
}

// Add event listeners to update text dynamically
fontColorInput.addEventListener('input', updateText);
fontSizeInput.addEventListener('input', updateText);
fontFamilyInput.addEventListener('change', updateText);

updateText(); // Initial update on page load
