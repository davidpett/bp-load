if (typeof window.matchMedia !== 'undefined') {
  var array = document.querySelectorAll('.mq'),
    total = array.length,
    loaded = 0;
  function checkMedia() {
    "use strict";
    var i = array.length,
      obj = null;
    while(i--) {
      obj = array[i];
      if (obj.dataset.media && window.matchMedia(obj.dataset.media)) {
        for (var attr in obj.dataset) {
          obj.setAttribute(attr, obj.dataset[attr]);
        }
        loaded++;
      }
    }
    if (loaded === total) {
      array = null;
      total = null;
      loaded = null;
      window.removeEventListener('resize', checkMedia);
    }
  }
  window.addEventListener('resize', checkMedia);
  checkMedia();
}
