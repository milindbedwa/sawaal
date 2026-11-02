import type { Story, L10n, Source } from "../types";

/* Characters (fictional) */
const KIRAN: L10n = { en: "Kiran", hi: "किरण", gu: "કિરણ" };
const TARA: L10n = { en: "Tara", hi: "तारा", gu: "તારા" };
const MA: L10n = { en: "Ma", hi: "माँ", gu: "મા" };
const GROUP: L10n = { en: "Sunrise Colony Group", hi: "सनराइज़ कॉलोनी ग्रुप", gu: "સનરાઇઝ કૉલોની ગ્રુપ" };

/* The forward itself, reused so it reads as one message */
const FORWARD_LINES: L10n[] = [
  {
    en: "URGENT: Tap water in our area is contaminated. Do NOT drink directly.",
    hi: "ज़रूरी: हमारे इलाके का नल का पानी दूषित है। सीधे न पिएँ।",
    gu: "તાત્કાલિક: આપણા વિસ્તારનું નળનું પાણી દૂષિત છે. સીધું ન પીશો.",
  },
  {
    en: "Boil for 20 minutes or buy a PureDrop filter today.",
    hi: "20 मिनट उबालें या आज ही PureDrop फ़िल्टर खरीदें।",
    gu: "20 મિનિટ ઉકાળો અથવા આજે જ PureDrop ફિલ્ટર ખરીદો.",
  },
  {
    en: "Forwarded by a doctor. Share with everyone you love!",
    hi: "एक डॉक्टर ने फ़ॉरवर्ड किया है। अपने सभी प्रियजनों को भेजें!",
    gu: "એક ડૉક્ટરે ફૉરવર્ડ કર્યું છે. તમારા બધા પ્રિયજનોને મોકલો!",
  },
];

const SRC_PIB: Source = {
  kind: "official",
  label: { en: "PIB Fact Check (Government of India)", hi: "PIB फ़ैक्ट चेक (भारत सरकार)", gu: "PIB ફેક્ટ ચેક (ભારત સરકાર)" },
  url: "https://factcheck.pib.gov.in/",
  note: {
    en: "The Press Information Bureau's unit that checks viral claims about government matters and publishes what is true.",
    hi: "प्रेस सूचना ब्यूरो की इकाई जो सरकारी मामलों पर वायरल दावों की जाँच करती है और सच बताती है।",
    gu: "પ્રેસ ઇન્ફર્મેશન બ્યુરોનો વિભાગ જે સરકારી બાબતો પરના વાયરલ દાવા તપાસે છે અને સાચું શું છે તે જણાવે છે.",
  },
};

const SRC_WHO: Source = {
  kind: "guide",
  label: {
    en: "WHO: Let's flatten the infodemic curve",
    hi: "WHO: इन्फ़ोडेमिक की लहर को कम करें",
    gu: "WHO: ઇન્ફોડેમિકની લહેરને ઓછી કરીએ",
  },
  url: "https://www.who.int/news-room/spotlight/let-s-flatten-the-infodemic-curve",
  note: {
    en: "WHO's plain guide on why false health information spreads and how to check before sharing.",
    hi: "WHO की सरल गाइड: स्वास्थ्य की झूठी जानकारी क्यों फैलती है और शेयर करने से पहले कैसे जाँचें।",
    gu: "WHOની સરળ માર્ગદર્શિકા: ખોટી આરોગ્ય માહિતી કેમ ફેલાય છે અને શેર કરતાં પહેલાં કેવી રીતે તપાસવું.",
  },
};

const SRC_WA: Source = {
  kind: "reference",
  label: {
    en: "WhatsApp: about forwarded message labels",
    hi: "WhatsApp: फ़ॉरवर्ड किए गए संदेश के लेबल के बारे में",
    gu: "WhatsApp: ફૉરવર્ડ કરેલા સંદેશના લેબલ વિશે",
  },
  url: "https://faq.whatsapp.com/",
  note: {
    en: "Explains the 'Forwarded' and 'Forwarded many times' labels, which show a message did not start with the sender.",
    hi: "'फ़ॉरवर्ड किया गया' और 'कई बार फ़ॉरवर्ड किया गया' लेबल समझाता है, जो बताते हैं कि संदेश भेजने वाले ने नहीं लिखा।",
    gu: "'ફૉરવર્ડ કરેલું' અને 'ઘણી વાર ફૉરવર્ડ કરેલું' લેબલ સમજાવે છે, જે બતાવે છે કે સંદેશ મોકલનારે લખ્યો નથી.",
  },
};

