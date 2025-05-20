const imageInput = document.getElementById('imageUpload');
const messageInput = document.getElementById('messageText');
const textColor = document.getElementById('textColor');
const animation = document.getElementById('animationStyle');
const preview = document.getElementById('postcardPreview');
const previewText = document.getElementById('previewText');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
  const msg = messageInput.value.trim();
  const color = textColor.value;
  const anim = animation.value;

  if (!msg) {
    alert("Please enter a message.");
    return;
  }

  previewText.textContent = msg;
  previewText.style.color = color;

  previewText.className = ''; // Reset previous animation
  void previewText.offsetWidth; // Trigger reflow
  previewText.classList.add(anim);

  // If image uploaded
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.backgroundImage = '';
    preview.style.backgroundColor = '#333';
  }
});

