document.addEventListener(function () {
    // Example: Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});


function submitAnswer(selected) {
    const correct = "Noah";
    if (selected === correct) {
      alert("✅ Correct! See more questions, Bible scholar");
    } else {
      alert("❌ Incorrect. It was Noah. Redirecting...");
    }
    window.location.href = "biblegame.html";
  }
