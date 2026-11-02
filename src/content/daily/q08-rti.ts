import type { DailyQuestion } from "../types";

export const q08Rti: DailyQuestion = {
  id: "q08",
  slug: "the-broken-road",
  topic: "civic",
  title: { en: "The broken road", hi: "टूटी सड़क", gu: "તૂટેલો રસ્તો" },
  scene: {
    kind: "street",
    setting: "street",
    sign: { en: "Road laid: 3 months ago", hi: "सड़क बनी: 3 महीने पहले", gu: "રસ્તો બન્યો: 3 મહિના પહેલાં" },
    figures: [
      {
        x: 38,
        pose: "think",
        color: "cobalt",
        facing: "right",
        name: { en: "Imran", hi: "इमरान", gu: "ઇમરાન" },
        says: {
          en: "New road, already broken. How much did it cost, and who got paid?",
          hi: "नई सड़क, पहले ही टूट गई। कितना ख़र्च हुआ, और पैसा किसे मिला?",
          gu: "નવો રસ્તો, પહેલેથી તૂટી ગયો. કેટલો ખર્ચ થયો, અને પૈસા કોને મળ્યા?",
        },
      },
      { x: 76, pose: "stand", color: "amber", facing: "left", scale: 0.85 },
    ],
    caption: {
      en: "A road laid three months ago has already cracked open.",
      hi: "तीन महीने पहले बनी सड़क पहले ही फट गई है।",
      gu: "ત્રણ મહિના પહેલાં બનેલો રસ્તો પહેલેથી ફાટી ગયો છે.",
    },
  },
  prompt: { en: "What can Imran do?", hi: "इमरान क्या कर सकता है?", gu: "ઇમરાન શું કરી શકે?" },
  interaction: "cards",
  choices: [
    {
      id: "nothing",
      label: { en: "Nothing can be done", hi: "कुछ नहीं हो सकता", gu: "કશું થઈ શકે નહીં" },
      response: {
        heading: { en: "Something can.", hi: "कुछ हो सकता है।", gu: "કશુંક થઈ શકે." },
        body: {
          en: "This feeling is common, and it is exactly what lets bad work go unquestioned. The law gives Imran a tool.",
          hi: "यह भाव आम है, और यही ख़राब काम को बिना सवाल रहने देता है। क़ानून इमरान को एक औज़ार देता है।",
          gu: "આ લાગણી સામાન્ય છે, અને એ જ ખરાબ કામને પ્રશ્ન વગર રહેવા દે છે. કાયદો ઇમરાનને એક સાધન આપે છે.",
        },
        quality: "risky",
      },
    },
    {
      id: "rti",
      label: { en: "File an RTI application", hi: "RTI अर्ज़ी दें", gu: "RTI અરજી કરો" },
      response: {
        heading: { en: "Yes.", hi: "हाँ।", gu: "હા." },
        body: {
          en: "Under the Right to Information Act, Imran can ask the public authority for the cost, the contractor and the contract. They must reply.",
          hi: "सूचना का अधिकार अधिनियम के तहत इमरान सार्वजनिक प्राधिकरण से ख़र्च, ठेकेदार और ठेके की जानकारी माँग सकता है। उन्हें जवाब देना होगा।",
          gu: "માહિતી અધિકાર અધિનિયમ હેઠળ ઇમરાન જાહેર સત્તામંડળ પાસે ખર્ચ, કોન્ટ્રાક્ટર અને કોન્ટ્રાક્ટની માહિતી માગી શકે. તેમણે જવાબ આપવો પડે.",
        },
        quality: "strong",
      },
    },
    {
      id: "post",
      label: { en: "Post angrily online", hi: "ऑनलाइन ग़ुस्से में पोस्ट करें", gu: "ઑનલાઇન ગુસ્સામાં પોસ્ટ કરો" },
      response: {
        heading: { en: "Understandable.", hi: "समझ में आता है।", gu: "સમજી શકાય." },
        body: {
          en: "A post may get attention. But it has no facts yet, and no one is obliged to answer it. Facts first, then the post.",
          hi: "पोस्ट पर ध्यान जा सकता है। पर उसमें अभी कोई तथ्य नहीं है, और किसी को जवाब देना ज़रूरी नहीं। पहले तथ्य, फिर पोस्ट।",
          gu: "પોસ્ટ પર ધ્યાન જઈ શકે. પણ તેમાં હજી કોઈ હકીકત નથી, અને કોઈને જવાબ આપવો જરૂરી નથી. પહેલાં હકીકત, પછી પોસ્ટ.",
        },
        quality: "okay",
      },
    },
  ],
  discover: [
    {
      glyph: "scroll",
      tone: "found",
      text: {
        en: "The Right to Information Act, 2005 lets any citizen ask a public authority for information it holds.",
        hi: "सूचना का अधिकार अधिनियम, 2005 किसी भी नागरिक को सार्वजनिक प्राधिकरण से उसके पास मौजूद जानकारी माँगने की अनुमति देता है।",
        gu: "માહિતી અધિકાર અધિનિયમ, 2005 કોઈ પણ નાગરિકને જાહેર સત્તામંડળ પાસે તેની પાસેની માહિતી માગવાની છૂટ આપે છે.",
      },
    },
    {
      glyph: "rupee",
      tone: "found",
      text: {
        en: "The fee is small: ₹10 for a Central Government application. No reason needs to be given.",
        hi: "फ़ीस छोटी है: केंद्र सरकार की अर्ज़ी के लिए ₹10। कोई कारण बताना ज़रूरी नहीं।",
        gu: "ફી નાની છે: કેન્દ્ર સરકારની અરજી માટે ₹10. કોઈ કારણ આપવાની જરૂર નથી.",
      },
    },
    {
      glyph: "clock",
      tone: "found",
      text: {
        en: "A reply is due within 30 days. If it does not come, Imran can appeal.",
        hi: "जवाब 30 दिनों के भीतर देना होता है। न आए तो इमरान अपील कर सकता है।",
        gu: "જવાબ 30 દિવસમાં આપવો પડે. ન આવે તો ઇમરાન અપીલ કરી શકે.",
      },
    },
    {
      glyph: "hand",
      tone: "neutral",
      text: {
        en: "With the cost and the contractor's name in hand, the next questions to the municipal corporation or councillor become sharp and specific.",
        hi: "ख़र्च और ठेकेदार का नाम हाथ में हो तो नगर निगम या पार्षद से अगले सवाल तीखे और सटीक बनते हैं।",
        gu: "ખર્ચ અને કોન્ટ્રાક્ટરનું નામ હાથમાં હોય તો મ્યુનિસિપલ કોર્પોરેશન કે કાઉન્સિલરને આગળના પ્રશ્નો તીખા અને ચોક્કસ બને.",
      },
    },
  ],
  insight: {
    en: "You are allowed to ask. The law says so.",
    hi: "आप पूछ सकते हैं। क़ानून यही कहता है।",
    gu: "તમે પૂછી શકો છો. કાયદો એમ કહે છે.",
  },
  why: {
    en: "Public money is your money. Asking how it was spent is not a favour; it is a right.",
    hi: "सरकारी पैसा आपका पैसा है। यह कैसे ख़र्च हुआ, पूछना एहसान नहीं, अधिकार है।",
    gu: "જાહેર પૈસા તમારા પૈસા છે. તે કેવી રીતે ખર્ચાયા તે પૂછવું ઉપકાર નહીં, અધિકાર છે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "law",
      label: {
        en: "Right to Information Act, 2005",
        hi: "सूचना का अधिकार अधिनियम, 2005",
        gu: "માહિતી અધિકાર અધિનિયમ, 2005",
      },
      url: "https://rti.gov.in/",
      note: {
        en: "Section 6 lets any citizen request information; Section 7 requires a reply within 30 days. The Central Government application fee is ₹10.",
        hi: "धारा 6 किसी भी नागरिक को जानकारी माँगने देती है; धारा 7 में 30 दिनों में जवाब ज़रूरी है। केंद्र सरकार की अर्ज़ी फ़ीस ₹10 है।",
        gu: "કલમ 6 કોઈ પણ નાગરિકને માહિતી માગવા દે છે; કલમ 7 મુજબ 30 દિવસમાં જવાબ જરૂરી છે. કેન્દ્ર સરકારની અરજી ફી ₹10 છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "Central Information Commission",
        hi: "केंद्रीय सूचना आयोग",
        gu: "કેન્દ્રીય માહિતી આયોગ",
      },
      url: "https://cic.gov.in/",
      note: {
        en: "Hears second appeals when a Central public authority does not reply or refuses.",
        hi: "जब केंद्रीय सार्वजनिक प्राधिकरण जवाब न दे या मना करे, तो दूसरी अपील सुनता है।",
        gu: "જ્યારે કેન્દ્રીય જાહેર સત્તામંડળ જવાબ ન આપે કે નકારે, ત્યારે બીજી અપીલ સાંભળે છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "RTI Online: file an application to Central Government bodies",
        hi: "RTI Online: केंद्र सरकार के विभागों को अर्ज़ी दें",
        gu: "RTI Online: કેન્દ્ર સરકારના વિભાગોને અરજી કરો",
      },
      url: "https://rtionline.gov.in/",
      note: {
        en: "Official portal to file and pay for RTI applications to Central ministries and departments online.",
        hi: "केंद्रीय मंत्रालयों और विभागों को ऑनलाइन RTI अर्ज़ी भरने और फ़ीस देने का आधिकारिक पोर्टल।",
        gu: "કેન્દ્રીય મંત્રાલયો અને વિભાગોને ઑનલાઇન RTI અરજી કરવા અને ફી ભરવા માટેનું સત્તાવાર પોર્ટલ.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 70,
};
