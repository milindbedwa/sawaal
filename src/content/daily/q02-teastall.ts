import type { DailyQuestion } from "../types";

export const q02Teastall: DailyQuestion = {
  id: "q02",
  slug: "separate-glasses",
  topic: "equality",
  title: { en: "The separate glass", hi: "अलग गिलास", gu: "અલગ ગ્લાસ" },
  scene: {
    kind: "street",
    setting: "teastall",
    sign: { en: "Separate glasses for 'them'", hi: "'उनके' लिए अलग गिलास", gu: "'તેમના' માટે અલગ ગ્લાસ" },
    figures: [
      { x: 28, pose: "stand", color: "cobalt", facing: "right", name: { en: "Ravi", hi: "रवि", gu: "રવિ" } },
      {
        x: 68,
        pose: "point",
        color: "amber",
        facing: "left",
        says: { en: "Not that glass. Yours is the steel one.", hi: "वह गिलास नहीं। तुम्हारा स्टील वाला है।", gu: "એ ગ્લાસ નહીં. તારો સ્ટીલવાળો છે." },
      },
    ],
    caption: {
      en: "A tea stall keeps separate glasses for customers from one caste.",
      hi: "एक चाय की दुकान एक जाति के ग्राहकों के लिए अलग गिलास रखती है।",
      gu: "એક ચાની દુકાન એક જાતિના ગ્રાહકો માટે અલગ ગ્લાસ રાખે છે.",
    },
  },
  prompt: { en: "What is this?", hi: "यह क्या है?", gu: "આ શું છે?" },
  interaction: "cards",
  choices: [
    {
      id: "tradition",
      label: { en: "Just an old custom", hi: "बस एक पुराना रिवाज़", gu: "ફક્ત એક જૂનો રિવાજ" },
      response: {
        heading: { en: "Old, yes. Allowed, no.", hi: "पुराना, हाँ। जायज़, नहीं।", gu: "જૂનો, હા. માન્ય, ના." },
        body: {
          en: "Many customs were ended by the Constitution because they denied people dignity. This is one of them.",
          hi: "कई रिवाज़ संविधान ने इसलिए ख़त्म किए क्योंकि वे लोगों की गरिमा छीनते थे। यह उनमें से एक है।",
          gu: "ઘણા રિવાજો સંવિધાને એટલે બંધ કર્યા કારણ કે તે લોકોનું ગૌરવ છીનવતા હતા. આ તેમાંનો એક છે.",
        },
        quality: "risky",
      },
    },
    {
      id: "illegal",
      label: { en: "Illegal discrimination", hi: "गैर-क़ानूनी भेदभाव", gu: "ગેરકાયદેસર ભેદભાવ" },
      response: {
        heading: { en: "Yes.", hi: "हाँ।", gu: "હા." },
        body: {
          en: "This is untouchability in practice. The Constitution abolished it, and a 1955 law makes it a punishable offence.",
          hi: "यह व्यवहार में छुआछूत है। संविधान ने इसे समाप्त किया, और 1955 का क़ानून इसे दंडनीय अपराध बनाता है।",
          gu: "આ વ્યવહારમાં અસ્પૃશ્યતા છે. સંવિધાને તેને નાબૂદ કરી, અને 1955નો કાયદો તેને દંડનીય ગુનો બનાવે છે.",
        },
        quality: "strong",
      },
    },
    {
      id: "rude",
      label: { en: "Rude, but not illegal", hi: "असभ्य, पर गैर-क़ानूनी नहीं", gu: "અસભ્ય, પણ ગેરકાયદેસર નહીં" },
      response: {
        heading: { en: "It is more than rude.", hi: "यह असभ्यता से ज़्यादा है।", gu: "આ અસભ્યતાથી વધુ છે." },
        body: {
          en: "Refusing equal service because of caste is an offence under Indian law, not just bad manners.",
          hi: "जाति के कारण समान सेवा से मना करना भारतीय क़ानून में अपराध है, सिर्फ़ बुरा व्यवहार नहीं।",
          gu: "જાતિના કારણે સમાન સેવા નકારવી ભારતીય કાયદામાં ગુનો છે, ફક્ત ખરાબ વર્તન નહીં.",
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
        en: "Article 17 of the Constitution abolishes untouchability in any form.",
        hi: "संविधान का अनुच्छेद 17 किसी भी रूप में छुआछूत को समाप्त करता है।",
        gu: "સંવિધાનનો અનુચ્છેદ 17 કોઈ પણ સ્વરૂપે અસ્પૃશ્યતા નાબૂદ કરે છે.",
      },
    },
    {
      glyph: "shield",
      tone: "found",
      text: {
        en: "Article 15(2): no citizen can be kept out of shops, restaurants or public places on grounds of caste.",
        hi: "अनुच्छेद 15(2): जाति के आधार पर किसी नागरिक को दुकान, रेस्तराँ या सार्वजनिक जगह से रोका नहीं जा सकता।",
        gu: "અનુચ્છેદ 15(2): જાતિના આધારે કોઈ નાગરિકને દુકાન, રેસ્ટોરાં કે જાહેર સ્થળથી રોકી શકાય નહીં.",
      },
    },
    {
      glyph: "scale",
      tone: "found",
      text: {
        en: "The Protection of Civil Rights Act, 1955 punishes enforcing such 'disabilities', including separate utensils.",
        hi: "नागरिक अधिकार संरक्षण अधिनियम, 1955 ऐसी 'निर्योग्यताओं' को लागू करने पर दंड देता है, अलग बर्तन भी शामिल हैं।",
        gu: "નાગરિક અધિકાર સંરક્ષણ અધિનિયમ, 1955 આવી 'અસમર્થતાઓ' લાદવા પર દંડ આપે છે, અલગ વાસણો સહિત.",
      },
    },
    {
      glyph: "hand",
      tone: "neutral",
      text: {
        en: "What can you do? Speak up, refuse to accept it, and report it to the police or the National Commission for Scheduled Castes.",
        hi: "आप क्या कर सकते हैं? आवाज़ उठाएँ, इसे स्वीकार न करें, और पुलिस या राष्ट्रीय अनुसूचित जाति आयोग को सूचित करें।",
        gu: "તમે શું કરી શકો? અવાજ ઉઠાવો, તેને સ્વીકારો નહીં, અને પોલીસ કે રાષ્ટ્રીય અનુસૂચિત જાતિ આયોગને જણાવો.",
      },
    },
  ],
  insight: { en: "Dignity is not a favour. It is a right.", hi: "गरिमा कोई एहसान नहीं। यह अधिकार है।", gu: "ગૌરવ કોઈ ઉપકાર નથી. તે અધિકાર છે." },
  why: {
    en: "Equality in the Constitution is not only about government. It also protects you in everyday public life.",
    hi: "संविधान में समानता सिर्फ़ सरकार तक सीमित नहीं है। यह रोज़मर्रा के सार्वजनिक जीवन में भी आपकी रक्षा करती है।",
    gu: "સંવિધાનમાં સમાનતા ફક્ત સરકાર સુધી મર્યાદિત નથી. તે રોજિંદા જાહેર જીવનમાં પણ તમારું રક્ષણ કરે છે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "law",
      label: {
        en: "Constitution of India, Articles 15 and 17",
        hi: "भारत का संविधान, अनुच्छेद 15 और 17",
        gu: "ભારતનું સંવિધાન, અનુચ્છેદ 15 અને 17",
      },
      url: "https://legislative.gov.in/constitution-of-india/",
      note: {
        en: "Article 15 prohibits discrimination on grounds of religion, race, caste, sex or place of birth. Article 17 abolishes untouchability.",
        hi: "अनुच्छेद 15 धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव को रोकता है। अनुच्छेद 17 छुआछूत को समाप्त करता है।",
        gu: "અનુચ્છેદ 15 ધર્મ, જાતિ, લિંગ કે જન્મસ્થાનના આધારે ભેદભાવ પર પ્રતિબંધ મૂકે છે. અનુચ્છેદ 17 અસ્પૃશ્યતા નાબૂદ કરે છે.",
      },
    },
    {
      kind: "law",
      label: {
        en: "The Protection of Civil Rights Act, 1955 (India Code)",
        hi: "नागरिक अधिकार संरक्षण अधिनियम, 1955 (India Code)",
        gu: "નાગરિક અધિકાર સંરક્ષણ અધિનિયમ, 1955 (India Code)",
      },
      url: "https://www.indiacode.nic.in/",
      note: {
        en: "Section 4 punishes enforcing social disabilities, such as denying access to shops or the use of utensils in public eating places.",
        hi: "धारा 4 सामाजिक निर्योग्यताएँ लागू करने पर दंड देती है, जैसे दुकानों में प्रवेश रोकना या सार्वजनिक भोजनालयों में बर्तनों के इस्तेमाल से मना करना।",
        gu: "કલમ 4 સામાજિક અસમર્થતાઓ લાદવા પર દંડ આપે છે, જેમ કે દુકાનોમાં પ્રવેશ રોકવો કે જાહેર ભોજનાલયોમાં વાસણોના ઉપયોગથી ઇનકાર કરવો.",
      },
    },
    {
      kind: "official",
      label: {
        en: "National Commission for Scheduled Castes",
        hi: "राष्ट्रीय अनुसूचित जाति आयोग",
        gu: "રાષ્ટ્રીય અનુસૂચિત જાતિ આયોગ",
      },
      url: "https://ncsc.nic.in/",
      note: {
        en: "A constitutional body (Article 338) that receives complaints about caste-based discrimination.",
        hi: "एक संवैधानिक संस्था (अनुच्छेद 338) जो जाति-आधारित भेदभाव की शिकायतें लेती है।",
        gu: "એક સંવૈધાનિક સંસ્થા (અનુચ્છેદ 338) જે જાતિ-આધારિત ભેદભાવની ફરિયાદો લે છે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 70,
};
