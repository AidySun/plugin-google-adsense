require(["gitbook"], function(gitbook) {
  var config = config.adsense
    , adInsertPoint = document.querySelector('.page-inner section')
    , adsByGoogleScript
    , ad
    ;

  gitbook.events.bind("start", function(e, config) {
    // Inject script to head.
    adsByGoogleScript = document.createElement('script');
    adsByGoogleScript.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    adsByGoogleScript.setAttribute('async', true);
    document.body.appendChild(adsByGoogleScript);

    // Generate <ins>

    ad = document.createElement('ins');
    ad.style = 'display: block';
    ad.class = 'adsbygoogle';
    ad.setAttribute('data-ad-client', config.client);
    ad.setAttribute('data-ad-slot', config.slot);
    ad.setAttribute('data-ad-format', config.format);
    adInsertPoint.appendChild(ad);

    (adsbygoogle = window.adsbygoogle || []).push({});
  });

  gitbook.events.bind("page.change", function() {
    if (ad) {
      adInsertPoint.appendChild(ad);
    }
  });
});
