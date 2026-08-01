const notification = document.getElementById("notification");
const button = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const overlay = document.getElementById("overlay");

// 2 saniye sonra bildirimi göster
setTimeout(() => {
  notification.classList.add("show");
}, 2000);

// Butona basınca
button.onclick = () => {

  notification.style.display = "none";

  overlay.style.display = "block";

  letter.style.display = "block";

  setTimeout(() => {
    letter.classList.add("show");
  }, 50);

};
