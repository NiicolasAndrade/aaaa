document.addEventListener("DOMContentLoaded", function() {
    var chatbox = document.getElementById("chatbox");
    var userInput = document.getElementById("userInput");

    function sendMessage() {
        var userMessage = userInput.value;
        var botResponse = getBotResponse(userMessage);

        appendMessage("Você: " + userMessage);
        appendMessage("Bot: " + botResponse);

        userInput.value = "";
    }

    function appendMessage(message) {
        var messageElement = document.createElement("p");
        messageElement.textContent = message;
        chatbox.appendChild(messageElement);
    }

    function getBotResponse(message) {
        // Implemente aqui a lógica do chatbot
        // Você pode usar condicionais, switch statements, chamadas a APIs, etc.
        // Retorne a resposta do chatbot com base na mensagem do usuário

        // Exemplo simples: responder com uma mensagem predefinida
        if (message.toLowerCase() === "oi") {
            return "Olá! Como posso ajudar?";
        } else if (message.toLowerCase() === "como você está?") {
            return "Estou bem, obrigado!";
        } else {
            return "Desculpe, não entendi. Pode repetir, por favor?";
        }
    }

    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
