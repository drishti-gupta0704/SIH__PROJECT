
document.addEventListener("DOMContentLoaded", () => {
  const profileBtn = document.getElementById("profileBtn");
  const profilePopup = document.getElementById("profilePopup");

  // Toggle profile popup
  profileBtn.addEventListener("click", () => {
    profilePopup.style.display =
      profilePopup.style.display === "block" ? "none" : "block";
  });

  // Close popup if clicked outside
  document.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target) && !profilePopup.contains(e.target)) {
      profilePopup.style.display = "none";
    }
  });

  // Logout button action
  const logoutBtn = document.querySelector(".logout-btn");
  logoutBtn.addEventListener("click", () => {
    alert("You have been logged out!");
    // redirect to login page if needed
    window.location.href = "login.html";
  });
});
