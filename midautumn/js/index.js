const star = document.querySelector('.star');
// const stars = $(`<div></div>`);
// const stars = document.querySelector('.stars');

const width = window.innerWidth;
const height = 200;



function randomPosition() {
    // const x = getRandomPosition(width);
    // const y = getRandomPosition(height);

    // const stars = $(`<div>*</div>`);

    // stars.css('position', 'absolute');
    // stars.css('opacity  ', 1);
    // stars.css('width', 2);
    // stars.css('height', 2);
    // stars.css('borderRadius', '50%');
    // stars.css('backgroundColor', '#ffffff');

    // stars.css('top', y);
    // stars.css('left', x);

    // console.log(stars);
    // star.append(stars)
    // console.log(star);
    // stars.fadeOut('slow');

    star.innerHTML = '*';

}

function getPosition() {
    for (let i = 0; i < 100; i++) {
        randomPosition();
    }
}

function getRandomPosition(number) {
    return Math.floor(Math.random() * number);
}

getPosition();
setInterval(getPosition, 1000);