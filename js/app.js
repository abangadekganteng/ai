const chatBox =
document.getElementById("chatBox");

const userInput =
document.getElementById("userInput");

const suggestions =
document.getElementById("suggestions");

const hero =
document.getElementById("hero");

const allSuggestionsPage =
document.getElementById(
  "allSuggestionsPage"
);

const allSuggestionsList =
document.getElementById(
  "allSuggestionsList"
);



function hideHero(){

  hero.style.display = "none";
}



function addMessage(text, sender){

  hideHero();

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



function openSuggestionsPage(){

  allSuggestionsPage.style.display =
  "flex";

  loadAllSuggestions();
}



function closeSuggestionsPage(){

  allSuggestionsPage.style.display =
  "none";
}



function chooseSuggestion(text){

  closeSuggestionsPage();

  sendSuggestion(text);
}



function loadAllSuggestions(){

  allSuggestionsList.innerHTML = "";

  responses.forEach(item => {

    const button =
    document.createElement("button");

    button.innerText =
    item.question;

    button.onclick = () =>
    chooseSuggestion(item.question);

    allSuggestionsList.appendChild(button);

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
