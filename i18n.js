/* ═══════════════════════════════════════════════════════════
   PAYOTE — i18n.js
   Shared translation engine for all pages.
   Usage:
     1. Add <script src="../i18n.js"></script> to any page
     2. Mark translatable elements: <span data-i18n="nav.women"></span>
     3. Engine auto-applies saved language on load.
     4. Call window.i18n.set('FR') to switch programmatically.
═══════════════════════════════════════════════════════════ */

(function () {

  /* ── TRANSLATIONS ─────────────────────────────────────── */
  const STRINGS = {

    EN: {
      /* Navigation */
      'nav.women':       'Women',
      'nav.men':         'Men',
      'nav.collections': 'Collections',
      'nav.story':       'Our Story',
      'nav.cart':        'Cart',

      /* Hero — V1 cinematic */
      'hero.line1':      'Wear France.',
      'hero.line2':      'Feel the Sud.',
      'hero.line3':      'Ship worldwide.',
      'hero.sub':        'French-crafted espadrilles. Designed for the world. Available in EUR, USD · EN, FR.',
      'hero.cta.shop':   'Discover the collection →',
      'hero.cta.story':  'Our story',
      'hero.eyebrow':    'Summer 2025 · Handcrafted in France',

      /* Hero — V2 store */
      'hero2.line1':     'French',
      'hero2.line2':     'espadrilles,',
      'hero2.line3':     'built for you.',
      'hero2.desc':      'Handcrafted in France, shipped worldwide. Choose your language, currency, and size — we handle the rest.',
      'hero2.cta.shop':  'Shop now',
      'hero2.cta.explore':'Explore →',

      /* USP pills */
      'usp.shipping':    'Worldwide shipping',
      'usp.lang':        'EN · FR · USD · EUR',
      'usp.secure':      'Secure checkout',

      /* Trust strip */
      'trust.shipping':  'Worldwide shipping',
      'trust.secure':    'Secure checkout · SSL',
      'trust.currency':  'Pay in EUR or USD',
      'trust.returns':   'Easy returns',
      'trust.made':      'Handcrafted in France',

      /* Products */
      'product.bestseller':  'Best seller',
      'product.new':         'New',
      'product.intl':        'International pick',
      'product.add':         'Add to cart',
      'product.size':        'Size guide',
      'product.secure':      'Secure',
      'product.currency':    'EUR / USD',

      /* Cart */
      'cart.title':          'Your basket',
      'cart.empty':          'Your basket is empty',
      'cart.empty.desc':     'Add your first pair of French espadrilles.',
      'cart.subtotal':       'Subtotal',
      'cart.shipping.note':  'Shipping & taxes calculated at checkout',
      'cart.checkout':       'Proceed to checkout',
      'cart.free.shipping':  'Free shipping unlocked! 🎉',
      'cart.free.add':       'Add €{x} more for free shipping 🚚',

      /* Trust badges */
      'trust.badge.secure':  'Secure checkout',
      'trust.badge.intl':    'International cards',
      'trust.badge.returns': 'Easy returns',

      /* Language switcher */
      'lang.title':          'Language & Region',
      'lang.current':        'EN',

      /* Footer */
      'footer.shop':         'Shop',
      'footer.intl':         'International',
      'footer.lang':         'Language switcher',
      'footer.currency':     'Currency selector',
      'footer.secure':       'Secure payments',
      'footer.size':         'Size conversion',
      'footer.women':        'Women',
      'footer.men':          'Men',
      'footer.collections':  'Collections',
      'footer.gifts':        'Gift cards',
      'footer.tagline':      'A more credible, export-ready boutique.',
      'footer.desc':         'Quieter luxury, clearer conversion paths, a genuine international buying experience.',
      'footer.copy':         '© 2025 Payote · Redesign concept · Handcrafted French espadrilles',

      /* Module 4 — Payment */
      'pay.title':           'Shop with complete confidence.',
      'pay.sub':             'Everything you need to know about paying, receiving, and returning your Payote espadrilles — wherever you are in the world.',
      'pay.step1.tag':       'Our guarantees',
      'pay.step1.h':         'Four promises. Every order.',
      'pay.step1.lead':      'Before anything else — here is what Payote commits to every customer, whether you\'re ordering from Paris or Helsinki.',
      'pay.step2.tag':       'Payment methods',
      'pay.step2.h':         'Pay your way.',
      'pay.step3.tag':       'Shipping · Colissimo',
      'pay.step3.h':         'From France to anywhere.',
      'pay.step4.tag':       'Returns & refunds',
      'pay.step4.h':         'Not right? No problem.',
      'pay.step5.tag':       'The checkout',
      'pay.step5.h':         'Fast, clear, trusted.',
      'pay.contact.title':   'We\'re here for you.',
      'pay.contact.sub':     'Monday to Friday · 9am–1pm & 2pm–5pm (CET)',

      /* Size module */
      'size.title':          'Shoe Size — Universal Converter',
      'size.desc':           'Enter your size in any system. Instant conversion across EU, US Women, US Men, UK and foot length in CM.',
      'size.convert':        'Convert →',
      'size.eu':             'EU (Finland standard)',
      'size.usw':            'US Women',
      'size.usm':            'US Men',
      'size.uk':             'UK',
      'size.cm':             'CM',
    },

    FR: {
      /* Navigation */
      'nav.women':       'Femmes',
      'nav.men':         'Hommes',
      'nav.collections': 'Collections',
      'nav.story':       'Notre histoire',
      'nav.cart':        'Panier',

      /* Hero — V1 cinematic */
      'hero.line1':      'Portez la France.',
      'hero.line2':      'Sentez le Sud.',
      'hero.line3':      'Livraison mondiale.',
      'hero.sub':        'Espadrilles artisanales françaises. Conçues pour le monde entier. Disponibles en EUR, USD · FR, EN.',
      'hero.cta.shop':   'Découvrir la collection →',
      'hero.cta.story':  'Notre histoire',
      'hero.eyebrow':    'Été 2025 · Fabriquées en France',

      /* Hero — V2 store */
      'hero2.line1':     'Espadrilles',
      'hero2.line2':     'françaises,',
      'hero2.line3':     'faites pour vous.',
      'hero2.desc':      'Artisanales et françaises, livrées partout dans le monde. Choisissez votre langue, votre devise et votre pointure — on s\'occupe du reste.',
      'hero2.cta.shop':  'Acheter maintenant',
      'hero2.cta.explore':'Explorer →',

      /* USP pills */
      'usp.shipping':    'Livraison mondiale',
      'usp.lang':        'FR · EN · EUR · USD',
      'usp.secure':      'Paiement sécurisé',

      /* Trust strip */
      'trust.shipping':  'Livraison mondiale',
      'trust.secure':    'Paiement sécurisé · SSL',
      'trust.currency':  'Payez en EUR ou USD',
      'trust.returns':   'Retours faciles',
      'trust.made':      'Fabriquées en France',

      /* Products */
      'product.bestseller':  'Meilleure vente',
      'product.new':         'Nouveau',
      'product.intl':        'Coup de cœur international',
      'product.add':         'Ajouter au panier',
      'product.size':        'Guide des tailles',
      'product.secure':      'Sécurisé',
      'product.currency':    'EUR / USD',

      /* Cart */
      'cart.title':          'Votre panier',
      'cart.empty':          'Votre panier est vide',
      'cart.empty.desc':     'Ajoutez votre première paire d\'espadrilles françaises.',
      'cart.subtotal':       'Sous-total',
      'cart.shipping.note':  'Livraison et taxes calculées au paiement',
      'cart.checkout':       'Passer commande',
      'cart.free.shipping':  'Livraison offerte débloquée ! 🎉',
      'cart.free.add':       'Plus que €{x} pour la livraison offerte 🚚',

      /* Trust badges */
      'trust.badge.secure':  'Paiement sécurisé',
      'trust.badge.intl':    'Cartes internationales',
      'trust.badge.returns': 'Retours faciles',

      /* Language switcher */
      'lang.title':          'Langue & Région',
      'lang.current':        'FR',

      /* Footer */
      'footer.shop':         'Boutique',
      'footer.intl':         'International',
      'footer.lang':         'Sélecteur de langue',
      'footer.currency':     'Sélecteur de devise',
      'footer.secure':       'Paiements sécurisés',
      'footer.size':         'Conversion des tailles',
      'footer.women':        'Femmes',
      'footer.men':          'Hommes',
      'footer.collections':  'Collections',
      'footer.gifts':        'Cartes cadeaux',
      'footer.tagline':      'Une boutique plus crédible, prête à l\'export.',
      'footer.desc':         'Un luxe plus discret, des parcours d\'achat plus clairs, une expérience internationale authentique.',
      'footer.copy':         '© 2025 Payote · Concept de refonte · Espadrilles artisanales françaises',

      /* Module 4 — Payment */
      'pay.title':           'Achetez en toute confiance.',
      'pay.sub':             'Tout ce qu\'il faut savoir sur le paiement, la réception et le retour de vos espadrilles Payote — où que vous soyez.',
      'pay.step1.tag':       'Nos garanties',
      'pay.step1.h':         'Quatre promesses. Chaque commande.',
      'pay.step1.lead':      'Avant tout — voici ce que Payote s\'engage à offrir à chaque client, que vous commandiez de Paris ou d\'Helsinki.',
      'pay.step2.tag':       'Moyens de paiement',
      'pay.step2.h':         'Payez à votre façon.',
      'pay.step3.tag':       'Livraison · Colissimo',
      'pay.step3.h':         'De France vers partout.',
      'pay.step4.tag':       'Retours & remboursements',
      'pay.step4.h':         'Pas satisfait ? Pas de problème.',
      'pay.step5.tag':       'Le paiement',
      'pay.step5.h':         'Rapide, clair, sécurisé.',
      'pay.contact.title':   'Nous sommes là pour vous.',
      'pay.contact.sub':     'Du lundi au vendredi · 9h–13h & 14h–17h (CET)',

      /* Size module */
      'size.title':          'Pointures — Convertisseur universel',
      'size.desc':           'Entrez votre pointure dans n\'importe quel système. Conversion instantanée EU, US Femmes, US Hommes, UK et longueur en CM.',
      'size.convert':        'Convertir →',
      'size.eu':             'EU (standard Finlande)',
      'size.usw':            'US Femmes',
      'size.usm':            'US Hommes',
      'size.uk':             'UK',
      'size.cm':             'CM',
    },

    ES: {
      'nav.women':       'Mujer',
      'nav.men':         'Hombre',
      'nav.collections': 'Colecciones',
      'nav.story':       'Nuestra historia',
      'nav.cart':        'Cesta',
      'hero.line1':      'Viste Francia.',
      'hero.line2':      'Siente el Sur.',
      'hero.line3':      'Envío mundial.',
      'hero.sub':        'Alpargatas artesanas francesas. Diseñadas para el mundo. Disponibles en EUR, USD · ES, EN.',
      'hero.cta.shop':   'Descubrir la colección →',
      'hero.cta.story':  'Nuestra historia',
      'hero.eyebrow':    'Verano 2025 · Fabricadas en Francia',
      'hero2.line1':     'Alpargatas',
      'hero2.line2':     'francesas,',
      'hero2.line3':     'hechas para ti.',
      'hero2.desc':      'Artesanales y francesas, enviadas a todo el mundo. Elige tu idioma, divisa y talla — nosotros nos encargamos del resto.',
      'hero2.cta.shop':  'Comprar ahora',
      'hero2.cta.explore':'Explorar →',
      'usp.shipping':    'Envío mundial',
      'usp.lang':        'ES · EN · EUR · USD',
      'usp.secure':      'Pago seguro',
      'trust.shipping':  'Envío mundial',
      'trust.secure':    'Pago seguro · SSL',
      'trust.currency':  'Paga en EUR o USD',
      'trust.returns':   'Devoluciones fáciles',
      'trust.made':      'Fabricadas en Francia',
      'product.bestseller': 'Más vendido',
      'product.new':     'Nuevo',
      'product.intl':    'Favorito internacional',
      'product.add':     'Añadir al carrito',
      'product.size':    'Guía de tallas',
      'product.secure':  'Seguro',
      'product.currency':'EUR / USD',
      'cart.title':      'Tu cesta',
      'cart.empty':      'Tu cesta está vacía',
      'cart.empty.desc': 'Añade tu primer par de alpargatas francesas.',
      'cart.subtotal':   'Subtotal',
      'cart.shipping.note': 'Envío e impuestos calculados al pagar',
      'cart.checkout':   'Ir a pagar',
      'cart.free.shipping': '¡Envío gratuito desbloqueado! 🎉',
      'cart.free.add':   'Añade €{x} más para envío gratuito 🚚',
      'trust.badge.secure':  'Pago seguro',
      'trust.badge.intl':    'Tarjetas internacionales',
      'trust.badge.returns': 'Devoluciones fáciles',
      'lang.title':      'Idioma y región',
      'lang.current':    'ES',
      'footer.shop':     'Tienda',
      'footer.intl':     'Internacional',
      'footer.tagline':  'Una boutique más creíble, lista para exportar.',
      'footer.copy':     '© 2025 Payote · Concepto de rediseño · Alpargatas artesanas francesas',
      'pay.title':       'Compra con total confianza.',
      'pay.step1.tag':   'Nuestras garantías',
      'pay.step1.h':     'Cuatro promesas. Cada pedido.',
      'pay.step2.tag':   'Métodos de pago',
      'pay.step2.h':     'Paga a tu manera.',
      'pay.step3.tag':   'Envío · Colissimo',
      'pay.step3.h':     'De Francia a cualquier lugar.',
      'pay.step4.tag':   'Devoluciones',
      'pay.step4.h':     '¿No es lo que esperabas? No hay problema.',
      'pay.contact.title': 'Estamos aquí para ti.',
      'size.title':      'Tallas — Conversor universal',
      'size.convert':    'Convertir →',
    },

    FI: {
      'nav.women':       'Naiset',
      'nav.men':         'Miehet',
      'nav.collections': 'Kokoelmat',
      'nav.story':       'Tarinamme',
      'nav.cart':        'Ostoskori',
      'hero.line1':      'Kanna Ranskaa.',
      'hero.line2':      'Tunne Etelä.',
      'hero.line3':      'Toimitus maailmanlaajuisesti.',
      'hero.sub':        'Ranskalaiset käsintehyt espadrillit. Suunniteltu maailmalle. Saatavana EUR, USD · FI, EN.',
      'hero.cta.shop':   'Tutustu kokoelmaan →',
      'hero.cta.story':  'Tarinamme',
      'hero.eyebrow':    'Kesä 2025 · Käsintehty Ranskassa',
      'hero2.line1':     'Ranskalaiset',
      'hero2.line2':     'espadrillit,',
      'hero2.line3':     'tehty sinulle.',
      'hero2.desc':      'Käsintehty Ranskassa, toimitetaan maailmanlaajuisesti. Valitse kielesi, valuuttasi ja kokosi — me hoidamme loput.',
      'hero2.cta.shop':  'Osta nyt',
      'hero2.cta.explore':'Tutustu →',
      'usp.shipping':    'Maailmanlaajuinen toimitus',
      'usp.lang':        'FI · EN · EUR · USD',
      'usp.secure':      'Turvallinen maksu',
      'trust.shipping':  'Maailmanlaajuinen toimitus',
      'trust.secure':    'Turvallinen maksu · SSL',
      'trust.currency':  'Maksa EUR:lla tai USD:lla',
      'trust.returns':   'Helpot palautukset',
      'trust.made':      'Käsintehty Ranskassa',
      'product.bestseller': 'Myydyin',
      'product.new':     'Uusi',
      'product.intl':    'Kansainvälinen suosikki',
      'product.add':     'Lisää koriin',
      'product.size':    'Kokoopas',
      'product.secure':  'Suojattu',
      'product.currency':'EUR / USD',
      'cart.title':      'Ostoskorisi',
      'cart.empty':      'Ostoskorisi on tyhjä',
      'cart.empty.desc': 'Lisää ensimmäinen pari ranskalaisia espadrillejä.',
      'cart.subtotal':   'Välisumma',
      'cart.shipping.note': 'Toimitus ja verot lasketaan kassalla',
      'cart.checkout':   'Siirry kassalle',
      'cart.free.shipping': 'Ilmainen toimitus avattu! 🎉',
      'cart.free.add':   'Lisää €{x} ilmaiseen toimitukseen 🚚',
      'trust.badge.secure':  'Turvallinen maksu',
      'trust.badge.intl':    'Kansainväliset kortit',
      'trust.badge.returns': 'Helpot palautukset',
      'lang.title':      'Kieli ja alue',
      'lang.current':    'FI',
      'footer.shop':     'Kauppa',
      'footer.intl':     'Kansainvälinen',
      'footer.tagline':  'Uskottavampi, vientivalmis verkkokauppa.',
      'footer.copy':     '© 2025 Payote · Uudelleensuunniteltu · Ranskalaiset käsintehdyt espadrillit',
      'pay.title':       'Osta täydellä luottamuksella.',
      'pay.step1.tag':   'Takuumme',
      'pay.step1.h':     'Neljä lupausta. Joka tilauksessa.',
      'pay.step2.tag':   'Maksutavat',
      'pay.step2.h':     'Maksa haluamallasi tavalla.',
      'pay.step3.tag':   'Toimitus · Colissimo',
      'pay.step3.h':     'Ranskasta kaikkialle.',
      'pay.step4.tag':   'Palautukset',
      'pay.step4.h':     'Ei täydellinen? Ei hätää.',
      'pay.contact.title': 'Olemme täällä sinua varten.',
      'size.title':      'Kengänkoot — Universaali muunnin',
      'size.convert':    'Muunna →',
    }
  };

  /* Fallback: if key missing in active lang, use EN */
  function t(lang, key, vars) {
    let str = (STRINGS[lang] && STRINGS[lang][key])
           || STRINGS['EN'][key]
           || key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        str = str.replace('{' + k + '}', v);
      });
    }
    return str;
  }

  /* ── LANGUAGES META ──────────────────────────────────── */
  const LANGUAGES = [
    { code: 'EN', flag: '🇬🇧', name: 'English',  native: 'English' },
    { code: 'FR', flag: '🇫🇷', name: 'Français', native: 'Français' },
    { code: 'ES', flag: '🇪🇸', name: 'Español',  native: 'Español'  },
    { code: 'FI', flag: '🇫🇮', name: 'Suomi',    native: 'Suomi'    },
  ];

  /* ── STATE ───────────────────────────────────────────── */
  const STORAGE_KEY = 'payote_lang';
  let activeLang = localStorage.getItem(STORAGE_KEY) || 'EN';

  /* ── APPLY TRANSLATIONS ──────────────────────────────── */
  function apply(lang) {
    activeLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang.toLowerCase();

    /* Swap all data-i18n elements */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(lang, el.getAttribute('data-i18n'));
    });

    /* Swap placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(lang, el.getAttribute('data-i18n-placeholder'));
    });

    /* Update switcher button if present */
    const btn = document.getElementById('langSwitcherBtn');
    if (btn) {
      const meta = LANGUAGES.find(l => l.code === lang);
      btn.innerHTML =
        '<span class="ls-flag">' + meta.flag + '</span>' +
        '<span class="ls-code">' + meta.code + '</span>' +
        '<svg class="ls-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="1,1 5,5 9,1"/></svg>';
    }

    /* Dispatch event so pages can hook in for dynamic content */
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  /* ── DROPDOWN UI ─────────────────────────────────────── */
  function buildDropdown() {
    /* Remove existing if any */
    const existing = document.getElementById('langDropdown');
    if (existing) existing.remove();

    const drop = document.createElement('div');
    drop.id = 'langDropdown';
    drop.className = 'lang-dropdown';

    LANGUAGES.forEach(lang => {
      const item = document.createElement('button');
      item.className = 'ld-item' + (lang.code === activeLang ? ' active' : '');
      item.innerHTML =
        '<span class="ld-flag">' + lang.flag + '</span>' +
        '<span class="ld-names">' +
          '<span class="ld-native">' + lang.native + '</span>' +
          '<span class="ld-code">' + lang.code + '</span>' +
        '</span>' +
        (lang.code === activeLang ? '<span class="ld-check">✓</span>' : '');
      item.onclick = () => {
        apply(lang.code);
        closeDropdown();
      };
      drop.appendChild(item);
    });

    document.body.appendChild(drop);

    /* Position below the switcher button */
    const btn = document.getElementById('langSwitcherBtn');
    if (btn) {
      const r = btn.getBoundingClientRect();
      drop.style.top  = (r.bottom + 8) + 'px';
      drop.style.left = Math.max(8, r.left - drop.offsetWidth + r.width) + 'px';
    }

    /* Close on outside click */
    setTimeout(() => {
      document.addEventListener('click', outsideClose);
    }, 10);
  }

  function outsideClose(e) {
    const drop = document.getElementById('langDropdown');
    const btn  = document.getElementById('langSwitcherBtn');
    if (drop && !drop.contains(e.target) && e.target !== btn) {
      closeDropdown();
    }
  }

  function closeDropdown() {
    const drop = document.getElementById('langDropdown');
    if (drop) {
      drop.classList.add('closing');
      setTimeout(() => drop.remove(), 220);
    }
    document.removeEventListener('click', outsideClose);
    const btn = document.getElementById('langSwitcherBtn');
    if (btn) btn.classList.remove('open');
  }

  function toggleDropdown() {
    const existing = document.getElementById('langDropdown');
    const btn = document.getElementById('langSwitcherBtn');
    if (existing) {
      closeDropdown();
    } else {
      btn && btn.classList.add('open');
      buildDropdown();
    }
  }

  /* ── SHARED CSS ──────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    /* Switcher button */
    #langSwitcherBtn {
      display: flex; align-items: center; gap: .45rem;
      border: 1.5px solid rgba(22,20,15,.14);
      background: transparent; border-radius: 999px;
      padding: .42rem .9rem; font-size: .78rem;
      font-family: inherit; cursor: pointer; color: inherit;
      position: relative; overflow: hidden;
      transition: border-color .25s, color .25s;
    }
    #langSwitcherBtn::before {
      content: ''; position: absolute; inset: 0;
      background: #16140f;
      transform: scaleX(0); transform-origin: left;
      transition: transform .3s cubic-bezier(.4,0,.2,1); z-index: 0;
    }
    #langSwitcherBtn:hover,
    #langSwitcherBtn.open { border-color: #16140f; color: #fff; }
    #langSwitcherBtn:hover::before,
    #langSwitcherBtn.open::before { transform: scaleX(1); }
    #langSwitcherBtn > * { position: relative; z-index: 1; }
    .ls-flag   { font-size: 1rem; line-height: 1; }
    .ls-code   { font-weight: 500; letter-spacing: .05em; font-size: .76rem; }
    .ls-chevron {
      width: 10px; height: 7px; opacity: .6;
      transition: transform .25s;
    }
    #langSwitcherBtn.open .ls-chevron { transform: rotate(180deg); }

    /* Dropdown */
    .lang-dropdown {
      position: fixed; z-index: 9999;
      background: #faf8f5;
      border: 1px solid rgba(22,20,15,.1);
      border-radius: 1rem;
      padding: .4rem;
      box-shadow: 0 12px 40px rgba(22,20,15,.15), 0 2px 8px rgba(22,20,15,.08);
      min-width: 180px;
      animation: dropIn .22s cubic-bezier(.16,1,.3,1) forwards;
    }
    .lang-dropdown.closing {
      animation: dropOut .2s ease forwards;
    }
    @keyframes dropIn {
      from { opacity: 0; transform: translateY(-8px) scale(.97); }
      to   { opacity: 1; transform: translateY(0)   scale(1); }
    }
    @keyframes dropOut {
      to { opacity: 0; transform: translateY(-6px) scale(.97); }
    }

    /* Dropdown items */
    .ld-item {
      display: flex; align-items: center; gap: .75rem;
      width: 100%; padding: .65rem .85rem;
      background: transparent; border: none;
      border-radius: .7rem; cursor: pointer;
      font-family: inherit; color: #16140f;
      transition: background .18s;
      text-align: left;
    }
    .ld-item:hover { background: rgba(22,20,15,.05); }
    .ld-item.active { background: rgba(0,35,149,.06); }
    .ld-flag   { font-size: 1.2rem; line-height: 1; flex-shrink: 0; }
    .ld-names  { flex: 1; }
    .ld-native { display: block; font-size: .85rem; font-weight: 500; }
    .ld-code   { display: block; font-size: .68rem; color: #847a6e; letter-spacing: .08em; margin-top: .05rem; }
    .ld-check  { font-size: .75rem; color: #002395; font-weight: 600; }

    /* Light header variant (for dark backgrounds) */
    .header-light #langSwitcherBtn {
      border-color: rgba(255,255,255,.28); color: #fff;
    }
    .header-light #langSwitcherBtn::before { background: #fff; }
    .header-light #langSwitcherBtn:hover,
    .header-light #langSwitcherBtn.open { color: #16140f; }
    .header-light.scrolled #langSwitcherBtn {
      border-color: rgba(22,20,15,.14); color: #16140f;
    }
    .header-light.scrolled #langSwitcherBtn::before { background: #16140f; }
    .header-light.scrolled #langSwitcherBtn:hover { color: #fff; }
  `;
  document.head.appendChild(style);

  /* ── PUBLIC API ──────────────────────────────────────── */
  window.i18n = {
    set:      apply,
    get:      () => activeLang,
    t:        (key, vars) => t(activeLang, key, vars),
    toggle:   toggleDropdown,
    langs:    LANGUAGES,
    strings:  STRINGS,
  };

  /* ── AUTO-INIT on DOM ready ──────────────────────────── */
  function init() {
    apply(activeLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
