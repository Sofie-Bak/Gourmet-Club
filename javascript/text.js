/* CAROSEL CHEFS */

let slideIndex = 0;

function showSlide() {
  const slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}

function nextSlide() {
  slideIndex++;
  showSlide();
  const currentSlide = document.querySelector('.slide.active');
  currentSlide.classList.remove('slide-left');
  currentSlide.classList.add('slide-right');
}

function prevSlide() {
  slideIndex--;
  showSlide();
  const currentSlide = document.querySelector('.slide.active');
  currentSlide.classList.remove('slide-right');
  currentSlide.classList.add('slide-left');
}


document.addEventListener('DOMContentLoaded', showSlide);

/* image 1 */
const imageContainer = document.querySelector('.image-container');
const socialMediaDropdown = document.querySelector('.social-media-dropdown');

imageContainer.addEventListener('mouseenter', function() {
  // Show the social media dropdown with fade in effect when hovering over the image
  socialMediaDropdown.style.top = '0'; /* Move the dropdown down */
  socialMediaDropdown.style.opacity = '1';
  socialMediaDropdown.style.display = 'block';
});

imageContainer.addEventListener('mouseleave', function() {
  // Hide the social media dropdown with fade out effect when moving the mouse away from the image
  socialMediaDropdown.style.opacity = '0';
  setTimeout(() => {
    socialMediaDropdown.style.display = 'none';
  }, 300); // Adjust the timeout to match the transition duration
});

/* image 2 */
const imageContainer2 = document.querySelector('.image-container2');
const socialMediaDropdown2 = document.querySelector('.social-media-dropdown2');

imageContainer2.addEventListener('mouseenter', function() {
  // Show the social media dropdown with fade in effect when hovering over the image
  socialMediaDropdown2.style.top = '0'; /* Move the dropdown down */
  socialMediaDropdown2.style.opacity = '1';
  socialMediaDropdown2.style.display = 'block';
});

imageContainer2.addEventListener('mouseleave', function() {
  // Hide the social media dropdown with fade out effect when moving the mouse away from the image
  socialMediaDropdown2.style.opacity = '0';
  setTimeout(() => {
    socialMediaDropdown2.style.display = 'none';
  }, 300); // Adjust the timeout to match the transition duration
});

/* image 3 */
const imageContainer3 = document.querySelector('.image-container3');
const socialMediaDropdown3 = document.querySelector('.social-media-dropdown3');

imageContainer3.addEventListener('mouseenter', function() {
  // Show the social media dropdown with fade in effect when hovering over the image
  socialMediaDropdown3.style.top = '0'; /* Move the dropdown down */
  socialMediaDropdown3.style.opacity = '1';
  socialMediaDropdown3.style.display = 'block';
});

imageContainer3.addEventListener('mouseleave', function() {
  // Hide the social media dropdown with fade out effect when moving the mouse away from the image
  socialMediaDropdown3.style.opacity = '0';
  setTimeout(() => {
    socialMediaDropdown3.style.display = 'none';
  }, 300); // Adjust the timeout to match the transition duration
});
