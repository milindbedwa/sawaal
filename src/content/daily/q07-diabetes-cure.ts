import type { DailyQuestion } from "../types";

export const q07DiabetesCure: DailyQuestion = {
  id: "q07",
  slug: "the-7-day-cure",
  topic: "health",
  title: { en: "The 7-day cure", hi: "7 दिन का इलाज", gu: "7 દિવસનો ઇલાજ" },
  scene: {
    kind: "poster",
    art: "bottle",
    accent: "mint",
    headline: { en: "Cure diabetes in 7 days", hi: "7 दिनों में डायबिटीज़ ठीक करें", gu: "7 દિવસમાં ડાયાબિટીસ મટાડો" },
    sub: { en: "Throw away your tablets!", hi: "अपनी गोलियाँ फेंक दें!", gu: "તમારી ગોળીઓ ફેંકી દો!" },
    badge: { en: "100% natural, no side effects", hi: "100% प्राकृतिक, कोई साइड इफ़ेक्ट नहीं", gu: "100% કુદરતી, કોઈ સાઇડ ઇફેક્ટ નહીં" },
    price: { en: "₹1,299", hi: "₹1,299", gu: "₹1,299" },
  },
  prompt: {
    en: "Your uncle wants to buy it. What do you say?",
    hi: "आपके चाचा इसे ख़रीदना चाहते हैं। आप क्या कहेंगे?",
    gu: "તમારા કાકા તે ખરીદવા માગે છે. તમે શું કહેશો?",
  },
  interaction: "cards",
  choices: [
    {
      id: "doctor",
      label: { en: "Ask his doctor first", hi: "पहले उनके डॉक्टर से पूछें", gu: "પહેલાં તેમના ડૉક્ટરને પૂછો" },
      response: {
        heading: { en: "Yes, before anything else.", hi: "हाँ, सबसे पहले यही।", gu: "હા, સૌથી પહેલાં આ જ." },
        body: {
          en: "A doctor knows his sugar levels and his medicines. A poster knows neither.",
          hi: "डॉक्टर उनकी शुगर और दवाइयाँ जानते हैं। पोस्टर दोनों में से कुछ नहीं जानता।",
          gu: "ડૉક્ટર તેમની શુગર અને દવાઓ જાણે છે. પોસ્ટર બેમાંથી કશું જાણતું નથી.",
        },
        quality: "strong",
      },
    },
    {
      id: "natural",
      label: { en: "Try it, it's natural so no harm", hi: "आज़मा लें, प्राकृतिक है तो नुक़सान नहीं", gu: "અજમાવી જુઓ, કુદરતી છે તો નુકસાન નહીં" },
      response: {
        heading: { en: "Gently: that is the trap.", hi: "धीरे से कहें तो: यही जाल है।", gu: "નરમાશથી કહીએ તો: આ જ ફાંદો છે." },
        body: {
          en: "'Natural' is not a safety test. Many natural things are harmful, and the real danger here is stopping the tablets.",
          hi: "'प्राकृतिक' कोई सुरक्षा जाँच नहीं है। बहुत सी प्राकृतिक चीज़ें हानिकारक हैं, और यहाँ असली ख़तरा गोलियाँ बंद करना है।",
          gu: "'કુદરતી' કોઈ સલામતી કસોટી નથી. ઘણી કુદરતી ચીજો હાનિકારક છે, અને અહીં સાચો ખતરો ગોળીઓ બંધ કરવી છે.",
        },
        quality: "risky",
      },
    },
    {
      id: "both",
      label: { en: "Buy it, but keep taking the tablets", hi: "ख़रीद लें, पर गोलियाँ लेते रहें", gu: "ખરીદો, પણ ગોળીઓ લેતા રહો" },
      response: {
        heading: { en: "Safer, but still a guess.", hi: "सुरक्षित, पर फिर भी अनुमान।", gu: "સલામત, પણ હજી અનુમાન." },
        body: {
          en: "Keeping the medicine is wise. But an unknown bottle can still react with it. ₹1,299 for something no one has tested is a lot.",
          hi: "दवा जारी रखना समझदारी है। पर अनजान बोतल उससे प्रतिक्रिया कर सकती है। जिसे किसी ने परखा नहीं, उसके लिए ₹1,299 बहुत हैं।",
          gu: "દવા ચાલુ રાખવી સમજદારી છે. પણ અજાણી બોટલ તેની સાથે પ્રતિક્રિયા કરી શકે. કોઈએ પરખ્યું ન હોય તેના માટે ₹1,299 ઘણા છે.",
        },
        quality: "okay",
      },
    },
  ],
  discover: [
    {
      glyph: "cross",
      tone: "warning",
      text: {
        en: "'Cure' is the red flag. Diabetes is a long-term condition that is managed, not cured in a week.",
        hi: "'इलाज' ही ख़तरे का संकेत है। डायबिटीज़ लंबी चलने वाली स्थिति है जिसे संभाला जाता है, हफ़्ते में ठीक नहीं किया जाता।",
        gu: "'ઇલાજ' જ ખતરાની નિશાની છે. ડાયાબિટીસ લાંબા ગાળાની સ્થિતિ છે જે સંભાળાય છે, અઠવાડિયામાં મટતી નથી.",
      },
    },
    {
      glyph: "flask",
      tone: "missing",
      text: {
        en: "'100% natural, no side effects' names no ingredient, no test, no regulator. Anything that works has effects, including side effects.",
        hi: "'100% प्राकृतिक, कोई साइड इफ़ेक्ट नहीं' में कोई सामग्री, जाँच या नियामक का नाम नहीं। जो चीज़ असर करती है, उसके साइड इफ़ेक्ट भी होते हैं।",
        gu: "'100% કુદરતી, કોઈ સાઇડ ઇફેક્ટ નહીં'માં કોઈ ઘટક, કસોટી કે નિયામકનું નામ નથી. જે અસર કરે છે તેની સાઇડ ઇફેક્ટ પણ હોય છે.",
      },
    },
    {
      glyph: "shield",
      tone: "warning",
      text: {
        en: "The real harm is 'throw away your tablets'. Stopping prescribed medicine can push sugar levels dangerously high.",
        hi: "असली नुक़सान है 'गोलियाँ फेंक दें'। डॉक्टर की दवा बंद करने से शुगर ख़तरनाक रूप से बढ़ सकती है।",
        gu: "સાચું નુકસાન છે 'ગોળીઓ ફેંકી દો'. ડૉક્ટરની દવા બંધ કરવાથી શુગર ખતરનાક રીતે વધી શકે.",
      },
    },
    {
      glyph: "scale",
      tone: "found",
      text: {
        en: "Indian law since 1954 bans advertising remedies that claim to cure diabetes. This poster is breaking it.",
        hi: "1954 से भारतीय क़ानून डायबिटीज़ ठीक करने का दावा करने वाले उपायों के विज्ञापन पर रोक लगाता है। यह पोस्टर उसे तोड़ रहा है।",
        gu: "1954થી ભારતીય કાયદો ડાયાબિટીસ મટાડવાનો દાવો કરતા ઉપાયોની જાહેરાત પર પ્રતિબંધ મૂકે છે. આ પોસ્ટર તેને તોડે છે.",
      },
    },
  ],
  insight: {
    en: "'Natural' is a word, not a safety test.",
    hi: "'प्राकृतिक' एक शब्द है, सुरक्षा की जाँच नहीं।",
    gu: "'કુદરતી' એક શબ્દ છે, સલામતીની કસોટી નહીં.",
  },
  why: {
    en: "The bottle may do nothing. Giving up real medicine for it can do real harm.",
    hi: "बोतल शायद कुछ न करे। उसके लिए असली दवा छोड़ना असली नुक़सान कर सकता है।",
    gu: "બોટલ કદાચ કશું ન કરે. તેના માટે સાચી દવા છોડવી સાચું નુકસાન કરી શકે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "law",
      label: {
        en: "Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 (India Code)",
        hi: "औषधि और चमत्कारी उपचार (आक्षेपणीय विज्ञापन) अधिनियम, 1954 (India Code)",
        gu: "ઔષધ અને ચમત્કારિક ઉપચાર (વાંધાજનક જાહેરાત) અધિનિયમ, 1954 (India Code)",
      },
      url: "https://www.indiacode.nic.in/",
      note: {
        en: "Prohibits advertising drugs or remedies that claim to cure diseases listed in its Schedule. Diabetes is on that list.",
        hi: "अनुसूची में सूचीबद्ध रोगों को ठीक करने का दावा करने वाली दवाओं या उपायों के विज्ञापन पर रोक लगाता है। डायबिटीज़ उस सूची में है।",
        gu: "અનુસૂચિમાં નોંધાયેલા રોગો મટાડવાનો દાવો કરતી દવાઓ કે ઉપાયોની જાહેરાત પર પ્રતિબંધ મૂકે છે. ડાયાબિટીસ એ યાદીમાં છે.",
      },
    },
    {
      kind: "science",
      label: {
        en: "WHO: Diabetes fact sheet",
        hi: "WHO: डायबिटीज़ फ़ैक्ट शीट",
        gu: "WHO: ડાયાબિટીસ ફૅક્ટ શીટ",
      },
      url: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
      note: {
        en: "Explains that diabetes is a chronic condition managed with diet, activity, medicines and regular check-ups.",
        hi: "बताता है कि डायबिटीज़ एक दीर्घकालिक स्थिति है जिसे आहार, व्यायाम, दवाओं और नियमित जाँच से संभाला जाता है।",
        gu: "સમજાવે છે કે ડાયાબિટીસ એક દીર્ઘકાલીન સ્થિતિ છે જે આહાર, કસરત, દવાઓ અને નિયમિત તપાસથી સંભાળાય છે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 65,
};
