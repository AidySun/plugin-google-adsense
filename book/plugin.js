require(["gitbook"], function(gitbook) {
    var adInsertPoint = '.page-inner section'
    , ad
    ;

  gitbook.events.bind("start", function(e, cnf) {
    var config = cnf.adsense
      , adsByGoogleScript
      ;

    // Use custom insert point if defined
    if (config.element) {
      adInsertPoint = config.element;
    }

    // Inject script to head.
    adsByGoogleScript = document.createElement('script');
    adsByGoogleScript.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    adsByGoogleScript.setAttribute('async', true);
    document.body.appendChild(adsByGoogleScript);

    // Generate <ins> (ad)
    ad = document.createElement('ins');
    ad.style = 'display: block';
    ad.className = 'adsbygoogle';
    ad.setAttribute('data-ad-client', config.client);
    ad.setAttribute('data-ad-slot', config.slot);
    ad.setAttribute('data-ad-format', config.format);

    // Add the ad to the DOM
    var element = document.querySelector(adInsertPoint);
    if (config.position == 'top')
        element.insertBefore(ad, element.firstChild);
    else
        element.appendChild(ad);

    (adsbygoogle = window.adsbygoogle || []).push({});
  });

  // I insert ad again when switching pages
  gitbook.events.bind("page.change", function(e, cnf) {
    if (ad) {
        var config = cnf.adsense
          , adsByGoogleScript
          ;
        var element = document.querySelector(adInsertPoint);
        if (config.position == 'top')
            element.insertBefore(ad, element.firstChild);
        else
            element.appendChild(ad);
    }
  });
});
