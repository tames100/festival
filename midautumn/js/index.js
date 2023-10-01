const star = document.querySelector('.star');
const stars = document.querySelectorAll('.stars');

const width = window.innerWidth;
const height = 500;


function randomPosition() {
    for (let i = 0; i < stars.length; i++) {
        const x = getRandomPosition(width);
        const y = getRandomPosition(height);

        $(".stars").fadeIn(500);
        $(".stars").fadeOut(1000);

        stars[i].style.top = y + 'px';
        stars[i].style.left = x + 'px';
    }

}
function getRandomPosition(number) {
    return Math.floor(Math.random() * number);
}

randomPosition();
setInterval(randomPosition, 2000);