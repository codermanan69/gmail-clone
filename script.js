// Compose button action
document.querySelector(".compose-btn").addEventListener("click", function() {
  alert("📩 Compose new mail!");
});

// Dark Mode toggle
let darkBtn = document.getElementById("darkToggle");
darkBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkBtn.textContent = "☀️ Light Mode";
  } else {
    darkBtn.textContent = "🌙 Dark Mode";
  }
});

// Mail click -> mark as read/unread
let mails = document.querySelectorAll(".mail");
mails.forEach(function(mail) {
  mail.addEventListener("click", function() {
    if (mail.classList.contains("unread")) {
      mail.classList.remove("unread");
      alert("✅ Marked as read: " + mail.querySelector(".from").innerText);
    } else {
      alert("📬 Opening mail from: " + mail.querySelector(".from").innerText);
    }
  });
});
