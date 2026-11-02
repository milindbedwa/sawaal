import type { DailyQuestion } from "../types";

export const q14Lottery: DailyQuestion = {
  id: "q14",
  slug: "the-lottery-you-never-entered",
  topic: "scams",
  title: { en: "The surprise lottery", hi: "अचानक वाली लॉटरी", gu: "અચાનક લૉટરી" },
  scene: {
    kind: "phone",
    variant: "sms",
    from: { en: "KBC-LUCKY-DRAW", hi: "KBC-LUCKY-DRAW", gu: "KBC-LUCKY-DRAW" },
    body: {
      en: "Congratulations! You have WON ₹25,00,000. Pay ₹2,000 processing fee to claim.",
      hi: "बधाई हो! आपने ₹25,00,000 जीते हैं। पाने के लिए ₹2,000 प्रोसेसिंग फ़ीस भरें।",
      gu: "અભિનંદન! તમે ₹25,00,000 જીત્યા છો. મેળવવા માટે ₹2,000 પ્રોસેસિંગ ફી ભરો.",
    },
    cta: { en: "Claim now", hi: "अभी क्लेम करें", gu: "હમણાં ક્લેમ કરો" },
    meta: { en: "Unknown sender", hi: "अज्ञात भेजने वाला", gu: "અજાણ્યો મોકલનાર" },
  },
  prompt: { en: "What do you do?", hi: "आप क्या करेंगे?", gu: "તમે શું કરશો?" },
  interaction: "cards",
  choices: [
    {
      id: "pay",
      label: {
        en: "Pay the fee, it's small compared to the prize",
        hi: "फ़ीस भर दें, इनाम के सामने यह छोटी है",
        gu: "ફી ભરી દો, ઇનામ સામે તે નાની છે",
      },
      response: {
        heading: { en: "That small amount is the trick.", hi: "वह छोटी रक़म ही चाल है।", gu: "એ નાની રકમ જ ચાલ છે." },
        body: {
          en: "The ₹2,000 is the whole scam. There is no prize behind it. Once you pay, there will be another 'fee', and then another.",
          hi: "₹2,000 ही पूरी ठगी है। इसके पीछे कोई इनाम नहीं है। एक बार भरेंगे तो एक और 'फ़ीस' आएगी, फिर एक और।",
          gu: "₹2,000 જ આખી ઠગાઈ છે. તેની પાછળ કોઈ ઇનામ નથી. એક વાર ભરશો તો બીજી 'ફી' આવશે, પછી બીજી.",
        },
        quality: "risky",
      },
    },
    {
      id: "call",
      label: { en: "Call to ask for details", hi: "विवरण के लिए कॉल करें", gu: "વિગત માટે કૉલ કરો" },
      response: {
        heading: { en: "Careful.", hi: "सावधान।", gu: "સાવધાન." },
        body: {
          en: "Calling tells them your number is live and you are interested. A trained voice will sound official and push you to pay. There is nothing to learn here.",
          hi: "कॉल करने से उन्हें पता चलता है कि आपका नंबर चालू है और आप दिलचस्पी रखते हैं। एक अभ्यस्त आवाज़ अधिकारी जैसी लगेगी और पैसे भरने का दबाव डालेगी। यहाँ जानने को कुछ नहीं है।",
          gu: "કૉલ કરવાથી તેમને ખબર પડે છે કે તમારો નંબર ચાલુ છે અને તમને રસ છે. એક તાલીમબદ્ધ અવાજ અધિકારી જેવો લાગશે અને પૈસા ભરવા દબાણ કરશે. અહીં જાણવા જેવું કશું નથી.",
        },
        quality: "okay",
      },
    },
    {
      id: "delete",
      label: { en: "Delete and block", hi: "डिलीट करें और ब्लॉक करें", gu: "ડિલીટ કરો અને બ્લોક કરો" },
      response: {
        heading: { en: "Right call.", hi: "सही फ़ैसला।", gu: "સાચો નિર્ણય." },
        body: {
          en: "You never entered this draw, so you cannot have won it. Blocking stops the follow-ups. You can also report the number so others are protected.",
          hi: "आपने इस ड्रॉ में हिस्सा ही नहीं लिया, तो जीत नहीं सकते। ब्लॉक करने से आगे के संदेश रुक जाते हैं। आप नंबर रिपोर्ट भी कर सकते हैं ताकि दूसरे बचें।",
          gu: "તમે આ ડ્રૉમાં ભાગ જ લીધો નથી, તો જીતી શકો નહીં. બ્લોક કરવાથી આગળના સંદેશા અટકે છે. તમે નંબર રિપોર્ટ પણ કરી શકો જેથી બીજા બચે.",
        },
        quality: "strong",
      },
    },
  ],
  discover: [
    {
      glyph: "question",
      tone: "missing",
      text: {
        en: "Did you buy a ticket? No. You cannot win a lottery you never entered.",
        hi: "क्या आपने टिकट ख़रीदा था? नहीं। जिस लॉटरी में हिस्सा नहीं लिया, वह जीती नहीं जा सकती।",
        gu: "તમે ટિકિટ ખરીદી હતી? ના. જે લૉટરીમાં ભાગ લીધો નથી, તે જીતી શકાય નહીં.",
      },
    },
    {
      glyph: "rupee",
      tone: "warning",
      text: {
        en: "A real prize never needs money first. 'Pay to claim' is called advance-fee fraud, and the fee is the only money that ever moves.",
        hi: "असली इनाम के लिए पहले पैसे नहीं लगते। 'पाने के लिए भरें' को एडवांस-फ़ीस फ़्रॉड कहते हैं, और वह फ़ीस ही अकेला पैसा है जो कभी इधर-उधर होता है।",
        gu: "સાચા ઇનામ માટે પહેલાં પૈસા લાગતા નથી. 'મેળવવા માટે ભરો' ને એડવાન્સ-ફી ફ્રોડ કહે છે, અને એ ફી જ એકમાત્ર પૈસા છે જે ક્યારેય ફરે છે.",
      },
    },
    {
      glyph: "eye",
      tone: "warning",
      text: {
        en: "A famous-sounding name and a huge prize are there to make ₹2,000 feel tiny. Look at the ask, not the promise.",
        hi: "मशहूर जैसा नाम और बड़ा इनाम इसलिए हैं कि ₹2,000 छोटे लगें। वादे को नहीं, माँग को देखें।",
        gu: "પ્રખ્યાત જેવું નામ અને મોટું ઇનામ એટલે છે કે ₹2,000 નાના લાગે. વચનને નહીં, માગણીને જુઓ.",
      },
    },
    {
      glyph: "shield",
      tone: "found",
      text: {
        en: "Report the message on Sanchar Saathi. If money was paid, dial 1930 or use cybercrime.gov.in right away.",
        hi: "संदेश को Sanchar Saathi पर रिपोर्ट करें। अगर पैसे दे दिए हों, तो तुरंत 1930 डायल करें या cybercrime.gov.in पर जाएँ।",
        gu: "સંદેશને Sanchar Saathi પર રિપોર્ટ કરો. જો પૈસા આપી દીધા હોય, તો તરત 1930 ડાયલ કરો કે cybercrime.gov.in પર જાઓ.",
      },
    },
  ],
  insight: {
    en: "Real prizes never ask you to pay first.",
    hi: "असली इनाम पहले पैसे नहीं माँगते।",
    gu: "સાચાં ઇનામ પહેલાં પૈસા માગતાં નથી.",
  },
  why: {
    en: "The scam works on hope, not greed. Anyone can want ₹25 lakh. The rule protects everyone.",
    hi: "यह ठगी लालच पर नहीं, उम्मीद पर चलती है। ₹25 लाख कोई भी चाह सकता है। यह नियम सबकी रक्षा करता है।",
    gu: "આ ઠગાઈ લોભ પર નહીં, આશા પર ચાલે છે. ₹25 લાખ કોઈ પણ ઇચ્છી શકે. આ નિયમ બધાનું રક્ષણ કરે છે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "official",
      label: {
        en: "National Cyber Crime Reporting Portal and helpline 1930",
        hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल और हेल्पलाइन 1930",
        gu: "રાષ્ટ્રીય સાયબર અપરાધ રિપોર્ટિંગ પોર્ટલ અને હેલ્પલાઇન 1930",
      },
      url: "https://cybercrime.gov.in/",
      note: {
        en: "Run by the Ministry of Home Affairs. Report financial fraud here; reporting quickly improves the chance of freezing the money.",
        hi: "गृह मंत्रालय द्वारा संचालित। वित्तीय धोखाधड़ी यहाँ रिपोर्ट करें; जल्दी रिपोर्ट करने से पैसा रोके जाने की संभावना बढ़ती है।",
        gu: "ગૃહ મંત્રાલય દ્વારા સંચાલિત. નાણાકીય છેતરપિંડી અહીં રિપોર્ટ કરો; ઝડપથી રિપોર્ટ કરવાથી પૈસા અટકાવવાની શક્યતા વધે છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "RBI Kehta Hai: public awareness on safe banking",
        hi: "RBI कहता है: सुरक्षित बैंकिंग पर जन-जागरूकता",
        gu: "RBI કહેતા હૈ: સલામત બેંકિંગ પર જન-જાગૃતિ",
      },
      url: "https://rbikehtahai.rbi.org.in/",
      note: {
        en: "The Reserve Bank of India's campaign warns about lottery and prize messages that ask for fees or bank details.",
        hi: "भारतीय रिज़र्व बैंक का अभियान फ़ीस या बैंक विवरण माँगने वाले लॉटरी और इनाम संदेशों से सावधान करता है।",
        gu: "ભારતીય રિઝર્વ બેંકનું અભિયાન ફી કે બેંક વિગત માગતા લૉટરી અને ઇનામ સંદેશાથી ચેતવે છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "Sanchar Saathi (Department of Telecommunications): report suspected fraud communication",
        hi: "Sanchar Saathi (दूरसंचार विभाग): संदिग्ध धोखाधड़ी संदेश की रिपोर्ट करें",
        gu: "Sanchar Saathi (દૂરસંચાર વિભાગ): શંકાસ્પદ છેતરપિંડી સંદેશની રિપોર્ટ કરો",
      },
      url: "https://sancharsaathi.gov.in/",
      note: {
        en: "Lets you report suspicious calls and SMS so the numbers can be checked and blocked.",
        hi: "संदिग्ध कॉल और SMS रिपोर्ट करने की सुविधा, ताकि नंबरों की जाँच हो और उन्हें ब्लॉक किया जा सके।",
        gu: "શંકાસ્પદ કૉલ અને SMS રિપોર્ટ કરવાની સુવિધા, જેથી નંબરોની તપાસ થાય અને તે બ્લોક થાય.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 60,
};
