let currentPage = 1;

function nextPage(pageNumber) {
  document.getElementById(`page${currentPage}`).style.display = 'none';
  document.getElementById(`page${pageNumber}`).style.display = 'block';
  currentPage = pageNumber;
}

function startMusic() {
  const audio = document.getElementById('backgroundMusic');
  audio.play();
  document.getElementById('startMusic').disabled = true;
}

// Initialize the first page
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('page1').style.display = 'block';
});
