var dictionary = {
  'adres*': {
    'nl': 'Adres *',
    'fr': 'Adresse *',
  },
  'banner1': {
    'nl': 'Dimitri is een speciaal man',
    'fr': 'Dimitri est un homme spécial',
  },
  'banner2': {
    'nl': 'Iedereen vraagt zich af wat hij eigenlijk doet op zijn werk',
    'fr': 'Tout le monde se demande ce qu\'il fait réellement au travail',
  },
  'banner3': {
    'nl': 'Maar niemand durft er iets van zeggen',
    'fr': 'Mais personne n\'ose rien en dire',
  },
  'bedrijf': {
    'nl': 'Bedrijf',
    'fr': 'Entreprise',
  },
  'bereikbaarheidzonwering': {
    'nl': 'Bereikbaarheid: Hoe kunnen onze technici bij de zonwering geraken?',
    'fr': 'Accessibilité: comment nos techniciens peuvent-ils accéder à l\'auvent?',
  },
  'btwnr*': {
    'nl': 'BTW nummer *',
    'fr': 'Numéro de TVA *',
  },
  'btwtarief': {
    'nl': 'BTW tarief',
    'fr': 'Taux de TVA',
  },
  'contact': {
    'nl': 'Contact',
    'fr': 'Contacter',
  },
  'contactgegevens': {
    'nl': 'Contactgegevens',
    'fr': 'Coordonnées',
  },
  'facturatiegegevens': {
    'nl': 'Facturatiegegevens',
    'fr': 'Informations de facturation',
  },
  
  'factuurontvangenpermail': {
    'nl': 'Factuur ontvangen per mail *',
    'fr': 'Facture reçevoir par e-mail *',
  },
  'gelijkvloers': {
    'nl': 'Gelijkvloers / Terras (evt met kleine trapladder)',
    'fr': 'Rez-de-chaussée / terrasse (éventuellement avec petit escabeau)',
  },
  'gevelinstallatie': {
    'nl': 'Gevelinstallatie',
    'fr': 'Installation de façade',
  },
  
  'herstelling': {
    'nl': 'Herstelling',
    'fr': 'Réparer',
  },
  'herstellingaanvragen': {
    'nl': 'Herstelling aanvragen',
    'fr': 'Demander réparation',
  },

  'hoogwerker': {
    'nl': 'Hoogwerker',
    'fr': 'Plate-forme aérienne',
  },
  'ikbenparticulier': {
    'nl': 'Ik ben particulier *',
    'fr': 'Je suis particulier *',
  },
  'ikhebeenonderhoudscontract': {
    'nl': 'Ik heb een onderhoudscontract *',
    'fr': 'J\'ai un contrat de maintenance *',
  },
  'ikweethetniet': {
    'nl': 'Ik weet het niet',
    'fr': 'Je ne sais pas',
  },
  'interventieadres': {
    'nl': 'Interventieadres',
    'fr': 'Adresse d\'intervention',
  },
  'interventieadreszelfde': {
    'nl': 'Het interventieadres is hetzelfde als het facturatieadres',
    'fr': 'L\'adresse d\'intervention est la même que l\'adresse de facturation',
  },
  
  
  'ja': {
    'nl': 'Ja',
    'fr': 'Oui',
  },
  'kieshier': {
    'nl': 'Kies hier',
    'fr': 'Choisissez ici',
  },
  
  'klantnummer': {
    'nl': 'Klantnummer',
    'fr': 'Numéro de client',
  },
  'medecontractant': {
    'nl': 'Medecontractant',
    'fr': 'Co-contractant',
  },
  'merkzonnewering': {
    'nl': 'Merk van de zonnewering *',
    'fr': 'Marque de l\'auvent *',
  },
  'naam*': {
    'nl': 'Naam *',
    'fr': 'Nom *',
  },
  'naamcontactterplaatse*': {
    'nl': 'Naam contactpersoon ter plaatse *',
    'fr': 'Nom de la personne de contact sur place *',
  },
  
  'nee': {
    'nl': 'Nee',
    'fr': 'Non',
  },
  'omschrijvingdefect': {
    'nl': 'Omschrijving defect',
    'fr': 'Description du défaut',
  },
  
  'onderhoud': {
    'nl': 'Onderhoud',
    'fr': 'Entretien',
  },
  
  
  'onsbedrijf': {
    'nl': 'Ons bedrijf',
    'fr': 'Notre entreprise',
  },
  'producten': {
    'nl': 'Producten',
    'fr': 'Produits',
  },
  'referenties': {
    'nl': 'Referenties',
    'fr': 'Références',
  },
  'tel*': {
    'nl': 'Telefoon/GSM *',
    'fr': 'Téléphone/GSM *',
  },
  'telcontactterplaatse*': {
    'nl': 'Telefoon contactpersoon ter plaatse *',
    'fr': 'Téléphone de la personne de contact sur place *',
  },
  'toelichtinginterventie': {
    'nl': 'Toelichting over de gevraagde interventie',
    'fr': 'Explication de l\'intervention demandée',
  },
  
  'vacatures': {
    'nl': 'Vacatures',
    'fr': 'Postes vacants',
  },
  'veldError': {
    'nl': 'Veld niet correct ingevuld',
    'fr': 'Texte mal rempli',
  },
  'verzend': {
    'nl': 'Verzend',
    'fr': 'Envoyer',
  },
  'voegfotostoe': {
    'nl': 'Voeg foto\s/documenten toe',
    'fr': 'Ajouter des photos / documents',
  },
  
  'voorschriften': {
    'nl': 'Voorschriften',
    'fr': 'Réglementations',
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