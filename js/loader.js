(function() {
  let on = addEventListener,
    $body = document.body;
  let loadHandler = function() {
    setTimeout(function() {
      $body.classList.remove('is-loading');
      $body.classList.add('is-playing');
        setTimeout(function() {
          $body.classList.remove('is-playing');
          $body.classList.add('is-ready');
        }, 2000);
    }, 100);
  };
  on('load', loadHandler);
})();