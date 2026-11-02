import type { DailyQuestion } from "../types";

export const q12OldPhoto: DailyQuestion = {
  id: "q12",
  slug: "the-old-photo",
  topic: "misinformation",
  title: { en: "The old photo", hi: "पुरानी तस्वीर", gu: "જૂનો ફોટો" },
  scene: {
    kind: "chat",
    sender: { en: "Neighbourhood group", hi: "मोहल्ला ग्रुप", gu: "પડોશ ગ્રુપ" },
    forwarded: true,
    emoji: "📸",
    time: "11:18 pm",
    lines: [
      {
        en: "SHOCKING: this happened in our city last night!!",
        hi: "चौंकाने वाला: यह कल रात हमारे शहर में हुआ!!",
        gu: "ચોંકાવનારું: આ ગઈ રાતે આપણા શહેરમાં થયું!!",
      },
      {
        en: "Share before they delete it",
        hi: "डिलीट होने से पहले शेयर करें",
        gu: "ડિલીટ થાય એ પહેલાં શેર કરો",
      },
    ],
  },
  prompt: { en: "What do you do?", hi: "आप क्या करेंगे?", gu: "તમે શું કરશો?" },
  interaction: "chat-actions",
  choices: [
    {
      id: "ask",
      label: { en: "Ask the sender: where is this from?", hi: "भेजने वाले से पूछें: यह कहाँ से है?", gu: "મોકલનારને પૂછો: આ ક્યાંથી છે?" },
      response: {
        heading: { en: "Fair start.", hi: "अच्छी शुरुआत।", gu: "સારી શરૂઆત." },
        body: {
          en: "Asking is better than forwarding. But the sender usually got it from someone else and does not know either. The photo itself can tell you more.",
          hi: "पूछना फ़ॉरवर्ड करने से बेहतर है। पर भेजने वाले को भी यह किसी और से मिला होता है और उसे भी पता नहीं होता। तस्वीर ख़ुद ज़्यादा बता सकती है।",
          gu: "પૂછવું ફોરવર્ડ કરવા કરતાં સારું છે. પણ મોકલનારને પણ તે કોઈ બીજા પાસેથી મળ્યું હોય છે અને તેને પણ ખબર હોતી નથી. ફોટો પોતે વધુ કહી શકે.",
        },
        quality: "okay",
      },
    },
    {
      id: "forward",
      label: { en: "Forward it now", hi: "अभी फ़ॉरवर्ड करें", gu: "હમણાં જ ફોરવર્ડ કરો" },
      response: {
        heading: { en: "Hold on.", hi: "रुकिए।", gu: "થોભો." },
        body: {
          en: "You have a photo and a caption. You do not yet know if they belong together. Forwarding joins them for good in a hundred more phones.",
          hi: "आपके पास एक तस्वीर और एक कैप्शन है। अभी आप नहीं जानते कि ये दोनों साथ के हैं या नहीं। फ़ॉरवर्ड करने से ये सौ और फ़ोनों में हमेशा के लिए जुड़ जाते हैं।",
          gu: "તમારી પાસે એક ફોટો અને એક કૅપ્શન છે. હજી તમે જાણતા નથી કે આ બંને સાથે છે કે નહીં. ફોરવર્ડ કરવાથી તે સો વધુ ફોનમાં કાયમ માટે જોડાઈ જાય છે.",
        },
        quality: "risky",
      },
    },
    {
      id: "check",
      label: { en: "Check where the photo came from", hi: "जाँचें कि तस्वीर कहाँ से आई", gu: "તપાસો કે ફોટો ક્યાંથી આવ્યો" },
      response: {
        heading: { en: "Exactly.", hi: "बिल्कुल।", gu: "બરાબર." },
        body: {
          en: "A reverse image search takes one minute and shows where the picture has appeared before. Often the answer is: another city, years ago.",
          hi: "रिवर्स इमेज सर्च में एक मिनट लगता है और यह बताता है कि तस्वीर पहले कहाँ दिखी थी। अक्सर जवाब होता है: दूसरा शहर, कई साल पहले।",
          gu: "રિવર્સ ઇમેજ સર્ચમાં એક મિનિટ લાગે છે અને તે બતાવે છે કે ફોટો પહેલાં ક્યાં દેખાયો હતો. ઘણીવાર જવાબ હોય છે: બીજું શહેર, વર્ષો પહેલાં.",
        },
        quality: "strong",
      },
    },
  ],
  discover: [
    {
      glyph: "eye",
      tone: "warning",
      text: {
        en: "Photos travel. A real event somewhere else, or years ago, gets a new caption and becomes 'our city, last night'.",
        hi: "तस्वीरें घूमती हैं। कहीं और की, या सालों पुरानी सच्ची घटना को नया कैप्शन मिलता है और वह 'हमारा शहर, कल रात' बन जाती है।",
        gu: "ફોટા ફરે છે. બીજે ક્યાંકની, કે વર્ષો જૂની સાચી ઘટનાને નવું કૅપ્શન મળે છે અને તે 'આપણું શહેર, ગઈ રાત' બની જાય છે.",
      },
    },
    {
      glyph: "clock",
      tone: "warning",
      text: {
        en: "'Share before they delete it' is a pressure line. It wants you to act before you check.",
        hi: "'डिलीट होने से पहले शेयर करें' दबाव डालने वाली लाइन है। यह चाहती है कि आप जाँचने से पहले काम करें।",
        gu: "'ડિલીટ થાય એ પહેલાં શેર કરો' દબાણની લાઇન છે. તે ઇચ્છે છે કે તમે ચકાસતા પહેલાં પગલું ભરો.",
      },
    },
    {
      glyph: "magnifier",
      tone: "found",
      text: {
        en: "Reverse image search (Google Lens, TinEye) shows where a photo appeared earlier. Long-press the image or upload it.",
        hi: "रिवर्स इमेज सर्च (Google Lens, TinEye) बताता है कि तस्वीर पहले कहाँ छपी थी। तस्वीर को लंबा दबाएँ या अपलोड करें।",
        gu: "રિવર્સ ઇમેજ સર્ચ (Google Lens, TinEye) બતાવે છે કે ફોટો પહેલાં ક્યાં દેખાયો હતો. ફોટાને લાંબો દબાવો કે અપલોડ કરો.",
      },
    },
    {
      glyph: "check",
      tone: "found",
      text: {
        en: "Still unsure? Search the claim on a fact-check site such as PIB Fact Check before you pass it on.",
        hi: "अब भी शक है? आगे भेजने से पहले PIB Fact Check जैसी फ़ैक्ट-चेक साइट पर दावा खोजें।",
        gu: "હજી શંકા છે? આગળ મોકલતા પહેલાં PIB Fact Check જેવી ફેક્ટ-ચેક સાઇટ પર દાવો શોધો.",
      },
    },
  ],
  insight: {
    en: "Old picture, new caption, same trick.",
    hi: "पुरानी तस्वीर, नया कैप्शन, वही चाल।",
    gu: "જૂનો ફોટો, નવું કૅપ્શન, એ જ ચાલ.",
  },
  why: {
    en: "A real photo with a false caption spreads fear faster than any made-up image.",
    hi: "ग़लत कैप्शन वाली असली तस्वीर किसी भी बनावटी तस्वीर से तेज़ डर फैलाती है।",
    gu: "ખોટા કૅપ્શનવાળો સાચો ફોટો કોઈ પણ બનાવટી ફોટા કરતાં ઝડપથી ભય ફેલાવે છે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "official",
      label: {
        en: "PIB Fact Check (Press Information Bureau, Government of India)",
        hi: "PIB Fact Check (पत्र सूचना कार्यालय, भारत सरकार)",
        gu: "PIB Fact Check (પ્રેસ ઇન્ફર્મેશન બ્યુરો, ભારત સરકાર)",
      },
      url: "https://factcheck.pib.gov.in/",
      note: {
        en: "Checks viral claims about the Government of India and publishes what it finds.",
        hi: "भारत सरकार से जुड़े वायरल दावों की जाँच करता है और नतीजे प्रकाशित करता है।",
        gu: "ભારત સરકાર સાથે જોડાયેલા વાયરલ દાવાઓ ચકાસે છે અને પરિણામો પ્રકાશિત કરે છે.",
      },
    },
    {
      kind: "guide",
      label: {
        en: "Google Search Help: search with an image (reverse image search)",
        hi: "Google Search Help: तस्वीर से खोजें (रिवर्स इमेज सर्च)",
        gu: "Google Search Help: ફોટાથી શોધો (રિવર્સ ઇમેજ સર્ચ)",
      },
      url: "https://support.google.com/websearch/answer/1325808",
      note: {
        en: "Step-by-step instructions for finding where an image has appeared online, on phone or computer.",
        hi: "फ़ोन या कंप्यूटर पर, कोई तस्वीर ऑनलाइन कहाँ दिखी है यह पता करने के क़दम।",
        gu: "ફોન કે કમ્પ્યુટર પર, કોઈ ફોટો ઑનલાઇન ક્યાં દેખાયો છે તે શોધવાનાં પગલાં.",
      },
    },
    {
      kind: "guide",
      label: {
        en: "TinEye reverse image search",
        hi: "TinEye रिवर्स इमेज सर्च",
        gu: "TinEye રિવર્સ ઇમેજ સર્ચ",
      },
      url: "https://tineye.com/",
      note: {
        en: "Upload an image to see earlier copies of it on the web, sorted by date.",
        hi: "तस्वीर अपलोड करें और वेब पर उसकी पुरानी कॉपियाँ तारीख़ के हिसाब से देखें।",
        gu: "ફોટો અપલોડ કરો અને વેબ પર તેની જૂની નકલો તારીખ પ્રમાણે જુઓ.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 60,
};
