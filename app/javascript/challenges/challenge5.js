function toggleOpen() {
  const open = document.querySelector('.open');
  if (open && open !== this) { open.classList.toggle('open') }
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

function challenge5() {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}

export { challenge5 }
