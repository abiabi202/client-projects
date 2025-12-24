function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");
});

// function sendMail(event) {
//   event.preventDefault(); // stop form reload

//   let params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     phone: document.getElementById("phone").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs
//     .send("service_kviwiu9", "template_rwijeki", params)
//     .then(() => {
//       alert("✅ Message sent successfully!");
//     })
//     .catch((error) => {
//       console.error("EmailJS Error:", error);
//       alert("❌ Failed to send message. Please try again.");
//     });
// }


