// Example of vulnerable JavaScript (DOM-based XSS)
const params = new URLSearchParams(window.location.search);
const user = params.get("name");
document.getElementById("username").innerHTML = user;  // Vulnerable to XSS
