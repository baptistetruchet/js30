function challenge24() {
  const nav = document.querySelector('#main');
  const topOfNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.querySelector('.site-wrap').style.marginTop = nav.offsetHeight + 'px';
      document.querySelector('#challenge24').classList.add('fixed-nav');
    } else {
      document.querySelector('.site-wrap').style.marginTop = 0;
      document.querySelector('#challenge24').classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
}

export { challenge24 }
