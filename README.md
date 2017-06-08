Google Adsense plugin for GitBook
==============

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/542ee6e993704411a06a71ae916af02c)](https://www.codacy.com/app/karlsson/plugin-google-adsense?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Vufuzi/plugin-google-adsense&amp;utm_campaign=Badge_Grade)
[![NPM downloads](https://img.shields.io/npm/dm/gitbook-plugin-adsense.svg "NPM downloads")](https://www.npmjs.com/package/gitbook-plugin-adsense)

Install the plugin with npm:

```
$ npm install gitbook-plugin-adsense
```

Add it to the plugins array in book.json:

```
{
  "plugins": ["adsense"]
}
```

You can set the Google Adsense client and slot keys using the plugins configuration in the book.json:

```
{
    "plugins": ["adsense"],
    "pluginsConfig": {
      "adsense": {
        "client": "ca-pub-XXXXXXXXXXXXXXXX",
        "slot": "XXXXXXXXXX",
        "format": "auto",
        "element": ".page-inner section",
        "position": "top"
      }
    }
}
```

Allowed values for positions are `top` and `bottom`, bottom being the default.
