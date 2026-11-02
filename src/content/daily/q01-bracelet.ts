import type { DailyQuestion } from "../types";

export const q01Bracelet: DailyQuestion = {
  id: "q01",
  slug: "intelligence-bracelet",
  topic: "science",
  title: { en: "The intelligence bracelet", hi: "बुद्धि बढ़ाने वाला ब्रेसलेट", gu: "બુદ્ધિ વધારતું બ્રેસલેટ" },
  scene: {
    kind: "chat",
    sender: { en: "Family group", hi: "फ़ैमिली ग्रुप", gu: "ફેમિલી ગ્રુપ" },
    forwarded: true,
    emoji: "💡",
    time: "7:42 am",
    lines: [
      {
        en: "This bracelet increases intelligence.",
        hi: "यह ब्रेसलेट बुद्धि बढ़ाता है।",
        gu: "આ બ્રેસલેટ બુદ્ધિ વધારે છે.",
      },
      {
        en: "Scientists have PROVED it. Order now, only ₹499!",
        hi: "वैज्ञानिकों ने साबित किया है। अभी ऑर्डर करें, सिर्फ़ ₹499!",
        gu: "વૈજ્ઞાનિકોએ સાબિત કર્યું છે. હમણાં જ ઓર્ડર કરો, ફક્ત ₹499!",
      },
    ],
  },
  prompt: { en: "What do you do?", hi: "आप क्या करेंगे?", gu: "તમે શું કરશો?" },
  interaction: "chat-actions",
  choices: [
    {
      id: "forward",
      label: { en: "Forward to friends", hi: "दोस्तों को फ़ॉरवर्ड करें", gu: "મિત્રોને ફોરવર્ડ કરો" },
      response: {
        heading: { en: "Wait a moment.", hi: "एक पल रुकिए।", gu: "એક ક્ષણ થોભો." },
        body: {
          en: "Nothing has been checked yet. Forwarding spreads the claim, not the proof.",
          hi: "अभी कुछ भी जाँचा नहीं गया है। फ़ॉरवर्ड करने से दावा फैलता है, सबूत नहीं।",
          gu: "હજી કશું ચકાસાયું નથી. ફોરવર્ડ કરવાથી દાવો ફેલાય છે, પુરાવો નહીં.",
        },
        quality: "risky",
      },
    },
    {
      id: "ask",
      label: { en: "Ask: which scientists?", hi: "पूछें: कौन से वैज्ञानिक?", gu: "પૂછો: કયા વૈજ્ઞાનિકો?" },
      response: {
        heading: { en: "Good question.", hi: "अच्छा सवाल।", gu: "સારો પ્રશ્ન." },
        body: {
          en: "A claim about science should be able to name the study. Let's see if this one can.",
          hi: "विज्ञान के बारे में दावा करने वाले को अध्ययन का नाम बताना चाहिए। देखते हैं, यह बता पाता है या नहीं।",
          gu: "વિજ્ઞાન વિશે દાવો કરનાર અભ્યાસનું નામ આપી શકવો જોઈએ. જોઈએ, આ આપી શકે છે કે નહીં.",
        },
        quality: "strong",
      },
    },
    {
      id: "ignore",
      label: { en: "Ignore it", hi: "अनदेखा करें", gu: "અવગણો" },
      response: {
        heading: { en: "Fair enough.", hi: "ठीक है।", gu: "બરાબર." },
        body: {
          en: "Ignoring is safe for you. But someone else in the group may buy it. Let's see what is missing.",
          hi: "अनदेखा करना आपके लिए सुरक्षित है। लेकिन ग्रुप में कोई और इसे खरीद सकता है। देखते हैं क्या कमी है।",
          gu: "અવગણવું તમારા માટે સલામત છે. પણ ગ્રુપમાં કોઈ બીજું તે ખરીદી શકે. જોઈએ શું ખૂટે છે.",
        },
        quality: "okay",
      },
    },
  ],
  discover: [
    {
      glyph: "question",
      tone: "missing",
      text: {
        en: "Which scientists? No names. No institute. No study.",
        hi: "कौन से वैज्ञानिक? कोई नाम नहीं, कोई संस्थान नहीं, कोई अध्ययन नहीं।",
        gu: "કયા વૈજ્ઞાનિકો? કોઈ નામ નહીં, કોઈ સંસ્થા નહીં, કોઈ અભ્યાસ નહીં.",
      },
    },
    {
      glyph: "magnifier",
      tone: "missing",
      text: {
        en: "How was it measured? 'Intelligence' was never measured before and after.",
        hi: "कैसे मापा गया? 'बुद्धि' को पहले और बाद में कभी मापा ही नहीं गया।",
        gu: "કેવી રીતે માપ્યું? 'બુદ્ધિ' પહેલાં અને પછી ક્યારેય મપાઈ જ નહીં.",
      },
    },
    {
      glyph: "people",
      tone: "missing",
      text: {
        en: "Tested on whom, and on how many people? Nobody says.",
        hi: "किस पर परखा गया, और कितने लोगों पर? कोई नहीं बताता।",
        gu: "કોના પર પરખાયું, અને કેટલા લોકો પર? કોઈ કહેતું નથી.",
      },
    },
    {
      glyph: "check",
      tone: "found",
      text: {
        en: "A real study says: who, how many, how it was measured, and who paid for it.",
        hi: "सच्चा अध्ययन बताता है: किसने, कितने लोगों पर, कैसे मापा, और पैसा किसने दिया।",
        gu: "સાચો અભ્યાસ કહે છે: કોણે, કેટલા લોકો પર, કેવી રીતે માપ્યું, અને પૈસા કોણે આપ્યા.",
      },
    },
  ],
  insight: { en: "A claim is not evidence.", hi: "दावा सबूत नहीं होता।", gu: "દાવો પુરાવો નથી." },
  why: {
    en: "Anyone can say 'scientists proved it'. Evidence is what you can check.",
    hi: "'वैज्ञानिकों ने साबित किया' कोई भी कह सकता है। सबूत वह है जिसे आप जाँच सकें।",
    gu: "'વૈજ્ઞાનિકોએ સાબિત કર્યું' એવું કોઈ પણ કહી શકે. પુરાવો એ છે જે તમે ચકાસી શકો.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "law",
      label: {
        en: "Constitution of India, Article 51A(h): the duty to develop scientific temper",
        hi: "भारत का संविधान, अनुच्छेद 51A(h): वैज्ञानिक दृष्टिकोण विकसित करने का कर्तव्य",
        gu: "ભારતનું સંવિધાન, અનુચ્છેદ 51A(h): વૈજ્ઞાનિક દૃષ્ટિકોણ વિકસાવવાની ફરજ",
      },
      url: "https://legislative.gov.in/constitution-of-india/",
      note: {
        en: "Lists developing 'scientific temper, humanism and the spirit of inquiry and reform' as a fundamental duty of every citizen.",
        hi: "हर नागरिक का मौलिक कर्तव्य बताता है: 'वैज्ञानिक दृष्टिकोण, मानववाद और जिज्ञासा तथा सुधार की भावना' विकसित करना।",
        gu: "દરેક નાગરિકની મૂળભૂત ફરજ ગણાવે છે: 'વૈજ્ઞાનિક દૃષ્ટિકોણ, માનવતાવાદ અને જિજ્ઞાસા તથા સુધારની ભાવના' વિકસાવવી.",
      },
    },
    {
      kind: "guide",
      label: {
        en: "US National Institutes of Health: Know the Science (how to judge health claims)",
        hi: "US National Institutes of Health: Know the Science (स्वास्थ्य दावों को कैसे जाँचें)",
        gu: "US National Institutes of Health: Know the Science (આરોગ્ય દાવાઓ કેવી રીતે ચકાસવા)",
      },
      url: "https://www.nccih.nih.gov/health/know-science",
      note: {
        en: "Plain-language tools for asking who did the study, how big it was, and who funded it.",
        hi: "सरल भाषा में: अध्ययन किसने किया, कितना बड़ा था, और पैसा किसने दिया, यह कैसे पूछें।",
        gu: "સરળ ભાષામાં: અભ્યાસ કોણે કર્યો, કેટલો મોટો હતો, અને પૈસા કોણે આપ્યા, તે કેવી રીતે પૂછવું.",
      },
    },
    {
      kind: "official",
      label: {
        en: "Advertising Standards Council of India: the ASCI Code",
        hi: "Advertising Standards Council of India: ASCI कोड",
        gu: "Advertising Standards Council of India: ASCI કોડ",
      },
      url: "https://www.ascionline.in/",
      note: {
        en: "Indian advertisers must be able to substantiate claims. You can complain about misleading ads here.",
        hi: "भारतीय विज्ञापनदाताओं को अपने दावे साबित करने होते हैं। भ्रामक विज्ञापनों की शिकायत यहाँ की जा सकती है।",
        gu: "ભારતીય જાહેરાતકારોએ પોતાના દાવા સાબિત કરવા પડે છે. ભ્રામક જાહેરાતોની ફરિયાદ અહીં કરી શકાય.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 60,
};