export const viralMessageStory: Story = {
  id: "viral-message",
  slug: "the-viral-message",
  topic: "misinformation",
  accent: "amber",
  title: { en: "The Viral Message", hi: "वायरल मैसेज", gu: "વાયરલ મેસેજ" },
  tagline: {
    en: "A forward lands in your group. What happens next is up to you.",
    hi: "एक फ़ॉरवर्ड आपके ग्रुप में आता है। आगे क्या होगा, यह आप पर है।",
    gu: "એક ફૉરવર્ડ તમારા ગ્રુપમાં આવે છે. આગળ શું થશે, તે તમારા પર છે.",
  },
  start: "start",
  nodes: [
    /* ---------------- (a) The forward ---------------- */
    {
      id: "start",
      scene: {
        kind: "chat",
        sender: GROUP,
        forwarded: true,
        lines: FORWARD_LINES,
        time: "7:42 am",
      },
      text: {
        en: "Tuesday morning. Kiran's phone buzzes. The colony group has 40 new messages, all about this one forward.",
        hi: "मंगलवार की सुबह। किरण का फ़ोन बजता है। कॉलोनी ग्रुप में 40 नए मैसेज हैं, सब इसी एक फ़ॉरवर्ड पर।",
        gu: "મંગળવારની સવાર. કિરણનો ફોન વાગે છે. કૉલોની ગ્રુપમાં 40 નવા મેસેજ છે, બધા આ એક ફૉરવર્ડ વિશે.",
      },
      choices: [
        { label: { en: "Forward it to family", hi: "परिवार को फ़ॉरवर्ड करें", gu: "પરિવારને ફૉરવર્ડ કરો" }, next: "forwarded" },
        { label: { en: "Ask: which doctor, which area?", hi: "पूछें: कौन डॉक्टर, कौन इलाका?", gu: "પૂછો: કયા ડૉક્ટર, કયો વિસ્તાર?" }, next: "ask-doctor" },
        { label: { en: "Check the Water Board's notice", hi: "वॉटर बोर्ड का नोटिस देखें", gu: "વૉટર બોર્ડની નોટિસ જુઓ" }, next: "learn-source" },
      ],
    },
    {
      id: "forwarded",
      scene: {
        kind: "street",
        setting: "home",
        figures: [
          { x: 35, pose: "stand", color: "amber", facing: "right", name: KIRAN },
          {
            x: 65,
            pose: "think",
            color: "cobalt",
            facing: "left",
            name: MA,
            says: { en: "Should I throw out the morning's water?", hi: "सुबह का पानी फेंक दूँ?", gu: "સવારનું પાણી ફેંકી દઉં?" },
          },
        ],
      },
      text: {
        en: "You forward it to the family group. Within minutes Ma calls. Your cousin has sent it to three more groups.",
        hi: "आप इसे परिवार के ग्रुप में फ़ॉरवर्ड करते हैं। मिनटों में माँ का फ़ोन आता है। कज़िन ने इसे तीन और ग्रुप में भेज दिया है।",
        gu: "તમે તેને પરિવારના ગ્રુપમાં ફૉરવર્ડ કરો છો. મિનિટોમાં માનો ફોન આવે છે. કઝિને તેને બીજા ત્રણ ગ્રુપમાં મોકલી દીધું છે.",
      },
      choices: [
        { label: { en: "Check the source now", hi: "अब स्रोत जाँचें", gu: "હવે સ્રોત તપાસો" }, next: "learn-source" },
        { label: { en: "Go buy a filter", hi: "फ़िल्टर खरीदने जाएँ", gu: "ફિલ્ટર ખરીદવા જાઓ" }, next: "tara" },
        { label: { en: "Leave it, others will check", hi: "छोड़ो, कोई और जाँचेगा", gu: "છોડો, બીજા તપાસશે" }, next: "ending-open" },
      ],
    },
    {
      id: "ask-doctor",
      scene: {
        kind: "chat",
        sender: GROUP,
        lines: [
          { en: "Kiran: Which doctor? Which area is this about?", hi: "किरण: कौन डॉक्टर? यह किस इलाके की बात है?", gu: "કિરણ: કયા ડૉક્ટર? આ કયા વિસ્તારની વાત છે?" },
          { en: "Dev: Not sure, it came from my cousin's group.", hi: "देव: पता नहीं, मेरे कज़िन के ग्रुप से आया था।", gu: "દેવ: ખબર નથી, મારા કઝિનના ગ્રુપમાંથી આવ્યું હતું." },
          { en: "Meera: Why ask so much? Just boil to be safe!", hi: "मीरा: इतना क्यों पूछना? बस उबाल लो, सुरक्षित रहो!", gu: "મીરા: આટલું શું પૂછવું? બસ ઉકાળી લો, સલામત રહો!" },
        ],
        time: "7:51 am",
      },
      text: {
        en: "You ask in the group. Nobody knows who the doctor is. Meera thinks asking is a waste of time.",
        hi: "आप ग्रुप में पूछते हैं। किसी को नहीं पता कि डॉक्टर कौन है। मीरा को लगता है पूछना समय की बर्बादी है।",
        gu: "તમે ગ્રુપમાં પૂછો છો. કોઈને ખબર નથી કે ડૉક્ટર કોણ છે. મીરાને લાગે છે કે પૂછવું સમયનો બગાડ છે.",
      },
      choices: [
        { label: { en: "Look at the message again", hi: "मैसेज को फिर से देखें", gu: "મેસેજ ફરી જુઓ" }, next: "learn-source" },
        { label: { en: "See what's happening downstairs", hi: "देखें नीचे क्या हो रहा है", gu: "જુઓ નીચે શું થઈ રહ્યું છે" }, next: "tara" },
      ],
    },
    {
      id: "learn-source",
      scene: {
        kind: "chat",
        sender: { en: "Dev", hi: "देव", gu: "દેવ" },
        forwarded: true,
        lines: FORWARD_LINES,
        time: "7:42 am",
      },
      text: {
        en: "Look again. 'Forwarded many times.' No doctor's name. No date. No area named. Anyone could have typed this.",
        hi: "फिर से देखें। 'कई बार फ़ॉरवर्ड किया गया।' डॉक्टर का नाम नहीं। तारीख नहीं। इलाका नहीं। यह कोई भी लिख सकता था।",
        gu: "ફરી જુઓ. 'ઘણી વાર ફૉરવર્ડ કરેલું.' ડૉક્ટરનું નામ નથી. તારીખ નથી. વિસ્તાર નથી. આ કોઈ પણ લખી શક્યું હોત.",
      },
      choices: [],
      learn: {
        title: { en: "Who said it, and where?", hi: "किसने कहा, और कहाँ?", gu: "કોણે કહ્યું, અને ક્યાં?" },
        body: {
          en: "A message you can trust names its source: who said it, when, and for which area. 'A doctor', with no name, no date and a 'forwarded many times' label, is not a source. Trace it before you act or share.",
          hi: "भरोसे लायक़ मैसेज अपना स्रोत बताता है: किसने कहा, कब, और किस इलाके के लिए। बिना नाम, बिना तारीख और 'कई बार फ़ॉरवर्ड' लेबल वाला 'एक डॉक्टर' कोई स्रोत नहीं है। कुछ करने या शेयर करने से पहले उसे खोजें।",
          gu: "ભરોસાપાત્ર મેસેજ પોતાનો સ્રોત જણાવે છે: કોણે કહ્યું, ક્યારે, અને કયા વિસ્તાર માટે. નામ વગર, તારીખ વગર અને 'ઘણી વાર ફૉરવર્ડ' લેબલવાળો 'એક ડૉક્ટર' સ્રોત નથી. કંઈ કરતાં કે શેર કરતાં પહેલાં તેને શોધો.",
        },
        sources: [SRC_WA],
      },
      next: "tara",
    },

    /* ---------------- (b) Tara and the filters ---------------- */
    {
      id: "tara",
      scene: {
        kind: "street",
        setting: "street",
        sign: { en: "PureDrop filters · ₹2,400 · today only", hi: "PureDrop फ़िल्टर · ₹2,400 · सिर्फ़ आज", gu: "PureDrop ફિલ્ટર · ₹2,400 · ફક્ત આજે" },
        figures: [
          {
            x: 28,
            pose: "point",
            color: "rose",
            facing: "right",
            name: TARA,
            says: { en: "Only ₹2,400. Doctor-recommended!", hi: "सिर्फ़ ₹2,400। डॉक्टर की सलाह!", gu: "ફક્ત ₹2,400. ડૉક્ટરની સલાહ!" },
          },
          { x: 52, pose: "stand", color: "cobalt", facing: "left", scale: 0.85 },
          { x: 76, pose: "think", color: "amber", facing: "left", name: KIRAN },
        ],
      },
      text: {
        en: "Downstairs, Tara has a stack of filter boxes. The same filter was ₹1,500 online last week. A small queue is forming.",
        hi: "नीचे तारा के पास फ़िल्टर के डिब्बों का ढेर है। वही फ़िल्टर पिछले हफ़्ते ऑनलाइन ₹1,500 का था। छोटी-सी लाइन लग रही है।",
        gu: "નીચે તારા પાસે ફિલ્ટરના બૉક્સનો ઢગલો છે. એ જ ફિલ્ટર ગયા અઠવાડિયે ઑનલાઇન ₹1,500નું હતું. નાની લાઇન લાગી રહી છે.",
      },
      choices: [
        { label: { en: "Tell her it's a scam, loudly", hi: "ज़ोर से कहें, यह धोखा है", gu: "જોરથી કહો, આ છેતરપિંડી છે" }, next: "confront" },
        { label: { en: "Ask where she heard it", hi: "पूछें, उसने कहाँ सुना", gu: "પૂછો, તેણે ક્યાં સાંભળ્યું" }, next: "ask-tara" },
        { label: { en: "Stay quiet", hi: "चुप रहें", gu: "શાંત રહો" }, next: "notice" },
      ],
    },
    {
      id: "confront",
      scene: {
        kind: "street",
        setting: "street",
        figures: [
          {
            x: 30,
            pose: "arms-crossed",
            color: "rose",
            facing: "right",
            name: TARA,
            says: { en: "I'm only helping people!", hi: "मैं तो बस लोगों की मदद कर रही हूँ!", gu: "હું તો ફક્ત લોકોને મદદ કરું છું!" },
          },
          { x: 52, pose: "stand", color: "cobalt", facing: "right", scale: 0.85 },
          {
            x: 74,
            pose: "point",
            color: "amber",
            facing: "left",
            name: KIRAN,
            says: { en: "You're profiting from panic!", hi: "तुम डर से कमाई कर रही हो!", gu: "તું ડરથી કમાણી કરે છે!" },
          },
        ],
      },
      text: {
        en: "Voices rise. Neighbours take sides. Nobody learns anything new about the water.",
        hi: "आवाज़ें ऊँची होती हैं। पड़ोसी पक्ष लेते हैं। पानी के बारे में कोई कुछ नया नहीं जानता।",
        gu: "અવાજો ઊંચા થાય છે. પડોશીઓ પક્ષ લે છે. પાણી વિશે કોઈ કંઈ નવું જાણતું નથી.",
      },
      choices: [
        { label: { en: "Go find the official notice", hi: "आधिकारिक नोटिस खोजें", gu: "અધિકૃત નોટિસ શોધો" }, next: "notice" },
        { label: { en: "Walk away, not worth it", hi: "चले जाएँ, कोई फ़ायदा नहीं", gu: "ચાલ્યા જાઓ, કોઈ ફાયદો નથી" }, next: "ending-open" },
      ],
    },
    {
      id: "ask-tara",
      scene: {
        kind: "street",
        setting: "street",
        figures: [
          {
            x: 30,
            pose: "think",
            color: "rose",
            facing: "right",
            name: TARA,
            says: { en: "It was in the group... a doctor said so.", hi: "ग्रुप में था... किसी डॉक्टर ने कहा था।", gu: "ગ્રુપમાં હતું... કોઈ ડૉક્ટરે કહ્યું હતું." },
          },
          { x: 70, pose: "stand", color: "amber", facing: "left", name: KIRAN },
        ],
      },
      text: {
        en: "Tara pauses. She has not seen the doctor's name either. She looks less sure than a minute ago.",
        hi: "तारा रुकती है। उसने भी डॉक्टर का नाम नहीं देखा। वह एक मिनट पहले से कम यक़ीन में दिखती है।",
        gu: "તારા અટકે છે. તેણે પણ ડૉક્ટરનું નામ જોયું નથી. તે એક મિનિટ પહેલાં કરતાં ઓછી ખાતરીવાળી દેખાય છે.",
      },
      choices: [
        { label: { en: "Look up the Water Board together", hi: "साथ में वॉटर बोर्ड देखें", gu: "સાથે વૉટર બોર્ડ જુઓ" }, next: "notice" },
        { label: { en: "Leave it there", hi: "बात वहीं छोड़ दें", gu: "વાત ત્યાં જ છોડો" }, next: "ending-open" },
      ],
    },

    /* ---------------- (c) The real notice ---------------- */
    {
      id: "notice",
      scene: {
        kind: "notice",
        title: {
          en: "Municipal Water Board — Public Notice (sample)",
          hi: "नगर जल बोर्ड — सार्वजनिक सूचना (नमूना)",
          gu: "નગર જળ બોર્ડ — જાહેર સૂચના (નમૂનો)",
        },
        body: {
          en: "Routine pipeline repair in Ward 7 from 3 to 5 November. Supply may be at low pressure. Water remains safe to drink. Boil only if it looks visibly dirty.",
          hi: "वार्ड 7 में 3 से 5 नवंबर तक पाइपलाइन की नियमित मरम्मत। आपूर्ति कम दबाव पर हो सकती है। पानी पीने के लिए सुरक्षित है। सिर्फ़ तब उबालें जब पानी गंदा दिखे।",
          gu: "વૉર્ડ 7માં 3થી 5 નવેમ્બર સુધી પાઇપલાઇનની નિયમિત મરામત. પુરવઠો ઓછા દબાણે હોઈ શકે. પાણી પીવા માટે સલામત છે. પાણી ગંદું દેખાય તો જ ઉકાળો.",
        },
        stamp: { en: "Fictional notice · 1 Nov", hi: "काल्पनिक सूचना · 1 नवंबर", gu: "કાલ્પનિક સૂચના · 1 નવેમ્બર" },
      },
      text: {
        en: "That evening you open the Board's website. A notice from yesterday: routine repair, water safe. Nothing about contamination.",
        hi: "उस शाम आप बोर्ड की वेबसाइट खोलते हैं। कल का नोटिस: नियमित मरम्मत, पानी सुरक्षित। दूषित होने की कोई बात नहीं।",
        gu: "તે સાંજે તમે બોર્ડની વેબસાઇટ ખોલો છો. ગઈકાલની નોટિસ: નિયમિત મરામત, પાણી સલામત. દૂષિત હોવાની કોઈ વાત નથી.",
      },
      choices: [
        { label: { en: "Post it in the group", hi: "ग्रुप में पोस्ट करें", gu: "ગ્રુપમાં પોસ્ટ કરો" }, next: "learn-gentle" },
        { label: { en: "Message Dev privately first", hi: "पहले देव को अकेले मैसेज करें", gu: "પહેલાં દેવને અંગત મેસેજ કરો" }, next: "private" },
        { label: { en: "Do nothing", hi: "कुछ न करें", gu: "કંઈ ન કરો" }, next: "ending-open" },
      ],
    },
    {
      id: "learn-gentle",
      scene: {
        kind: "chat",
        sender: GROUP,
        lines: [
          { en: "Meera: Boiled 10 litres already!", hi: "मीरा: 10 लीटर उबाल भी लिया!", gu: "મીરા: 10 લિટર ઉકાળી પણ લીધું!" },
          { en: "Ravi: My brother says the doctor is real.", hi: "रवि: मेरा भाई कहता है डॉक्टर असली है।", gu: "રવિ: મારો ભાઈ કહે છે ડૉક્ટર સાચા છે." },
          { en: "Tara: 4 filters left, hurry.", hi: "तारा: 4 फ़िल्टर बचे हैं, जल्दी करो।", gu: "તારા: 4 ફિલ્ટર બાકી છે, ઉતાવળ કરો." },
        ],
        time: "8:05 pm",
      },
      text: {
        en: "Before you type, think about how corrections land. Nobody enjoys finding out they spread a false alarm.",
        hi: "टाइप करने से पहले सोचें कि सुधार कैसे लगता है। किसी को यह जानकर अच्छा नहीं लगता कि उसने झूठी ख़बर फैलाई।",
        gu: "ટાઇપ કરતાં પહેલાં વિચારો કે સુધારો કેવો લાગે છે. કોઈને એ જાણવું ગમતું નથી કે તેણે ખોટી ખબર ફેલાવી.",
      },
      choices: [],
      learn: {
        title: { en: "Correct gently", hi: "नरमी से सुधारें", gu: "નરમાશથી સુધારો" },
        body: {
          en: "Corrections work better without shaming. People defend what they shared when they feel foolish. Share the official source, call it an easy mistake, and leave room for others to change their mind quietly.",
          hi: "सुधार बिना शर्मिंदा किए बेहतर काम करता है। जब लोग मूर्ख महसूस करते हैं तो अपनी बात का बचाव करते हैं। आधिकारिक स्रोत शेयर करें, इसे आसान ग़लती कहें, और लोगों को चुपचाप राय बदलने की जगह दें।",
          gu: "સુધારો શરમાવ્યા વગર વધુ સારું કામ કરે છે. લોકો મૂર્ખ લાગે ત્યારે પોતાની વાતનો બચાવ કરે છે. અધિકૃત સ્રોત શેર કરો, તેને સહજ ભૂલ કહો, અને લોકોને શાંતિથી મત બદલવાની જગ્યા આપો.",
        },
        sources: [SRC_WHO],
      },
      next: "post-how",
    },
    {
      id: "post-how",
      scene: {
        kind: "chat",
        sender: GROUP,
        lines: [
          {
            en: "Kiran: I checked the Water Board's site. Routine repair only, water is safe. Link below.",
            hi: "किरण: मैंने वॉटर बोर्ड की साइट देखी। सिर्फ़ नियमित मरम्मत है, पानी सुरक्षित है। लिंक नीचे।",
            gu: "કિરણ: મેં વૉટર બોર્ડની સાઇટ જોઈ. ફક્ત નિયમિત મરામત છે, પાણી સલામત છે. લિંક નીચે.",
          },
          { en: "Meera: Oh good!", hi: "मीरा: अरे अच्छा!", gu: "મીરા: અરે સારું!" },
          { en: "Ravi: Websites can be wrong too.", hi: "रवि: वेबसाइट भी ग़लत हो सकती है।", gu: "રવિ: વેબસાઇટ પણ ખોટી હોઈ શકે." },
        ],
        time: "8:12 pm",
      },
      text: {
        en: "Your post is up with the link. Some are relieved. Ravi is not convinced. Tara has gone quiet.",
        hi: "आपकी पोस्ट लिंक के साथ आ गई है। कुछ को राहत मिली। रवि को यक़ीन नहीं। तारा चुप हो गई है।",
        gu: "તમારી પોસ્ટ લિંક સાથે આવી ગઈ છે. કેટલાકને રાહત થઈ. રવિને ખાતરી નથી. તારા શાંત થઈ ગઈ છે.",
      },
      choices: [
        { label: { en: "Reply: 'Stop spreading rumours, people'", hi: "जवाब: 'अफ़वाहें फैलाना बंद करो, लोग'", gu: "જવાબ: 'અફવાઓ ફેલાવવી બંધ કરો, લોકો'" }, next: "ending-mixed" },
        { label: { en: "Reply: 'Easy mistake, here's the helpline'", hi: "जवाब: 'आसान ग़लती, हेल्पलाइन यह है'", gu: "જવાબ: 'સહજ ભૂલ, હેલ્પલાઇન આ છે'" }, next: "ending-hopeful" },
      ],
    },
    {
      id: "private",
      scene: {
        kind: "chat",
        sender: { en: "Dev (private)", hi: "देव (निजी)", gu: "દેવ (અંગત)" },
        lines: [
          {
            en: "Kiran: Bhai, did you check this? Board site says routine repair, water safe.",
            hi: "किरण: भाई, तुमने जाँचा था? बोर्ड की साइट कहती है नियमित मरम्मत, पानी सुरक्षित।",
            gu: "કિરણ: ભાઈ, તમે તપાસ્યું હતું? બોર્ડની સાઇટ કહે છે નિયમિત મરામત, પાણી સલામત.",
          },
          {
            en: "Dev: Oh. I just forwarded it. Sorry. Posting the correction now.",
            hi: "देव: अरे। मैंने बस फ़ॉरवर्ड कर दिया था। माफ़ करना। अभी सुधार पोस्ट करता हूँ।",
            gu: "દેવ: અરે. મેં બસ ફૉરવર્ડ કરી દીધું હતું. માફ કરજો. હમણાં સુધારો પોસ્ટ કરું છું.",
          },
        ],
        time: "8:09 pm",
      },
      text: {
        en: "Dev replies in a minute. He feels bad, but not attacked. He offers to post the correction himself.",
        hi: "देव एक मिनट में जवाब देता है। उसे बुरा लगता है, पर हमला नहीं महसूस होता। वह खुद सुधार पोस्ट करने को कहता है।",
        gu: "દેવ એક મિનિટમાં જવાબ આપે છે. તેને ખરાબ લાગે છે, પણ હુમલો નહીં. તે પોતે સુધારો પોસ્ટ કરવાની વાત કરે છે.",
      },
      choices: [
        { label: { en: "Thank him, let him post it", hi: "धन्यवाद कहें, उसे पोस्ट करने दें", gu: "આભાર કહો, તેને પોસ્ટ કરવા દો" }, next: "ending-hopeful" },
        { label: { en: "Tell him to also apologise publicly", hi: "कहें, सबके सामने माफ़ी भी माँगो", gu: "કહો, બધાની સામે માફી પણ માગો" }, next: "ending-mixed" },
      ],
    },

    /* ---------------- Endings ---------------- */
    {
      id: "ending-hopeful",
      scene: {
        kind: "chat",
        sender: GROUP,
        lines: [
          {
            en: "Dev: Checked with the Water Board. Routine repair, water is safe. Sorry for the panic!",
            hi: "देव: वॉटर बोर्ड से जाँचा। नियमित मरम्मत है, पानी सुरक्षित है। घबराहट के लिए माफ़ी!",
            gu: "દેવ: વૉટર બોર્ડ પાસે તપાસ્યું. નિયમિત મરામત છે, પાણી સલામત છે. ગભરાટ માટે માફી!",
          },
          { en: "Meera: Thanks! Boiled for nothing.", hi: "मीरा: धन्यवाद! बेकार में उबाला।", gu: "મીરા: આભાર! નકામું ઉકાળ્યું." },
          {
            en: "Tara: Filters at cost price for anyone who still wants one.",
            hi: "तारा: जिसे अब भी चाहिए, फ़िल्टर लागत पर मिलेगा।",
            gu: "તારા: જેને હજી જોઈએ, ફિલ્ટર પડતર કિંમતે મળશે.",
          },
        ],
        time: "9:30 pm",
      },
      text: {
        en: "By night the group has calmed down. The notice link is pinned. Tara quietly drops her price.",
        hi: "रात तक ग्रुप शांत हो गया है। नोटिस का लिंक पिन है। तारा चुपचाप दाम कम कर देती है।",
        gu: "રાત સુધીમાં ગ્રુપ શાંત થઈ ગયું છે. નોટિસની લિંક પિન છે. તારા શાંતિથી ભાવ ઓછો કરે છે.",
      },
      choices: [],
      ending: {
        tone: "hopeful",
        summary: {
          en: "The group calmed because someone traced the source and shared it kindly. Next time a forward lands, a few more people will pause.",
          hi: "ग्रुप इसलिए शांत हुआ क्योंकि किसी ने स्रोत खोजा और नरमी से बताया। अगली बार फ़ॉरवर्ड आएगा तो कुछ और लोग रुकेंगे।",
          gu: "ગ્રુપ એટલે શાંત થયું કારણ કે કોઈએ સ્રોત શોધ્યો અને નરમાશથી જણાવ્યું. આગલી વાર ફૉરવર્ડ આવશે ત્યારે થોડા વધુ લોકો અટકશે.",
        },
      },
    },
    {
      id: "ending-mixed",
      scene: {
        kind: "chat",
        sender: GROUP,
        lines: [
          { en: "Ravi: The Board site can also be hacked.", hi: "रवि: बोर्ड की साइट भी हैक हो सकती है।", gu: "રવિ: બોર્ડની સાઇટ પણ હેક થઈ શકે." },
          { en: "Salma: Thanks for the link, stopping the boiling.", hi: "सलमा: लिंक के लिए धन्यवाद, उबालना बंद।", gu: "સલમા: લિંક માટે આભાર, ઉકાળવું બંધ." },
          { en: "Tara: People can decide for themselves.", hi: "तारा: लोग खुद तय कर सकते हैं।", gu: "તારા: લોકો પોતે નક્કી કરી શકે છે." },
        ],
        time: "9:30 pm",
      },
      text: {
        en: "Some argue, some thank you. Tara sells two more filters. But the Board's notice is in the group now, for anyone who scrolls up.",
        hi: "कुछ बहस करते हैं, कुछ धन्यवाद देते हैं। तारा दो और फ़िल्टर बेचती है। पर बोर्ड का नोटिस अब ग्रुप में है, जो भी ऊपर स्क्रॉल करे।",
        gu: "કેટલાક દલીલ કરે છે, કેટલાક આભાર કહે છે. તારા બે વધુ ફિલ્ટર વેચે છે. પણ બોર્ડની નોટિસ હવે ગ્રુપમાં છે, જે કોઈ ઉપર સ્ક્રોલ કરે તેના માટે.",
      },
      choices: [],
      ending: {
        tone: "mixed",
        summary: {
          en: "Not everyone changed their mind, and that is normal. The correction is there now, with a source, for the people who want it.",
          hi: "सबने राय नहीं बदली, और यह सामान्य है। सुधार अब स्रोत के साथ वहाँ है, उन लोगों के लिए जो चाहें।",
          gu: "બધાએ મત બદલ્યો નહીં, અને એ સામાન્ય છે. સુધારો હવે સ્રોત સાથે ત્યાં છે, જે લોકો ઇચ્છે તેમના માટે.",
        },
      },
    },
    {
      id: "ending-open",
      scene: {
        kind: "street",
        setting: "home",
        figures: [
          {
            x: 35,
            pose: "think",
            color: "amber",
            facing: "right",
            name: KIRAN,
            says: { en: "Was it ever really contaminated?", hi: "क्या पानी सच में दूषित था?", gu: "પાણી સાચે જ દૂષિત હતું?" },
          },
          {
            x: 65,
            pose: "stand",
            color: "cobalt",
            facing: "left",
            name: MA,
            says: { en: "The filter box is still unopened.", hi: "फ़िल्टर का डिब्बा अभी भी बंद है।", gu: "ફિલ્ટરનું બૉક્સ હજી ખોલ્યું નથી." },
          },
        ],
      },
      text: {
        en: "A week later the group has moved on. Some bought filters. Nobody ever posted what was actually true.",
        hi: "एक हफ़्ते बाद ग्रुप आगे बढ़ गया है। कुछ ने फ़िल्टर खरीदे। किसी ने कभी नहीं बताया कि सच क्या था।",
        gu: "એક અઠવાડિયા પછી ગ્રુપ આગળ વધી ગયું છે. કેટલાકે ફિલ્ટર ખરીદ્યાં. કોઈએ કદી જણાવ્યું નહીં કે સાચું શું હતું.",
      },
      choices: [],
      ending: {
        tone: "open",
        summary: {
          en: "Nothing terrible happened this time. But a check that is never made, or never shared, leaves everyone guessing next time too.",
          hi: "इस बार कुछ बुरा नहीं हुआ। पर जो जाँच कभी हुई ही नहीं, या बताई नहीं गई, वह अगली बार भी सबको अंदाज़े पर छोड़ देती है।",
          gu: "આ વખતે કંઈ ખરાબ થયું નહીં. પણ જે તપાસ કદી થઈ જ નહીં, કે જણાવાઈ નહીં, તે આગલી વાર પણ બધાને અંદાજ પર છોડી દે છે.",
        },
      },
    },
  ],
  reflection: {
    insight: { en: "Trace the source before you share.", hi: "शेयर करने से पहले स्रोत खोजें।", gu: "શેર કરતાં પહેલાં સ્રોત શોધો." },
    body: {
      en: "Panic forwards feel urgent because they skip the boring parts: who said it, when, and where. A minute on the official source, shared without blame, can calm a whole group.",
      hi: "घबराहट वाले फ़ॉरवर्ड इसलिए ज़रूरी लगते हैं क्योंकि वे उबाऊ हिस्से छोड़ देते हैं: किसने कहा, कब, और कहाँ। आधिकारिक स्रोत पर एक मिनट, बिना दोष दिए शेयर किया जाए, तो पूरा ग्रुप शांत हो सकता है।",
      gu: "ગભરાટવાળા ફૉરવર્ડ એટલે તાત્કાલિક લાગે છે કારણ કે તે કંટાળાજનક ભાગો છોડી દે છે: કોણે કહ્યું, ક્યારે, અને ક્યાં. અધિકૃત સ્રોત પર એક મિનિટ, દોષ વગર શેર કરો, તો આખું ગ્રુપ શાંત થઈ શકે.",
    },
  },
  sources: [SRC_PIB, SRC_WHO, SRC_WA],
  claimKind: "fact",
  reviewedOn: "2026-11-02",
  durationSec: 120,
};
