document.addEventListener('DOMContentLoaded', () => {
    const dorothy = document.getElementById('dorothy');
    const emojis = document.querySelectorAll('.emoji');

    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            const emojiPosition = emoji.getBoundingClientRect();
            const dorothyPosition = dorothy.getBoundingClientRect();

            const container = document.getElementById('game-container');
            const containerRect = container.getBoundingClientRect();

            let newLeft = emojiPosition.left - containerRect.left + (emojiPosition.width / 2) - (dorothyPosition.width / 2);
            let newTop = emojiPosition.top - containerRect.top + (emojiPosition.height / 2) - (dorothyPosition.height / 2);

            // Apply transition class to Dorothy for smooth movement
            dorothy.classList.add('move');
            dorothy.style.left = `${newLeft}px`;
            dorothy.style.top = `${newTop}px`;

            // Hide the collected emoji after a 0.7-second delay
            setTimeout(() => {
                emoji.style.display = 'none';
                
                // Check if all emojis are collected
                const remainingEmojis = document.querySelectorAll('.emoji:not([style*="display: none"])');
                if (remainingEmojis.length === 0) {
                    alert('Congratulations! Dorothy has collected all the emojis!');
                    document.getElementById('bonusButton').style.display = 'block'; // Display the button
                    } else {
                        document.getElementById("gotEmotions").innerHTML = "";
                    }
            }, 700); // Change delay time to 0.7 seconds
        });
    });

    // Listen for the end of the transition to remove the animation class
    dorothy.addEventListener('transitionend', () => {
        dorothy.classList.remove('move');
    });
});
