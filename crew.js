var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var button4 = document.querySelector('#button4');
var buttons = document.querySelectorAll('.carousel__indicator')
var jobTitle = document.querySelector('.job-title');
var h2 = document.querySelector('h2');
var carouselP = document.querySelector('.carousel-p');
var img = document.querySelector('#carousel-img');

console.log(buttons);

button1.addEventListener('click', () => {
    img.src = 'assets/crew/image-douglas-hurley.png';

    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    button1.classList.add('current-slide');
    h2.innerHTML= 'DOUGLAS HURLEY';
    jobTitle.innerHTML= 'COMMANDER';
    carouselP.innerHTML = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2' 
})

button2.addEventListener('click', () => {
    img.src = 'assets/crew/image-anousheh-ansari.png';

    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    button2.classList.add('current-slide');
    h2.innerHTML= 'ANOUSHEH ANSARI';
    jobTitle.innerHTML= 'FLIGHT ENGINEER';
    carouselP.innerHTML = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space' 
})

button3.addEventListener('click', () => {
    img.src = 'assets/crew/image-victor-glover.png';

    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    button3.classList.add('current-slide');
    h2.innerHTML= 'VICTOR GLOVER';
    jobTitle.innerHTML= 'PILOT';
    carouselP.innerHTML = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.' 
})

button4.addEventListener('click', () => {
    img.src = 'assets/crew/image-mark-shuttleworth.png';

    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    button4.classList.add('current-slide');
    h2.innerHTML= 'MARK SHUTTLEWORTH';
    jobTitle.innerHTML= 'MISSION SPECIALIST';
    carouselP.innerHTML = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.' 
})




