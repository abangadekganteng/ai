const chatBox =
document.getElementById("chatBox");

const userInput =
document.getElementById("userInput");

const suggestions =
document.getElementById("suggestions");



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

  return "Maaf, jawaban belum tersedia.";
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

    loadSuggestions();

  }, 500);

  userInput.value = "";
}



function sendSuggestion(text){

  userInput.value = text;

  sendMessage();
}



function loadSuggestions(){

  suggestions.innerHTML = "";

  const shuffled =
  [...responses]
  .sort(() => 0.5 - Math.random())
  .slice(0,3);

  shuffled.forEach(item => {

    const button =
    document.createElement("button");

    button.innerText =
    item.question;

    button.onclick = () =>
    sendSuggestion(item.question);

    suggestions.appendChild(button);

  });
}



userInput.addEventListener(
"keypress",
function(e){

  if(e.key === "Enter"){

    sendMessage();
  }
});



loadSuggestions();
