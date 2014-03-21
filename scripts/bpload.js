(function() {
  'use strict';
  function bpload() {
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
      window.removeEventListener('resize', bpload);
    }
    queries = null;
    len = null;
    obj = null;
  }
  window.addEventListener('resize', bpload);
  bpload();
})(typeof window.matchMedia !== 'undefined');
