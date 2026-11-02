import type { DailyQuestion } from "../types";

export const q06CrimeChart: DailyQuestion = {
  id: "q06",
  slug: "the-doubled-chart",
  topic: "misinformation",
  title: { en: "The doubled chart", hi: "दोगुना चार्ट", gu: "બેગણો ચાર્ટ" },
  scene: {
    kind: "headline",
    outlet: { en: "City Buzz News", hi: "City Buzz News", gu: "City Buzz News" },
    headline: {
      en: "Complaints DOUBLED this year!",
      hi: "शिकायतें इस साल दोगुनी हुईं!",
      gu: "ફરિયાદો આ વર્ષે બેગણી થઈ!",
    },
    stat: { en: "+2", hi: "+2", gu: "+2" },
    chart: "truncated",
  },
  prompt: {
    en: "How sure are you that complaints doubled?",
    hi: "आप कितने पक्के हैं कि शिकायतें दोगुनी हुईं?",
    gu: "તમે કેટલા પક્કા છો કે ફરિયાદો બેગણી થઈ?",
  },
  interaction: "confidence",
  choices: [
    {
      id: "sure-doubled",
      label: { en: "Very sure it doubled", hi: "पक्का दोगुनी हुईं", gu: "પક્કું બેગણી થઈ" },
      response: {
        heading: { en: "Look again.", hi: "फिर से देखिए।", gu: "ફરી જુઓ." },
        body: {
          en: "The second bar is twice as tall. But the chart never shows where the bars start from. Height is not the number.",
          hi: "दूसरा बार दोगुना ऊँचा है। पर चार्ट कभी नहीं दिखाता कि बार कहाँ से शुरू होते हैं। ऊँचाई संख्या नहीं है।",
          gu: "બીજો બાર બેગણો ઊંચો છે. પણ ચાર્ટ ક્યારેય બતાવતો નથી કે બાર ક્યાંથી શરૂ થાય છે. ઊંચાઈ એ સંખ્યા નથી.",
        },
        quality: "risky",
      },
    },
    {
      id: "see-axis",
      label: { en: "Not sure, want to see the axis", hi: "पक्का नहीं, पहले अक्ष देखना है", gu: "પક્કું નહીં, પહેલાં અક્ષ જોવો છે" },
      response: {
        heading: { en: "The honest answer.", hi: "ईमानदार जवाब।", gu: "પ્રામાણિક જવાબ." },
        body: {
          en: "You cannot tell from this picture. Asking where the axis starts is the one question that unlocks the whole chart.",
          hi: "इस तस्वीर से बताया नहीं जा सकता। अक्ष कहाँ से शुरू होता है, यह एक सवाल पूरा चार्ट खोल देता है।",
          gu: "આ ચિત્રથી કહી શકાય નહીં. અક્ષ ક્યાંથી શરૂ થાય છે, એ એક પ્રશ્ન પૂરો ચાર્ટ ખોલી આપે છે.",
        },
        quality: "strong",
      },
    },
    {
      id: "sure-false",
      label: { en: "Sure it's false", hi: "पक्का यह झूठ है", gu: "પક્કું આ ખોટું છે" },
      response: {
        heading: { en: "Careful of the opposite trap.", hi: "उल्टे जाल से भी बचिए।", gu: "ઊલટા ફાંદાથી પણ બચો." },
        body: {
          en: "The chart is misleading, yes. But complaints did rise a little. 'All false' is also more certain than the evidence allows.",
          hi: "चार्ट भ्रामक है, हाँ। पर शिकायतें थोड़ी बढ़ी तो हैं। 'सब झूठ' भी सबूत से ज़्यादा पक्का दावा है।",
          gu: "ચાર્ટ ભ્રામક છે, હા. પણ ફરિયાદો થોડી વધી તો છે. 'બધું ખોટું' પણ પુરાવા કરતાં વધુ પક્કો દાવો છે.",
        },
        quality: "okay",
      },
    },
  ],
  discover: [
    {
      glyph: "chart",
      tone: "warning",
      text: {
        en: "The axis starts at 100, not 0. The bars show 100 and 102. A rise of 2 is drawn as a doubling.",
        hi: "अक्ष 0 से नहीं, 100 से शुरू होता है। बार 100 और 102 दिखाते हैं। 2 की बढ़त दोगुने जैसी दिखाई गई है।",
        gu: "અક્ષ 0થી નહીં, 100થી શરૂ થાય છે. બાર 100 અને 102 બતાવે છે. 2નો વધારો બેગણા જેવો દોરાયો છે.",
      },
    },
    {
      glyph: "magnifier",
      tone: "missing",
      text: {
        en: "Drawn from zero, the two bars would look almost the same height.",
        hi: "शून्य से बनाया जाए तो दोनों बार लगभग एक ही ऊँचाई के दिखेंगे।",
        gu: "શૂન્યથી દોરીએ તો બંને બાર લગભગ સરખી ઊંચાઈના દેખાશે.",
      },
    },
    {
      glyph: "people",
      tone: "neutral",
      text: {
        en: "More complaints can also mean complaining got easier: a new helpline, an app, more trust in the police. The count is not the crime.",
        hi: "ज़्यादा शिकायतों का यह मतलब भी हो सकता है कि शिकायत करना आसान हुआ: नई हेल्पलाइन, एक ऐप, पुलिस पर ज़्यादा भरोसा। गिनती अपराध नहीं है।",
        gu: "વધુ ફરિયાદોનો અર્થ એ પણ હોઈ શકે કે ફરિયાદ કરવી સહેલી થઈ: નવી હેલ્પલાઇન, એક ઍપ, પોલીસ પર વધુ ભરોસો. ગણતરી એ ગુનો નથી.",
      },
    },
    {
      glyph: "check",
      tone: "found",
      text: {
        en: "The honest answer is 'I can't tell from this chart'. Ask for the axis and the raw numbers.",
        hi: "ईमानदार जवाब है 'इस चार्ट से मैं नहीं बता सकता'। अक्ष और असली संख्याएँ माँगिए।",
        gu: "પ્રામાણિક જવાબ છે 'આ ચાર્ટથી હું કહી શકતો નથી'. અક્ષ અને મૂળ આંકડા માગો.",
      },
    },
  ],
  insight: {
    en: "Read the axis before you believe the headline.",
    hi: "हेडलाइन मानने से पहले अक्ष पढ़िए।",
    gu: "હેડલાઇન માનતા પહેલાં અક્ષ વાંચો.",
  },
  why: {
    en: "A chart is a drawing of numbers. The drawing can be stretched; the numbers cannot.",
    hi: "चार्ट संख्याओं की तस्वीर है। तस्वीर खींची जा सकती है, संख्याएँ नहीं।",
    gu: "ચાર્ટ એ આંકડાનું ચિત્ર છે. ચિત્ર ખેંચી શકાય, આંકડા નહીં.",
  },
  claimKind: "hypothesis",
  fictionalScenario: true,
  sources: [
    {
      kind: "guide",
      label: {
        en: "Statistics How To: Misleading graphs",
        hi: "Statistics How To: भ्रामक ग्राफ़",
        gu: "Statistics How To: ભ્રામક ગ્રાફ",
      },
      url: "https://www.statisticshowto.com/probability-and-statistics/descriptive-statistics/misleading-graphs/",
      note: {
        en: "Plain examples of truncated axes and other tricks that make small changes look big.",
        hi: "अक्ष काटने और अन्य चालों के सरल उदाहरण, जो छोटे बदलाव को बड़ा दिखाते हैं।",
        gu: "કાપેલા અક્ષ અને બીજી ચાલોના સરળ ઉદાહરણો, જે નાના ફેરફારને મોટો બતાવે છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "National Crime Records Bureau",
        hi: "राष्ट्रीय अपराध रिकॉर्ड ब्यूरो",
        gu: "રાષ્ટ્રીય ગુના રેકોર્ડ બ્યુરો",
      },
      url: "https://www.ncrb.gov.in/",
      note: {
        en: "India's official crime statistics. Read their definitions before comparing years; what counts as a 'case' can change.",
        hi: "भारत के आधिकारिक अपराध आँकड़े। सालों की तुलना से पहले उनकी परिभाषाएँ पढ़ें; 'मामला' किसे कहा जाए, यह बदल सकता है।",
        gu: "ભારતના સત્તાવાર ગુના આંકડા. વર્ષોની તુલના પહેલાં તેમની વ્યાખ્યાઓ વાંચો; 'કેસ' કોને કહેવાય તે બદલાઈ શકે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 65,
};
