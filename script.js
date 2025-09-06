function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userText = input.value.trim();
  if (!userText) return;

  // Affiche le message de l'utilisateur
  const userMsg = document.createElement('div');
  userMsg.className = 'user-msg';
  userMsg.innerText = userText;
  chatBox.appendChild(userMsg);

  // Génère la réponse du bot
  const botMsg = document.createElement('div');
  botMsg.className = 'bot-msg';
  botMsg.innerText = getBotResponse(userText);
  chatBox.appendChild(botMsg);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Fonction simple pour répondre aux symptômes
function getBotResponse(text) {
  text = text.toLowerCase();
  if (text.includes('jambe')) return 'Essaie de te reposer, de faire des étirements et boire de l’eau.';
  if (text.includes('dos')) return 'Tu peux appliquer une compresse chaude et éviter les efforts intenses.';
  if (text.includes('tête') || text.includes('mal de tête')) return 'Hydrate-toi bien et repose-toi dans un endroit calme.';
  return 'Hmm… je ne suis pas sûr, essaie de te reposer ou consulte un professionnel si ça persiste.';
}