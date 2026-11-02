import type { Story, L10n, Source } from "../types";

/* Characters (fictional) */
const ASHA: L10n = { en: "Asha", hi: "आशा", gu: "આશા" };
const CLERK: L10n = { en: "Clerk", hi: "क्लर्क", gu: "ક્લાર્ક" };
const SALMA: L10n = { en: "Salma (officer)", hi: "सलमा (अधिकारी)", gu: "સલમા (અધિકારી)" };
const OFFICE_SIGN: L10n = { en: "Ward Office 7 · Counter 3", hi: "वार्ड कार्यालय 7 · काउंटर 3", gu: "વૉર્ડ કાર્યાલય 7 · કાઉન્ટર 3" };

const SRC_RTI: Source = {
  kind: "law",
  label: { en: "Right to Information Act, 2005 (rti.gov.in)", hi: "सूचना का अधिकार अधिनियम, 2005 (rti.gov.in)", gu: "માહિતી અધિકાર અધિનિયમ, 2005 (rti.gov.in)" },
  url: "https://rti.gov.in/",
  note: {
    en: "Any citizen can ask a public authority for information. The authority must normally reply within 30 days.",
    hi: "कोई भी नागरिक सार्वजनिक प्राधिकरण से जानकारी माँग सकता है। प्राधिकरण को सामान्यतः 30 दिनों में जवाब देना होता है।",
    gu: "કોઈ પણ નાગરિક જાહેર સત્તામંડળ પાસે માહિતી માગી શકે છે. સત્તામંડળે સામાન્ય રીતે 30 દિવસમાં જવાબ આપવો પડે છે.",
  },
};

const SRC_CPGRAMS: Source = {
  kind: "official",
  label: { en: "CPGRAMS: Centralised Public Grievance Redress portal", hi: "CPGRAMS: केंद्रीकृत लोक शिकायत निवारण पोर्टल", gu: "CPGRAMS: કેન્દ્રીકૃત જાહેર ફરિયાદ નિવારણ પોર્ટલ" },
  url: "https://pgportal.gov.in/",
  note: {
    en: "The Government of India's online portal to file a grievance against a public office and track it with a registration number.",
    hi: "भारत सरकार का ऑनलाइन पोर्टल, जहाँ किसी सरकारी कार्यालय के विरुद्ध शिकायत दर्ज कर पंजीकरण संख्या से ट्रैक कर सकते हैं।",
    gu: "ભારત સરકારનું ઑનલાઇન પોર્ટલ, જ્યાં સરકારી કાર્યાલય વિરુદ્ધ ફરિયાદ નોંધાવી નોંધણી નંબરથી ટ્રૅક કરી શકાય.",
  },
};

const SRC_PCA: Source = {
  kind: "law",
  label: { en: "Prevention of Corruption Act, 1988 (India Code)", hi: "भ्रष्टाचार निवारण अधिनियम, 1988 (India Code)", gu: "ભ્રષ્ટાચાર નિવારણ અધિનિયમ, 1988 (India Code)" },
  url: "https://www.indiacode.nic.in/",
  note: {
    en: "Makes taking a bribe by a public servant a crime. A 2018 amendment also made giving a bribe an offence.",
    hi: "लोक सेवक द्वारा रिश्वत लेना अपराध बनाता है। 2018 के संशोधन ने रिश्वत देना भी अपराध बना दिया।",
    gu: "જાહેર સેવક દ્વારા લાંચ લેવી ગુનો બનાવે છે. 2018ના સુધારાએ લાંચ આપવી પણ ગુનો બનાવી.",
  },
};

const SRC_DARPG: Source = {
  kind: "official",
  label: {
    en: "Dept. of Administrative Reforms & Public Grievances: Citizens' Charters",
    hi: "प्रशासनिक सुधार और लोक शिकायत विभाग: नागरिक चार्टर",
    gu: "પ્રશાસનિક સુધારા અને જાહેર ફરિયાદ વિભાગ: નાગરિક ચાર્ટર",
  },
  url: "https://darpg.gov.in/",
  note: {
    en: "The department that promotes Citizens' Charters: public statements of the services an office provides and the standards it commits to.",
    hi: "वह विभाग जो नागरिक चार्टर को बढ़ावा देता है: किसी कार्यालय की सेवाओं और उसके मानकों का सार्वजनिक विवरण।",
    gu: "તે વિભાગ જે નાગરિક ચાર્ટરને પ્રોત્સાહન આપે છે: કાર્યાલય કઈ સેવાઓ આપે છે અને કયાં ધોરણો પાળે છે તેનું જાહેર નિવેદન.",
  },
};

