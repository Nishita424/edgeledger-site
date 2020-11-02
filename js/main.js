// Smooth scrolling
$("#nav-bar a, .btn").on("click", function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number 800 specifies speed in milliseconds
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});

// Sticky nav-bar background fade
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#nav-bar").style.opacity = 0.9;
  } else {
    document.querySelector("#nav-bar").style.opacity = 1;
  }
});
