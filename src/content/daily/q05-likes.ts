import type { DailyQuestion } from "../types";

export const q05Likes: DailyQuestion = {
  id: "q05",
  slug: "the-viral-cure",
  topic: "social-media",
  title: { en: "The viral cure", hi: "वायरल इलाज", gu: "વાયરલ ઇલાજ" },
  scene: {
    kind: "phone",
    variant: "post",
    from: { en: "HealthTips Daily", hi: "HealthTips Daily", gu: "HealthTips Daily" },
    body: {
      en: "A famous doctor says eating this one fruit cures kidney stones. Share before they delete it!",
      hi: "एक मशहूर डॉक्टर कहते हैं कि यह एक फल खाने से किडनी की पथरी ठीक हो जाती है। डिलीट होने से पहले शेयर करें!",
      gu: "એક પ્રખ્યાત ડૉક્ટર કહે છે કે આ એક ફળ ખાવાથી કિડનીની પથરી મટી જાય છે. ડિલીટ થાય પહેલાં શેર કરો!",
    },
    cta: { en: "Share", hi: "शेयर करें", gu: "શેર કરો" },
    meta: { en: "1,20,000 likes · 40,000 shares", hi: "1,20,000 लाइक · 40,000 शेयर", gu: "1,20,000 લાઇક · 40,000 શેર" },
  },
  prompt: { en: "How much should you trust this?", hi: "इस पर कितना भरोसा करें?", gu: "આના પર કેટલો ભરોસો કરવો?" },
  interaction: "cards",
  choices: [
    {
      id: "popular",
      label: { en: "1.2 lakh people liked it. Must be true.", hi: "1.2 लाख लोगों ने लाइक किया। सच ही होगा।", gu: "1.2 લાખ લોકોએ લાઇક કર્યું. સાચું જ હશે." },
      response: {
        heading: { en: "A pause here.", hi: "यहाँ एक पल रुकिए।", gu: "અહીં એક ક્ષણ થોભો." },
        body: {
          en: "Likes count reactions, not checks. Not one of those 1.2 lakh people tested the fruit on a kidney stone.",
          hi: "लाइक प्रतिक्रियाएँ गिनते हैं, जाँच नहीं। उन 1.2 लाख लोगों में से किसी ने भी फल को पथरी पर परखा नहीं।",
          gu: "લાઇક પ્રતિક્રિયાઓ ગણે છે, ચકાસણી નહીં. એ 1.2 લાખ લોકોમાંથી કોઈએ ફળને પથરી પર પરખ્યું નથી.",
        },
        quality: "risky",
      },
    },
    {
      id: "ignore",
      label: { en: "Ignore, probably nonsense", hi: "अनदेखा करें, शायद बकवास है", gu: "અવગણો, કદાચ બકવાસ છે" },
      response: {
        heading: { en: "Likely right.", hi: "शायद सही।", gu: "કદાચ સાચું." },
        body: {
          en: "Your instinct is good. But 'probably nonsense' is also a guess. One more step tells you for sure.",
          hi: "आपकी समझ अच्छी है। पर 'शायद बकवास' भी एक अनुमान ही है। एक और कदम से पक्का पता चल जाएगा।",
          gu: "તમારી સમજ સારી છે. પણ 'કદાચ બકવાસ' પણ એક અનુમાન જ છે. એક વધુ પગલું પક્કું કહી દેશે.",
        },
        quality: "okay",
      },
    },
    {
      id: "source",
      label: { en: "Look for the doctor's name and a source", hi: "डॉक्टर का नाम और स्रोत खोजें", gu: "ડૉક્ટરનું નામ અને સ્રોત શોધો" },
      response: {
        heading: { en: "That is the test.", hi: "यही असली परीक्षा है।", gu: "આ જ સાચી કસોટી છે." },
        body: {
          en: "'A famous doctor' with no name is no doctor at all. Real medical advice can be traced to a person and a place.",
          hi: "बिना नाम का 'मशहूर डॉक्टर' कोई डॉक्टर नहीं है। असली चिकित्सा सलाह किसी व्यक्ति और जगह तक पहुँचती है।",
          gu: "નામ વગરનો 'પ્રખ્યાત ડૉક્ટર' કોઈ ડૉક્ટર જ નથી. સાચી તબીબી સલાહ કોઈ વ્યક્તિ અને સ્થળ સુધી પહોંચે છે.",
        },
        quality: "strong",
      },
    },
  ],
  discover: [
    {
      glyph: "megaphone",
      tone: "warning",
      text: {
        en: "A like takes one second and no knowledge. 1.2 lakh taps is not 1.2 lakh checks.",
        hi: "एक लाइक में एक सेकंड लगता है और कोई जानकारी नहीं चाहिए। 1.2 लाख टैप 1.2 लाख जाँच नहीं हैं।",
        gu: "એક લાઇકમાં એક સેકન્ડ લાગે છે અને કોઈ જાણકારી જોઈતી નથી. 1.2 લાખ ટૅપ એ 1.2 લાખ ચકાસણી નથી.",
      },
    },
    {
      glyph: "rupee",
      tone: "missing",
      text: {
        en: "Likes and shares can be bought, or made by bot accounts. The number tells you nothing about who is behind it.",
        hi: "लाइक और शेयर ख़रीदे जा सकते हैं, या बॉट अकाउंट से बनाए जा सकते हैं। संख्या यह नहीं बताती कि पीछे कौन है।",
        gu: "લાઇક અને શેર ખરીદી શકાય છે, કે બૉટ એકાઉન્ટથી બનાવી શકાય છે. સંખ્યા એ નથી કહેતી કે પાછળ કોણ છે.",
      },
    },
    {
      glyph: "eye",
      tone: "warning",
      text: {
        en: "The app shows you what gets a reaction, not what is true. Shock and hope travel fastest.",
        hi: "ऐप आपको वह दिखाता है जिस पर प्रतिक्रिया आती है, न कि जो सच है। चौंकाने वाली और उम्मीद वाली बातें सबसे तेज़ फैलती हैं।",
        gu: "ઍપ તમને તે બતાવે છે જેના પર પ્રતિક્રિયા આવે છે, નહીં કે જે સાચું છે. આંચકો અને આશા સૌથી ઝડપે ફેલાય છે.",
      },
    },
    {
      glyph: "check",
      tone: "found",
      text: {
        en: "Check instead: is the doctor named? Is there a hospital or a study? Has a fact-check site already covered it?",
        hi: "इसके बजाय जाँचें: डॉक्टर का नाम है? कोई अस्पताल या अध्ययन है? किसी फ़ैक्ट-चेक साइट ने इसे पहले ही जाँचा है?",
        gu: "તેના બદલે તપાસો: ડૉક્ટરનું નામ છે? કોઈ હોસ્પિટલ કે અભ્યાસ છે? કોઈ ફૅક્ટ-ચેક સાઇટે તેને પહેલેથી તપાસ્યું છે?",
      },
    },
  ],
  insight: {
    en: "Popular is not the same as true.",
    hi: "लोकप्रिय होना सच होना नहीं है।",
    gu: "લોકપ્રિય હોવું એટલે સાચું હોવું નહીં.",
  },
  why: {
    en: "A crowd can be wrong together. Evidence does not count hands.",
    hi: "भीड़ एक साथ गलत हो सकती है। सबूत हाथ नहीं गिनता।",
    gu: "ટોળું સાથે મળીને ખોટું હોઈ શકે. પુરાવો હાથ ગણતો નથી.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "guide",
      label: {
        en: "WHO: Let's flatten the infodemic curve",
        hi: "WHO: Let's flatten the infodemic curve (गलत जानकारी की लहर को रोकें)",
        gu: "WHO: Let's flatten the infodemic curve (ખોટી માહિતીની લહેર રોકીએ)",
      },
      url: "https://www.who.int/news-room/spotlight/let-s-flatten-the-infodemic-curve",
      note: {
        en: "Explains how false health information spreads online faster than facts, and how to slow it down.",
        hi: "बताता है कि गलत स्वास्थ्य जानकारी ऑनलाइन तथ्यों से तेज़ क्यों फैलती है, और इसे कैसे धीमा किया जाए।",
        gu: "સમજાવે છે કે ખોટી આરોગ્ય માહિતી ઑનલાઇન તથ્યો કરતાં ઝડપે કેમ ફેલાય છે, અને તેને કેવી રીતે ધીમી કરવી.",
      },
    },
    {
      kind: "official",
      label: {
        en: "PIB Fact Check: Government of India's fact-checking unit",
        hi: "PIB Fact Check: भारत सरकार की फ़ैक्ट-चेक इकाई",
        gu: "PIB Fact Check: ભારત સરકારનું ફૅક્ટ-ચેક એકમ",
      },
      url: "https://factcheck.pib.gov.in/",
      note: {
        en: "Checks viral claims about government matters. You can send a suspicious message to it for verification.",
        hi: "सरकारी विषयों पर वायरल दावों की जाँच करता है। आप संदिग्ध संदेश सत्यापन के लिए इसे भेज सकते हैं।",
        gu: "સરકારી વિષયો પર વાયરલ દાવાઓ તપાસે છે. તમે શંકાસ્પદ સંદેશ ચકાસણી માટે તેને મોકલી શકો.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 60,
};
