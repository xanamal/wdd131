

function calculateWindChill(temp, wind) {
    if (temp > 50 || wind <= 3) {
        return "N/A";
    } else {
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
        return Math.round(windChill);
    }
}

const tempElement = document.getElementById("temperature");
const windElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

const temp = parseFloat(tempElement.textContent);
const wind = parseFloat(windElement.textContent);

const windChill = calculateWindChill(temp, wind);
windChillElement.textContent = `Wind Chill: ${windChill}`;