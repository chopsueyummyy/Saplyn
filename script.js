document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    const amount = parseFloat(form.amount.value);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid donation amount.');
      e.preventDefault();
    }
  });
});

 fetch('progress-data.php')
    .then(response => response.json())
    .then(data => {
      const trees = data.trees;
      const goal = data.goal;
      const percent = Math.min((trees / goal) * 100, 100).toFixed(1);

      document.getElementById('tree-count').textContent = trees.toLocaleString();
      const bar = document.getElementById('progress-bar');
      bar.style.width = percent + '%';
      document.getElementById('progress-percent').textContent = percent + '%';
    })
    .catch(error => console.error('Error loading progress:', error));


     const leafContainer = document.querySelector('.leaf-container');

  for (let i = 0; i < 12; i++) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.animationDuration = `${6 + Math.random() * 5}s`;
    leaf.style.animationDelay = `${Math.random() * 5}s`;

    leafContainer.appendChild(leaf);
  }

