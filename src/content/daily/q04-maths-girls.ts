import type { DailyQuestion } from "../types";

export const q04MathsGirls: DailyQuestion = {
  id: "q04",
  slug: "girls-and-maths",
  topic: "stereotypes",
  title: { en: "Girls and maths", hi: "लड़कियाँ और गणित", gu: "છોકરીઓ અને ગણિત" },
  scene: {
    kind: "street",
    setting: "school",
    figures: [
      { x: 30, pose: "stand", color: "cobalt", facing: "right", name: { en: "Meera", hi: "मीरा", gu: "મીરા" } },
      {
        x: 70,
        pose: "point",
        color: "amber",
        facing: "left",
        says: {
          en: "Girls are not good at maths, leave it.",
          hi: "लड़कियाँ गणित में अच्छी नहीं होतीं, छोड़ दो।",
          gu: "છોકરીઓ ગણિતમાં સારી નથી હોતી, છોડી દે.",
        },
      },
    ],
    caption: {
      en: "Meera asked for help with a maths problem. This was the reply.",
      hi: "मीरा ने गणित के एक सवाल में मदद माँगी। जवाब यह मिला।",
      gu: "મીરાએ ગણિતના એક દાખલામાં મદદ માગી. જવાબ આ મળ્યો.",
    },
  },
  prompt: { en: "What should Meera do?", hi: "मीरा को क्या करना चाहिए?", gu: "મીરાએ શું કરવું જોઈએ?" },
  interaction: "cards",
  choices: [
    {
      id: "accept",
      label: { en: "Accept it and drop maths", hi: "मान लें और गणित छोड़ दें", gu: "માની લો અને ગણિત છોડી દો" },
      response: {
        heading: { en: "Hold on.", hi: "ज़रा रुकिए।", gu: "જરા થોભો." },
        body: {
          en: "A sentence said often enough starts to sound like truth. But nobody checked Meera's maths. They checked only her gender.",
          hi: "कोई बात बार-बार कही जाए तो सच जैसी लगने लगती है। पर किसी ने मीरा का गणित नहीं जाँचा। सिर्फ़ उसका लिंग देखा।",
          gu: "કોઈ વાત વારંવાર કહેવાય તો સાચી લાગવા માંડે. પણ કોઈએ મીરાનું ગણિત તપાસ્યું નહીં. ફક્ત તેનું લિંગ જોયું.",
        },
        quality: "risky",
      },
    },
    {
      id: "says-who",
      label: { en: "Ask: says who?", hi: "पूछें: कौन कहता है?", gu: "પૂછો: કોણ કહે છે?" },
      response: {
        heading: { en: "Exactly.", hi: "बिल्कुल।", gu: "બરાબર." },
        body: {
          en: "Who counted? Which girls, which test? A belief has to answer these questions like any other claim.",
          hi: "किसने गिना? कौन सी लड़कियाँ, कौन सी परीक्षा? किसी भी दावे की तरह एक धारणा को भी इन सवालों का जवाब देना चाहिए।",
          gu: "કોણે ગણ્યું? કઈ છોકરીઓ, કઈ પરીક્ષા? બીજા કોઈ દાવાની જેમ માન્યતાએ પણ આ પ્રશ્નોના જવાબ આપવા જોઈએ.",
        },
        quality: "strong",
      },
    },
    {
      id: "doubt",
      label: { en: "Say nothing, but doubt it", hi: "कुछ न कहें, पर शक करें", gu: "કશું ન કહો, પણ શંકા રાખો" },
      response: {
        heading: { en: "Quiet doubt is a start.", hi: "चुप शक भी एक शुरुआत है।", gu: "મૂંગી શંકા પણ એક શરૂઆત છે." },
        body: {
          en: "Doubting is good. Saying it aloud helps the next girl who hears the same line.",
          hi: "शक करना अच्छा है। उसे ज़ोर से कहना अगली लड़की की मदद करता है, जो यही बात सुनेगी।",
          gu: "શંકા કરવી સારી છે. તે મોટેથી કહેવાથી આગલી છોકરીને મદદ મળે છે, જે આ જ વાત સાંભળશે.",
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
        en: "'Everyone knows' is not an observation. It is a habit of speech, passed on.",
        hi: "'सब जानते हैं' कोई अवलोकन नहीं है। यह बोलने की आदत है, जो आगे बढ़ती जाती है।",
        gu: "'બધા જાણે છે' એ કોઈ અવલોકન નથી. તે બોલવાની ટેવ છે, જે આગળ વધતી જાય છે.",
      },
    },
    {
      glyph: "eye",
      tone: "warning",
      text: {
        en: "Who gets encouragement, extra time and harder problems? Practice shapes results, and practice is not shared equally.",
        hi: "किसे प्रोत्साहन, ज़्यादा समय और कठिन सवाल मिलते हैं? अभ्यास से नतीजे बनते हैं, और अभ्यास सबको बराबर नहीं मिलता।",
        gu: "કોને પ્રોત્સાહન, વધુ સમય અને અઘરા દાખલા મળે છે? મહાવરાથી પરિણામ બને છે, અને મહાવરો બધાને સરખો મળતો નથી.",
      },
    },
    {
      glyph: "magnifier",
      tone: "missing",
      text: {
        en: "Meera's own marks were never looked at. The 'rule' was applied before the evidence.",
        hi: "मीरा के अपने अंक कभी देखे ही नहीं गए। 'नियम' सबूत से पहले लगा दिया गया।",
        gu: "મીરાના પોતાના માર્ક્સ ક્યારેય જોવાયા જ નહીં. 'નિયમ' પુરાવા પહેલાં લગાવી દેવાયો.",
      },
    },
    {
      glyph: "scroll",
      tone: "found",
      text: {
        en: "Articles 14 and 15 of the Constitution promise equality regardless of sex. That promise begins in the classroom.",
        hi: "संविधान के अनुच्छेद 14 और 15 लिंग की परवाह किए बिना समानता का वादा करते हैं। वह वादा कक्षा से शुरू होता है।",
        gu: "સંવિધાનના અનુચ્છેદ 14 અને 15 લિંગ ભેદ વગર સમાનતાનું વચન આપે છે. એ વચન વર્ગખંડથી શરૂ થાય છે.",
      },
    },
  ],
  insight: {
    en: "A belief repeated is not a fact observed.",
    hi: "बार-बार कही बात देखा हुआ सच नहीं होती।",
    gu: "વારંવાર કહેલી વાત જોયેલું સત્ય નથી.",
  },
  why: {
    en: "If a saying decides who tries, it also decides who succeeds.",
    hi: "अगर एक कहावत तय करे कि कौन कोशिश करेगा, तो वही तय करती है कि कौन सफल होगा।",
    gu: "જો એક કહેવત નક્કી કરે કે કોણ પ્રયત્ન કરશે, તો તે જ નક્કી કરે છે કે કોણ સફળ થશે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "law",
      label: {
        en: "Constitution of India, Articles 14 and 15",
        hi: "भारत का संविधान, अनुच्छेद 14 और 15",
        gu: "ભારતનું સંવિધાન, અનુચ્છેદ 14 અને 15",
      },
      url: "https://legislative.gov.in/constitution-of-india/",
      note: {
        en: "Article 14 guarantees equality before the law. Article 15(1) prohibits discrimination on grounds of religion, race, caste, sex or place of birth.",
        hi: "अनुच्छेद 14 क़ानून के समक्ष समानता की गारंटी देता है। अनुच्छेद 15(1) धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव को रोकता है।",
        gu: "અનુચ્છેદ 14 કાયદા સમક્ષ સમાનતાની બાંયધરી આપે છે. અનુચ્છેદ 15(1) ધર્મ, જાતિ, લિંગ કે જન્મસ્થાનના આધારે ભેદભાવ પર પ્રતિબંધ મૂકે છે.",
      },
    },
    {
      kind: "reference",
      label: {
        en: "UNESCO: Cracking the code — girls' and women's education in STEM (2017)",
        hi: "UNESCO: Cracking the code — STEM में लड़कियों और महिलाओं की शिक्षा (2017)",
        gu: "UNESCO: Cracking the code — STEMમાં છોકરીઓ અને મહિલાઓનું શિક્ષણ (2017)",
      },
      url: "https://unesdoc.unesco.org/ark:/48223/pf0000253479",
      note: {
        en: "A review of research on why fewer girls enter science and maths. It points to expectations and encouragement, not ability. It is a survey of studies, not a single statistic.",
        hi: "लड़कियाँ विज्ञान और गणित में कम क्यों आती हैं, इस पर शोध की समीक्षा। यह क्षमता नहीं, अपेक्षाओं और प्रोत्साहन की ओर इशारा करती है। यह अध्ययनों का सर्वेक्षण है, कोई एक आँकड़ा नहीं।",
        gu: "છોકરીઓ વિજ્ઞાન અને ગણિતમાં ઓછી કેમ આવે છે તે પર સંશોધનની સમીક્ષા. તે ક્ષમતા નહીં, અપેક્ષાઓ અને પ્રોત્સાહન તરફ આંગળી ચીંધે છે. તે અભ્યાસોનું સર્વેક્ષણ છે, કોઈ એક આંકડો નહીં.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 65,
};
