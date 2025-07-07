// Toggle hamburger menu
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".nav ul").classList.toggle("active");
});

const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
      header.addEventListener('click', () => {
        const parent = header.parentElement;
        parent.classList.toggle('active');
      });
    });
