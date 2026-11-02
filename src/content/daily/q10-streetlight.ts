import type { DailyQuestion } from "../types";

export const q10Streetlight: DailyQuestion = {
  id: "q10",
  slug: "the-dark-streetlight",
  topic: "civic",
  title: { en: "The dark streetlight", hi: "बंद स्ट्रीटलाइट", gu: "બંધ સ્ટ્રીટલાઇટ" },
  scene: {
    kind: "street",
    setting: "busstop",
    sign: { en: "Bus stop", hi: "बस स्टॉप", gu: "બસ સ્ટોપ" },
    figures: [
      {
        x: 40,
        pose: "stand",
        color: "plum",
        facing: "right",
        name: { en: "Salma", hi: "सलमा", gu: "સલમા" },
        says: {
          en: "A whole month and still no light here.",
          hi: "पूरा महीना हो गया, यहाँ अब भी रोशनी नहीं।",
          gu: "આખો મહિનો થયો, અહીં હજી પણ લાઇટ નથી.",
        },
      },
      { x: 75, pose: "think", color: "cobalt", facing: "left", scale: 0.85 },
    ],
    caption: {
      en: "The streetlight at the bus stop has been dark for a month. Salma waits here every evening.",
      hi: "बस स्टॉप की स्ट्रीटलाइट एक महीने से बंद है। सलमा हर शाम यहाँ इंतज़ार करती है।",
      gu: "બસ સ્ટોપની સ્ટ્રીટલાઇટ એક મહિનાથી બંધ છે. સલમા દર સાંજે અહીં રાહ જુએ છે.",
    },
  },
  prompt: { en: "Whose job is this light?", hi: "यह लाइट किसकी ज़िम्मेदारी है?", gu: "આ લાઇટ કોની જવાબદારી છે?" },
  interaction: "cards",
  choices: [
    {
      id: "someone-else",
      label: { en: "Someone else will complain", hi: "कोई और शिकायत कर देगा", gu: "કોઈ બીજું ફરિયાદ કરશે" },
      response: {
        heading: { en: "That is what everyone thinks.", hi: "यही सब सोचते हैं।", gu: "આવું જ બધા વિચારે છે." },
        body: {
          en: "When each person waits for someone else, nobody complains, and the light stays dark. A month has already passed.",
          hi: "जब हर कोई किसी और का इंतज़ार करता है, तो कोई शिकायत नहीं करता, और लाइट बंद ही रहती है। एक महीना तो बीत चुका है।",
          gu: "જ્યારે દરેક કોઈ બીજાની રાહ જુએ છે, ત્યારે કોઈ ફરિયાદ કરતું નથી, અને લાઇટ બંધ જ રહે છે. એક મહિનો તો વીતી ગયો.",
        },
        quality: "risky",
      },
    },
    {
      id: "neighbours-money",
      label: { en: "Fix it with neighbours' money", hi: "पड़ोसियों से पैसे जोड़कर ठीक करवाएँ", gu: "પડોશીઓના પૈસાથી ઠીક કરાવો" },
      response: {
        heading: { en: "Kind, but costly.", hi: "अच्छी सोच, पर महँगी।", gu: "સારો વિચાર, પણ મોંઘો." },
        body: {
          en: "You would be paying twice: once in taxes, once from your pocket. Street lighting is already the city body's job. Ask it to do that job.",
          hi: "आप दो बार पैसे देंगे: एक बार टैक्स में, एक बार अपनी जेब से। स्ट्रीटलाइट पहले से नगर निकाय का काम है। उससे यह काम करने को कहें।",
          gu: "તમે બે વાર પૈસા આપશો: એક વાર ટેક્સમાં, એક વાર પોતાના ખિસ્સામાંથી. સ્ટ્રીટલાઇટ પહેલેથી જ નગર સંસ્થાનું કામ છે. તેને આ કામ કરવા કહો.",
        },
        quality: "okay",
      },
    },
    {
      id: "complain",
      label: {
        en: "Find the ward office or helpline and log a complaint",
        hi: "वार्ड ऑफ़िस या हेल्पलाइन ढूँढें और शिकायत दर्ज करें",
        gu: "વોર્ડ ઑફિસ કે હેલ્પલાઇન શોધો અને ફરિયાદ નોંધાવો",
      },
      response: {
        heading: { en: "That is how it gets fixed.", hi: "ऐसे ही यह ठीक होता है।", gu: "આ રીતે જ તે ઠીક થાય છે." },
        body: {
          en: "Your municipality is responsible for street lighting. A logged complaint has a number, a date and someone who must answer for it.",
          hi: "स्ट्रीटलाइट आपकी नगरपालिका की ज़िम्मेदारी है। दर्ज की गई शिकायत का एक नंबर होता है, एक तारीख़ होती है, और कोई होता है जिसे जवाब देना पड़ता है।",
          gu: "સ્ટ્રીટલાઇટ તમારી નગરપાલિકાની જવાબદારી છે. નોંધાયેલી ફરિયાદનો એક નંબર હોય છે, એક તારીખ હોય છે, અને કોઈ હોય છે જેને જવાબ આપવો પડે.",
        },
        quality: "strong",
      },
    },
  ],
  discover: [
    {
      glyph: "scroll",
      tone: "found",
      text: {
        en: "The Constitution's Twelfth Schedule lists street lighting among the functions of municipalities.",
        hi: "संविधान की बारहवीं अनुसूची नगरपालिकाओं के कामों में स्ट्रीटलाइट को शामिल करती है।",
        gu: "સંવિધાનની બારમી અનુસૂચિ નગરપાલિકાઓના કામોમાં સ્ટ્રીટલાઇટનો સમાવેશ કરે છે.",
      },
    },
    {
      glyph: "people",
      tone: "found",
      text: {
        en: "Your area is a ward. It has an elected councillor whose job is to represent you to the city body.",
        hi: "आपका इलाक़ा एक वार्ड है। उसका एक चुना हुआ पार्षद है, जिसका काम नगर निकाय में आपकी बात रखना है।",
        gu: "તમારો વિસ્તાર એક વોર્ડ છે. તેના ચૂંટાયેલા કાઉન્સિલર છે, જેમનું કામ નગર સંસ્થામાં તમારી વાત રજૂ કરવાનું છે.",
      },
    },
    {
      glyph: "phone",
      tone: "found",
      text: {
        en: "Most cities have a helpline number or an app for civic complaints. Search your city's name with 'municipal corporation complaint'.",
        hi: "ज़्यादातर शहरों में नागरिक शिकायतों के लिए हेल्पलाइन नंबर या ऐप है। अपने शहर का नाम 'municipal corporation complaint' के साथ खोजें।",
        gu: "મોટા ભાગના શહેરોમાં નાગરિક ફરિયાદો માટે હેલ્પલાઇન નંબર કે ઍપ છે. તમારા શહેરનું નામ 'municipal corporation complaint' સાથે શોધો.",
      },
    },
    {
      glyph: "check",
      tone: "found",
      text: {
        en: "Keep the complaint number. If nothing happens, follow up with the number and tell your councillor.",
        hi: "शिकायत नंबर सँभाल कर रखें। कुछ न हो तो उसी नंबर से फ़ॉलो-अप करें और अपने पार्षद को बताएँ।",
        gu: "ફરિયાદ નંબર સાચવી રાખો. કશું ન થાય તો એ નંબરથી ફોલો-અપ કરો અને તમારા કાઉન્સિલરને જણાવો.",
      },
    },
  ],
  insight: {
    en: "A complaint with a number is harder to ignore.",
    hi: "नंबर वाली शिकायत को अनदेखा करना मुश्किल है।",
    gu: "નંબરવાળી ફરિયાદને અવગણવી મુશ્કેલ છે.",
  },
  why: {
    en: "Local government exists to fix exactly these things. It works better when people use it.",
    hi: "स्थानीय सरकार ठीक ऐसी ही चीज़ें सुधारने के लिए है। जब लोग इसका इस्तेमाल करते हैं, तो यह बेहतर काम करती है।",
    gu: "સ્થાનિક સરકાર બરાબર આવી જ બાબતો સુધારવા માટે છે. લોકો તેનો ઉપયોગ કરે ત્યારે તે વધુ સારું કામ કરે છે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "law",
      label: {
        en: "Constitution of India, Part IXA (Municipalities) and the Twelfth Schedule",
        hi: "भारत का संविधान, भाग IXA (नगरपालिकाएँ) और बारहवीं अनुसूची",
        gu: "ભારતનું સંવિધાન, ભાગ IXA (નગરપાલિકાઓ) અને બારમી અનુસૂચિ",
      },
      url: "https://legislative.gov.in/constitution-of-india/",
      note: {
        en: "Added by the 74th Amendment. The Twelfth Schedule lists matters for municipalities, including street lighting, roads, water supply and public health.",
        hi: "74वें संशोधन से जोड़ा गया। बारहवीं अनुसूची नगरपालिकाओं के विषय बताती है, जिनमें स्ट्रीटलाइट, सड़कें, जल आपूर्ति और जन स्वास्थ्य शामिल हैं।",
        gu: "74મા સુધારાથી ઉમેરાયું. બારમી અનુસૂચિ નગરપાલિકાઓના વિષયો જણાવે છે, જેમાં સ્ટ્રીટલાઇટ, રસ્તા, પાણી પુરવઠો અને જાહેર આરોગ્ય શામેલ છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "Ministry of Housing and Urban Affairs, Government of India",
        hi: "आवासन और शहरी कार्य मंत्रालय, भारत सरकार",
        gu: "આવાસ અને શહેરી બાબતોનું મંત્રાલય, ભારત સરકાર",
      },
      url: "https://mohua.gov.in/",
      note: {
        en: "The central ministry for urban local bodies and city services. Your own city's municipal website lists its helpline and complaint channels.",
        hi: "शहरी स्थानीय निकायों और शहरी सेवाओं का केंद्रीय मंत्रालय। आपके शहर की नगरपालिका की वेबसाइट पर उसकी हेल्पलाइन और शिकायत के तरीक़े मिलेंगे।",
        gu: "શહેરી સ્થાનિક સંસ્થાઓ અને શહેરી સેવાઓનું કેન્દ્રીય મંત્રાલય. તમારા શહેરની નગરપાલિકાની વેબસાઇટ પર તેની હેલ્પલાઇન અને ફરિયાદની રીતો મળશે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 65,
};
