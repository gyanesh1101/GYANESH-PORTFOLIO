const resumeBtn = document.getElementById('resumeBtn');
const resumeBtnFloating = document.getElementById('resumeBtnFloating');
const resumeModal = document.getElementById('resumeModal');
const closeModal = document.getElementById('closeModal');

if (resumeBtn) resumeBtn.onclick = () => resumeModal.style.display = 'flex';
if (resumeBtnFloating) resumeBtnFloating.onclick = () => resumeModal.style.display = 'flex';

closeModal.onclick = () => resumeModal.style.display = 'none';

window.onclick = (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = 'none';
  }
};

window.onkeydown = (e) => {
  if (e.key === 'Escape') {
    resumeModal.style.display = 'none';
  }
};
