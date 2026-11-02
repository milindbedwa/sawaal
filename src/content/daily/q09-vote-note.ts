import type { DailyQuestion } from "../types";

export const q09VoteNote: DailyQuestion = {
  id: "q09",
  slug: "500-for-a-vote",
  topic: "democracy",
  title: { en: "₹500 for a vote", hi: "वोट के बदले ₹500", gu: "વોટના બદલે ₹500" },
  scene: {
    kind: "street",
    setting: "home",
    figures: [
      { x: 30, pose: "stand", color: "cobalt", facing: "right", name: { en: "Tara", hi: "तारा", gu: "તારા" } },
      {
        x: 70,
        pose: "point",
        color: "amber",
        facing: "left",
        says: {
          en: "₹500 for your vote. Everyone on this lane is taking it.",
          hi: "आपके वोट के लिए ₹500। इस गली में सब ले रहे हैं।",
          gu: "તમારા વોટ માટે ₹500. આ ગલીમાં બધા લઈ રહ્યા છે.",
        },
      },
    ],
    caption: {
      en: "A week before polling, a stranger at the door offers cash.",
      hi: "मतदान से एक हफ़्ता पहले, दरवाज़े पर एक अजनबी नकद देने आया है।",
      gu: "મતદાનના એક અઠવાડિયા પહેલાં, બારણે એક અજાણ્યો રોકડ આપવા આવ્યો છે.",
    },
  },
  prompt: { en: "What does Tara do?", hi: "तारा क्या करे?", gu: "તારા શું કરે?" },
  interaction: "cards",
  choices: [
    {
      id: "take",
      label: { en: "Take it, vote as I like anyway", hi: "ले लो, वोट अपनी मर्ज़ी से दो", gu: "લઈ લો, વોટ પોતાની મરજીથી આપો" },
      response: {
        heading: { en: "It feels harmless. It is not.", hi: "हानिरहित लगता है। है नहीं।", gu: "નિર્દોષ લાગે છે. છે નહીં." },
        body: {
          en: "Taking money for a vote is an offence for the taker too, not only the giver. And the money buys silence about where it came from.",
          hi: "वोट के बदले पैसा लेना लेने वाले के लिए भी अपराध है, सिर्फ़ देने वाले के लिए नहीं। और यह पैसा इस बारे में चुप्पी ख़रीदता है कि यह आया कहाँ से।",
          gu: "વોટના બદલે પૈસા લેવા લેનાર માટે પણ ગુનો છે, ફક્ત આપનાર માટે નહીં. અને આ પૈસા એ વાતની ચુપકીદી ખરીદે છે કે તે આવ્યા ક્યાંથી.",
        },
        quality: "risky",
      },
    },
    {
      id: "report",
      label: { en: "Refuse and report it", hi: "मना करें और रिपोर्ट करें", gu: "ના પાડો અને રિપોર્ટ કરો" },
      response: {
        heading: { en: "That is what the system is built for.", hi: "व्यवस्था इसी के लिए बनी है।", gu: "વ્યવસ્થા આ માટે જ બની છે." },
        body: {
          en: "During elections the Election Commission's cVIGIL app lets you report this with a photo, and officials are expected to act on it quickly.",
          hi: "चुनाव के दौरान चुनाव आयोग का cVIGIL ऐप आपको फ़ोटो के साथ इसकी रिपोर्ट करने देता है, और अधिकारियों से तुरंत कार्रवाई की अपेक्षा होती है।",
          gu: "ચૂંટણી દરમિયાન ચૂંટણી આયોગની cVIGIL ઍપ તમને ફોટો સાથે આની રિપોર્ટ કરવા દે છે, અને અધિકારીઓ પાસેથી ઝડપી કાર્યવાહીની અપેક્ષા રાખવામાં આવે છે.",
        },
        quality: "strong",
      },
    },
    {
      id: "refuse",
      label: { en: "Refuse quietly", hi: "चुपचाप मना करें", gu: "ચૂપચાપ ના પાડો" },
      response: {
        heading: { en: "Your vote stays yours.", hi: "आपका वोट आपका रहा।", gu: "તમારો વોટ તમારો રહ્યો." },
        body: {
          en: "Refusing protects you. Reporting protects the whole lane. The stranger will knock on the next door.",
          hi: "मना करना आपकी रक्षा करता है। रिपोर्ट करना पूरी गली की। अजनबी अगला दरवाज़ा खटखटाएगा।",
          gu: "ના પાડવી તમારું રક્ષણ કરે છે. રિપોર્ટ કરવી પૂરી ગલીનું. અજાણ્યો આગલું બારણું ખખડાવશે.",
        },
        quality: "okay",
      },
    },
  ],
  discover: [
    {
      glyph: "scale",
      tone: "found",
      text: {
        en: "Offering or taking money for a vote is bribery. The Representation of the People Act, 1951 calls it a corrupt practice, and it is also a criminal offence.",
        hi: "वोट के बदले पैसा देना या लेना रिश्वत है। लोक प्रतिनिधित्व अधिनियम, 1951 इसे भ्रष्ट आचरण कहता है, और यह आपराधिक अपराध भी है।",
        gu: "વોટના બદલે પૈસા આપવા કે લેવા લાંચ છે. લોક પ્રતિનિધિત્વ અધિનિયમ, 1951 તેને ભ્રષ્ટ આચરણ કહે છે, અને તે ફોજદારી ગુનો પણ છે.",
      },
    },
    {
      glyph: "lock",
      tone: "found",
      text: {
        en: "The ballot is secret. No one can check how you voted, so the ₹500 buys nothing except a reason to stay quiet.",
        hi: "मतपत्र गुप्त है। कोई नहीं देख सकता कि आपने किसे वोट दिया, इसलिए ₹500 चुप रहने के बहाने के सिवा कुछ नहीं ख़रीदते।",
        gu: "મતપત્ર ગુપ્ત છે. કોઈ જોઈ શકતું નથી કે તમે કોને વોટ આપ્યો, એટલે ₹500 ચૂપ રહેવાના બહાના સિવાય કશું ખરીદતા નથી.",
      },
    },
    {
      glyph: "people",
      tone: "warning",
      text: {
        en: "'Everyone is taking it' is pressure, not proof. A lane that sells its vote is a lane no candidate needs to serve.",
        hi: "'सब ले रहे हैं' दबाव है, सबूत नहीं। जो गली अपना वोट बेच दे, उसकी सेवा किसी उम्मीदवार को करने की ज़रूरत नहीं रहती।",
        gu: "'બધા લઈ રહ્યા છે' દબાણ છે, પુરાવો નહીં. જે ગલી પોતાનો વોટ વેચે, તેની સેવા કોઈ ઉમેદવારને કરવાની જરૂર રહેતી નથી.",
      },
    },
    {
      glyph: "phone",
      tone: "found",
      text: {
        en: "During elections, the Election Commission's cVIGIL app lets any citizen report cash, liquor or threats with a photo or video.",
        hi: "चुनाव के दौरान चुनाव आयोग का cVIGIL ऐप किसी भी नागरिक को नकद, शराब या धमकी की रिपोर्ट फ़ोटो या वीडियो के साथ करने देता है।",
        gu: "ચૂંટણી દરમિયાન ચૂંટણી આયોગની cVIGIL ઍપ કોઈ પણ નાગરિકને રોકડ, દારૂ કે ધમકીની રિપોર્ટ ફોટો કે વિડિયો સાથે કરવા દે છે.",
      },
    },
  ],
  insight: {
    en: "A vote that is bought is a voice sold.",
    hi: "जो वोट बिका, वह आवाज़ बिकी।",
    gu: "જે વોટ વેચાયો, તે અવાજ વેચાયો.",
  },
  why: {
    en: "The ₹500 is gone in a week. The person it elected stays for five years.",
    hi: "₹500 हफ़्ते में ख़त्म। जिसे उसने चुना, वह पाँच साल रहता है।",
    gu: "₹500 અઠવાડિયામાં પૂરા. જેને તેણે ચૂંટ્યો, તે પાંચ વર્ષ રહે છે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "law",
      label: {
        en: "Representation of the People Act, 1951 (India Code)",
        hi: "लोक प्रतिनिधित्व अधिनियम, 1951 (India Code)",
        gu: "લોક પ્રતિનિધિત્વ અધિનિયમ, 1951 (India Code)",
      },
      url: "https://www.indiacode.nic.in/",
      note: {
        en: "Section 123(1) defines bribery, including any gift or offer to induce a vote, as a corrupt practice. Bribery at elections is also a criminal offence under the Indian Penal Code and its successor, the Bharatiya Nyaya Sanhita, 2023.",
        hi: "धारा 123(1) रिश्वत को, जिसमें वोट के लिए कोई उपहार या पेशकश शामिल है, भ्रष्ट आचरण के रूप में परिभाषित करती है। चुनाव में रिश्वत भारतीय दंड संहिता और उसके उत्तराधिकारी भारतीय न्याय संहिता, 2023 के तहत आपराधिक अपराध भी है।",
        gu: "કલમ 123(1) લાંચને, જેમાં વોટ માટે કોઈ ભેટ કે ઓફર શામેલ છે, ભ્રષ્ટ આચરણ તરીકે વ્યાખ્યાયિત કરે છે. ચૂંટણીમાં લાંચ ભારતીય દંડ સંહિતા અને તેની અનુગામી ભારતીય ન્યાય સંહિતા, 2023 હેઠળ ફોજદારી ગુનો પણ છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "Election Commission of India",
        hi: "भारत निर्वाचन आयोग",
        gu: "ભારતીય ચૂંટણી આયોગ",
      },
      url: "https://eci.gov.in/",
      note: {
        en: "The constitutional body that conducts elections and enforces the Model Code of Conduct.",
        hi: "संवैधानिक संस्था जो चुनाव कराती है और आदर्श आचार संहिता लागू करती है।",
        gu: "સંવૈધાનિક સંસ્થા જે ચૂંટણીઓ યોજે છે અને આદર્શ આચારસંહિતા લાગુ કરે છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "Election Commission of India: cVIGIL citizen app",
        hi: "भारत निर्वाचन आयोग: cVIGIL नागरिक ऐप",
        gu: "ભારતીય ચૂંટણી આયોગ: cVIGIL નાગરિક ઍપ",
      },
      url: "https://eci.gov.in/",
      note: {
        en: "A mobile app, active during election periods, for citizens to report violations such as cash distribution with photo or video evidence.",
        hi: "चुनाव अवधि में सक्रिय मोबाइल ऐप, जिससे नागरिक नकद बाँटने जैसे उल्लंघनों की फ़ोटो या वीडियो सबूत के साथ रिपोर्ट कर सकते हैं।",
        gu: "ચૂંટણી સમયગાળામાં સક્રિય મોબાઇલ ઍપ, જેથી નાગરિકો રોકડ વહેંચણી જેવા ઉલ્લંઘનોની ફોટો કે વિડિયો પુરાવા સાથે રિપોર્ટ કરી શકે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 70,
};
