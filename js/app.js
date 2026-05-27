const chatBox =
document.getElementById("chatBox");

const userInput =
document.getElementById("userInput");

function addMessage(text, sender){

  const message =
  document.createElement("div");

  message.classList.add(
    "message",
    sender
  );

  message.innerText = text;

  chatBox.appendChild(message);

  chatBox.scrollTop =
  chatBox.scrollHeight;
}

function getBotResponse(message){

  const lower =
  message.toLowerCase();

  for(let item of responses){

    for(let keyword of item.keywords){

      if(lower.includes(keyword)){

        return item.answer;
      }
    }
  }

  return "Maaf, pertanyaan belum tersedia.";
}

function sendMessage(){

  const text =
  userInput.value.trim();

  if(text === "") return;

  addMessage(text, "user");

  const botReply =
  getBotResponse(text);

  setTimeout(() => {

    addMessage(botReply, "bot");

  }, 500);

  userInput.value = "";
}

function sendSuggestion(text){

  userInput.value = text;

  sendMessage();
}

userInput.addEventListener(
"keypress",
function(e){

  if(e.key === "Enter"){

    sendMessage();
  }
});
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
