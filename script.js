// IMPORTANT: Add your WhatsApp number below in international format, without + or spaces.
// Example Pakistan number: 923001234567
const WHATSAPP_NUMBER = "923155627665";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const message = document.getElementById("formMessage");
  if (WHATSAPP_NUMBER.includes("X")) {
    message.textContent = "Booking form is ready. Website owner: please add your WhatsApp number in script.js before publishing.";
    message.style.cssText = "color:#b45c37;font-size:11px;margin-top:12px;";
    return;
  }
  const data = new FormData(this);
  const text = [
    "Home Care Plusa — Home Visit Request",
    "Name: " + data.get("name"),
    "Phone: " + data.get("phone"),
    "Area: " + (data.get("area") || "Not provided"),
    "Service: " + data.get("service"),
    "Details: " + (data.get("details") || "Not provided")
  ].join("\n");
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
});
