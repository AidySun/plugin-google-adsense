require(["gitbook"], function(gitbook) {
  gitbook.events.bind("start", function(e, config) {
    var config = config.ga
      , adsByGoogleScript
      , ad
      ;

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
    document.body.appendChild(ad);

    (adsbygoogle = window.adsbygoogle || []).push({});
  });
});
