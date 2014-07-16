(function() {
  'use strict';
  function dpBpload() {
    var queries = document.querySelectorAll('.dp-bpload'),
        len = queries.length,
        obj = null,
        media = null,
        content = document.querySelector('.dp-bpcontent');
    while (len--) {
      obj = queries[len];
      media = obj.getAttribute('data-media');
      if (media && window.matchMedia(media).matches) {
        obj.setAttribute('media', media);
        obj.setAttribute('href', obj.getAttribute('data-href'));
        obj.classList.remove('dp-bpload');
      }
    }
    if (content) {
      content.classList.remove('dp-bpcontent');
    }
    if (!queries.length) {
      window.removeEventListener('resize', dpBpload);
    }
    queries = null;
    len = null;
    obj = null;
    media = null;
    content = null;
  }
  if (typeof window.matchMedia === 'undefined') {
    window.setTimeout(function() {
      var obj = document.querySelectorAll('.dp-bpall')[0],
          content = document.querySelector('.dp-bpcontent');
      if (typeof obj !== 'undefined') {
        obj.setAttribute('media', obj.getAttribute('data-media'));
        obj.setAttribute('href', obj.getAttribute('data-href'));
      }
      if (typeof content !== 'undefined') {
        content.className = content.className.replace(/(?:^|\s)dp-bpcontent(?!\S)/,'');
      }
      obj = null;
      content = null;
    }, 50);
  } else {
    window.addEventListener('resize', dpBpload);
    window.setTimeout(dpBpload, 50);
  }
})();
