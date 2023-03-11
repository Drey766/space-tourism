//destination code

var moon = document.querySelector('#moon');
var mars = document.querySelector('#mars');
var europa = document.querySelector('#europa');
var titan = document.querySelector('#titan');
var buttons = document.querySelectorAll('.carousel__indicator')
var img = document.querySelector('#destination-img')
var destinationTitle = document.querySelector('h2');
var carouselP = document.querySelector('#carousel-p');
var distance = document.querySelector('#distance');
var time = document.querySelector('#time');


moon.addEventListener('click', () => {
    img.src = 'assets/destination/image-moon.png';
    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    moon.classList.add('current-slide');
    destinationTitle.innerText = 'MOON';
    carouselP.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    distance.innerHTML = "384,400KM";
    time.innerHTML = "3 DAYS"
})

mars.addEventListener('click', () => {
    img.src = 'assets/destination/image-mars.png';
    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    mars.classList.add('current-slide');
    destinationTitle.innerHTML = 'MARS';
    carouselP.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    distance.innerHTML = "225 MIL. KM";
    time.innerHTML = "9 MONTHS"
})

europa.addEventListener('click', () => {
    img.src = 'assets/destination/image-europa.png'
    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    europa.classList.add('current-slide');
    destinationTitle.innerHTML = 'EUROPA';
    carouselP.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    distance.innerHTML = "628 MIL. KM";
    time.innerHTML = "3 YEARS"
})

titan.addEventListener('click', () => {
    img.src = 'assets/destination/image-titan.png';
    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    titan.classList.add('current-slide');
    destinationTitle.innerHTML = 'TITAN';
    carouselP.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    distance.innerHTML = "1.6 BIL. KM";
    time.innerHTML = "7 YEARS"
})