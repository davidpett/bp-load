(function() {
  'use strict';
  document.documentElement.style.display = 'none';
  function bpLoad() {
    var queries = document.querySelectorAll('.bp-load'),
        len = queries.length,
        obj = null,
        media = null;
    while (len--) {
      obj = queries[len];
      media = obj.getAttribute('data-media');
      if (media && window.matchMedia(media).matches) {
        obj.setAttribute('media', media);
        obj.setAttribute('href', obj.getAttribute('data-href'));
        obj.classList.remove('bp-load');
      }
    }
    if (!queries.length) {
      window.removeEventListener('resize', bpLoad);
    }
    queries = null;
    len = null;
    obj = null;
    media = null;

    bpReady();
  }

  function bpReady() {
    document.documentElement.style.display = 'block';
  }
  if (typeof window.matchMedia === 'undefined') {
    var obj = document.querySelectorAll('.bp-all')[0];
    if (obj) {
      obj.setAttribute('media', obj.getAttribute('data-media'));
      obj.setAttribute('href', obj.getAttribute('data-href'));
    }
    obj = null;

    bpReady();
  } else {
    window.addEventListener('resize', bpLoad);
    bpLoad();
  }
})();