export const publicOfficeStory: Story = {
  id: "public-office",
  slug: "the-public-office",
  topic: "civic",
  accent: "mint",
  title: { en: "The Public Office", hi: "सरकारी दफ़्तर", gu: "સરકારી કચેરી" },
  tagline: {
    en: "A form, a counter, and a long wait. Who is accountable?",
    hi: "एक फ़ॉर्म, एक काउंटर, और लंबा इंतज़ार। जवाबदेह कौन है?",
    gu: "એક ફૉર્મ, એક કાઉન્ટર, અને લાંબી રાહ. જવાબદાર કોણ છે?",
  },
  start: "start",
  nodes: [
    /* ---------------- (a) The counter ---------------- */
    {
      id: "start",
      scene: {
        kind: "street",
        setting: "office",
        sign: OFFICE_SIGN,
        figures: [
          {
            x: 32,
            pose: "stand",
            color: "mint",
            facing: "right",
            name: ASHA,
            says: { en: "It says 'Aasha'. It should be 'Asha'.", hi: "इसमें 'आषा' लिखा है। 'आशा' होना चाहिए।", gu: "આમાં 'આષા' લખ્યું છે. 'આશા' હોવું જોઈએ." },
          },
          {
            x: 68,
            pose: "sit",
            color: "ink",
            facing: "left",
            name: CLERK,
            says: { en: "Come back next week.", hi: "अगले हफ़्ते आना।", gu: "આવતા અઠવાડિયે આવો." },
          },
        ],
      },
      text: {
        en: "Asha has taken a half day off to fix one letter in her name on the ration card. The clerk barely looks up.",
        hi: "आशा ने राशन कार्ड पर अपने नाम का एक अक्षर ठीक कराने के लिए आधे दिन की छुट्टी ली है। क्लर्क नज़र भी नहीं उठाता।",
        gu: "આશાએ રેશન કાર્ડ પર પોતાના નામનો એક અક્ષર સુધારવા અડધા દિવસની રજા લીધી છે. ક્લાર્ક નજર પણ ઊંચી કરતો નથી.",
      },
      choices: [
        { label: { en: "Go home, try next week", hi: "घर जाएँ, अगले हफ़्ते देखें", gu: "ઘરે જાઓ, આવતા અઠવાડિયે જુઓ" }, next: "middleman" },
        { label: { en: "Ask for the written procedure", hi: "लिखित प्रक्रिया पूछें", gu: "લેખિત પ્રક્રિયા પૂછો" }, next: "charter" },
        { label: { en: "Ask for the officer in charge", hi: "प्रभारी अधिकारी से मिलने को कहें", gu: "ઇન્ચાર્જ અધિકારીને મળવા કહો" }, next: "officer" },
      ],
    },
    {
      id: "charter",
      scene: {
        kind: "notice",
        title: {
          en: "Ward Office 7 — Citizens' Charter (sample)",
          hi: "वार्ड कार्यालय 7 — नागरिक चार्टर (नमूना)",
          gu: "વૉર્ડ કાર્યાલય 7 — નાગરિક ચાર્ટર (નમૂનો)",
        },
        body: {
          en: "Service: Correction of name on ration card. Submit Form C with ID proof. An acknowledgement receipt will be issued. Time limit for disposal: as printed below. Grievance officer: Room 4.",
          hi: "सेवा: राशन कार्ड पर नाम सुधार। पहचान प्रमाण के साथ फ़ॉर्म C जमा करें। पावती रसीद दी जाएगी। निपटान की समय-सीमा: नीचे छपी है। शिकायत अधिकारी: कक्ष 4।",
          gu: "સેવા: રેશન કાર્ડ પર નામ સુધારો. ઓળખ પુરાવા સાથે ફૉર્મ C જમા કરો. પહોંચ રસીદ આપવામાં આવશે. નિકાલની સમય-મર્યાદા: નીચે છાપેલી છે. ફરિયાદ અધિકારી: રૂમ 4.",
        },
        stamp: { en: "Fictional sample", hi: "काल्पनिक नमूना", gu: "કાલ્પનિક નમૂનો" },
      },
      text: {
        en: "Asha asks what the written procedure is. The clerk points to a board by the door she had walked straight past.",
        hi: "आशा पूछती है कि लिखित प्रक्रिया क्या है। क्लर्क दरवाज़े के पास लगे बोर्ड की ओर इशारा करता है, जिसे वह अनदेखा कर आई थी।",
        gu: "આશા પૂછે છે કે લેખિત પ્રક્રિયા શું છે. ક્લાર્ક દરવાજા પાસેના બોર્ડ તરફ આંગળી ચીંધે છે, જેને તે જોયા વગર પસાર થઈ ગઈ હતી.",
      },
      choices: [],
      learn: {
        title: { en: "Citizens' Charters", hi: "नागरिक चार्टर", gu: "નાગરિક ચાર્ટર" },
        body: {
          en: "Many public offices publish a Citizens' Charter: which services they offer, what documents are needed, and how long each should take. You can ask to see it. Once a time limit is written down, 'next week' needs a reason.",
          hi: "कई सरकारी कार्यालय नागरिक चार्टर प्रकाशित करते हैं: कौन-सी सेवाएँ मिलती हैं, कौन-से दस्तावेज़ चाहिए, और हर काम में कितना समय लगना चाहिए। आप इसे देखने को कह सकते हैं। समय-सीमा लिखी हो तो 'अगले हफ़्ते' के लिए कारण चाहिए।",
          gu: "ઘણાં સરકારી કાર્યાલયો નાગરિક ચાર્ટર પ્રકાશિત કરે છે: કઈ સેવાઓ મળે છે, કયા દસ્તાવેજો જોઈએ, અને દરેક કામમાં કેટલો સમય લાગવો જોઈએ. તમે તેને જોવા કહી શકો. સમય-મર્યાદા લખેલી હોય તો 'આવતા અઠવાડિયે' માટે કારણ જોઈએ.",
        },
        sources: [SRC_DARPG],
      },
      next: "receipt",
    },
    {
      id: "officer",
      scene: {
        kind: "street",
        setting: "office",
        sign: { en: "Room 4 · Officer in charge", hi: "कक्ष 4 · प्रभारी अधिकारी", gu: "રૂમ 4 · ઇન્ચાર્જ અધિકારી" },
        figures: [
          { x: 28, pose: "stand", color: "mint", facing: "right", name: ASHA },
          { x: 50, pose: "sit", color: "ink", facing: "right", name: CLERK, scale: 0.9 },
          {
            x: 72,
            pose: "point",
            color: "cobalt",
            facing: "left",
            name: SALMA,
            says: { en: "Why was the form not accepted?", hi: "फ़ॉर्म क्यों नहीं लिया गया?", gu: "ફૉર્મ કેમ ન લેવાયું?" },
          },
        ],
      },
      text: {
        en: "The officer in charge is in Room 4. She listens, then asks the clerk a simple question he cannot answer.",
        hi: "प्रभारी अधिकारी कक्ष 4 में है। वह सुनती है, फिर क्लर्क से एक सीधा सवाल करती है जिसका उसके पास जवाब नहीं।",
        gu: "ઇન્ચાર્જ અધિકારી રૂમ 4માં છે. તે સાંભળે છે, પછી ક્લાર્કને એક સીધો સવાલ કરે છે જેનો તેની પાસે જવાબ નથી.",
      },
      choices: [
        { label: { en: "Ask for a receipt with today's date", hi: "आज की तारीख वाली रसीद माँगें", gu: "આજની તારીખવાળી રસીદ માગો" }, next: "receipt" },
        { label: { en: "Ask where the charter is displayed", hi: "पूछें, चार्टर कहाँ लगा है", gu: "પૂછો, ચાર્ટર ક્યાં લગાવ્યું છે" }, next: "charter" },
      ],
    },
    {
      id: "receipt",
      scene: {
        kind: "street",
        setting: "office",
        sign: OFFICE_SIGN,
        figures: [
          {
            x: 32,
            pose: "stand",
            color: "mint",
            facing: "right",
            name: ASHA,
            says: { en: "And the date, please.", hi: "और तारीख भी, कृपया।", gu: "અને તારીખ પણ, મહેરબાની કરીને." },
          },
          {
            x: 68,
            pose: "sit",
            color: "ink",
            facing: "left",
            name: CLERK,
            says: { en: "Form accepted. Receipt number 0471.", hi: "फ़ॉर्म स्वीकार। रसीद नंबर 0471।", gu: "ફૉર્મ સ્વીકાર્યું. રસીદ નંબર 0471." },
          },
        ],
      },
      text: {
        en: "The form is stamped. Asha has a receipt with a date on it. Outside on the steps, a man has been watching the counter.",
        hi: "फ़ॉर्म पर मुहर लग गई। आशा के पास तारीख वाली रसीद है। बाहर सीढ़ियों पर एक आदमी काउंटर पर नज़र रखे हुए है।",
        gu: "ફૉર્મ પર સિક્કો લાગ્યો. આશા પાસે તારીખવાળી રસીદ છે. બહાર પગથિયાં પર એક માણસ કાઉન્ટર પર નજર રાખી રહ્યો છે.",
      },
      choices: [
        { label: { en: "Go home, wait the stated time", hi: "घर जाएँ, तय समय तक रुकें", gu: "ઘરે જાઓ, નક્કી સમય રાહ જુઓ" }, next: "ending-hopeful" },
        { label: { en: "Hear what the man wants", hi: "सुनें, आदमी क्या चाहता है", gu: "સાંભળો, માણસ શું કહે છે" }, next: "middleman" },
      ],
    },

    /* ---------------- (b) The middleman ---------------- */
    {
      id: "middleman",
      scene: {
        kind: "street",
        setting: "office",
        figures: [
          { x: 30, pose: "stand", color: "mint", facing: "right", name: ASHA },
          {
            x: 70,
            pose: "point",
            color: "plum",
            facing: "left",
            says: { en: "₹500, done by evening. Guaranteed.", hi: "₹500, शाम तक काम हो जाएगा। गारंटी।", gu: "₹500, સાંજ સુધીમાં કામ થઈ જશે. ગેરંટી." },
          },
        ],
      },
      text: {
        en: "'Name correction, aunty? I know people inside. ₹500 and it is done by evening. Otherwise it is next week, next week, next week.'",
        hi: "'नाम सुधार, आंटी? अंदर मेरी पहचान है। ₹500 और शाम तक काम हो जाएगा। नहीं तो अगला हफ़्ता, अगला हफ़्ता, अगला हफ़्ता।'",
        gu: "'નામ સુધારો, આન્ટી? અંદર મારી ઓળખાણ છે. ₹500 અને સાંજ સુધીમાં કામ થઈ જશે. નહીં તો આવતું અઠવાડિયું, આવતું અઠવાડિયું, આવતું અઠવાડિયું.'",
      },
      choices: [
        { label: { en: "Pay him", hi: "उसे पैसे दें", gu: "તેને પૈસા આપો" }, next: "ending-paid" },
        { label: { en: "Refuse politely", hi: "विनम्रता से मना करें", gu: "નમ્રતાથી ના કહો" }, next: "refused" },
        { label: { en: "Ask clerk: is this fee official?", hi: "क्लर्क से पूछें: यह फ़ीस आधिकारिक है?", gu: "ક્લાર્કને પૂછો: આ ફી અધિકૃત છે?" }, next: "learn-bribe" },
      ],
    },
    {
      id: "refused",
      scene: {
        kind: "street",
        setting: "office",
        figures: [
          { x: 30, pose: "sit", color: "mint", facing: "right", name: ASHA },
          {
            x: 70,
            pose: "arms-crossed",
            color: "plum",
            facing: "left",
            says: { en: "Your choice, aunty. Enjoy the wait.", hi: "आपकी मर्ज़ी, आंटी। इंतज़ार कीजिए।", gu: "તમારી મરજી, આન્ટી. રાહ જુઓ." },
          },
        ],
      },
      text: {
        en: "He shrugs and moves on to the next tired face in the queue. Asha sits back down on the bench.",
        hi: "वह कंधे उचकाकर लाइन में अगले थके चेहरे की ओर बढ़ जाता है। आशा फिर बेंच पर बैठ जाती है।",
        gu: "તે ખભા ઉલાળીને લાઇનમાં આગળના થાકેલા ચહેરા તરફ જાય છે. આશા ફરી બેંચ પર બેસે છે.",
      },
      choices: [
        { label: { en: "Ask the clerk about official fees", hi: "क्लर्क से आधिकारिक फ़ीस पूछें", gu: "ક્લાર્કને અધિકૃત ફી વિશે પૂછો" }, next: "learn-bribe" },
        { label: { en: "Just wait", hi: "बस इंतज़ार करें", gu: "બસ રાહ જુઓ" }, next: "stuck" },
      ],
    },
    {
      id: "learn-bribe",
      scene: {
        kind: "street",
        setting: "office",
        sign: OFFICE_SIGN,
        figures: [
          { x: 30, pose: "stand", color: "mint", facing: "right", name: ASHA },
          {
            x: 58,
            pose: "point",
            color: "ink",
            facing: "left",
            name: CLERK,
            says: { en: "No fee for correction. Who told you that?", hi: "सुधार की कोई फ़ीस नहीं। किसने कहा?", gu: "સુધારા માટે કોઈ ફી નથી. કોણે કહ્યું?" },
          },
          { x: 84, pose: "stand", color: "plum", facing: "right", scale: 0.7 },
        ],
      },
      text: {
        en: "The clerk's voice sharpens. 'No fee for correction. Who told you that?' The man in a hurry is suddenly gone.",
        hi: "क्लर्क की आवाज़ तेज़ हो जाती है। 'सुधार की कोई फ़ीस नहीं। किसने कहा?' जल्दी में रहने वाला आदमी अचानक ग़ायब है।",
        gu: "ક્લાર્કનો અવાજ તીખો થાય છે. 'સુધારા માટે કોઈ ફી નથી. કોણે કહ્યું?' ઉતાવળવાળો માણસ અચાનક ગાયબ છે.",
      },
      choices: [],
      learn: {
        title: { en: "Bribes: a crime for both sides", hi: "रिश्वत: दोनों पक्षों के लिए अपराध", gu: "લાંચ: બંને પક્ષ માટે ગુનો" },
        body: {
          en: "Under the Prevention of Corruption Act, 1988, taking a bribe is a crime. Since a 2018 amendment, giving one is an offence too. If a 'fee' has no receipt and no place in the charter, it is not a fee.",
          hi: "भ्रष्टाचार निवारण अधिनियम, 1988 के तहत रिश्वत लेना अपराध है। 2018 के संशोधन के बाद रिश्वत देना भी अपराध है। जिस 'फ़ीस' की कोई रसीद नहीं और चार्टर में कोई जगह नहीं, वह फ़ीस नहीं है।",
          gu: "ભ્રષ્ટાચાર નિવારણ અધિનિયમ, 1988 હેઠળ લાંચ લેવી ગુનો છે. 2018ના સુધારા પછી લાંચ આપવી પણ ગુનો છે. જે 'ફી'ની કોઈ રસીદ નથી અને ચાર્ટરમાં કોઈ જગ્યા નથી, તે ફી નથી.",
        },
        sources: [SRC_PCA],
      },
      next: "stuck",
    },

    /* ---------------- (c) Still stuck ---------------- */
    {
      id: "stuck",
      scene: {
        kind: "street",
        setting: "office",
        sign: OFFICE_SIGN,
        figures: [
          { x: 32, pose: "arms-crossed", color: "mint", facing: "right", name: ASHA },
          {
            x: 68,
            pose: "sit",
            color: "ink",
            facing: "left",
            name: CLERK,
            says: { en: "File is with the officer. Next week.", hi: "फ़ाइल अधिकारी के पास है। अगले हफ़्ते।", gu: "ફાઇલ અધિકારી પાસે છે. આવતા અઠવાડિયે." },
          },
        ],
      },
      text: {
        en: "The stated time has passed. Same counter, same answer. Still no reason in writing.",
        hi: "तय समय बीत गया है। वही काउंटर, वही जवाब। अभी भी कोई लिखित कारण नहीं।",
        gu: "નક્કી સમય વીતી ગયો છે. એ જ કાઉન્ટર, એ જ જવાબ. હજી કોઈ લેખિત કારણ નથી.",
      },
      choices: [
        { label: { en: "File a grievance online (CPGRAMS)", hi: "ऑनलाइन शिकायत करें (CPGRAMS)", gu: "ઑનલાઇન ફરિયાદ કરો (CPGRAMS)" }, next: "grievance" },
        { label: { en: "File an RTI asking the status", hi: "स्थिति पूछते हुए RTI डालें", gu: "સ્થિતિ પૂછતી RTI કરો" }, next: "learn-rti" },
        { label: { en: "Give up for now", hi: "अभी के लिए छोड़ दें", gu: "હમણાં માટે છોડી દો" }, next: "ending-giveup" },
      ],
    },
    {
      id: "grievance",
      scene: {
        kind: "phone",
        variant: "sms",
        from: { en: "CPGRAMS", hi: "CPGRAMS", gu: "CPGRAMS" },
        body: {
          en: "Your grievance is registered. Registration no. WRD7/2026/01843. Track status at pgportal.gov.in",
          hi: "आपकी शिकायत दर्ज हो गई है। पंजीकरण संख्या WRD7/2026/01843। स्थिति pgportal.gov.in पर देखें",
          gu: "તમારી ફરિયાદ નોંધાઈ ગઈ છે. નોંધણી નંબર WRD7/2026/01843. સ્થિતિ pgportal.gov.in પર જુઓ",
        },
        meta: { en: "Sample message", hi: "नमूना संदेश", gu: "નમૂના સંદેશ" },
      },
      text: {
        en: "With her nephew's help, Asha files the grievance online. A registration number arrives by SMS. Now there is a record.",
        hi: "भतीजे की मदद से आशा ऑनलाइन शिकायत दर्ज करती है। SMS से पंजीकरण संख्या आती है। अब एक रिकॉर्ड है।",
        gu: "ભત્રીજાની મદદથી આશા ઑનલાઇન ફરિયાદ નોંધાવે છે. SMSથી નોંધણી નંબર આવે છે. હવે એક રેકૉર્ડ છે.",
      },
      choices: [
        { label: { en: "Also file an RTI", hi: "RTI भी डालें", gu: "RTI પણ કરો" }, next: "learn-rti" },
        { label: { en: "Wait and track it", hi: "इंतज़ार करें और ट्रैक करें", gu: "રાહ જુઓ અને ટ્રૅક કરો" }, next: "ending-tracked" },
      ],
    },
    {
      id: "learn-rti",
      scene: {
        kind: "notice",
        title: { en: "Application under the RTI Act, 2005", hi: "RTI अधिनियम, 2005 के तहत आवेदन", gu: "RTI અધિનિયમ, 2005 હેઠળ અરજી" },
        body: {
          en: "To: Public Information Officer, Ward Office 7. Please provide: 1. Current status of my application no. 0471. 2. Reason for delay beyond the stated time. 3. Name and designation of the officer handling it.",
          hi: "सेवा में: लोक सूचना अधिकारी, वार्ड कार्यालय 7। कृपया बताएँ: 1. मेरे आवेदन संख्या 0471 की वर्तमान स्थिति। 2. तय समय से अधिक देरी का कारण। 3. इसे देख रहे अधिकारी का नाम और पद।",
          gu: "પ્રતિ: જાહેર માહિતી અધિકારી, વૉર્ડ કાર્યાલય 7. કૃપા કરીને જણાવો: 1. મારી અરજી નંબર 0471ની વર્તમાન સ્થિતિ. 2. નક્કી સમયથી વધુ વિલંબનું કારણ. 3. તે સંભાળતા અધિકારીનું નામ અને હોદ્દો.",
        },
        stamp: { en: "Sample application", hi: "नमूना आवेदन", gu: "નમૂના અરજી" },
      },
      text: {
        en: "Asha writes three plain questions on one page. No lawyer, no shouting. Just a request for information.",
        hi: "आशा एक पन्ने पर तीन सीधे सवाल लिखती है। न वकील, न चिल्लाना। बस जानकारी की माँग।",
        gu: "આશા એક પાના પર ત્રણ સીધા સવાલ લખે છે. ન વકીલ, ન બૂમો. બસ માહિતીની માગણી.",
      },
      choices: [],
      learn: {
        title: { en: "Ask the status in writing", hi: "स्थिति लिखित में पूछें", gu: "સ્થિતિ લેખિતમાં પૂછો" },
        body: {
          en: "Under the Right to Information Act, 2005, any citizen can ask a public authority for information, including the status of their own application. The authority must normally reply within 30 days. A written question is harder to ignore than a tired face.",
          hi: "सूचना का अधिकार अधिनियम, 2005 के तहत कोई भी नागरिक सार्वजनिक प्राधिकरण से जानकारी माँग सकता है, अपने आवेदन की स्थिति भी। प्राधिकरण को सामान्यतः 30 दिनों में जवाब देना होता है। लिखित सवाल को अनदेखा करना थके चेहरे से मुश्किल है।",
          gu: "માહિતી અધિકાર અધિનિયમ, 2005 હેઠળ કોઈ પણ નાગરિક જાહેર સત્તામંડળ પાસે માહિતી માગી શકે, પોતાની અરજીની સ્થિતિ પણ. સત્તામંડળે સામાન્ય રીતે 30 દિવસમાં જવાબ આપવો પડે. લેખિત સવાલને થાકેલા ચહેરા કરતાં અવગણવો અઘરો છે.",
        },
        sources: [SRC_RTI],
      },
      next: "ending-tracked",
    },

    /* ---------------- Endings ---------------- */
    {
      id: "ending-hopeful",
      scene: {
        kind: "street",
        setting: "office",
        sign: OFFICE_SIGN,
        figures: [
          {
            x: 32,
            pose: "wave",
            color: "mint",
            facing: "right",
            name: ASHA,
            says: { en: "Thank you.", hi: "धन्यवाद।", gu: "આભાર." },
          },
          {
            x: 68,
            pose: "sit",
            color: "ink",
            facing: "left",
            name: CLERK,
            says: { en: "Corrected. Please sign here.", hi: "सुधार हो गया। यहाँ हस्ताक्षर करें।", gu: "સુધારી દીધું. અહીં સહી કરો." },
          },
        ],
      },
      text: {
        en: "Within the stated time, a message arrives. Asha collects the corrected card. The clerk is almost polite.",
        hi: "तय समय के भीतर संदेश आता है। आशा सुधरा हुआ कार्ड ले लेती है। क्लर्क लगभग विनम्र है।",
        gu: "નક્કી સમયમાં સંદેશ આવે છે. આશા સુધારેલું કાર્ડ લઈ લે છે. ક્લાર્ક લગભગ નમ્ર છે.",
      },
      choices: [],
      ending: {
        tone: "hopeful",
        summary: {
          en: "Asking for the written process changed the conversation. The clerk was no longer doing a favour; he was doing his job, on a timetable anyone could see.",
          hi: "लिखित प्रक्रिया पूछने से बातचीत बदल गई। क्लर्क अब एहसान नहीं कर रहा था; वह अपना काम कर रहा था, ऐसे समय पर जो सब देख सकते थे।",
          gu: "લેખિત પ્રક્રિયા પૂછવાથી વાતચીત બદલાઈ. ક્લાર્ક હવે ઉપકાર કરતો ન હતો; તે પોતાનું કામ કરતો હતો, એવા સમયપત્રક પર જે બધા જોઈ શકે.",
        },
      },
    },
    {
      id: "ending-tracked",
      scene: {
        kind: "phone",
        variant: "sms",
        from: { en: "CPGRAMS", hi: "CPGRAMS", gu: "CPGRAMS" },
        body: {
          en: "Status update: Forwarded to Ward Officer, Ward Office 7. Action pending.",
          hi: "स्थिति अद्यतन: वार्ड अधिकारी, वार्ड कार्यालय 7 को भेजा गया। कार्रवाई लंबित।",
          gu: "સ્થિતિ અપડેટ: વૉર્ડ અધિકારી, વૉર્ડ કાર્યાલય 7ને મોકલ્યું. કાર્યવાહી બાકી.",
        },
        meta: { en: "Sample message", hi: "नमूना संदेश", gu: "નમૂના સંદેશ" },
      },
      text: {
        en: "Weeks pass. Updates arrive. It is slow, but it is on record now, with a number, a date and a name.",
        hi: "हफ़्ते बीतते हैं। अपडेट आते हैं। धीमा है, पर अब रिकॉर्ड में है, एक नंबर, एक तारीख और एक नाम के साथ।",
        gu: "અઠવાડિયાં વીતે છે. અપડેટ આવે છે. ધીમું છે, પણ હવે રેકૉર્ડ પર છે, એક નંબર, એક તારીખ અને એક નામ સાથે.",
      },
      choices: [],
      ending: {
        tone: "mixed",
        summary: {
          en: "A tracked complaint is not a quick fix. But a written question must be answered in writing, and that changes how an office behaves.",
          hi: "ट्रैक की गई शिकायत तुरंत हल नहीं है। पर लिखित सवाल का जवाब लिखित में देना होता है, और इससे दफ़्तर का व्यवहार बदलता है।",
          gu: "ટ્રૅક કરેલી ફરિયાદ તાત્કાલિક ઉકેલ નથી. પણ લેખિત સવાલનો જવાબ લેખિતમાં આપવો પડે, અને તેથી કચેરીનું વર્તન બદલાય છે.",
        },
      },
    },
    {
      id: "ending-paid",
      scene: {
        kind: "street",
        setting: "office",
        figures: [
          { x: 30, pose: "think", color: "mint", facing: "right", name: ASHA },
          {
            x: 70,
            pose: "wave",
            color: "plum",
            facing: "left",
            says: { en: "Told you. Evening.", hi: "कहा था ना। शाम तक।", gu: "કહ્યું હતું ને. સાંજ સુધીમાં." },
          },
        ],
      },
      text: {
        en: "By evening the card is corrected. Asha is relieved. On the bus home, she thinks of the woman behind her in the queue.",
        hi: "शाम तक कार्ड सुधर जाता है। आशा को राहत है। घर जाती बस में वह लाइन में अपने पीछे खड़ी औरत के बारे में सोचती है।",
        gu: "સાંજ સુધીમાં કાર્ડ સુધરી જાય છે. આશાને રાહત છે. ઘરે જતી બસમાં તે લાઇનમાં પોતાની પાછળ ઊભેલી સ્ત્રી વિશે વિચારે છે.",
      },
      choices: [],
      ending: {
        tone: "mixed",
        summary: {
          en: "It worked this time, and ₹500 was a real cost for a real need. The shortcut also keeps the counter slow for everyone who cannot pay.",
          hi: "इस बार काम हो गया, और ₹500 एक सच्ची ज़रूरत की सच्ची क़ीमत थी। पर यह रास्ता उन सबके लिए काउंटर धीमा रखता है जो पैसे नहीं दे सकते।",
          gu: "આ વખતે કામ થયું, અને ₹500 એક સાચી જરૂરિયાતની સાચી કિંમત હતી. પણ આ રસ્તો જે લોકો પૈસા આપી શકતા નથી તેમના માટે કાઉન્ટર ધીમું રાખે છે.",
        },
      },
    },
    {
      id: "ending-giveup",
      scene: {
        kind: "street",
        setting: "home",
        figures: [
          {
            x: 50,
            pose: "sit",
            color: "mint",
            facing: "right",
            name: ASHA,
            says: { en: "Maybe next year.", hi: "शायद अगले साल।", gu: "કદાચ આવતા વર્ષે." },
          },
        ],
      },
      text: {
        en: "Asha puts the card back in the tin. One wrong letter. It has been three months.",
        hi: "आशा कार्ड वापस डिब्बे में रख देती है। एक ग़लत अक्षर। तीन महीने हो गए हैं।",
        gu: "આશા કાર્ડ પાછું ડબ્બામાં મૂકી દે છે. એક ખોટો અક્ષર. ત્રણ મહિના થઈ ગયા છે.",
      },
      choices: [],
      ending: {
        tone: "open",
        summary: {
          en: "Giving up is understandable when a process is designed to tire you. The written questions stay available whenever she is ready to ask them.",
          hi: "जब प्रक्रिया थकाने के लिए बनी हो, तो हार मानना समझ में आता है। लिखित सवाल तब भी मौजूद रहेंगे जब वह पूछने के लिए तैयार हो।",
          gu: "જ્યારે પ્રક્રિયા થકવવા માટે બની હોય, ત્યારે હાર માનવી સમજી શકાય. લેખિત સવાલો ત્યારે પણ હાજર રહેશે જ્યારે તે પૂછવા તૈયાર હોય.",
        },
      },
    },
  ],
  reflection: {
    insight: { en: "Ask for the process, in writing.", hi: "प्रक्रिया पूछें, लिखित में।", gu: "પ્રક્રિયા પૂછો, લેખિતમાં." },
    body: {
      en: "A counter runs on habit until someone asks what the rules are. Charters, receipts, grievance numbers and RTI replies turn 'next week' into a date someone has to answer for.",
      hi: "काउंटर आदत पर चलता है, जब तक कोई नियम न पूछे। चार्टर, रसीदें, शिकायत नंबर और RTI के जवाब 'अगले हफ़्ते' को ऐसी तारीख बना देते हैं जिसके लिए किसी को जवाब देना होता है।",
      gu: "કાઉન્ટર આદત પર ચાલે છે, જ્યાં સુધી કોઈ નિયમો ન પૂછે. ચાર્ટર, રસીદો, ફરિયાદ નંબર અને RTIના જવાબ 'આવતા અઠવાડિયે'ને એવી તારીખ બનાવી દે છે જેના માટે કોઈને જવાબ આપવો પડે.",
    },
  },
  sources: [SRC_RTI, SRC_CPGRAMS, SRC_PCA, SRC_DARPG],
  claimKind: "fact",
  reviewedOn: "2026-11-02",
  durationSec: 130,
};
