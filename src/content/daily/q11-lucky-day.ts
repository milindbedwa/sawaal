import type { DailyQuestion } from "../types";

export const q11LuckyDay: DailyQuestion = {
  id: "q11",
  slug: "the-unlucky-day",
  topic: "science",
  title: { en: "The unlucky day", hi: "अशुभ दिन", gu: "અશુભ દિવસ" },
  scene: {
    kind: "phone",
    variant: "post",
    from: { en: "Daily Stars app", hi: "Daily Stars ऐप", gu: "Daily Stars ઍપ" },
    body: {
      en: "Today is unlucky for travel. Stay home to avoid accidents.",
      hi: "आज का दिन यात्रा के लिए अशुभ है। दुर्घटना से बचने के लिए घर पर रहें।",
      gu: "આજનો દિવસ મુસાફરી માટે અશુભ છે. અકસ્માતથી બચવા ઘરે રહો.",
    },
    meta: { en: "Notification, 6:05 am", hi: "नोटिफ़िकेशन, सुबह 6:05", gu: "નોટિફિકેશન, સવારે 6:05" },
  },
  prompt: {
    en: "How would you know if this prediction is right?",
    hi: "आप कैसे जानेंगे कि यह भविष्यवाणी सही है?",
    gu: "તમે કેવી રીતે જાણશો કે આ આગાહી સાચી છે?",
  },
  interaction: "cards",
  choices: [
    {
      id: "test",
      label: {
        en: "Ask: what would make this prediction wrong?",
        hi: "पूछें: यह भविष्यवाणी ग़लत कब मानी जाएगी?",
        gu: "પૂછો: આ આગાહી ખોટી ક્યારે ગણાશે?",
      },
      response: {
        heading: { en: "That is the right question.", hi: "यही सही सवाल है।", gu: "આ જ સાચો પ્રશ્ન છે." },
        body: {
          en: "A prediction is useful only if some outcome could prove it wrong. Let's see whether this one allows that.",
          hi: "भविष्यवाणी तभी काम की है जब कोई नतीजा उसे ग़लत साबित कर सके। देखते हैं, यह ऐसा होने देती है या नहीं।",
          gu: "આગાહી ત્યારે જ કામની છે જ્યારે કોઈ પરિણામ તેને ખોટી સાબિત કરી શકે. જોઈએ, આ એવું થવા દે છે કે નહીં.",
        },
        quality: "strong",
      },
    },
    {
      id: "stay-home",
      label: { en: "Stay home, just to be safe", hi: "सुरक्षित रहने के लिए घर पर रहें", gu: "સલામત રહેવા ઘરે રહો" },
      response: {
        heading: { en: "Your day, your choice.", hi: "आपका दिन, आपका फ़ैसला।", gu: "તમારો દિવસ, તમારી પસંદ." },
        body: {
          en: "Nothing wrong with a quiet day. But notice: if you stay home and nothing happens, the app will count that as a success too.",
          hi: "शांत दिन में कोई बुराई नहीं। पर ध्यान दें: अगर आप घर रहें और कुछ न हो, तो ऐप इसे भी अपनी सफलता गिनेगा।",
          gu: "શાંત દિવસમાં કશું ખોટું નથી. પણ નોંધો: જો તમે ઘરે રહો અને કશું ન થાય, તો ઍપ તેને પણ પોતાની સફળતા ગણશે.",
        },
        quality: "okay",
      },
    },
    {
      id: "it-knows",
      label: {
        en: "It must know something; apps have data",
        hi: "इसे कुछ तो पता होगा; ऐप्स के पास डेटा होता है",
        gu: "તેને કંઈક તો ખબર હશે; ઍપ્સ પાસે ડેટા હોય છે",
      },
      response: {
        heading: { en: "Let's check that.", hi: "इसे जाँचते हैं।", gu: "ચાલો તે ચકાસીએ." },
        body: {
          en: "Data is only useful if it predicts something specific. 'Unlucky for travel' is not specific, and it was sent to everyone born in your month.",
          hi: "डेटा तभी काम का है जब वह कुछ ख़ास बताए। 'यात्रा के लिए अशुभ' कुछ ख़ास नहीं है, और यह आपके महीने में जन्मे हर व्यक्ति को भेजा गया है।",
          gu: "ડેટા ત્યારે જ કામનો છે જ્યારે તે કંઈક ચોક્કસ કહે. 'મુસાફરી માટે અશુભ' ચોક્કસ નથી, અને તે તમારા મહિનામાં જન્મેલા દરેકને મોકલાયું છે.",
        },
        quality: "risky",
      },
    },
  ],
  discover: [
    {
      glyph: "question",
      tone: "warning",
      text: {
        en: "If you travel and arrive safely: 'You were lucky.' If anything goes wrong: 'We warned you.' The claim wins either way.",
        hi: "आप यात्रा करें और सुरक्षित पहुँचें: 'आप ख़ुशक़िस्मत थे।' कुछ गड़बड़ हो: 'हमने चेताया था।' दावा दोनों तरह से जीतता है।",
        gu: "તમે મુસાફરી કરો અને સલામત પહોંચો: 'તમે નસીબદાર હતા.' કશું ખોટું થાય: 'અમે ચેતવ્યા હતા.' દાવો બંને રીતે જીતે છે.",
      },
    },
    {
      glyph: "flask",
      tone: "missing",
      text: {
        en: "A claim that fits every outcome cannot be tested. There is no result that would count against it.",
        hi: "जो दावा हर नतीजे पर फ़िट बैठे, उसे जाँचा नहीं जा सकता। कोई भी नतीजा उसके ख़िलाफ़ नहीं जाता।",
        gu: "જે દાવો દરેક પરિણામ પર બેસે, તેને ચકાસી શકાય નહીં. કોઈ પરિણામ તેની વિરુદ્ધ જતું નથી.",
      },
    },
    {
      glyph: "people",
      tone: "neutral",
      text: {
        en: "Vague messages feel personal even when sent to lakhs of people. Psychologists call this the Barnum effect.",
        hi: "अस्पष्ट संदेश लाखों लोगों को भेजे जाने पर भी निजी लगते हैं। मनोवैज्ञानिक इसे बार्नम प्रभाव कहते हैं।",
        gu: "અસ્પષ્ટ સંદેશા લાખો લોકોને મોકલાયા હોય તો પણ અંગત લાગે છે. મનોવૈજ્ઞાનિકો તેને બાર્નમ અસર કહે છે.",
      },
    },
    {
      glyph: "check",
      tone: "found",
      text: {
        en: "A testable prediction says what will happen, when, and what would prove it wrong. Then you can keep score.",
        hi: "जाँची जा सकने वाली भविष्यवाणी बताती है कि क्या होगा, कब होगा, और क्या उसे ग़लत साबित करेगा। तब आप हिसाब रख सकते हैं।",
        gu: "ચકાસી શકાય તેવી આગાહી કહે છે કે શું થશે, ક્યારે થશે, અને શું તેને ખોટી સાબિત કરશે. પછી તમે હિસાબ રાખી શકો.",
      },
    },
  ],
  insight: {
    en: "A prediction that cannot be wrong tells you nothing.",
    hi: "जो भविष्यवाणी ग़लत न हो सके, वह कुछ नहीं बताती।",
    gu: "જે આગાહી ક્યારેય ખોટી ન પડે, તે કશું કહેતી નથી.",
  },
  why: {
    en: "This is not about belief. It is a tool for judging any claim, from horoscopes to market tips.",
    hi: "यह आस्था की बात नहीं है। यह किसी भी दावे को जाँचने का औज़ार है, राशिफल से लेकर बाज़ार की टिप तक।",
    gu: "આ શ્રદ્ધાની વાત નથી. આ કોઈ પણ દાવાને ચકાસવાનું સાધન છે, રાશિફળથી બજારની ટિપ સુધી.",
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
      kind: "reference",
      label: {
        en: "Encyclopaedia Britannica: Barnum effect",
        hi: "Encyclopaedia Britannica: बार्नम प्रभाव",
        gu: "Encyclopaedia Britannica: બાર્નમ અસર",
      },
      url: "https://www.britannica.com/science/Barnum-Effect",
      note: {
        en: "Explains why people accept vague, general descriptions as uniquely true of themselves.",
        hi: "बताता है कि लोग अस्पष्ट, सामान्य बातों को ख़ास अपने बारे में सच क्यों मान लेते हैं।",
        gu: "સમજાવે છે કે લોકો અસ્પષ્ટ, સામાન્ય વાતોને ખાસ પોતાના વિશે સાચી કેમ માની લે છે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 65,
};
