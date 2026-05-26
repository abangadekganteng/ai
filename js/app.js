let responses = [];

// LOAD JSON
fetch("data/response.json")
.then(res => res.json())
.then(data => {

    responses = data;

});

// ADD MESSAGE
function addMessage(text, sender){

    const chatBox = document.getElementById("chatBox");

    const div = document.createElement("div");

    div.className = `message ${sender}`;

    div.innerHTML = `
        <div class="bubble">${text}</div>
    `;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;

}

// CARI JAWABAN
function findReply(message){

    message = message.toLowerCase();

    for(let item of responses){

        for(let key of item.keyword){

            if(message.includes(key)){

                return item.reply;

            }

        }

    }

    return "Maaf saya hanya menjawab pertanyaan website ini.";

}

// KIRIM
function sendMessage(){

    const input = document.getElementById("userInput");

    const text = input.value.trim();

    if(text === "") return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {

        const reply = findReply(text);

        addMessage(reply, "bot");

    }, 500);

}

// QUICK BUTTON
function quickAsk(text){

    document.getElementById("userInput").value = text;

    sendMessage();

}

// ENTER
document
.getElementById("userInput")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        sendMessage();

    }

});
