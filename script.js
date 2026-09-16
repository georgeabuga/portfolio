// script.js — a tiny bit of JavaScript for the portfolio site.
//
// What it does: puts the current year in the footer, so you never
// have to update it by hand.
//
// How it works:
// 1. document.getElementById("year") finds the <span id="year"> in index.html
// 2. .textContent sets the text shown inside it
// 3. new Date().getFullYear() gives the current year (e.g. 2026)

document.getElementById("year").textContent = new Date().getFullYear();
