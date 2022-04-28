window.onload = function WindowLoad(event) {
    localStorage.clear();
}

var countries =  {
  AD: {
    name: "Andorra"
  },
  AE: {
    name: "United Arab Emirates"
  },
  AF: {
    name: "Afghanistan"
  },
  AG: {
    name: "Antigua and Barbuda"
  },
  AL: {
    name: "Albania"
  },
  AM: {
    name: "Armenia"
  },
  AO: {
    name: "Angola"
  },
  AR: {
    name: "Argentina"
  },
  AT: {
    name: "Austria"
  },
  AU: {
    name: "Australia"
  },
  AZ: {
    name: "Azerbaijan"
  },
  BA: {
    name: "Bosnia and Herzegovina"
  },
  BB: {
    name: "Barbados"
  },
  BD: {
    name: "Bangladesh"
  },
  BE: {
    name: "Belgium"
  },
  BF: {
    name: "Burkina Faso"
  },
  BG: {
    name: "Bulgaria"
  },
  BH: {
    name: "Bahrain"
  },
  BI: {
    name: "Burundi"
  },
  BJ: {
    name: "Benin"
  },
  BN: {
    name: "Brunei"
  },
  BO: {
    name: "Bolivia"
  },
  BR: {
    name: "Brazil"
  },
  BS: {
    name: "Bahamas"
  },
  BT: {
    name: "Bhutan"
  },
  BW: {
    name: "Botswana"
  },
  BY: {
    name: "Belarus"
  },
  BZ: {
    name: "Belize"
  },
  CA: {
    name: "Canada"
  },
  CD: {
    name: "Democratic Republic of the Congo"
  },
  CF: {
    name: "Central African Republic"
  },
  CG: {
    name: "Republic of Congo"
  },
  CH: {
    name: "Switzerland"
  },
  CI: {
    name: "Ivory Coast"
  },
  CL: {
    name: "Chile"
  },
  CM: {
    name: "Cameroon"
  },
  CN: {
    name: "China"
  },
  CO: {
    name: "Colombia"
  },
  CR: {
    name: "Costa Rica"
  },
  CU: {
    name: "Cuba"
  },
  CY: {
    name: "Cyprus"
  },
  CZ: {
    name: "Czech Republic"
  },
  DE: {
    name: "Germany"
  },
  DJ: {
    name: "Djibouti"
  },
  DK: {
    name: "Denmark"
  },
  DM: {
    name: "Dominica"
  },
  DO: {
    name: "Dominican Republic"
  },
  DZ: {
    name: "Algeria"
  },
  EC: {
    name: "Ecuador"
  },
  EE: {
    name: "Estonia"
  },
  EG: {
    name: "Egypt"
  },
  EH: {
    name: "Western Sahara"
  },
  ER: {
    name: "Eritrea"
  },
  ES: {
    name: "Spain"
  },
  ET: {
    name: "Ethiopia"
  },
  FI: {
    name: "Finland"
  },
  FJ: {
    name: "Fiji"
  },
  FM: {
    name: "Micronesia"
  },
  FR: {
    name: "France"
  },
  GA: {
    name: "Gabon"
  },
  GB: {
    name: "United Kingdom"
  },
  GD: {
    name: "Grenada"
  },
  GE: {
    name: "Georgia"
  },
  GF: {
    name: "French Guyana"
  },
  GH: {
    name: "Ghana"
  },
  GL: {
    name: "Greenland"
  },
  GN: {
    name: "Guinea"
  },
  GQ: {
    name: "Equatorial Guinea"
  },
  GR: {
    name: "Greece"
  },
  GT: {
    name: "Guatemala"
  },
  GW: {
    name: "Guinea-Bissau"
  },
  GY: {
    name: "Guyana"
  },
  HN: {
    name: "Honduras"
  },
  HR: {
    name: "Croatia"
  },
  HT: {
    name: "Haiti"
  },
  HU: {
    name: "Hungary"
  },
  ID: {
    name: "Indonesia"
  },
  IE: {
    name: "Ireland"
  },
  IL: {
    name: "Israel"
  },
  IN: {
    name: "India"
  },
  IQ: {
    name: "Iraq"
  },
  IR: {
    name: "Iran"
  },
  IS: {
    name: "Iceland"
  },
  IT: {
    name: "Italy"
  },
  JM: {
    name: "Jamaica"
  },
  JO: {
    name: "Jordan"
  },
  JP: {
    name: "Japan"
  },
  KE: {
    name: "Kenya"
  },
  KG: {
    name: "Kyrgyzstan"
  },
  KH: {
    name: "Cambodia"
  },
  KI: {
    name: "Kiribati"
  },
  KM: {
    name: "Comoros"
  },
  KN: {
    name: "Saint Kitts and Nevis"
  },
  KP: {
    name: "North Korea"
  },
  KR: {
    name: "South Korea"
  },
  KW: {
    name: "Kuwait"
  },
  KZ: {
    name: "Kazakhstan"
  },
  LA: {
    name: "Laos"
  },
  LB: {
    name: "Lebanon"
  },
  LC: {
    name: "Saint Lucia"
  },
  LI: {
    name: "Liechtenstein"
  },
  LK: {
    name: "Sri Lanka"
  },
  LR: {
    name: "Liberia"
  },
  LS: {
    name: "Lesotho"
  },
  LT: {
    name: "Lithuania"
  },
  LU: {
    name: "Luxembourg"
  },
  LV: {
    name: "Latvia"
  },
  LY: {
    name: "Libya"
  },
  MA: {
    name: "Morocco"
  },
  MC: {
    name: "Monaco"
  },
  MD: {
    name: "Moldova"
  },
  ME: {
    name: "Montenegro"
  },
  MG: {
    name: "Madagascar"
  },
  MH: {
    name: "Marshall Islands"
  },
  MK: {
    name: "Macedonia"
  },
  ML: {
    name: "Mali"
  },
  MM: {
    name: "Myanmar"
  },
  MN: {
    name: "Mongolia"
  },
  MR: {
    name: "Mauritania"
  },
  MT: {
    name: "Malta"
  },
  MU: {
    name: "Mauritius"
  },
  MV: {
    name: "Maldives"
  },
  MW: {
    name: "Malawi"
  },
  MX: {
    name: "Mexico"
  },
  MY: {
    name: "Malaysia"
  },
  MZ: {
    name: "Mozambique"
  },
  NA: {
    name: "Namibia"
  },
  NE: {
    name: "Niger"
  },
  NG: {
    name: "Nigeria"
  },
  NI: {
    name: "Nicaragua"
  },
  NL: {
    name: "Netherlands"
  },
  NO: {
    name: "Norway"
  },
  NP: {
    name: "Nepal"
  },
  NR: {
    name: "Nauru"
  },
  NZ: {
    name: "New Zealand"
  },
  OM: {
    name: "Oman"
  },
  PA: {
    name: "Panama"
  },
  PE: {
    name: "Peru"
  },
  PG: {
    name: "Papua New Guinea"
  },
  PH: {
    name: "Philippines"
  },
  PK: {
    name: "Pakistan"
  },
  PL: {
    name: "Poland"
  },
  PR: {
    name: "Puerto Rico"
  },
  PS: {
    name: "Palestine"
  },
  PT: {
    name: "Portugal"
  },
  PW: {
    name: "Palau"
  },
  PY: {
    name: "Paraguay"
  },
  QA: {
    name: "Qatar"
  },
  RO: {
    name: "Romania"
  },
  RS: {
    name: "Serbia"
  },
  RU: {
    name: "Russia"
  },
  RW: {
    name: "Rwanda"
  },
  SA: {
    name: "Saudi Arabia"
  },
  SB: {
    name: "Solomon Islands"
  },
  SC: {
    name: "Seychelles"
  },
  SD: {
    name: "Sudan"
  },
  SE: {
    name: "Sweden"
  },
  SG: {
    name: "Singapore"
  },
  SI: {
    name: "Slovenia"
  },
  SK: {
    name: "Slovakia"
  },
  SL: {
    name: "Sierra Leone"
  },
  SN: {
    name: "Senegal"
  },
  SO: {
    name: "Somalia"
  },
  SR: {
    name: "Suriname"
  },
  SS: {
    name: "South Sudan"
  },
  ST: {
    name: "Sao Tome and Principe"
  },
  SV: {
    name: "El Salvador"
  },
  SY: {
    name: "Syria"
  },
  SZ: {
    name: "Eswatini"
  },
  TD: {
    name: "Chad"
  },
  TG: {
    name: "Togo"
  },
  TH: {
    name: "Thailand"
  },
  TJ: {
    name: "Tajikistan"
  },
  TL: {
    name: "Timor-Leste"
  },
  TM: {
    name: "Turkmenistan"
  },
  TN: {
    name: "Tunisia"
  },
  TO: {
    name: "Tonga"
  },
  TR: {
    name: "Turkey"
  },
  TT: {
    name: "Trinidad and Tobago"
  },
  TV: {
    name: "Tuvalu"
  },
  TW: {
    name: "Taiwan"
  },
  TZ: {
    name: "Tanzania"
  },
  UA: {
    name: "Ukraine"
  },
  UG: {
    name: "Uganda"
  },
  US: {
    name: "United States"
  },
  UY: {
    name: "Uruguay"
  },
  UZ: {
    name: "Uzbekistan"
  },
  VC: {
    name: "Saint Vincent and the Grenadines"
  },
  VE: {
    name: "Venezuela"
  },
  VN: {
    name: "Vietnam"
  },
  VU: {
    name: "Vanuatu"
  },
  WS: {
    name: "Samoa"
  },
  XK: {
    name: "Kosovo"
  },
  YE: {
    name: "Yemen"
  },
  ZA: {
    name: "South Africa"
  },
  ZM: {
    name: "Zambia"
  },
  ZW: {
    name: "Zimbabwe"
  }
}

