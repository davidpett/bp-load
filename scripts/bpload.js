(function() {
  'use strict';
  function bpload() {
    var queries = document.querySelectorAll('.bpload'),
        len = queries.length,
        obj = null,
        media = null,
        content = document.querySelector('.bpcontent');
    while (len--) {
      obj = queries[len];
      media = obj.getAttribute('data-media');
      if (media && window.matchMedia(media).matches) {
        obj.setAttribute('media', media);
        obj.setAttribute('href', obj.getAttribute('data-href'));
        obj.classList.remove('bpload');
      }
    }
    if (content) {
      content.classList.remove('bpcontent');
    }
    if (!queries.length) {
      window.removeEventListener('resize', bpload);
    }
    queries = null;
    len = null;
    obj = null;
    media = null;
    content = null;
  }
  if (typeof window.matchMedia === 'undefined') {
    var obj = document.querySelectorAll('.bpload.bpall')[0],
        content = document.querySelector('.bpcontent');
    obj.setAttribute('media', obj.getAttribute('data-media'));
    obj.setAttribute('href', obj.getAttribute('data-href'));
    content.className = content.className.replace(/(?:^|\s)bpcontent(?!\S)/,'');
    obj = null;
    content = null;
  } else {
    window.addEventListener('resize', bpload);
    bpload();
  }
})();
