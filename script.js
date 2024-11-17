document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "your_service_id",
            template_id: "your_template_id",
            user_id: "your_user_id",
            template_params: {
              name: name,
              email: email,
              message: message,
            },
          }),
        }
      );

      if (response.ok) {
        alert("Your message has been sent!");
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      alert("An error occurred while sending the message.");
    }
  });
