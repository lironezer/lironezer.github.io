document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize inventory
        updateInventory();

        // Attach event listeners for completing tasks
        attachTaskListeners();

        // Check if all items are collected if on dorthymain.html
        if (document.body.contains(document.getElementById('message'))) {
            checkAllItemsCollected();
        }

        // Attach event listener to reset button if it exists
        const resetButton = document.getElementById('reset-button');
        if (resetButton) {
            resetButton.addEventListener('click', resetGame);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});


function attachTaskListeners() {
    // For page-left.html
    if (document.querySelectorAll('.emoji').length > 0) {
        document.querySelectorAll('.emoji').forEach(emoji => {
            emoji.addEventListener('click', () => {
                emoji.classList.add('clicked');
                checkAllEmojisClicked();
            });
        });
    }

    // For page-top.html
    if (document.querySelector('.heart-icon')) {
        let likeCount = 0;
        document.querySelector('.heart-icon').addEventListener('click', () => {
            likeCount++;
            document.getElementById('total').textContent = likeCount;
            if (likeCount >= 20) {
                addItemToInventory('Heart', 'footage/heart.png');
            }
        });
    }

    // For page-right.html
    if (document.querySelector('.conversation-button')) {
        document.querySelector('.conversation-button').addEventListener('click', () => {
            addItemToInventory('Friend', 'footage/friend.png');
        });
    }
}

function updateInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    inventory.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.width = '50px';
        img.style.height = '50px';
        li.appendChild(img);
        inventoryList.appendChild(li);
    });
}

function addItemToInventory(name, image) {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    if (!inventory.some(item => item.name === name)) {
        inventory.push({ name, image });
        localStorage.setItem('inventory', JSON.stringify(inventory));
        updateInventory(); // Update inventory after adding item
    }
}

function checkAllEmojisClicked() {
    const allClicked = Array.from(document.querySelectorAll('.emoji')).every(emoji => emoji.classList.contains('clicked'));
    if (allClicked) {
        addItemToInventory('Emoji', 'footage/emojiface.png');
    }
}

function checkAllItemsCollected() {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const itemsNeeded = ['Emoji', 'Heart', 'Friend'];
    const allItemsCollected = itemsNeeded.every(item => inventory.some(invItem => invItem.name === item));

    if (allItemsCollected) {
        displayMessage();
    }
}

function displayMessage() {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.textContent = '!קיבלת רגישות!';
        messageDiv.addEventListener('click', resetGame); // Attach click event listener to reset the game
    }
}

function resetGame() {
    localStorage.clear();
    updateInventory();
    document.getElementById('message').textContent = '';
}
