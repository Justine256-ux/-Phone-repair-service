document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  const updateThemeIcon = () => {
    if (!themeToggle) return;
    themeToggle.textContent = body.dataset.theme === 'dark' ? '☀️' : '🌙';
  };

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.dataset.theme = savedTheme;
  }
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.dataset.theme = body.dataset.theme === 'dark' ? '' : 'dark';
      localStorage.setItem('theme', body.dataset.theme);
      updateThemeIcon();
    });
  }

  function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'red';
        valid = false;
      } else {
        input.style.borderColor = '#ddd';
      }
    });

    return valid;
  }

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!validateForm(form)) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  });
});