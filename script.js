document.addEventListener('DOMContentLoaded', () => {
    const flipButton = document.getElementById('flip-button');
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');
    const statsText = document.getElementById('stats');
    const themeToggle = document.getElementById('theme-toggle');
    const flipSound = document.getElementById('flip-sound'); // Get the flip sound element

    let headsCount = 0;
    let tailsCount = 0;
    const headsName = 'Heads';
    const tailsName = 'Tails';

    function flipCoin() {
        // Play the flip sound effect
        flipSound.play();

        coin.style.transform = 'rotateY(3600deg)'; // 10 full rotations
        setTimeout(() => {
            const result = Math.random() > 0.5 ? headsName : tailsName;
            coin.src = result === headsName ? 'images/heads.png' : 'images/tails.png';
            coin.style.transform = 'rotateY(0deg)'; // Reset rotation

            resultText.textContent = `Result: ${result}`;
            if (result === headsName) {
                headsCount++;
            } else {
                tailsCount++;
            }
            statsText.textContent = `${headsName}: ${headsCount} | ${tailsName}: ${tailsCount}`;
        }, 800); // Match the animation duration
    }

    flipButton.addEventListener('click', flipCoin);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
    });
});
