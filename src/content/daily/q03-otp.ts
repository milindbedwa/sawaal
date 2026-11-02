import type { DailyQuestion } from "../types";

export const q03Otp: DailyQuestion = {
  id: "q03",
  slug: "the-urgent-call",
  topic: "scams",
  title: { en: "The urgent call", hi: "ज़रूरी फ़ोन कॉल", gu: "તાકીદનો ફોન" },
  scene: {
    kind: "phone",
    variant: "call",
    from: { en: "'Bank officer'", hi: "'बैंक अधिकारी'", gu: "'બેંક અધિકારી'" },
    body: {
      en: "Your card will be blocked in 10 minutes. Tell me the OTP we just sent to keep it active.",
      hi: "आपका कार्ड 10 मिनट में ब्लॉक हो जाएगा। इसे चालू रखने के लिए अभी भेजा गया OTP बताइए।",
      gu: "તમારું કાર્ડ 10 મિનિટમાં બ્લોક થઈ જશે. તેને ચાલુ રાખવા હમણાં મોકલેલો OTP કહો.",
    },
    meta: { en: "Unknown number", hi: "अज्ञात नंबर", gu: "અજાણ્યો નંબર" },
  },
  prompt: { en: "What do you do?", hi: "आप क्या करेंगे?", gu: "તમે શું કરશો?" },
  interaction: "cards",
  choices: [
    {
      id: "share",
      label: { en: "Share the OTP quickly", hi: "जल्दी से OTP बता दें", gu: "ઝડપથી OTP કહી દો" },
      response: {
        heading: { en: "Stop right there.", hi: "यहीं रुकिए।", gu: "અહીં જ થોભો." },
        body: {
          en: "An OTP is a key to your money. Whoever asks for it is trying to open your account, not protect it.",
          hi: "OTP आपके पैसे की चाबी है। जो इसे माँगता है, वह आपका खाता खोलने की कोशिश कर रहा है, बचाने की नहीं।",
          gu: "OTP તમારા પૈસાની ચાવી છે. જે તેને માગે છે તે તમારું ખાતું ખોલવાનો પ્રયાસ કરે છે, બચાવવાનો નહીં.",
        },
        quality: "risky",
      },
    },
    {
      id: "hangup",
      label: { en: "Hang up, call the bank's own number", hi: "फ़ोन काटें, बैंक के असली नंबर पर कॉल करें", gu: "ફોન કાપો, બેંકના સાચા નંબર પર કૉલ કરો" },
      response: {
        heading: { en: "That is the move.", hi: "यही सही कदम है।", gu: "આ જ સાચું પગલું છે." },
        body: {
          en: "You decide who to trust by calling the number printed on your card, not the number that called you.",
          hi: "भरोसा किस पर करना है, यह आप तय करते हैं: अपने कार्ड पर छपे नंबर पर कॉल करके, न कि उस नंबर पर जिसने आपको कॉल किया।",
          gu: "કોના પર ભરોસો કરવો તે તમે નક્કી કરો છો: તમારા કાર્ડ પર છપાયેલા નંબર પર કૉલ કરીને, નહીં કે જે નંબરે તમને કૉલ કર્યો.",
        },
        quality: "strong",
      },
    },
    {
      id: "prove",
      label: { en: "Ask them to prove it", hi: "उनसे सबूत माँगें", gu: "તેમને સાબિત કરવા કહો" },
      response: {
        heading: { en: "Careful.", hi: "सावधान।", gu: "સાવધાન." },
        body: {
          en: "Scammers often know your name and card type already. Proof on their call means nothing. End the call instead.",
          hi: "ठग अक्सर आपका नाम और कार्ड का प्रकार पहले से जानते हैं। उनकी कॉल पर 'सबूत' का कोई मतलब नहीं। कॉल काट देना बेहतर है।",
          gu: "ઠગ ઘણીવાર તમારું નામ અને કાર્ડનો પ્રકાર પહેલેથી જાણે છે. તેમના કૉલ પર 'પુરાવા'નો કોઈ અર્થ નથી. કૉલ કાપી નાખવો સારો.",
        },
        quality: "okay",
      },
    },
  ],
  discover: [
    {
      glyph: "clock",
      tone: "warning",
      text: {
        en: "'10 minutes' is a pressure tactic. Urgency stops you from thinking.",
        hi: "'10 मिनट' दबाव डालने की चाल है। जल्दबाज़ी आपको सोचने से रोकती है।",
        gu: "'10 મિનિટ' દબાણની ચાલ છે. ઉતાવળ તમને વિચારતા રોકે છે.",
      },
    },
    {
      glyph: "lock",
      tone: "found",
      text: {
        en: "Banks and the RBI say it plainly: no bank will ever ask you for an OTP, PIN or password.",
        hi: "बैंक और RBI साफ़ कहते हैं: कोई भी बैंक आपसे कभी OTP, PIN या पासवर्ड नहीं माँगेगा।",
        gu: "બેંકો અને RBI સ્પષ્ટ કહે છે: કોઈ બેંક તમારી પાસે ક્યારેય OTP, PIN કે પાસવર્ડ માગશે નહીં.",
      },
    },
    {
      glyph: "phone",
      tone: "found",
      text: {
        en: "If worried, call the number on the back of your card or visit the branch.",
        hi: "चिंता हो तो अपने कार्ड के पीछे छपे नंबर पर कॉल करें या शाखा जाएँ।",
        gu: "ચિંતા હોય તો તમારા કાર્ડની પાછળ છપાયેલા નંબર પર કૉલ કરો કે શાખામાં જાઓ.",
      },
    },
    {
      glyph: "shield",
      tone: "found",
      text: {
        en: "If money is lost, report fast: dial 1930 or use cybercrime.gov.in.",
        hi: "अगर पैसा चला गया, तो तुरंत रिपोर्ट करें: 1930 डायल करें या cybercrime.gov.in पर जाएँ।",
        gu: "જો પૈસા ગયા હોય, તો તરત રિપોર્ટ કરો: 1930 ડાયલ કરો કે cybercrime.gov.in પર જાઓ.",
      },
    },
  ],
  insight: { en: "Urgency is their tool. A pause is yours.", hi: "जल्दबाज़ी उनका हथियार है। रुकना आपका।", gu: "ઉતાવળ તેમનું હથિયાર છે. થોભવું તમારું." },
  why: {
    en: "Every scam needs you to act before you think. Thirty seconds of calm defeats most of them.",
    hi: "हर ठगी चाहती है कि आप सोचने से पहले काम करें। तीस सेकंड की शांति ज़्यादातर ठगियों को हरा देती है।",
    gu: "દરેક ઠગાઈ ઇચ્છે છે કે તમે વિચારતા પહેલાં પગલું ભરો. ત્રીસ સેકન્ડની શાંતિ મોટા ભાગની ઠગાઈને હરાવે છે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "official",
      label: {
        en: "RBI Kehta Hai: public awareness on safe banking",
        hi: "RBI कहता है: सुरक्षित बैंकिंग पर जन-जागरूकता",
        gu: "RBI કહેતા હૈ: સલામત બેંકિંગ પર જન-જાગૃતિ",
      },
      url: "https://rbikehtahai.rbi.org.in/",
      note: {
        en: "The Reserve Bank of India's campaign explains that banks never ask for OTPs, PINs or passwords.",
        hi: "भारतीय रिज़र्व बैंक का अभियान बताता है कि बैंक कभी OTP, PIN या पासवर्ड नहीं माँगते।",
        gu: "ભારતીય રિઝર્વ બેંકનું અભિયાન સમજાવે છે કે બેંકો ક્યારેય OTP, PIN કે પાસવર્ડ માગતી નથી.",
      },
    },
    {
      kind: "official",
      label: {
        en: "National Cyber Crime Reporting Portal and helpline 1930",
        hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल और हेल्पलाइन 1930",
        gu: "રાષ્ટ્રીય સાયબર અપરાધ રિપોર્ટિંગ પોર્ટલ અને હેલ્પલાઇન 1930",
      },
      url: "https://cybercrime.gov.in/",
      note: {
        en: "Run by the Ministry of Home Affairs. Reporting quickly improves the chance of freezing the money.",
        hi: "गृह मंत्रालय द्वारा संचालित। जल्दी रिपोर्ट करने से पैसा रोके जाने की संभावना बढ़ती है।",
        gu: "ગૃહ મંત્રાલય દ્વારા સંચાલિત. ઝડપથી રિપોર્ટ કરવાથી પૈસા અટકાવવાની શક્યતા વધે છે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 60,
};
