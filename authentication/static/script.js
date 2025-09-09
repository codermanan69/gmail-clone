// =============================
// LANDING PAGE (login/register)
// =============================
document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on landing.html
  if (document.querySelector(".auth-container")) {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // For now just redirect to dashboard
        window.location.href = "dashboard.html";
      });
    }
  }

  // =============================
  // DASHBOARD PAGE
  // =============================
  if (document.querySelector(".main")) {
    // Dark Mode toggle
    let darkBtn = document.getElementById("darkToggle");

    if (darkBtn) {
      darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
          darkBtn.textContent = "☀️ Light Mode";
        } else {
          darkBtn.textContent = "🌙 Dark Mode";
        }
      });
    }

    // =============================
    // FETCH EMAILS FROM BACKEND
    // =============================
    const mailList = document.querySelector(".mail-list");

    fetch("http://127.0.0.1:8000/emails/") // Django API endpoint
      .then((response) => response.json())
      .then((data) => {
        mailList.innerHTML = ""; // clear dummy mails

        data.forEach((mail) => {
          const mailDiv = document.createElement("div");
          mailDiv.classList.add("mail", "unread");

          mailDiv.innerHTML = `
            <input type="checkbox">
            <span class="from">${mail.from}</span>
            <span class="subject">${mail.subject}</span>
            <span class="time">${mail.time}</span>
          `;

          // Add click event for read/unread
          mailDiv.addEventListener("click", function (e) {
            if (e.target.tagName.toLowerCase() === "input") return;

            if (mailDiv.classList.contains("unread")) {
              mailDiv.classList.remove("unread");
              alert("✅ Marked as read: " + mail.from);
            } else {
              alert("📬 Opening mail from: " + mail.from);
            }
          });

          mailList.appendChild(mailDiv);
        });
      })
      .catch((error) => console.error("Error fetching emails:", error));
  }
});

// =============================
// SIDEBAR COLLAPSE TOGGLE
// =============================
let collapseBtn = document.getElementById("collapseBtn");
let sidebar = document.querySelector(".sidebar");

collapseBtn.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");
});
