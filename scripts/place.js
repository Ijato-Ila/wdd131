// Insert current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Insert last modified date in footer
document.getElementById("lastModified").textContent = document.lastModified;

// Wind chill calculation function
function calculateWindChill(tempC, windKmh) {
  // Formula for Celsius wind chill
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

// Static values from the page
const temp = 9; // °C
const wind = 10; // km/h

// Check if conditions are valid for wind chill
if (temp <= 10 && wind > 4.8) {
  document.getElementById("windchill").textContent = calculateWindChill(temp, wind) + " °C";
} else {
  document.getElementById("windchill").textContent = "N/A";
}
