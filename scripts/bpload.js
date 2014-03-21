function bpload() {
  'use strict';
  var queries = document.querySelectorAll('.bpload'),
      len = queries.length,
      obj = null;
  while (len--) {
    obj = queries[len];
    if (obj.dataset.media && window.matchMedia(obj.dataset.media).matches) {
      for (var attr in obj.dataset) {
        obj.setAttribute(attr, obj.dataset[attr]);
        obj.classList.remove('bpload');
      }
    }
  }
  if (!queries.length) {
    queries = null;
    window.removeEventListener('resize', bpload);
  }
}
if (typeof window.matchMedia !== 'undefined') {
  window.addEventListener('resize', bpload);
  bpload();
}
