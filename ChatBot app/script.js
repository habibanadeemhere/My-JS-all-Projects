var name = ""; 

function chat() {
    var inputElement = document.getElementById('input');
    var input = inputElement.value.trim();
    var chat = document.getElementById('chat');

    if (!input) return;

    chat.innerHTML += 'You: ' + input + '<br>';

    setTimeout(function () {
        var response = "";

        if (input.toLowerCase() === 'hi') {
            response = 'Hello!';
        } else if (input.toLowerCase() === 'hello') {
            response = 'Hi!';
        } else if (input.toLowerCase() === 'how are you?' || input.toLowerCase() === 'how are you') {
            response = 'I am good! What about you?';
        } else if (input.toLowerCase() === 'i am good.' || input.toLowerCase() === 'i am fine.') {
            response = 'That\'s great! Let me know your name';
        } else if (name === "" && input.toLowerCase().startsWith("my name is")) {
            name = input.substring(11).trim();
            response = 'What a good name, ' + name + '!';
        } else if (input.toLowerCase() === 'bye') {
            response = 'Goodbye!';
        } else {
            response = "I didn't understand.";
        }

        chat.innerHTML += 'Bot: ' + response + '<br>';
        chat.scrollTop = chat.scrollHeight; 
    }, 1000); 

    inputElement.value = '';
}
document.getElementById('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        chat();
    }
});
