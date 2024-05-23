let currentConversation = 1; // Track the current conversation

function reply(response) {
    switch (currentConversation) {
        case 1:
            // Handle response for conversation 1
            if (response === '1') {
                // Handle option 1
                currentConversation = 2;
            } else if (response === '2') {
                // Handle option 2
                currentConversation = 2;
            }
            break;
        case 2:
            // Handle response for conversation 2
            if (response === '1') {
                // Handle option 1
                currentConversation = 3;
            } else if (response === '2') {
                // Handle option 2
                currentConversation = 3;
            }
            break;
        case 3:
            // Handle response for conversation 3
            if (response === '1') {
                // Restart from conversation 1
                currentConversation = 1;
            } else if (response === '2') {
                currentConversation = 4; // Move to conversation 4
            }
            break;
        default:
            break;
    }
           
    displayCurrentConversation();
}

function displayCurrentConversation() {
    // Hide all conversations
    document.getElementById('conversation1').style.display = 'none';
    document.getElementById('conversation2').style.display = 'none';
    document.getElementById('conversation3').style.display = 'none';

    // Display the current conversation
    document.getElementById('conversation' + currentConversation).style.display = 'block';
}