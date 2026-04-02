const now = new Date();
document.getElementById("copyright").textContent = '\u00A9';
document.getElementById("year").textContent = `${now.getFullYear()} - `;
document.getElementById("modified").textContent = `Last Modified:  ${document.lastModified}`;