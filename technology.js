var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var buttons = document.querySelectorAll('.carousel__indicator')
var img = document.querySelector('#carousel-img');
var source1 = document.querySelector('#source1');
var source2 = document.querySelector('#source2');
var destinationTitle = document.querySelector('h2');
var carouselP = document.querySelector('#carousel-p');



button1.addEventListener('click', () => {
    img.src = 'assets/destination/image-moon.png';
    source1.srcset = 'assets/technology/image-launch-vehicle-landscape.jpg';
    source2.srcset = 'assets/technology/image-launch-vehicle-portrait.jpg';
    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    button1.classList.add('current-slide');
    destinationTitle.innerText = 'LAUNCH VEHICLE';
    carouselP.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    
})

button2.addEventListener('click', () => {
    img.src = 'assets/technology/image-spaceport-portrait.jpg';
    source1.srcset = 'assets/technology/image-spaceport-landscape.jpg';
    source2.srcset = 'assets/technology/image-spaceport-portrait.jpg';
    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    button2.classList.add('current-slide');
    destinationTitle.innerHTML = 'SPACEPORT';
    carouselP.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    
})

button3.addEventListener('click', () => {
    img.src = 'assets/technology/image-space-capsule-portrait.jpg';
    source1.srcset = 'assets/technology/image-space-capsule-landscape.jpg';
    source2.srcset = 'assets/technology/image-space-capsule-portrait.jpg';
    buttons.forEach((button) => {
        if(button.classList.contains('current-slide')) {
            button.classList.remove('current-slide');
        }
    })
    button3.classList.add('current-slide');
    destinationTitle.innerHTML = 'SPACE CAPSULE';
    carouselP.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
})

