import type { Investigation } from "../types";

export const cleanAir: Investigation = {
  id: "clean-air",
  slug: "the-clean-air-post",
  topic: "misinformation",
  accent: "mint",
  title: { en: "The Clean Air Post", hi: "साफ़ हवा वाली पोस्ट", gu: "સ્વચ્છ હવાની પોસ્ટ" },
  tagline: { en: "A proud post, a happy chart, and a number that might even be true.", hi: "एक गर्वीली पोस्ट, एक ख़ुश चार्ट, और एक आँकड़ा जो सच भी हो सकता है।", gu: "એક ગર્વભરી પોસ્ટ, એક ખુશ ચાર્ટ, અને એક આંકડો જે સાચો પણ હોઈ શકે." },
  artefact: "post",
  blocks: [
    {
      id: "byline",
      role: "byline",
      text: { en: "CityPride Official ✓ · 3h", hi: "CityPride Official ✓ · 3 घंटे", gu: "CityPride Official ✓ · 3 કલાક" },
      clue: "account",
    },
    {
      id: "headline",
      role: "headline",
      text: { en: "Pollution DOWN 60% this year! Our air is the cleanest in India 🎉", hi: "प्रदूषण इस साल 60% कम! हमारी हवा भारत में सबसे साफ़ 🎉", gu: "પ્રદૂષણ આ વર્ષે 60% ઓછું! આપણી હવા ભારતમાં સૌથી સ્વચ્છ 🎉" },
      clue: "sixty",
    },
    {
      id: "chart",
      role: "chart",
      text: { en: "Chart: 'Then' vs 'Now'. No axis, no units, no dates.", hi: "चार्ट: 'तब' बनाम 'अब'। न धुरी, न इकाई, न तारीख़।", gu: "ચાર્ટ: 'ત્યારે' વિ. 'હવે'. ન ધરી, ન એકમ, ન તારીખ." },
      clue: "chart",
    },
    {
      id: "stat",
      role: "stat",
      text: { en: "AQI 42 today!", hi: "आज AQI 42!", gu: "આજે AQI 42!" },
      clue: "today",
    },
    {
      id: "quote",
      role: "quote",
      text: { en: "Experts agree: nobody breathes cleaner air than us.", hi: "विशेषज्ञ सहमत हैं: हमसे साफ़ हवा कोई नहीं लेता।", gu: "નિષ્ણાતો સંમત: આપણાથી સ્વચ્છ હવા કોઈ લેતું નથી." },
      clue: "experts",
    },
    {
      id: "body",
      role: "body",
      text: { en: "Share if you love our city! ❤️ Don't let the haters win.", hi: "अगर आप अपने शहर से प्यार करते हैं तो शेयर करें! ❤️ नफ़रत करने वालों को जीतने न दें।", gu: "જો તમે તમારા શહેરને પ્રેમ કરો છો તો શેર કરો! ❤️ નફરત કરનારાઓને જીતવા ન દો." },
      clue: "love",
    },
    {
      id: "footer",
      role: "footer",
      text: { en: "Source: CPCB daily AQI bulletin, 1 January", hi: "स्रोत: CPCB दैनिक AQI बुलेटिन, 1 जनवरी", gu: "સ્ત્રોત: CPCB દૈનિક AQI બુલેટિન, 1 જાન્યુઆરી" },
      clue: "source",
    },
  ],
  clues: [
    {
      id: "account",
      type: "missing-source",
      title: { en: "'Official' is just a word", hi: "'Official' बस एक शब्द है", gu: "'Official' ફક્ત એક શબ્દ છે" },
      explain: {
        en: "Anyone can put 'Official' in a name and buy a tick. Air data in India comes from the Central and State Pollution Control Boards, not fan pages.",
        hi: "कोई भी नाम में 'Official' लिख सकता है और टिक खरीद सकता है। भारत में हवा का डेटा केंद्रीय और राज्य प्रदूषण नियंत्रण बोर्ड से आता है, फ़ैन पेज से नहीं।",
        gu: "કોઈ પણ નામમાં 'Official' લખી શકે અને ટિક ખરીદી શકે. ભારતમાં હવાનો ડેટા કેન્દ્રીય અને રાજ્ય પ્રદૂષણ નિયંત્રણ બોર્ડથી આવે છે, ફેન પેજથી નહીં.",
      },
    },
    {
      id: "sixty",
      type: "misleading-statistic",
      title: { en: "60% of what, since when?", hi: "60% किसका, कब से?", gu: "60% શેનું, ક્યારથી?" },
      explain: {
        en: "Down 60% compared with which day, which month, which pollutant? A winter day versus a monsoon day can differ by that much on its own.",
        hi: "किस दिन, किस महीने, किस प्रदूषक की तुलना में 60% कम? सर्दी का एक दिन और मानसून का एक दिन अपने आप ही इतना अलग हो सकता है।",
        gu: "કયા દિવસ, કયા મહિના, કયા પ્રદૂષકની સરખામણીએ 60% ઓછું? શિયાળાનો એક દિવસ અને ચોમાસાનો એક દિવસ પોતે જ એટલો અલગ હોઈ શકે.",
      },
    },
    {
      id: "chart",
      type: "misleading-statistic",
      title: { en: "A chart without labels is a drawing", hi: "बिना लेबल का चार्ट बस एक चित्र है", gu: "લેબલ વિનાનો ચાર્ટ ફક્ત એક ચિત્ર છે" },
      explain: {
        en: "No axis, no units, no dates. Two bars can be drawn to show anything. Ask for the numbers behind the picture.",
        hi: "न धुरी, न इकाई, न तारीख़। दो बार कुछ भी दिखाने के लिए बनाए जा सकते हैं। तस्वीर के पीछे के आँकड़े माँगें।",
        gu: "ન ધરી, ન એકમ, ન તારીખ. બે બાર કંઈ પણ બતાવવા દોરી શકાય. ચિત્ર પાછળના આંકડા માગો.",
      },
    },
    {
      id: "today",
      type: "solid",
      title: { en: "Possibly true, and still not enough", hi: "शायद सच, फिर भी काफ़ी नहीं", gu: "કદાચ સાચું, છતાં પૂરતું નહીં" },
      explain: {
        en: "A single day's AQI can be checked and may well be right. But one good day cannot show a whole year's change, or a comparison with other cities.",
        hi: "एक दिन का AQI जाँचा जा सकता है और सही भी हो सकता है। लेकिन एक अच्छा दिन पूरे साल का बदलाव, या दूसरे शहरों से तुलना, नहीं दिखा सकता।",
        gu: "એક દિવસનો AQI ચકાસી શકાય અને સાચો પણ હોઈ શકે. પણ એક સારો દિવસ આખા વર્ષનો બદલાવ, કે બીજા શહેરો સાથેની સરખામણી, બતાવી ન શકે.",
      },
    },
    {
      id: "experts",
      type: "fake-expert",
      title: { en: "Which experts?", hi: "कौन से विशेषज्ञ?", gu: "કયા નિષ્ણાતો?" },
      explain: {
        en: "'Experts agree' without names, institutions or data is a feeling dressed as authority. Real experts can be named and their data read.",
        hi: "बिना नाम, संस्थान या डेटा के 'विशेषज्ञ सहमत हैं' एक भावना है जिसे अधिकार का रूप दिया गया है। असली विशेषज्ञों के नाम और डेटा देखे जा सकते हैं।",
        gu: "નામ, સંસ્થા કે ડેટા વિના 'નિષ્ણાતો સંમત' એ અધિકારના વેશમાં લાગણી છે. સાચા નિષ્ણાતોનાં નામ અને ડેટા વાંચી શકાય.",
      },
    },
    {
      id: "love",
      type: "emotional-manipulation",
      title: { en: "Pride is the hook", hi: "गर्व ही चारा है", gu: "ગર્વ જ લાલચ છે" },
      explain: {
        en: "'Share if you love our city' makes checking feel disloyal. Loving a place and wanting true numbers about it are not opposites.",
        hi: "'शहर से प्यार है तो शेयर करें' जाँच करने को बेवफ़ाई जैसा बना देता है। किसी जगह से प्यार करना और उसके बारे में सच्चे आँकड़े चाहना विरोधी नहीं हैं।",
        gu: "'શહેરને પ્રેમ કરો છો તો શેર કરો' ચકાસણીને બેવફાઈ જેવી બનાવે છે. કોઈ સ્થળને પ્રેમ કરવો અને તેના વિશે સાચા આંકડા ઇચ્છવા વિરોધી નથી.",
      },
    },
    {
      id: "source",
      type: "solid",
      title: { en: "A real source, used badly", hi: "असली स्रोत, गलत इस्तेमाल", gu: "સાચો સ્ત્રોત, ખોટો ઉપયોગ" },
      explain: {
        en: "Good: CPCB bulletins are real and public. Bad: one day's bulletin cannot support 'this year'. Open the source and compare the same months across years.",
        hi: "अच्छा: CPCB बुलेटिन असली और सार्वजनिक हैं। बुरा: एक दिन का बुलेटिन 'इस साल' का दावा नहीं संभाल सकता। स्रोत खोलें और अलग-अलग सालों के एक ही महीनों की तुलना करें।",
        gu: "સારું: CPCB બુલેટિન સાચાં અને જાહેર છે. ખરાબ: એક દિવસનું બુલેટિન 'આ વર્ષે'નો દાવો સંભાળી ન શકે. સ્ત્રોત ખોલો અને જુદાં જુદાં વર્ષોના એક જ મહિનાની સરખામણી કરો.",
      },
    },
  ],
  verdict: {
    claim: { en: "Pollution in the city fell 60% this year.", hi: "शहर में प्रदूषण इस साल 60% कम हुआ।", gu: "શહેરમાં પ્રદૂષણ આ વર્ષે 60% ઘટ્યું." },
    honest: { from: 30, to: 65 },
    inRange: {
      en: "That is the honest place to stand. A real source is named, so it could be partly true. But the comparison is missing. 'I can't tell yet' is a scientific answer, not a weak one.",
      hi: "यही ईमानदार रुख़ है। एक असली स्रोत का नाम है, इसलिए यह आंशिक रूप से सच हो सकता है। लेकिन तुलना गायब है। 'अभी नहीं कह सकते' एक वैज्ञानिक जवाब है, कमज़ोर नहीं।",
      gu: "આ જ પ્રામાણિક વલણ છે. એક સાચો સ્ત્રોત નામ સાથે છે, એટલે તે અંશતઃ સાચું હોઈ શકે. પણ સરખામણી ખૂટે છે. 'હજી કહી શકાય નહીં' એ વૈજ્ઞાનિક જવાબ છે, નબળો નહીં.",
    },
    tooSure: {
      en: "A tick, a chart and a real-sounding source are not the same as a verified comparison. The honest answer here is 'can't tell yet'.",
      hi: "एक टिक, एक चार्ट और असली-सा लगने वाला स्रोत सत्यापित तुलना नहीं हैं। यहाँ ईमानदार जवाब है 'अभी नहीं कह सकते'।",
      gu: "એક ટિક, એક ચાર્ટ અને સાચો લાગતો સ્ત્રોત ચકાસેલી સરખામણી નથી. અહીં પ્રામાણિક જવાબ છે 'હજી કહી શકાય નહીં'.",
    },
    tooDismissive: {
      en: "Careful: 'everything is fake' is also lazy. The post names a real data source, and air can improve. Check before you dismiss.",
      hi: "सावधान: 'सब कुछ झूठ है' भी आलस है। पोस्ट एक असली डेटा स्रोत का नाम लेती है, और हवा सुधर सकती है। ख़ारिज करने से पहले जाँचें।",
      gu: "સાવધાન: 'બધું ખોટું છે' પણ આળસ છે. પોસ્ટ એક સાચા ડેટા સ્ત્રોતનું નામ લે છે, અને હવા સુધરી શકે. નકારતાં પહેલાં ચકાસો.",
    },
  },
  insight: { en: "'I can't tell yet' is a scientific answer.", hi: "'अभी नहीं कह सकते' एक वैज्ञानिक जवाब है।", gu: "'હજી કહી શકાય નહીં' એ વૈજ્ઞાનિક જવાબ છે." },
  claimKind: "hypothesis",
  reviewedOn: "2026-11-02",
  durationSec: 90,
  sources: [
    {
      kind: "official",
      label: { en: "Central Pollution Control Board: daily AQI bulletins", hi: "केंद्रीय प्रदूषण नियंत्रण बोर्ड: दैनिक AQI बुलेटिन", gu: "કેન્દ્રીય પ્રદૂષણ નિયંત્રણ બોર્ડ: દૈનિક AQI બુલેટિન" },
      url: "https://cpcb.nic.in/",
      note: { en: "The official source for air quality data in India. Compare the same months across years, not single days.", hi: "भारत में वायु गुणवत्ता डेटा का आधिकारिक स्रोत। एक दिन नहीं, अलग-अलग सालों के एक ही महीनों की तुलना करें।", gu: "ભારતમાં હવાની ગુણવત્તાના ડેટાનો અધિકૃત સ્ત્રોત. એક દિવસ નહીં, જુદાં વર્ષોના એક જ મહિનાની સરખામણી કરો." },
    },
    {
      kind: "guide",
      label: { en: "PIB Fact Check", hi: "PIB फ़ैक्ट चेक", gu: "PIB ફેક્ટ ચેક" },
      url: "https://factcheck.pib.gov.in/",
      note: { en: "Government unit that checks viral claims about official matters.", hi: "सरकारी मामलों पर वायरल दावों की जाँच करने वाली इकाई।", gu: "સરકારી બાબતો પરના વાયરલ દાવા ચકાસતો વિભાગ." },
    },
  ],
};
