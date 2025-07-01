window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;
    const leftImg = document.querySelector('.left');
    const rightImg = document.querySelector('.right');
    const centerBtn = document.getElementById('centerBtn');

    const moveAmount = scrollValue * 0.4;
    leftImg.style.transform = `translateX(-${moveAmount}px)`;
    rightImg.style.transform = `translateX(${moveAmount}px)`;

    if (moveAmount > 100) {
        centerBtn.style.opacity = 1;
        centerBtn.style.zIndex = 2;
    } else {
        centerBtn.style.opacity = 0;
        centerBtn.style.zIndex = 0;
    }
});

const sliderTrack = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function scrollToCard(index) {
    const item = sliderTrack.children[index];
    if (item) {
    const offsetLeft = item.offsetLeft;
    sliderTrack.scrollTo({ left: offsetLeft, behavior: 'smooth' });
    }
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
    currentIndex--;
    scrollToCard(currentIndex);
    }
});

nextBtn.addEventListener("click", () => {
    const maxIndex = sliderTrack.children.length - 1;
    if (currentIndex < maxIndex) {
    currentIndex++;
    scrollToCard(currentIndex);
    }
});