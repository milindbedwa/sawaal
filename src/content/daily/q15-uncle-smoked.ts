import type { DailyQuestion } from "../types";

export const q15UncleSmoked: DailyQuestion = {
  id: "q15",
  slug: "sixty-years-and-fine",
  topic: "science",
  title: { en: "Sixty years and fine", hi: "साठ साल और ठीक-ठाक", gu: "સાઠ વર્ષ અને સાજા" },
  scene: {
    kind: "street",
    setting: "home",
    figures: [
      {
        x: 32,
        pose: "sit",
        color: "amber",
        facing: "right",
        name: { en: "Kiran's uncle", hi: "किरण के चाचा", gu: "કિરણના કાકા" },
        says: {
          en: "I smoked for 60 years and I am fine. These warnings are nonsense.",
          hi: "मैंने 60 साल बीड़ी-सिगरेट पी और मैं ठीक हूँ। ये चेतावनियाँ बेकार हैं।",
          gu: "મેં 60 વર્ષ બીડી-સિગારેટ પીધી અને હું સાજો છું. આ ચેતવણીઓ નકામી છે.",
        },
      },
      { x: 70, pose: "think", color: "mint", facing: "left", name: { en: "Kiran", hi: "किरण", gu: "કિરણ" } },
    ],
    caption: {
      en: "At a family dinner, Kiran's uncle waves away the health warning on a packet.",
      hi: "परिवार के खाने पर किरण के चाचा पैकेट पर छपी स्वास्थ्य चेतावनी को हाथ से झटक देते हैं।",
      gu: "કુટુંબના જમણ વખતે કિરણના કાકા પૅકેટ પરની આરોગ્ય ચેતવણીને હાથથી ઉડાવી દે છે.",
    },
  },
  prompt: { en: "Does his story settle it?", hi: "क्या उनकी कहानी से बात तय हो जाती है?", gu: "શું તેમની વાતથી મુદ્દો નક્કી થઈ જાય?" },
  interaction: "cards",
  choices: [
    {
      id: "one-example",
      label: { en: "One example proves the point", hi: "एक उदाहरण बात साबित कर देता है", gu: "એક ઉદાહરણ વાત સાબિત કરે છે" },
      response: {
        heading: { en: "It proves one thing.", hi: "यह एक ही बात साबित करता है।", gu: "તે એક જ વાત સાબિત કરે છે." },
        body: {
          en: "It proves that he, one person, is fine so far. It says nothing about the many others who smoked and are not here to tell their story.",
          hi: "यह साबित करता है कि वे, एक व्यक्ति, अब तक ठीक हैं। उन बहुतों के बारे में यह कुछ नहीं कहता जिन्होंने धूम्रपान किया और आज अपनी कहानी बताने के लिए मौजूद नहीं हैं।",
          gu: "તે સાબિત કરે છે કે તેઓ, એક વ્યક્તિ, હજી સુધી સાજા છે. એ ઘણા લોકો વિશે તે કશું કહેતું નથી જેમણે ધૂમ્રપાન કર્યું અને આજે પોતાની વાત કહેવા હાજર નથી.",
        },
        quality: "risky",
      },
    },
    {
      id: "argue",
      label: { en: "Argue with him", hi: "उनसे बहस करें", gu: "તેમની સાથે દલીલ કરો" },
      response: {
        heading: { en: "Understandable.", hi: "समझ में आता है।", gu: "સમજી શકાય." },
        body: {
          en: "You care, so you argue. But an argument at dinner rarely changes a mind. A calm question works better: 'Uncle, what about the friends you smoked with?'",
          hi: "आप परवाह करते हैं, इसलिए बहस करते हैं। पर खाने की मेज़ पर बहस से राय कम ही बदलती है। शांत सवाल बेहतर काम करता है: 'चाचा, जिनके साथ आप पीते थे, वे दोस्त कहाँ हैं?'",
          gu: "તમને ચિંતા છે, એટલે દલીલ કરો છો. પણ જમણની મેજ પર દલીલથી મત ભાગ્યે જ બદલાય. શાંત પ્રશ્ન વધુ કામ કરે: 'કાકા, જેમની સાથે તમે પીતા હતા, એ મિત્રો ક્યાં છે?'",
        },
        quality: "okay",
      },
    },
    {
      id: "not-evidence",
      label: {
        en: "One person is not evidence about everyone",
        hi: "एक व्यक्ति सबके बारे में सबूत नहीं है",
        gu: "એક વ્યક્તિ બધા વિશે પુરાવો નથી",
      },
      response: {
        heading: { en: "Exactly.", hi: "बिल्कुल।", gu: "બરાબર." },
        body: {
          en: "His story is real, and he may well be lucky. But the warning is about what happens across lakhs of people, and that is a different question.",
          hi: "उनकी कहानी सच्ची है, और वे सचमुच ख़ुशक़िस्मत हो सकते हैं। पर चेतावनी इस बारे में है कि लाखों लोगों में क्या होता है, और वह एक अलग सवाल है।",
          gu: "તેમની વાત સાચી છે, અને તેઓ ખરેખર નસીબદાર હોઈ શકે. પણ ચેતવણી એ વિશે છે કે લાખો લોકોમાં શું થાય છે, અને તે જુદો પ્રશ્ન છે.",
        },
        quality: "strong",
      },
    },
  ],
  discover: [
    {
      glyph: "people",
      tone: "warning",
      text: {
        en: "We hear from the survivors. The people who smoked and fell ill are not at the dinner table to argue back.",
        hi: "हमें बचे हुए लोगों की बात सुनाई देती है। जिन्होंने धूम्रपान किया और बीमार पड़े, वे जवाब देने के लिए मेज़ पर नहीं हैं।",
        gu: "આપણે બચેલા લોકોની વાત સાંભળીએ છીએ. જેમણે ધૂમ્રપાન કર્યું અને માંદા પડ્યા, તેઓ જવાબ આપવા મેજ પર નથી.",
      },
    },
    {
      glyph: "scale",
      tone: "neutral",
      text: {
        en: "Risk means 'more likely', not 'certain'. Some smokers live long. Many more do not. Both are true at once.",
        hi: "जोखिम का मतलब है 'ज़्यादा संभावना', 'पक्का' नहीं। कुछ धूम्रपान करने वाले लंबा जीते हैं। बहुत ज़्यादा नहीं जीते। दोनों बातें एक साथ सच हैं।",
        gu: "જોખમનો અર્થ છે 'વધુ શક્યતા', 'નક્કી' નહીં. કેટલાક ધૂમ્રપાન કરનારા લાંબું જીવે છે. એનાથી ઘણા વધુ નથી જીવતા. બંને વાત એક સાથે સાચી છે.",
      },
    },
    {
      glyph: "chart",
      tone: "found",
      text: {
        en: "The evidence on tobacco comes from studies that followed very large groups of people over decades, smokers and non-smokers alike.",
        hi: "तंबाकू पर सबूत उन अध्ययनों से आता है जिन्होंने दशकों तक बहुत बड़े समूहों पर नज़र रखी, धूम्रपान करने वाले और न करने वाले दोनों।",
        gu: "તમાકુ પરનો પુરાવો એ અભ્યાસોથી આવે છે જેમણે દાયકાઓ સુધી બહુ મોટા જૂથો પર નજર રાખી, ધૂમ્રપાન કરનારા અને ન કરનારા બંને.",
      },
    },
    {
      glyph: "book",
      tone: "found",
      text: {
        en: "The WHO describes tobacco use as a leading cause of preventable death worldwide. That is a pattern, not a story.",
        hi: "WHO तंबाकू के सेवन को दुनिया में रोकी जा सकने वाली मौतों का एक प्रमुख कारण बताता है। यह एक पैटर्न है, कहानी नहीं।",
        gu: "WHO તમાકુના સેવનને દુનિયામાં અટકાવી શકાય તેવાં મૃત્યુનું એક મુખ્ય કારણ ગણાવે છે. આ એક પૅટર્ન છે, વાર્તા નહીં.",
      },
    },
  ],
  insight: {
    en: "One story is not a pattern.",
    hi: "एक कहानी पैटर्न नहीं होती।",
    gu: "એક વાર્તા પૅટર્ન નથી.",
  },
  why: {
    en: "The same trap appears everywhere: 'my neighbour did it and was fine'. Ask how many did it and were not.",
    hi: "यही जाल हर जगह मिलता है: 'मेरे पड़ोसी ने किया और ठीक रहा'। पूछें, कितनों ने किया और ठीक नहीं रहे।",
    gu: "આ જ જાળ બધે મળે છે: 'મારા પડોશીએ કર્યું અને સાજા રહ્યા'. પૂછો, કેટલાએ કર્યું અને સાજા ન રહ્યા.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "science",
      label: {
        en: "World Health Organization: Tobacco fact sheet",
        hi: "विश्व स्वास्थ्य संगठन: तंबाकू फ़ैक्ट शीट",
        gu: "વિશ્વ આરોગ્ય સંસ્થા: તમાકુ ફૅક્ટ શીટ",
      },
      url: "https://www.who.int/news-room/fact-sheets/detail/tobacco",
      note: {
        en: "Summarises the global evidence on tobacco and health, including why it is a leading cause of preventable death.",
        hi: "तंबाकू और स्वास्थ्य पर वैश्विक सबूतों का सार, और यह क्यों रोकी जा सकने वाली मौतों का प्रमुख कारण है।",
        gu: "તમાકુ અને આરોગ્ય પરના વૈશ્વિક પુરાવાનો સાર, અને તે અટકાવી શકાય તેવાં મૃત્યુનું મુખ્ય કારણ કેમ છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "National Tobacco Control Programme, Ministry of Health and Family Welfare",
        hi: "राष्ट्रीय तंबाकू नियंत्रण कार्यक्रम, स्वास्थ्य और परिवार कल्याण मंत्रालय",
        gu: "રાષ્ટ્રીય તમાકુ નિયંત્રણ કાર્યક્રમ, આરોગ્ય અને પરિવાર કલ્યાણ મંત્રાલય",
      },
      url: "https://ntcp.mohfw.gov.in/",
      note: {
        en: "India's programme on tobacco control, including the law behind pack warnings and help to quit.",
        hi: "तंबाकू नियंत्रण पर भारत का कार्यक्रम, जिसमें पैकेट चेतावनियों का क़ानून और छोड़ने में मदद शामिल है।",
        gu: "તમાકુ નિયંત્રણ પર ભારતનો કાર્યક્રમ, જેમાં પૅકેટ ચેતવણીઓનો કાયદો અને છોડવામાં મદદ શામેલ છે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 65,
};
