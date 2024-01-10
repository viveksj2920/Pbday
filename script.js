document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('message').innerText = "My name is Gunda, Vivek has sent me. I am here to show you the timer... Can you please click on it?";
    this.classList.add('hidden');
    document.getElementById('showTimer').classList.remove('hidden');
});

document.getElementById('showTimer').addEventListener('click', function() {
    document.getElementById('dialogue').classList.add('hidden');
    document.getElementById('countdown').classList.remove('hidden');
    countdown();
    setInterval(countdown, 1000);
});

function countdown() {
    const countToDate = new Date("2024-01-12").getTime();
    const now = new Date().getTime();
    const difference = countToDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    document.getElementById("days").innerText = timeDays;
    document.getElementById("hours").innerText = timeHours;
    document.getElementById("minutes").innerText = timeMinutes;
    document.getElementById("seconds").innerText = timeSeconds;
}


// Function to create snowflakes
function createSnowflakes() {
    const numberOfSnowflakes = 50; // Adjust the number of snowflakes here

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        document.body.appendChild(snowflake);

        // Randomize the size and position of snowflakes
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.width = Math.random() * 5 + 3 + 'px';
        snowflake.style.height = snowflake.style.width;

        // Apply the falling animation
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

    }
}

createSnowflakes();

document.getElementById('confirmButton').addEventListener('click', function() {
    // Clear existing message
    document.getElementById('dogMessage').textContent = '';
    var barkSound = document.getElementById('barkSound');
    
    // Play the bark sound
    barkSound.play();

    // Hide the confirm button immediately
    this.style.display = 'none';

    // Functionality after bark sound ends
    barkSound.onended = function() {
        var dogDialogue = document.getElementById('dogDialogue');
        var nextButton = document.getElementById('nextButton');

        // Remove 'hidden' class to show the dog dialogue
        dogDialogue.classList.remove('hidden');
        
        // Type out the new message
        typeMessage("Hi, my name is Simbu. Vivek has sent me. I am here to remind you about something. Click below.", "dogMessage", function() {
            // Show the next button after the message is completely typed out
            nextButton.style.display = 'inline-block';
        });
    };
});


document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('countdown').classList.remove('hidden');
    startCountdown();
});


function typeMessage(message, elementId, callback) {
    let i = 0;
    const speed = 50;
    const elem = document.getElementById(elementId);

    function typeWriter() {
        if (i < message.length) {
            elem.textContent += message.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else if (callback) {
            callback();
        }
    }

    typeWriter();
}


// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(function() {
//         typeMessage("Hi, are you Pavana?", "dogMessage");
//     }, 2000);
// });

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        typeMessage("Hi, are you Pavana?", "dogMessage", function() {
            document.getElementById('confirmButton').style.display = 'inline-block';
        });
    }, 2000);
});

// Hide the confirm button initially
document.getElementById('confirmButton').style.display = 'none';

function startCountdown() {
    const targetDate = new Date('2024-01-11T18:30:00Z');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        const secondsInDay = 60 * 60 * 24;
        const secondsInHour = 60 * 60;
        const secondsInMinute = 60;

        const days = Math.floor(difference / (1000 * secondsInDay));
        const hours = Math.floor((difference % (1000 * secondsInDay)) / (1000 * secondsInHour));
        const minutes = Math.floor((difference % (1000 * secondsInHour)) / (1000 * secondsInMinute));
        const seconds = Math.floor((difference % (1000 * secondsInMinute)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (difference < 0) {
            clearInterval(timer);
            document.getElementById('countdown').textContent = "Time's up!";
        }
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
}


function triggerShootingStar() {
    const shootingStar = document.getElementById('shootingStar');
    shootingStar.style.animation = 'none';

    setTimeout(() => {
        shootingStar.style.animation = 'shootingStar 0.7s linear';
    }, 100);
}

setInterval(triggerShootingStar, 5000); // Trigger every 5 seconds



