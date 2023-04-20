const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audio = document.getElementById("myAudio");
const gameOver = document.querySelector('.game-board')
const deadSong = new Audio('./assets/mario-dead-song.mp3');
const night = document.querySelector('.sol')

const startGame = () => {
    audio.play();
  }


const jump = () => {
    mario.classList.add('jump');

    audio.play();


    setTimeout(() => {
        mario.classList.remove('jump');
        }, 500);
    }
    
    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.src = './assets/mario-dead.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
            gameOver.style.backgroundImage = 'url(./assets/game-over.webp)';
            gameOver.style.backgroundRepeat = 'no-repeat';
            gameOver.style.backgroundSize = 'cover';
            gameOver.style.backgroundPosition = 'center center';
            audio.pause()
            night.src = './assets/lua.jpg'
            deadSong.play();
        }
    }, 10);


document.addEventListener('keydown', jump);