

const form = document.getElementById('cardForm');
const flashcardsContainer = document.getElementById('flashcards');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const topic = document.getElementById('topic').value.trim();
  const answer = document.getElementById('answer').value.trim();

  if (!topic || !answer) {
    alert("Both fields are required!");
    return;
  }

  addFlashcard(topic, answer);
  form.reset();
});

function addFlashcard(topic, answer) {
  const card = document.createElement('div');
  card.className = 'flashcard';

  const cardInner = document.createElement('div');
  cardInner.className = 'flashcard-inner';

  const front = document.createElement('div');
  front.className = 'flashcard-front';
  front.textContent = topic;

  const back = document.createElement('div');
  back.className = 'flashcard-back';
  back.textContent = answer;

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  flashcardsContainer.appendChild(card);
}
