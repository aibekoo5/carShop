const carousel = document.querySelector('.carousel-container');
const categories = document.querySelectorAll('.category');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

function updateCarousel() {
    const categoryWidth = categories[0].offsetWidth + 10; // 10px for margin
    carousel.style.transform = `translateX(-${currentIndex * categoryWidth}px)`;
}

arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

arrowRight.addEventListener('click', () => {
    if (currentIndex < categories.length - 5) {
        currentIndex++;
        updateCarousel();
    }
});

// Initial update
updateCarousel();

// Responsive behavior
window.addEventListener('resize', updateCarousel);

document.addEventListener('DOMContentLoaded', function() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          dots.forEach(d => d.classList.remove('active'));
          dot.classList.add('active');
          console.log(`Switched to slide ${index + 1}`);
          // Here you would typically change the banner content
      });
  });

  const moreButton = document.querySelector('.more-button');
  moreButton.addEventListener('click', () => {
      console.log('More details button clicked');
      // Here you would typically navigate to a details page or show a modal
  });
});


addToCartButton = document.querySelectorAll(".add-to-cart-button");

document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {
    addToCartButton.addEventListener('click', function() {
        addToCartButton.classList.add('added');
        setTimeout(function(){
            addToCartButton.classList.remove('added');
        }, 2000);
    });
});

const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const likeIcon = button.querySelector('.like-icon');
    likeIcon.classList.toggle('active');
  });
});
