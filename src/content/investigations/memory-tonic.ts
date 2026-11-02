import type { Investigation } from "../types";

export const memoryTonic: Investigation = {
  id: "memory-tonic",
  slug: "the-memory-tonic",
  topic: "health",
  accent: "amber",
  title: { en: "The Memory Tonic", hi: "याददाश्त का टॉनिक", gu: "યાદશક્તિનું ટૉનિક" },
  tagline: { en: "An advert with a doctor, a number and a countdown.", hi: "एक विज्ञापन: एक डॉक्टर, एक आँकड़ा और एक उल्टी गिनती।", gu: "એક જાહેરાત: એક ડૉક્ટર, એક આંકડો અને ઊલટી ગણતરી." },
  artefact: "advert",
  blocks: [
    {
      id: "headline",
      role: "headline",
      text: { en: "97% of users report sharper memory in 7 days!", hi: "97% उपयोगकर्ताओं ने 7 दिन में तेज़ याददाश्त बताई!", gu: "97% વપરાશકર્તાઓએ 7 દિવસમાં તેજ યાદશક્તિ જણાવી!" },
      clue: "stat",
    },
    {
      id: "sub",
      role: "sub",
      text: { en: "Clinically proven. Scientifically tested.", hi: "क्लिनिकली प्रूव्ड। वैज्ञानिक रूप से परखा हुआ।", gu: "ક્લિનિકલી પ્રૂવ્ડ. વૈજ્ઞાનિક રીતે ચકાસાયેલ." },
      clue: "proven",
    },
    {
      id: "image",
      role: "image",
      text: { en: "BEFORE: 45% marks. AFTER: 92% marks. One student's story.", hi: "पहले: 45% अंक। बाद में: 92% अंक। एक छात्र की कहानी।", gu: "પહેલાં: 45% ગુણ. પછી: 92% ગુણ. એક વિદ્યાર્થીની કહાની." },
      clue: "story",
    },
    {
      id: "quote",
      role: "quote",
      text: { en: "“I recommend BrainMax to all my patients.” — Dr A. Verma, MD (Harvard)", hi: "“मैं अपने सभी मरीज़ों को BrainMax की सलाह देता हूँ।” — डॉ. ए. वर्मा, MD (Harvard)", gu: "“હું મારા બધા દર્દીઓને BrainMax ની ભલામણ કરું છું.” — ડૉ. એ. વર્મા, MD (Harvard)" },
      clue: "doctor",
    },
    {
      id: "byline",
      role: "byline",
      text: { en: "Featured in National Health Weekly", hi: "National Health Weekly में प्रकाशित", gu: "National Health Weekly માં પ્રકાશિત" },
      clue: "featured",
    },
    {
      id: "footer",
      role: "footer",
      text: { en: "Ingredients: brahmi, ashwagandha, honey. ₹899 for 30 days.", hi: "सामग्री: ब्राह्मी, अश्वगंधा, शहद। 30 दिन के लिए ₹899।", gu: "ઘટકો: બ્રાહ્મી, અશ્વગંધા, મધ. 30 દિવસ માટે ₹899." },
      clue: "ingredients",
    },
    {
      id: "cta",
      role: "cta",
      text: { en: "Only 12 bottles left! Order in the next 10 minutes", hi: "सिर्फ़ 12 बोतलें बची हैं! अगले 10 मिनट में ऑर्डर करें", gu: "ફક્ત 12 બોટલ બાકી! આગલી 10 મિનિટમાં ઓર્ડર કરો" },
      clue: "urgency",
    },
  ],
  clues: [
    {
      id: "stat",
      type: "misleading-statistic",
      title: { en: "97% of whom?", hi: "97% किसमें से?", gu: "97% કોનામાંથી?" },
      explain: {
        en: "How many users? Who counted? 'Report' means they said so, not that memory was measured. A number without a method is decoration.",
        hi: "कितने उपयोगकर्ता? किसने गिना? 'बताया' का मतलब है उन्होंने कहा, न कि याददाश्त मापी गई। बिना तरीक़े का आँकड़ा सिर्फ़ सजावट है।",
        gu: "કેટલા વપરાશકર્તાઓ? કોણે ગણ્યા? 'જણાવી' એટલે તેમણે કહ્યું, યાદશક્તિ મપાઈ નહીં. પદ્ધતિ વિનાનો આંકડો ફક્ત શણગાર છે.",
      },
    },
    {
      id: "proven",
      type: "unsupported-claim",
      title: { en: "Proven where?", hi: "कहाँ साबित हुआ?", gu: "ક્યાં સાબિત થયું?" },
      explain: {
        en: "'Clinically proven' should come with a study you can read: who ran it, how many people, compared with what. None is given.",
        hi: "'क्लिनिकली प्रूव्ड' के साथ एक अध्ययन होना चाहिए जिसे आप पढ़ सकें: किसने किया, कितने लोगों पर, किससे तुलना। यहाँ कुछ नहीं दिया गया।",
        gu: "'ક્લિનિકલી પ્રૂવ્ડ' સાથે એક અભ્યાસ હોવો જોઈએ જે તમે વાંચી શકો: કોણે કર્યો, કેટલા લોકો પર, શેની સાથે સરખામણી. અહીં કશું અપાયું નથી.",
      },
    },
    {
      id: "story",
      type: "emotional-manipulation",
      title: { en: "One story, not evidence", hi: "एक कहानी, सबूत नहीं", gu: "એક કહાની, પુરાવો નહીં" },
      explain: {
        en: "A before-and-after is built to make you feel hope. Marks change for many reasons. One person cannot show what a product does on average.",
        hi: "'पहले-बाद' आपको उम्मीद महसूस कराने के लिए बनाया गया है। अंक कई कारणों से बदलते हैं। एक व्यक्ति यह नहीं दिखा सकता कि उत्पाद औसतन क्या करता है।",
        gu: "'પહેલાં-પછી' તમને આશા અનુભવાવવા બનાવાયું છે. ગુણ ઘણા કારણોથી બદલાય છે. એક વ્યક્તિ બતાવી ન શકે કે ઉત્પાદન સરેરાશ શું કરે છે.",
      },
    },
    {
      id: "doctor",
      type: "fake-expert",
      title: { en: "Which doctor?", hi: "कौन सा डॉक्टर?", gu: "કયો ડૉક્ટર?" },
      explain: {
        en: "A name and a famous word are not a credential. Real doctors are listed in the Indian Medical Register. Also: a doctor's opinion is still not a study.",
        hi: "एक नाम और एक मशहूर शब्द योग्यता नहीं हैं। असली डॉक्टर भारतीय चिकित्सा रजिस्टर में दर्ज होते हैं। और: डॉक्टर की राय भी अध्ययन नहीं है।",
        gu: "એક નામ અને એક પ્રખ્યાત શબ્દ લાયકાત નથી. સાચા ડૉક્ટરો ભારતીય તબીબી રજિસ્ટરમાં નોંધાયેલા હોય છે. અને: ડૉક્ટરનો મત પણ અભ્યાસ નથી.",
      },
    },
    {
      id: "featured",
      type: "missing-source",
      title: { en: "Featured is not reviewed", hi: "'प्रकाशित' का मतलब 'जाँचा' नहीं", gu: "'પ્રકાશિત' એટલે 'ચકાસેલું' નહીં" },
      explain: {
        en: "Being 'featured' can mean a paid advert. No link, no date, no author. Search for the publication yourself before trusting the name.",
        hi: "'प्रकाशित' का मतलब सशुल्क विज्ञापन भी हो सकता है। न लिंक, न तारीख़, न लेखक। नाम पर भरोसा करने से पहले खुद खोजें।",
        gu: "'પ્રકાશિત' નો અર્થ ચૂકવેલી જાહેરાત પણ હોઈ શકે. ન લિંક, ન તારીખ, ન લેખક. નામ પર ભરોસો કરતાં પહેલાં જાતે શોધો.",
      },
    },
    {
      id: "ingredients",
      type: "solid",
      title: { en: "This part is ordinary", hi: "यह हिस्सा सामान्य है", gu: "આ ભાગ સામાન્ય છે" },
      explain: {
        en: "Listing ingredients and a price is normal and checkable. But 'natural' does not mean effective or safe. One honest line does not rescue the big claim.",
        hi: "सामग्री और दाम बताना सामान्य है और जाँचा जा सकता है। लेकिन 'प्राकृतिक' का मतलब असरदार या सुरक्षित नहीं। एक ईमानदार पंक्ति बड़े दावे को नहीं बचाती।",
        gu: "ઘટકો અને કિંમત જણાવવી સામાન્ય છે અને ચકાસી શકાય. પણ 'કુદરતી' એટલે અસરકારક કે સલામત નહીં. એક પ્રામાણિક લીટી મોટા દાવાને બચાવતી નથી.",
      },
    },
    {
      id: "urgency",
      type: "urgency",
      title: { en: "The clock is the trick", hi: "घड़ी ही चाल है", gu: "ઘડિયાળ જ ચાલ છે" },
      explain: {
        en: "'Only 12 left' and '10 minutes' exist to stop you from checking. Anything true today is still true tomorrow.",
        hi: "'सिर्फ़ 12 बचे' और '10 मिनट' इसलिए हैं कि आप जाँच न करें। जो आज सच है, वह कल भी सच रहेगा।",
        gu: "'ફક્ત 12 બાકી' અને '10 મિનિટ' એટલા માટે છે કે તમે ચકાસો નહીં. જે આજે સાચું છે, તે કાલે પણ સાચું રહેશે.",
      },
    },
  ],
  verdict: {
    claim: { en: "BrainMax sharpens memory in 7 days.", hi: "BrainMax 7 दिन में याददाश्त तेज़ करता है।", gu: "BrainMax 7 દિવસમાં યાદશક્તિ તેજ કરે છે." },
    honest: { from: 0, to: 30 },
    inRange: {
      en: "Right. Nothing here is evidence, so there is no reason to believe it. That is different from proving it false, but the burden is on the seller, not on you.",
      hi: "सही। यहाँ कुछ भी सबूत नहीं है, इसलिए इस पर भरोसा करने की कोई वजह नहीं। यह इसे झूठा साबित करने जैसा नहीं है, लेकिन साबित करने की ज़िम्मेदारी बेचने वाले की है, आपकी नहीं।",
      gu: "સાચું. અહીં કશું પુરાવો નથી, એટલે તેના પર ભરોસો કરવાનું કોઈ કારણ નથી. આ તેને ખોટું સાબિત કરવા જેવું નથી, પણ સાબિત કરવાની જવાબદારી વેચનારની છે, તમારી નહીં.",
    },
    tooSure: {
      en: "The advert gave you a feeling, a number and a famous word, but no evidence. Confidence should follow evidence, not design.",
      hi: "विज्ञापन ने आपको एक भावना, एक आँकड़ा और एक मशहूर शब्द दिया, लेकिन सबूत नहीं। भरोसा सबूत के पीछे चलना चाहिए, डिज़ाइन के नहीं।",
      gu: "જાહેરાતે તમને લાગણી, આંકડો અને પ્રખ્યાત શબ્દ આપ્યો, પણ પુરાવો નહીં. ભરોસો પુરાવા પાછળ ચાલવો જોઈએ, ડિઝાઇન પાછળ નહીં.",
    },
    tooDismissive: {
      en: "Close enough. With zero evidence, 'no reason to believe it' is the honest position.",
      hi: "लगभग सही। शून्य सबूत के साथ 'भरोसा करने की कोई वजह नहीं' ही ईमानदार रुख़ है।",
      gu: "લગભગ બરાબર. શૂન્ય પુરાવા સાથે 'ભરોસો કરવાનું કોઈ કારણ નથી' એ જ પ્રામાણિક વલણ છે.",
    },
  },
  insight: { en: "Confidence should follow evidence, not design.", hi: "भरोसा सबूत के पीछे चले, डिज़ाइन के नहीं।", gu: "ભરોસો પુરાવા પાછળ ચાલે, ડિઝાઇન પાછળ નહીં." },
  claimKind: "fact",
  reviewedOn: "2026-11-02",
  durationSec: 90,
  sources: [
    {
      kind: "law",
      label: { en: "Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954", hi: "औषधि और चमत्कारी उपचार (आपत्तिजनक विज्ञापन) अधिनियम, 1954", gu: "ઔષધિ અને ચમત્કારિક ઉપચાર (વાંધાજનક જાહેરાત) અધિનિયમ, 1954" },
      url: "https://www.indiacode.nic.in/",
      note: { en: "Restricts advertisements that claim to cure or improve listed conditions with no basis.", hi: "ऐसे विज्ञापनों पर रोक लगाता है जो बिना आधार सूचीबद्ध बीमारियों के इलाज का दावा करते हैं।", gu: "આધાર વિના સૂચિબદ્ધ બીમારીઓના ઇલાજનો દાવો કરતી જાહેરાતો પર નિયંત્રણ મૂકે છે." },
    },
    {
      kind: "official",
      label: { en: "National Medical Commission: Indian Medical Register", hi: "राष्ट्रीय आयुर्विज्ञान आयोग: भारतीय चिकित्सा रजिस्टर", gu: "રાષ્ટ્રીય તબીબી આયોગ: ભારતીય તબીબી રજિસ્ટર" },
      url: "https://www.nmc.org.in/",
      note: { en: "Search whether a doctor is actually registered to practise in India.", hi: "जाँचें कि कोई डॉक्टर वास्तव में भारत में प्रैक्टिस के लिए पंजीकृत है या नहीं।", gu: "ચકાસો કે કોઈ ડૉક્ટર ખરેખર ભારતમાં પ્રેક્ટિસ માટે નોંધાયેલ છે કે નહીં." },
    },
    {
      kind: "official",
      label: { en: "Advertising Standards Council of India", hi: "भारतीय विज्ञापन मानक परिषद", gu: "ભારતીય જાહેરાત ધોરણ પરિષદ" },
      url: "https://www.ascionline.in/",
      note: { en: "Complain about misleading advertisements here.", hi: "भ्रामक विज्ञापनों की शिकायत यहाँ करें।", gu: "ભ્રામક જાહેરાતોની ફરિયાદ અહીં કરો." },
    },
  ],
};
