const images = document.querySelectorAll(".slider__item");
const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");

function showImage (index) {
    let currentIndex = index;
    currentIndex = currentIndex < 0 ? images.length - 1 : currentIndex >= images.length ? 0 : currentIndex;
    images[currentIndex].classList.add('slider__item_active');
    images.forEach((image, index) => {
    if (index !== currentIndex) {
      image.classList.remove("slider__item_active");
    }
  });
}
arrowPrev.addEventListener("click", () => {
    let activeIndex = Array.from(images).findIndex(image =>
        image.classList.contains("slider__item_active"));
    showImage(activeIndex - 1);
  });
arrowNext.addEventListener("click", () => {
    let activeIndex = Array.from(images).findIndex(image =>
        image.classList.contains("slider__item_active"));
    showImage(activeIndex + 1);
  });