(function() {
  'use strict';
  function bpload() {
    var queries = document.querySelectorAll('.bpload'),
        len = queries.length,
        obj = null,
        media = null;
    while (len--) {
      obj = queries[len],
      media = obj.getAttribute('data-media');
      if (media && window.matchMedia(media).matches) {
        obj.setAttribute('media', media);
        obj.setAttribute('href', obj.getAttribute('data-href'));
        obj.classList.remove('bpload');
      }
    }
    if (!queries.length) {
      window.removeEventListener('resize', bpload);
    }
    queries = null;
    len = null;
    obj = null;
  }
  if (typeof window.matchMedia === 'undefined') {
    var obj = document.querySelectorAll('.bpload.bpall')[0];
    obj.setAttribute('media', obj.getAttribute('data-media'));
    obj.setAttribute('href', obj.getAttribute('data-href'));
    obj = null;
  } else {
    window.addEventListener('resize', bpload);
    bpload();
  }
})();
