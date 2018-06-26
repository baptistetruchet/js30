function challenge25() {
  const divs = document.querySelectorAll('div');

  function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // stop bubbling
  }

  // capture: true -> from parent to child
  // capture: false -> default bubbling
  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true // <=> div.removeEventListener('click', logText)
  }));

}

export { challenge25 }
