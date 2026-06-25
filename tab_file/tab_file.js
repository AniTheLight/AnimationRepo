const $ = (id) => document.getElementById(id);

const els = {
  tabImgDK: $('tab-img-dk'),
  tabImgYK: $('tab-img-yk'),
  tabImgFK: $('tab-img-fk'),
};

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
  $('btn-tab-dk').addEventListener('click',      () => console.log('DK clicked'));
  $('btn-tab-yk').addEventListener('click',      () => console.log('YK clicked'));
  $('btn-tab-fk').addEventListener('click',      () => console.log('FK clicked'));
  $('btn-tab-dk').addEventListener('mouseenter', () => setTabHover('DK'));
  $('btn-tab-yk').addEventListener('mouseenter', () => setTabHover('YK'));
  $('btn-tab-fk').addEventListener('mouseenter', () => setTabHover('FK'));
  $('btn-tab-dk').addEventListener('mouseleave', () => setTabHover(null));
  $('btn-tab-yk').addEventListener('mouseleave', () => setTabHover(null));
  $('btn-tab-fk').addEventListener('mouseleave', () => setTabHover(null));
}

document.addEventListener('DOMContentLoaded', wire);
