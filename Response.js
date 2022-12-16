export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - hello world',
        totalResults: '2410000',
        searchTerms: 'hello world',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '4289ce765d9e64cbc',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - hello world',
        totalResults: '2410000',
        searchTerms: 'hello world',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '4289ce765d9e64cbc',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 0.560733,
    formattedSearchTime: '0.56',
    totalResults: '2410000',
    formattedTotalResults: '2,410,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'The World of Hello World - Google My Maps',
      htmlTitle: 'The World of <b>Hello World</b> - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en',
      displayLink: 'www.google.com',
      snippet:
        'Jun 25, 2015 ... A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue ...',
      htmlSnippet:
        'Jun 25, 2015 <b>...</b> A map of programming languages and rough locations in the <b>world</b> where they were created. Colors correspond to four major epochs: blue&nbsp;...',
      cacheId: 'FufnhR39gFAJ',
      formattedUrl: 'https://www.google.com/mymaps/viewer?mid...hl=en',
      htmlFormattedUrl: 'https://www.google.com/mymaps/viewer?mid...hl=en',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQHErZ4naNlVfK6sdC71ZzC3au_kYWEOpqGnYOJaVbc8RZL6t7A7QqxMt2',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en',
            name: 'The World of Hello World - Google My Maps',
            description:
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, green - establishing paradigms, yellow...',
            url: 'https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1j9wMaiQ12jiqpEFD1HgZ3QPuPDk%26hl%3Den',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'The World of Hello World - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description':
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.',
            'og:title': 'The World of Hello World - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en',
            'og:description':
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Tschüss Berlin, hello world! - Google My Maps',
      htmlTitle: 'Tschüss Berlin, <b>hello world</b>! - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Feb 28, 2019 ... Tschüss Berlin, hello world! ... Tschüss Berlin, hello world! Map Legend. Terms. 10,000 km. This map was created by a user.',
      htmlSnippet:
        'Feb 28, 2019 <b>...</b> Tschüss Berlin, <b>hello world</b>! ... Tschüss Berlin, <b>hello world</b>! Map Legend. Terms. 10,000 km. This map was created by a user.',
      cacheId: 's_AUgf1NI4kJ',
      formattedUrl: 'https://www.google.com/mymaps/viewer?mid...hl=en_US',
      htmlFormattedUrl: 'https://www.google.com/mymaps/viewer?mid...hl=en_US',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSB4hG6Eoc-aKeOsFCcp2-syzX7FmJbEmCeKjrfFThWanyVbwzpwv7Gk5IK',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US',
            name: 'Tschüss Berlin, hello world! - Google My Maps',
            description: 'Tschüss Berlin, hello world!',
            url: 'https://www.google.com/maps/d/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1DFRYMbt58FakcbMNizdvATJhVDw%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Tschüss Berlin, hello world! - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Tschüss Berlin, hello world!',
            'og:title': 'Tschüss Berlin, hello world! - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US',
            'og:description': 'Tschüss Berlin, hello world!',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World! - Google My Maps',
      htmlTitle: '<b>Hello World</b>! - Google My Maps',
      link: 'https://www.google.com/maps/d/u/1/edit?mid=1LSZyaI7ZluKQSdJZO0qSBffT8sw2dfPr&usp=sharing',
      displayLink: 'www.google.com',
      snippet:
        'Memories collected around the world. ... Hello World! Map Legend. Terms. 10,000 km. This map was created by a user. Learn how to create your own.',
      htmlSnippet:
        'Memories collected around the world. ... <b>Hello World</b>! Map Legend. Terms. 10,000 km. This map was created by a user. Learn how to create your own.',
      cacheId: 'H8CAYsbrQFYJ',
      formattedUrl: 'https://www.google.com/maps/d/u/1/edit?mid...usp=sharing',
      htmlFormattedUrl:
        'https://www.google.com/maps/d/u/1/edit?mid...usp=sharing',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1LSZyaI7ZluKQSdJZO0qSBffT8sw2dfPr',
            name: 'Hello World! - Google My Maps',
            description: 'Memories collected around the world',
            url: 'https://www.google.com/maps/d/viewer?mid=1LSZyaI7ZluKQSdJZO0qSBffT8sw2dfPr',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1LSZyaI7ZluKQSdJZO0qSBffT8sw2dfPr',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1LSZyaI7ZluKQSdJZO0qSBffT8sw2dfPr%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World! - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Memories collected around the world',
            'og:title': 'Hello World! - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1LSZyaI7ZluKQSdJZO0qSBffT8sw2dfPr',
            'og:description': 'Memories collected around the world',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1LSZyaI7ZluKQSdJZO0qSBffT8sw2dfPr',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1LSZyaI7ZluKQSdJZO0qSBffT8sw2dfPr',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World Shopping',
      htmlTitle: '<b>Hello World</b> Shopping',
      link: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it',
      displayLink: 'www.google.com',
      snippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...',
      htmlSnippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...',
      cacheId: 'q0-peCHq4tIJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            name: 'Hello World Shopping',
            description: 'Hello World Shopping',
            url: 'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Shopping',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World Shopping',
            'og:title': 'Hello World Shopping',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:description': 'Hello World Shopping',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World! Processing',
      htmlTitle: '<b>Hello World</b>! Processing',
      link: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.',
      htmlSnippet:
        '<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.',
      cacheId: 'LkrfSTqN6ZAJ',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            name: 'Hello World! Processing',
            description: 'Hello World! Processing',
            url: 'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World! Processing',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World! Processing',
            'og:title': 'Hello World! Processing',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:description': 'Hello World! Processing',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World Cottages - Google hotels',
      htmlTitle: '<b>Hello World</b> Cottages - Google hotels',
      link: 'https://www.google.com/travel/hotels/entity/ChoIoP-FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?ei=p7N3YaiVIIT92AHr76uQCA&sa=X&ei=rTZ6YbfOIo2P1r0Pr-WswAo&ei=r_S1YfPqK8TI2QKDhZOAAQ&ei=6CsVYp3yH9uL8LAP59S4gAQ&ved=2ahUKEwidhvPp-JP2AhXbBRwAHWcqDkAQv6wDKAB6BAgBEG8',
      displayLink: 'www.google.com',
      snippet:
        'Hello World Cottages · Similar hotels nearby · Vacation rentals nearby · Google review summary · Rooms · Location · About this hotel · Photos · More resorts.',
      htmlSnippet:
        '<b>Hello World</b> Cottages &middot; Similar hotels nearby &middot; Vacation rentals nearby &middot; Google review summary &middot; Rooms &middot; Location &middot; About this hotel &middot; Photos &middot; More resorts.',
      formattedUrl:
        'https://www.google.com/.../ChoIoP- FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?...',
      htmlFormattedUrl:
        'https://www.google.com/.../ChoIoP- FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-9_dSeGPZxxzwFTNQkmSrNq_TYAicmJi0iVH13r-zueoDBaQFtLfFXogQ',
            width: '272',
            height: '185',
          },
        ],
        metatags: [
          {
            'application-name': 'Travel',
            'og:image':
              'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
            'og:type': 'website',
            'og:image:width': '296',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Cottages 3.4 ★ (5)',
            mod: 'true',
            'og:site_name': 'Google Hotel Search',
            'apple-mobile-web-app-title': 'Travel',
            'og:title': 'Hello World Cottages 3.4 ★ (5)',
            'og:image:height': '202',
            'og:description':
              'Find out more information about Hello World Cottages and check out the availability & booking options for your next Bardez trip.',
            'twitter:image':
              'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
            referrer: 'origin',
            'twitter:image:alt': 'Hello World Cottages 3.4 ★ (5)',
            'apple-mobile-web-app-status-bar-style': 'black',
            'msapplication-tap-highlight': 'no',
            viewport:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            'apple-mobile-web-app-capable': 'yes',
            'twitter:description':
              'Find out more information about Hello World Cottages and check out the availability & booking options for your next Bardez trip.',
            'mobile-web-app-capable': 'yes',
            'og:locale': 'en_US',
            'og:url':
              'https://www.google.com/travel/hotels/entity/ChoIoP-FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?g2lb=4356900',
          },
        ],
        cse_image: [
          {
            src: 'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'helloworld.ug - Google My Maps',
      htmlTitle: '<b>helloworld</b>.ug - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Open full screen to view more. helloworld.ug. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML.',
      htmlSnippet:
        'Open full screen to view more. <b>helloworld</b>.ug. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML.',
      cacheId: 'LZW-q-h3CN4J',
      formattedUrl: 'https://www.google.com/mymaps/viewer?mid=1_5DE...hl=en_US',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=1_5DE...hl=en_US',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTutZZplU0SLA0JjqjqB7txw0hPjhCXKscFSRwLqynshHpI1zfeSPgx_eg',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
            name: 'helloworld.ug - Google My Maps',
            description: 'our office location',
            url: 'https://www.google.com/maps/d/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1_5DE_FvFzw99EsuTjqXvIvWtbgs%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'helloworld.ug - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'our office location',
            'og:title': 'helloworld.ug - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
            'og:description': 'our office location',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'The World of Hello World - Google マイマップ',
      htmlTitle: 'The World of <b>Hello World</b> - Google マイマップ',
      link: 'https://www.google.com/maps/d/edit?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&ie=UTF8&oe=UTF-8&hl=ja&q&om=1&z=1&ll=15.284185,96.328125&spn=174.260301,360&msa=0',
      displayLink: 'www.google.com',
      snippet:
        'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, ...',
      htmlSnippet:
        'A map of programming languages and rough locations in the <b>world</b> where they were created. Colors correspond to four major epochs: blue - first languages,&nbsp;...',
      cacheId: 'O9Rk61WDXfcJ',
      formattedUrl: 'https://www.google.com/maps/d/edit?mid...',
      htmlFormattedUrl: 'https://www.google.com/maps/d/edit?mid...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSiPoCGr5S8DsyZkEty9D6gu4Uf3hCEC0XMBbnBbM7VBzEQLR1OMtJkTFh',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
            name: 'The World of Hello World - Google マイマップ',
            description:
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, green - establishing paradigms, yellow...',
            url: 'https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1j9wMaiQ12jiqpEFD1HgZ3QPuPDk%26hl%3Dja',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'The World of Hello World - Google マイマップ',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description':
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.',
            'og:title': 'The World of Hello World - Google マイマップ',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
            'og:description':
              'A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello, World! s.r.o. - Google My Maps',
      htmlTitle: '<b>Hello</b>, <b>World</b>! s.r.o. - Google My Maps',
      link: 'https://www.google.com/mymaps/viewer?mid=zwosox3baxl4.kIx5c_w02twQ&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Jun 16, 2015 ... Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také ...',
      htmlSnippet:
        'Jun 16, 2015 <b>...</b> Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také&nbsp;...',
      cacheId: 'HHRzgHi8m38J',
      formattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zwosox3baxl4.kIx5c...',
      htmlFormattedUrl:
        'https://www.google.com/mymaps/viewer?mid=zwosox3baxl4.kIx5c...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4cFCLsIgi4cWKimRo2ukWFGr5XEeevUg436xsgT6j8OYJMiqPkoxVrhG5',
            width: '221',
            height: '228',
          },
        ],
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
            name: 'Hello, World! s.r.o. - Google My Maps',
            description:
              'Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také následné zpracování celé corporate...',
            url: 'https://www.google.com/maps/d/viewer?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
            'apple-itunes-app':
              'app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1nEerYjp9t8TuIkvU8hXVDbNrza4%26hl%3Den_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello, World! s.r.o. - Google My Maps',
            'og:site_name': 'Google My Maps',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description':
              'Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také následné zpracování celé corporate identity.',
            'og:title': 'Hello, World! s.r.o. - Google My Maps',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
            'og:description':
              'Jsme brand agentura, která pro své klienty zajištuje především zpracování nových a rebrand původních logotypů. K tomu samozřejmě patří také následné zpracování celé corporate identity.',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1nEerYjp9t8TuIkvU8hXVDbNrza4&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'About – Google Maps',
      htmlTitle: 'About – Google Maps',
      link: 'https://www.google.com/maps/about/',
      displayLink: 'www.google.com',
      snippet:
        'Discover the world with Google Maps. Experience Street View, 3D Mapping, turn-by-turn directions, indoor maps and more across your devices.',
      htmlSnippet:
        'Discover the <b>world</b> with Google Maps. Experience Street View, 3D Mapping, turn-by-turn directions, indoor maps and more across your devices.',
      cacheId: 'ZeiiuE8l81kJ',
      formattedUrl: 'https://www.google.com/maps/about/',
      htmlFormattedUrl: 'https://www.google.com/maps/about/',
      pagemap: {
        metatags: [
          {
            viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
          },
        ],
      },
    },
  ],
};