let countriesMap = new Map();
var invertedCountriesMap = new Map();

function setMap(correct_countries)
{
  startTimer();
  for (let i = 0; i < correct_countries.length; i++) {
    countriesMap.set(correct_countries[i].toLowerCase(), "https://flagcdn.com/" + correct_countries[i].toLowerCase() + ".svg");
    invertedCountriesMap.set(countries[correct_countries[i]]['name'].toLowerCase(), correct_countries[i].toLowerCase());
    invertedCountriesMap.set("present", true);
  }
}

async function skipFlag(correct_countries) 
{
  document.getElementById("flag").classList.add("flag-change");
  if (countriesMap.size == 0) {
    document.getElementById("flag").src = "https://flagcdn.com/" + correct_countries[Math.floor(Math.random() * correct_countries.length)].toLowerCase() + ".svg";
  } else {
    document.getElementById("flag").src = Array.from(countriesMap.values())[Math.floor(Math.random() * Array.from(countriesMap).length)];
  }
  await new Promise(r => setTimeout(r, 1000));
  document.getElementById("flag").classList.remove("flag-change");
}


async function isCorrectFlag(q, correct_countries, s, maxScore) {
  if (!invertedCountriesMap.has("present")) {
    setMap(correct_countries);
  }
    document.getElementById("query").value = "";
    if (invertedCountriesMap.get(q.toLowerCase()) == document.getElementById("flag").src.substring(20, 22)) {
      countriesMap.delete((document.getElementById("flag").src).substring(20, 22));
      updateScore(maxScore);
      if (Array.from(countriesMap).length >= 1)
      {
        document.getElementById("flag").classList.add("flag-change");
        document.getElementById("flag").src = Array.from(countriesMap.values())[Math.floor(Math.random() * Array.from(countriesMap).length)];
        await new Promise(r => setTimeout(r, 1000));
        document.getElementById("flag").classList.remove("flag-change");
      }
    }
}
