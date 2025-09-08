document.addEventListener('DOMContentLoaded', () => {
    const bgSlides = Array.from(document.querySelectorAll('.bg-slide'));
    const fgSlides = Array.from(document.querySelectorAll('.slide'));
    const nextButton = document.querySelector('.nav-right');
    const prevButton = document.querySelector('.nav-left');

    if (bgSlides.length === 0 || fgSlides.length === 0) return;

    let currentIndex = 0;

    function setActive(index) {
        bgSlides.forEach((el, i) => el.classList.toggle('active', i === index));
        fgSlides.forEach((el, i) => el.classList.toggle('active', i === index));
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % fgSlides.length;
        setActive(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + fgSlides.length) % fgSlides.length;
        setActive(currentIndex);
    }

    // Initialize first slide
    setActive(0);

    // Attach events
    if (nextButton) nextButton.addEventListener('click', showNext);
    if (prevButton) prevButton.addEventListener('click', showPrev);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextButton.focus();
            showNext();
        } else if (e.key === 'ArrowLeft') {
            prevButton.focus();
            showPrev();
        }
    });
});