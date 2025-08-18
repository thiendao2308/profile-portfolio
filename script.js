// Initialize EmailJS after DOM loads
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs.init("44betInxDyIogx1T6");
  }

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");

      // Animate hamburger menu
      const spans = this.querySelectorAll("span");
      if (!mobileMenu.classList.contains("hidden")) {
        // Open menu - transform to X
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
      } else {
        // Close menu - reset to hamburger
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");

        // Reset hamburger menu
        const spans = mobileMenuBtn.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !mobileMenuBtn.contains(event.target) &&
        !mobileMenu.contains(event.target)
      ) {
        mobileMenu.classList.add("hidden");

        // Reset hamburger menu
        const spans = mobileMenuBtn.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 100) {
      navbar.classList.add("bg-white/98", "shadow-lg");
    } else {
      navbar.classList.remove("bg-white/98", "shadow-lg");
    }
  });

  // Fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      } else {
        // Remove fade-in-visible when element goes out of viewport
        entry.target.classList.remove("fade-in-visible");
      }
    });
  }, observerOptions);

  // Observe all sections and elements for fade-in
  const fadeElements = document.querySelectorAll("section, .fade-in");
  fadeElements.forEach((element) => {
    element.classList.add("fade-in");
    observer.observe(element);
  });

  // Skill bars animation
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    observer.observe(bar);
  });

  // Animate skill bars when they become visible
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.style.width;
          progressBar.style.setProperty("--skill-width", width);
          progressBar.classList.add("animate");
        } else {
          // Reset skill bar animation when out of viewport
          progressBar.classList.remove("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    skillObserver.observe(bar);
  });
});

// Function to send email
function sendEmail(e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById("user_name").value;
  const email = document.getElementById("user_email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Get button elements
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");

  // Disable button and show loading
  submitBtn.disabled = true;
  btnText.textContent = "Đang gửi...";
  submitBtn.classList.add("opacity-50", "cursor-not-allowed");

  // EmailJS template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    to_email: "thiendaocong@gmail.com", // Email của bạn
  };

  // Send email using EmailJS
  emailjs
    .send("service_xeglr1f", "template_cit2ydk", templateParams)
    .then(
      function (response) {
        // Success
        showNotification("Tin nhắn đã được gửi thành công!", "success");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        // Error
        showNotification(
          "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại!",
          "error"
        );
      }
    )
    .finally(function () {
      // Re-enable button
      submitBtn.disabled = false;
      btnText.textContent = "Gửi tin nhắn";
      submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
    });
}

// Function to show notification
function showNotification(message, type) {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification fixed top-20 right-5 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform translate-x-full ${
    type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
  }`;
  notification.textContent = message;

  // Add to body
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.remove("translate-x-full");
  }, 100);

  // Hide notification after 5 seconds
  setTimeout(() => {
    notification.classList.add("translate-x-full");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 5000);
}
