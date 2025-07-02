const year = new Date().getFullYear();
const textElement = document.getElementById("year");
textElement.textContent = textElement.textContent.replace('YEAR_PLACEHOLDER', year);
