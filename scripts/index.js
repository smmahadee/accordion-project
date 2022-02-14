const items = document.querySelectorAll('.item');

const clickHandler = e => {
  const el = e.target;
  const className = typeof el.className === 'object' ? 'icon' : el.className;

  if (className === 'number' || className === 'text' || className === 'icon') {
    e.target.closest('.item').classList.toggle('open');
  }
};

for (const item of items) {
  item.addEventListener('click', clickHandler);
}
