// This file contains JavaScript code for interactivity on the romantic-themed webpage.

document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('love-button');
    const messageContainer = document.getElementById('message-container');

    loveButton.addEventListener('click', () => {
        const messages = [
            "You light up my life!",
            "Every moment with you is a treasure.",
            "You are my sunshine on a cloudy day.",
            "Together is my favorite place to be.",
            "I love you to the moon and back!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageContainer.textContent = randomMessage;
        messageContainer.classList.add('fade-in');

        setTimeout(() => {
            messageContainer.classList.remove('fade-in');
        }, 3000);
    });
});