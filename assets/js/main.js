const heartIcon = document.getElementById('heartIcon');

heartIcon.addEventListener('mouseover', () => {
  heartIcon.classList.remove('far', 'fa-heart');
  heartIcon.classList.add('fas', 'fa-heart');
});

heartIcon.addEventListener('mouseout', () => {
  heartIcon.classList.remove('fas', 'fa-heart');
  heartIcon.classList.add('far', 'fa-heart');
});