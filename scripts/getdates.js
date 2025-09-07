// getdates.js
// This script adds the current year
// and the last modified date to the footer

// 1. Get the current year
let today = new Date();                  // create a new Date object
let year = today.getFullYear();          // extract the year (e.g., 2025)
document.getElementById("currentyear").textContent = year;  // put year into the span

// 2. Get the last modified date of this document
let lastModified = document.lastModified; // built-in property from the browser
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
