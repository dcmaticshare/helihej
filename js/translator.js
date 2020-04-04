var dictionary = {
  'banner1': {
    'nl': 'Dimitri is een speciaal man',
    'fr': 'Dimitri est un homme spécial',
  },
  'banner2': {
    'nl': 'Iedereen vraagt zich af wat hij eigenlijk doet op zijn werk',
    'fr': 'Tout le monde se demande ce qu ils font réellement au travail',
  },
  'banner3': {
    'nl': 'Maar niemand durft er iets van zeggen',
    'fr': 'Mais personne n ose rien en dire',
  },
  'herstelling': {
    'nl': 'Herstelling',
    'fr': 'Réparer',
  },
  'onderhoud': {
    'nl': 'Onderhoud',
    'fr': 'Entretien',
  },
  'contact': {
    'nl': 'Contact',
    'fr': 'Contacter',
  },
  'herstellingaanvragen': {
    'nl': 'herstelling aanvragen',
    'fr': 'demander réparation',
  },
  'onsbedrijf': {
    'nl': 'Ons bedrijf',
    'fr': 'Notre entreprise',
  },
  'voorschriften': {
    'nl': 'Voorschriften',
    'fr': 'Réglementations',
  },
  'producten': {
    'nl': 'Producten',
    'fr': 'Produits',
  },
  'referenties': {
    'nl': 'Referenties',
    'fr': 'Références',
  },
  'vacatures': {
    'nl': 'Vacatures',
    'fr': 'Postes vacants',
  }
  
};
var langs = ['nl', 'fr'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function (langIndexSelected) {
  
  current_lang_index = langIndexSelected;
  current_lang = langs[current_lang_index];
  $(".dropdown-toggle").each(function () {
    $(this).text(current_lang);
  });
  translate();
}

function translate() {
  $("[data-translate]").each(function () {
    var key = $(this).data('translate');
    $(this).html(dictionary[key][current_lang] || "N/A");
  });
}

translate();