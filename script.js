const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const jobForm = document.getElementById("jobForm");
const popupOverlay = document.getElementById("popupOverlay");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");

let formData = {};

jobForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Store form data temporarily
  formData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    city: document.getElementById("city").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    jobType: document.getElementById("jobType").value,
  };

  // Show consent popup
  popupOverlay.style.display = "flex";
});

acceptBtn.addEventListener("click", function () {
  popupOverlay.style.display = "none";

  alert(
    "Application Submitted Successfully!\n\n" +
    "Name: " + formData.name + "\n" +
    "Age: " + formData.age + "\n" +
    "City: " + formData.city + "\n" +
    "Phone: " + formData.phone + "\n" +
    "Email: " + formData.email + "\n" +
    "Job Type: " + formData.jobType
  );

  jobForm.reset();
});

declineBtn.addEventListener("click", function () {
  popupOverlay.style.display = "none";
  alert("You declined data permission. Application not submitted.");
});
