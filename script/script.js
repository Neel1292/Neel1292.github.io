var tl = gsap.timeline();

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            links.forEach(link => link.classList.remove('active'));
            
            this.classList.add('active');
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

tl.from(".profile_pic .profile", {
    top: -500,
    duration: 1,
    ease: "bounce.out(2, 0.3)",
})

tl.to("nav", {
    top: 0,
    duration: 0.8,
})

tl.from(".nav-list h4", {
    top: -100,
    duration: 0.3,
    stagger: 0.3,
})

// =========== contact form mail sent ===========  

document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent page reload

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("number").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // ✅ Basic Validation
  if (!name || !email || (!phone && phone.length !== 10) || !subject || !message) {
    showPopup("Please fill out all fields.");
    return;
  }

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = ""; 

  let result = await fetch("http://localhost:5787/send-email",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      phone,
      subject,
      message,
    })
  })

  console.log(result);
  
  if(!result.ok) {
    showPopup("Please try again later", "danger");
    return
  }
  
  showPopup("Your Response has been recorded", "success")

});

// Function to show the popup
function showPopup(message, type) {
  if(type === "danger") {
    document.getElementById("popup").style.backgroundColor = "#ff3333";
  }
  document.getElementById("popup-message").innerText = message;
  document.getElementById("popup").style.display = "block";
  setTimeout(closePopup, 5000);
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
