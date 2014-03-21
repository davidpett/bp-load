function checkMedia() {
  'use strict';
  var queries = document.querySelectorAll('.mq'),
      len = queries.length,
      obj = null;
  while (len--) {
    obj = queries[len];
    if (obj.dataset.media && window.matchMedia(obj.dataset.media).matches) {
      for (var attr in obj.dataset) {
        obj.setAttribute(attr, obj.dataset[attr]);
        obj.classList.remove('mq');
      }
    }
  }
  if (!queries.length) {
    queries = null;
    window.removeEventListener('resize', checkMedia);
  }
}
if (typeof window.matchMedia !== 'undefined') {
  window.addEventListener('resize', checkMedia);
  checkMedia();
}
