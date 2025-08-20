const form = document.getElementById("regForm");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from refreshing

  // Collect values
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const course = document.getElementById("course").value;
  const address = document.getElementById("address").value.trim();

  // Validation
  if (!fullname || !email || !phone || !dob || !gender || !course || !address) {
    errorMsg.textContent = "⚠️ Please fill all fields.";
    successMsg.textContent = "";
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorMsg.textContent = "⚠️ Please enter a valid email.";
    successMsg.textContent = "";
    return;
  }

  // Phone validation (10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phone.match(phonePattern)) {
    errorMsg.textContent = "⚠️ Phone number must be 10 digits.";
    successMsg.textContent = "";
    return;
  }

  // If everything is fine
  errorMsg.textContent = "";
  successMsg.textContent = "✅ Registration Successful!";
  form.reset(); // clear form
});
