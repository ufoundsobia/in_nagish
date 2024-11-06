// Confetti Animation
const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.opacity = Math.random();
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(confetti);

    // Animation
    setTimeout(() => {
        confetti.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
        confetti.style.transition = 'transform 2s linear, opacity 1s ease-in-out';
    }, 100);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
};

// Create confetti every 100ms
setInterval(createConfetti, 100);
