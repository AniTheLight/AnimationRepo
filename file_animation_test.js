function setTabHover(name) {
  [
    { el: els.tabImgDK, key: 'DK' },
    { el: els.tabImgYK, key: 'YK' },
    { el: els.tabImgFK, key: 'FK' },
  ].forEach(({ el, key }) => {
    if (name === key) {
      el.classList.add('hovered');
    } else {
      el.classList.remove('hovered');
    }
  });
}
function wire() {
  $('btn-incognito').addEventListener('click', () => go('password'));
  $('btn-tab-dk').addEventListener('click',       () => go('DK'));
  $('btn-tab-yk').addEventListener('click',       () => go('YK'));
  $('btn-tab-fk').addEventListener('click',       () => go('FK'));
  $('btn-tab-dk').addEventListener('mouseenter',  () => setTabHover('DK'));
  $('btn-tab-yk').addEventListener('mouseenter',  () => setTabHover('YK'));
  $('btn-tab-fk').addEventListener('mouseenter',  () => setTabHover('FK'));
  $('btn-tab-dk').addEventListener('mouseleave',  () => setTabHover(null));
  $('btn-tab-yk').addEventListener('mouseleave',  () => setTabHover(null));
  $('btn-tab-fk').addEventListener('mouseleave',  () => setTabHover(null));
}
