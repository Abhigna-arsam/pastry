const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content > div", {
  ...scrollRevealOption,
  delay: 1000,
});

document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const date = document.getElementById('date').value.trim();
  const person = document.getElementById('person').value.trim();

  if (!firstName || !lastName || !date || !person) {
    alert("Please fill in all the fields!");
    return;
  }

  // Display the success message
  document.getElementById('successMessage').style.display = 'block';

  // Optionally, reset the form after successful booking
  document.getElementById('bookForm').reset();

  alert(`Thank you ${firstName}! Your table for ${person} person(s) is booked on ${date}.`);
});
