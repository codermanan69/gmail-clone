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

// Mail click -> mark as read/unread (except checkbox)
let mails = document.querySelectorAll(".mail");
mails.forEach(function(mail) {
  mail.addEventListener("click", function(e) {
    // Agar checkbox pe click hua -> skip
    if (e.target.tagName.toLowerCase() === "input") {
      return;
    }

    if (mail.classList.contains("unread")) {
      mail.classList.remove("unread");
      alert("✅ Marked as read: " + mail.querySelector(".from").innerText);
    } else {
      alert("📬 Opening mail from: " + mail.querySelector(".from").innerText);
    }
  });
});
