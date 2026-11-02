import type { Story, L10n, Source, Figure } from "../types";

/* Fictional characters */
const RAVI: L10n = { en: "Ravi", hi: "रवि", gu: "રવિ" };
const MEERA: L10n = { en: "Meera", hi: "मीरा", gu: "મીરા" };
const OWNER: L10n = { en: "Stall owner", hi: "दुकानदार", gu: "દુકાનદાર" };
const DEV: L10n = { en: "Dev", hi: "देव", gu: "દેવ" };

const ravi = (x: number, pose: Figure["pose"] = "stand", says?: L10n): Figure => ({ x, pose, color: "cobalt", facing: "right", name: RAVI, says });
const meera = (x: number, pose: Figure["pose"] = "stand", says?: L10n): Figure => ({ x, pose, color: "mint", facing: "right", name: MEERA, says });
const owner = (x: number, pose: Figure["pose"] = "point", says?: L10n): Figure => ({ x, pose, color: "amber", facing: "left", name: OWNER, says });
const dev = (x: number, says?: L10n): Figure => ({ x, pose: "think", color: "plum", facing: "left", name: DEV, says });

const SRC_CONST: Source = {
  kind: "law",
  label: { en: "Constitution of India, Articles 15(2) and 17", hi: "भारत का संविधान, अनुच्छेद 15(2) और 17", gu: "ભારતનું સંવિધાન, અનુચ્છેદ 15(2) અને 17" },
  url: "https://legislative.gov.in/constitution-of-india/",
  note: {
    en: "Article 17 abolishes untouchability. Article 15(2) guarantees access to shops, restaurants and public places regardless of caste.",
    hi: "अनुच्छेद 17 छुआछूत समाप्त करता है। अनुच्छेद 15(2) जाति की परवाह किए बिना दुकानों, रेस्तराँ और सार्वजनिक स्थानों तक पहुँच की गारंटी देता है।",
    gu: "અનુચ્છેદ 17 અસ્પૃશ્યતા નાબૂદ કરે છે. અનુચ્છેદ 15(2) જાતિને ધ્યાનમાં લીધા વિના દુકાનો, રેસ્ટોરાં અને જાહેર સ્થળોની પહોંચની ખાતરી આપે છે.",
  },
};
const SRC_PCR: Source = {
  kind: "law",
  label: { en: "The Protection of Civil Rights Act, 1955", hi: "नागरिक अधिकार संरक्षण अधिनियम, 1955", gu: "નાગરિક અધિકાર સંરક્ષણ અધિનિયમ, 1955" },
  url: "https://www.indiacode.nic.in/",
  note: {
    en: "Makes it an offence to enforce 'disabilities' arising from untouchability, including in shops and public eating places.",
    hi: "छुआछूत से उपजी 'निर्योग्यताओं' को लागू करना अपराध बनाता है, दुकानों और सार्वजनिक भोजनालयों में भी।",
    gu: "અસ્પૃશ્યતાથી ઉદ્ભવતી 'અસમર્થતાઓ' લાદવી ગુનો બનાવે છે, દુકાનો અને જાહેર ભોજનાલયોમાં પણ.",
  },
};
const SRC_POA: Source = {
  kind: "law",
  label: {
    en: "The Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act, 1989",
    hi: "अनुसूचित जाति और अनुसूचित जनजाति (अत्याचार निवारण) अधिनियम, 1989",
    gu: "અનુસૂચિત જાતિ અને અનુસૂચિત જનજાતિ (અત્યાચાર નિવારણ) અધિનિયમ, 1989",
  },
  url: "https://www.indiacode.nic.in/",
  note: {
    en: "A stronger law for serious caste-based offences, with special courts.",
    hi: "गंभीर जाति-आधारित अपराधों के लिए एक सख़्त क़ानून, विशेष अदालतों के साथ।",
    gu: "ગંભીર જાતિ-આધારિત ગુનાઓ માટે કડક કાયદો, વિશેષ અદાલતો સાથે.",
  },
};
const SRC_NCSC: Source = {
  kind: "official",
  label: { en: "National Commission for Scheduled Castes", hi: "राष्ट्रीय अनुसूचित जाति आयोग", gu: "રાષ્ટ્રીય અનુસૂચિત જાતિ આયોગ" },
  url: "https://ncsc.nic.in/",
  note: {
    en: "A constitutional body that receives and investigates complaints of caste-based discrimination.",
    hi: "एक संवैधानिक संस्था जो जाति-आधारित भेदभाव की शिकायतें लेती और जाँचती है।",
    gu: "એક સંવૈધાનિક સંસ્થા જે જાતિ-આધારિત ભેદભાવની ફરિયાદો લે છે અને તપાસે છે.",
  },
};

export const equalityStory: Story = {
  id: "equality",
  slug: "the-equality-question",
  topic: "equality",
  accent: "cobalt",
  title: { en: "The Equality Question", hi: "समानता का सवाल", gu: "સમાનતાનો સવાલ" },
  tagline: {
    en: "Two friends, one tea stall, and a glass that says more than it should.",
    hi: "दो दोस्त, एक चाय की दुकान, और एक गिलास जो बहुत कुछ कह जाता है।",
    gu: "બે મિત્રો, એક ચાની દુકાન, અને એક ગ્લાસ જે ઘણું બધું કહી જાય છે.",
  },
  start: "start",
  claimKind: "fact",
  reviewedOn: "2026-11-02",
  durationSec: 120,
  nodes: [
    {
      id: "start",
      scene: {
        kind: "street",
        setting: "teastall",
        sign: { en: "Separate glasses for 'them'", hi: "'उनके' लिए अलग गिलास", gu: "'તેમના' માટે અલગ ગ્લાસ" },
        figures: [ravi(22), meera(40), owner(72, "point", { en: "Not that glass. Yours is the steel one.", hi: "वह गिलास नहीं। तुम्हारा स्टील वाला है।", gu: "એ ગ્લાસ નહીં. તારો સ્ટીલવાળો છે." })],
      },
      text: {
        en: "After work, Ravi and Meera stop for tea. The owner hands Ravi a different glass. Meera looks confused. Ravi does not.",
        hi: "काम के बाद रवि और मीरा चाय के लिए रुकते हैं। दुकानदार रवि को अलग गिलास देता है। मीरा हैरान है। रवि नहीं।",
        gu: "કામ પછી રવિ અને મીરા ચા માટે રોકાય છે. દુકાનદાર રવિને અલગ ગ્લાસ આપે છે. મીરા મૂંઝાય છે. રવિ નહીં.",
      },
      choices: [
        { label: { en: "Say nothing and leave", hi: "कुछ न कहें, चले जाएँ", gu: "કંઈ ન કહો, જતા રહો" }, next: "leave" },
        { label: { en: "Ask the owner why", hi: "दुकानदार से पूछें, क्यों?", gu: "દુકાનદારને પૂછો, કેમ?" }, next: "ask" },
        { label: { en: "Meera speaks up for Ravi", hi: "मीरा रवि के लिए बोलती है", gu: "મીરા રવિ માટે બોલે છે" }, next: "meera" },
      ],
    },
    {
      id: "leave",
      scene: {
        kind: "street",
        setting: "street",
        figures: [ravi(30, "stand", { en: "It happens. Most days, actually.", hi: "होता रहता है। लगभग रोज़।", gu: "થતું રહે છે. લગભગ રોજ." }), meera(58, "think")],
      },
      text: {
        en: "They walk away without tea. Ravi says this is normal for him. Meera realises she has never had to notice.",
        hi: "वे बिना चाय पिए चले जाते हैं। रवि कहता है उसके लिए यह आम बात है। मीरा को एहसास होता है कि उसे कभी यह देखना ही नहीं पड़ा।",
        gu: "તેઓ ચા પીધા વિના ચાલ્યા જાય છે. રવિ કહે છે કે તેના માટે આ સામાન્ય છે. મીરાને સમજાય છે કે તેણે ક્યારેય આ જોવું જ નથી પડ્યું.",
      },
      choices: [
        { label: { en: "Ask Ravi what he wants to do", hi: "रवि से पूछें वह क्या चाहता है", gu: "રવિને પૂછો તે શું ઇચ્છે છે" }, next: "wants" },
        { label: { en: "Let it go. It's his private matter.", hi: "जाने दें। यह उसका निजी मामला है।", gu: "જવા દો. એ તેની અંગત વાત છે." }, next: "end-open" },
      ],
    },
    {
      id: "ask",
      scene: {
        kind: "street",
        setting: "teastall",
        figures: [ravi(22), meera(40, "stand", { en: "Why a different glass?", hi: "अलग गिलास क्यों?", gu: "અલગ ગ્લાસ કેમ?" }), owner(72, "arms-crossed", { en: "It's our custom here. Nothing personal.", hi: "यहाँ का रिवाज़ है। कुछ निजी नहीं।", gu: "અહીંનો રિવાજ છે. કંઈ અંગત નથી." })],
      },
      text: {
        en: "The owner shrugs. 'Custom.' Other customers keep drinking. Nobody looks up.",
        hi: "दुकानदार कंधे उचकाता है। 'रिवाज़।' बाकी ग्राहक चाय पीते रहते हैं। कोई ऊपर नहीं देखता।",
        gu: "દુકાનદાર ખભા ઉછાળે છે. 'રિવાજ.' બીજા ગ્રાહકો ચા પીતા રહે છે. કોઈ ઉપર જોતું નથી.",
      },
      choices: [
        { label: { en: "Custom is custom. Accept it.", hi: "रिवाज़ तो रिवाज़ है। मान लें।", gu: "રિવાજ તો રિવાજ. માની લો." }, next: "end-custom" },
        { label: { en: "Find out what the law says", hi: "जानें क़ानून क्या कहता है", gu: "જાણો કાયદો શું કહે છે" }, next: "learn-law" },
        { label: { en: "Ask Ravi what he wants", hi: "रवि से पूछें वह क्या चाहता है", gu: "રવિને પૂછો તે શું ઇચ્છે છે" }, next: "wants" },
      ],
    },
    {
      id: "meera",
      scene: {
        kind: "street",
        setting: "teastall",
        figures: [
          ravi(20, "stand", { en: "Meera, let me handle this.", hi: "मीरा, मुझे संभालने दो।", gu: "મીરા, મને સંભાળવા દે." }),
          meera(44, "point", { en: "He's my friend. Same glass.", hi: "वह मेरा दोस्त है। एक ही गिलास।", gu: "એ મારો મિત્ર છે. એક જ ગ્લાસ." }),
          owner(74, "arms-crossed"),
        ],
      },
      text: {
        en: "Meera means well. But this is Ravi's experience, and his choice how to respond.",
        hi: "मीरा का इरादा अच्छा है। लेकिन यह रवि का अनुभव है, और जवाब कैसे देना है, यह उसका फ़ैसला है।",
        gu: "મીરાનો ઇરાદો સારો છે. પણ આ રવિનો અનુભવ છે, અને જવાબ કેવી રીતે આપવો તે તેનો નિર્ણય છે.",
      },
      choices: [
        { label: { en: "Ask Ravi how he'd like to handle it", hi: "रवि से पूछें वह कैसे संभालना चाहेगा", gu: "રવિને પૂછો તે કેવી રીતે સંભાળવા માગે છે" }, next: "wants" },
        { label: { en: "Keep arguing with the owner", hi: "दुकानदार से बहस जारी रखें", gu: "દુકાનદાર સાથે દલીલ ચાલુ રાખો" }, next: "argue" },
      ],
    },
    {
      id: "argue",
      scene: {
        kind: "street",
        setting: "teastall",
        figures: [ravi(18, "think"), meera(42, "point", { en: "This is wrong!", hi: "यह गलत है!", gu: "આ ખોટું છે!" }), owner(72, "point", { en: "Rules are rules, madam.", hi: "नियम तो नियम हैं, मैडम।", gu: "નિયમ તો નિયમ, મેડમ." })],
      },
      text: {
        en: "Voices rise. Customers look away. Nothing changes, and Ravi is now the centre of a scene he did not choose.",
        hi: "आवाज़ें ऊँची होती हैं। ग्राहक नज़रें फेर लेते हैं। कुछ नहीं बदलता, और रवि एक ऐसे तमाशे के बीच है जो उसने नहीं चुना।",
        gu: "અવાજો ઊંચા થાય છે. ગ્રાહકો નજર ફેરવે છે. કશું બદલાતું નથી, અને રવિ એવા દૃશ્યની વચ્ચે છે જે તેણે પસંદ નથી કર્યું.",
      },
      choices: [
        { label: { en: "Pause, and ask Ravi", hi: "रुकें, और रवि से पूछें", gu: "થોભો, અને રવિને પૂછો" }, next: "wants" },
        { label: { en: "Walk out", hi: "बाहर निकल जाएँ", gu: "બહાર નીકળી જાઓ" }, next: "end-open" },
      ],
    },
    {
      id: "wants",
      scene: {
        kind: "street",
        setting: "street",
        figures: [ravi(30, "stand", { en: "I want it to stop. Not just for me.", hi: "मैं चाहता हूँ यह रुके। सिर्फ़ मेरे लिए नहीं।", gu: "હું ઇચ્છું છું કે આ અટકે. ફક્ત મારા માટે નહીં." }), meera(60, "think")],
      },
      text: {
        en: "Ravi thinks for a moment. 'I'm tired of the steel glass. But I don't want a fight. I want it to end.'",
        hi: "रवि एक पल सोचता है। 'मैं स्टील के गिलास से थक गया हूँ। पर मुझे झगड़ा नहीं चाहिए। मैं चाहता हूँ कि यह ख़त्म हो।'",
        gu: "રવિ એક ક્ષણ વિચારે છે. 'હું સ્ટીલના ગ્લાસથી થાકી ગયો છું. પણ મારે ઝઘડો નથી જોઈતો. હું ઇચ્છું છું કે આ પૂરું થાય.'",
      },
      choices: [
        { label: { en: "Find out what the law says", hi: "जानें क़ानून क्या कहता है", gu: "જાણો કાયદો શું કહે છે" }, next: "learn-law" },
        { label: { en: "Talk to the other customers", hi: "दूसरे ग्राहकों से बात करें", gu: "બીજા ગ્રાહકો સાથે વાત કરો" }, next: "others" },
      ],
    },
    {
      id: "learn-law",
      scene: { kind: "notice", title: { en: "Constitution of India", hi: "भारत का संविधान", gu: "ભારતનું સંવિધાન" }, body: { en: "Article 17. 'Untouchability' is abolished and its practice in any form is forbidden.", hi: "अनुच्छेद 17. 'छुआछूत' समाप्त की जाती है और किसी भी रूप में इसका आचरण निषिद्ध है।", gu: "અનુચ્છેદ 17. 'અસ્પૃશ્યતા' નાબૂદ કરવામાં આવે છે અને કોઈ પણ સ્વરૂપે તેનું આચરણ પ્રતિબંધિત છે." }, stamp: { en: "1950", hi: "1950", gu: "1950" } },
      text: { en: "", hi: "", gu: "" },
      choices: [],
      learn: {
        title: { en: "Not custom. A crime.", hi: "रिवाज़ नहीं। अपराध।", gu: "રિવાજ નહીં. ગુનો." },
        body: {
          en: "Article 17 abolished untouchability in 1950. Article 15(2) guarantees equal access to shops and eateries. The Protection of Civil Rights Act, 1955 makes separate utensils or refusal of service a punishable offence.",
          hi: "अनुच्छेद 17 ने 1950 में छुआछूत समाप्त की। अनुच्छेद 15(2) दुकानों और भोजनालयों तक समान पहुँच की गारंटी देता है। नागरिक अधिकार संरक्षण अधिनियम, 1955 अलग बर्तन या सेवा से इनकार को दंडनीय अपराध बनाता है।",
          gu: "અનુચ્છેદ 17એ 1950માં અસ્પૃશ્યતા નાબૂદ કરી. અનુચ્છેદ 15(2) દુકાનો અને ભોજનાલયોમાં સમાન પહોંચની ખાતરી આપે છે. નાગરિક અધિકાર સંરક્ષણ અધિનિયમ, 1955 અલગ વાસણો કે સેવાનો ઇનકાર દંડનીય ગુનો બનાવે છે.",
        },
        sources: [SRC_CONST, SRC_PCR],
      },
      next: "options",
    },
    {
      id: "options",
      scene: {
        kind: "street",
        setting: "teastall",
        figures: [ravi(22), meera(40), owner(72, "arms-crossed")],
      },
      text: {
        en: "Now you know: this is not just unfair. It is unlawful. What next?",
        hi: "अब आप जानते हैं: यह सिर्फ़ अन्याय नहीं है। यह गैर-क़ानूनी है। अब क्या?",
        gu: "હવે તમે જાણો છો: આ ફક્ત અન્યાય નથી. આ ગેરકાયદેસર છે. હવે શું?",
      },
      choices: [
        { label: { en: "Tell the owner calmly, with the law", hi: "दुकानदार को शांति से क़ानून बताएँ", gu: "દુકાનદારને શાંતિથી કાયદો જણાવો" }, next: "end-tell" },
        { label: { en: "Learn how to report it", hi: "जानें शिकायत कैसे करें", gu: "જાણો ફરિયાદ કેવી રીતે કરવી" }, next: "learn-report" },
        { label: { en: "Talk to the other customers", hi: "दूसरे ग्राहकों से बात करें", gu: "બીજા ગ્રાહકો સાથે વાત કરો" }, next: "others" },
      ],
    },
    {
      id: "others",
      scene: {
        kind: "street",
        setting: "teastall",
        figures: [ravi(18), meera(36), dev(60, { en: "I never noticed. I'd share a glass.", hi: "मैंने कभी ध्यान नहीं दिया। मैं एक ही गिलास से पी लूँगा।", gu: "મેં ક્યારેય ધ્યાન નથી આપ્યું. હું એક જ ગ્લાસથી પીશ." }), owner(82, "arms-crossed", undefined)],
      },
      text: {
        en: "Dev, a regular, had never noticed the steel glass. Two others had, and said nothing.",
        hi: "देव, एक नियमित ग्राहक, ने कभी स्टील का गिलास देखा ही नहीं था। दो और लोगों ने देखा था, और चुप रहे।",
        gu: "દેવ, એક નિયમિત ગ્રાહક, એ ક્યારેય સ્ટીલનો ગ્લાસ જોયો જ નહોતો. બીજા બેએ જોયો હતો, અને ચૂપ રહ્યા.",
      },
      choices: [
        { label: { en: "Speak to the owner together", hi: "सब मिलकर दुकानदार से बात करें", gu: "બધા મળીને દુકાનદાર સાથે વાત કરો" }, next: "end-together" },
        { label: { en: "Leave it there for today", hi: "आज के लिए यहीं छोड़ दें", gu: "આજ પૂરતું અહીં જ છોડી દો" }, next: "end-quiet" },
      ],
    },
    {
      id: "learn-report",
      scene: { kind: "notice", title: { en: "How to report", hi: "शिकायत कैसे करें", gu: "ફરિયાદ કેવી રીતે કરવી" }, body: { en: "A complaint can be filed at any police station under the Protection of Civil Rights Act, 1955, or with the National Commission for Scheduled Castes.", hi: "नागरिक अधिकार संरक्षण अधिनियम, 1955 के तहत किसी भी थाने में, या राष्ट्रीय अनुसूचित जाति आयोग में शिकायत दर्ज की जा सकती है।", gu: "નાગરિક અધિકાર સંરક્ષણ અધિનિયમ, 1955 હેઠળ કોઈ પણ પોલીસ સ્ટેશનમાં, કે રાષ્ટ્રીય અનુસૂચિત જાતિ આયોગમાં ફરિયાદ નોંધાવી શકાય." } },
      text: { en: "", hi: "", gu: "" },
      choices: [],
      learn: {
        title: { en: "Anyone can report", hi: "कोई भी शिकायत कर सकता है", gu: "કોઈ પણ ફરિયાદ કરી શકે" },
        body: {
          en: "A complaint does not have to come from the person affected. Meera can file it too. The police must register it. If they refuse, the National Commission for Scheduled Castes can be approached directly.",
          hi: "शिकायत ज़रूरी नहीं कि पीड़ित ही करे। मीरा भी कर सकती है। पुलिस को इसे दर्ज करना होगा। अगर वे मना करें, तो सीधे राष्ट्रीय अनुसूचित जाति आयोग से संपर्क किया जा सकता है।",
          gu: "ફરિયાદ જરૂરી નથી કે પીડિત જ કરે. મીરા પણ કરી શકે. પોલીસે તે નોંધવી પડે. જો તેઓ ના પાડે, તો સીધો રાષ્ટ્રીય અનુસૂચિત જાતિ આયોગનો સંપર્ક કરી શકાય.",
        },
        sources: [SRC_PCR, SRC_NCSC, SRC_POA],
      },
      next: "end-report",
    },
    {
      id: "end-report",
      scene: {
        kind: "street",
        setting: "office",
        figures: [ravi(24, "stand", { en: "At least it is written down now.", hi: "कम से कम अब यह लिखा तो गया।", gu: "ઓછામાં ઓછું હવે આ લખાયું તો ખરું." }), meera(46)],
      },
      text: {
        en: "At the station, the officer writes it down. It will take time. Ravi is calm.",
        hi: "थाने में अधिकारी शिकायत लिखता है। समय लगेगा। रवि शांत है।",
        gu: "પોલીસ સ્ટેશનમાં અધિકારી ફરિયાદ લખે છે. સમય લાગશે. રવિ શાંત છે.",
      },
      choices: [],
      ending: {
        tone: "mixed",
        summary: {
          en: "A complaint is slow. But a record now exists, and the next person who faces that glass is not starting from zero.",
          hi: "शिकायत धीमी है। लेकिन अब एक रिकॉर्ड है, और अगला व्यक्ति जो उस गिलास का सामना करेगा, शून्य से शुरू नहीं करेगा।",
          gu: "ફરિયાદ ધીમી છે. પણ હવે એક રેકોર્ડ છે, અને એ ગ્લાસનો સામનો કરનાર આગળની વ્યક્તિ શૂન્યથી શરૂ નહીં કરે.",
        },
      },
    },
    {
      id: "end-tell",
      scene: {
        kind: "street",
        setting: "teastall",
        figures: [ravi(22, "stand", { en: "Same glass, same tea. That's the law.", hi: "एक ही गिलास, एक ही चाय। यही क़ानून है।", gu: "એક જ ગ્લાસ, એક જ ચા. આ જ કાયદો છે." }), meera(42), owner(72, "think", { en: "My father did it this way.", hi: "मेरे पिता भी ऐसे ही करते थे।", gu: "મારા પિતા પણ આમ જ કરતા." })],
      },
      text: {
        en: "The owner is quiet for a long moment. Then he picks up the steel glass and puts it away.",
        hi: "दुकानदार देर तक चुप रहता है। फिर वह स्टील का गिलास उठाकर हटा देता है।",
        gu: "દુકાનદાર લાંબી ક્ષણ સુધી ચૂપ રહે છે. પછી તે સ્ટીલનો ગ્લાસ ઉઠાવીને મૂકી દે છે.",
      },
      choices: [],
      ending: {
        tone: "hopeful",
        summary: {
          en: "The glass went away that day. Whether it stays away depends on who keeps noticing.",
          hi: "उस दिन गिलास हट गया। वह हटा रहेगा या नहीं, यह इस पर निर्भर है कि कौन ध्यान देता रहता है।",
          gu: "એ દિવસે ગ્લાસ હટી ગયો. તે હટેલો રહેશે કે નહીં, તે કોણ ધ્યાન આપતું રહે છે તેના પર આધાર રાખે છે.",
        },
      },
    },
    {
      id: "end-together",
      scene: {
        kind: "street",
        setting: "teastall",
        figures: [ravi(16), meera(32), dev(50, { en: "One glass for everyone, bhai.", hi: "सबके लिए एक गिलास, भाई।", gu: "બધા માટે એક ગ્લાસ, ભાઈ." }), owner(80, "think")],
      },
      text: {
        en: "Four customers and Ravi speak to the owner together. He protests, then agrees: one set of glasses, for everyone.",
        hi: "चार ग्राहक और रवि मिलकर दुकानदार से बात करते हैं। वह पहले विरोध करता है, फिर मान जाता है: सबके लिए एक जैसे गिलास।",
        gu: "ચાર ગ્રાહકો અને રવિ મળીને દુકાનદાર સાથે વાત કરે છે. તે પહેલાં વિરોધ કરે છે, પછી માને છે: બધા માટે એક સરખા ગ્લાસ.",
      },
      choices: [],
      ending: {
        tone: "hopeful",
        summary: {
          en: "A rule changed because people who were not affected refused to look away. That is what equality looks like in practice.",
          hi: "एक नियम इसलिए बदला क्योंकि जिन पर असर नहीं था, उन्होंने भी नज़रें फेरने से इनकार किया। व्यवहार में समानता ऐसी ही दिखती है।",
          gu: "એક નિયમ એટલે બદલાયો કારણ કે જેમને અસર નહોતી, તેમણે પણ નજર ફેરવવાનો ઇનકાર કર્યો. વ્યવહારમાં સમાનતા આવી જ દેખાય છે.",
        },
      },
    },
    {
      id: "end-quiet",
      scene: { kind: "street", setting: "street", figures: [ravi(30), meera(50), dev(72)] },
      text: {
        en: "Nothing changed today. But three more people now know the word for it, and that it is against the law.",
        hi: "आज कुछ नहीं बदला। लेकिन अब तीन और लोग इसका नाम जानते हैं, और यह भी कि यह क़ानून के ख़िलाफ़ है।",
        gu: "આજે કશું બદલાયું નહીં. પણ હવે ત્રણ વધુ લોકો તેનું નામ જાણે છે, અને એ પણ કે તે કાયદાની વિરુદ્ધ છે.",
      },
      choices: [],
      ending: {
        tone: "mixed",
        summary: {
          en: "A quiet room got a little less quiet. Change often starts smaller than we would like.",
          hi: "एक ख़ामोश कमरा थोड़ा कम ख़ामोश हुआ। बदलाव अक्सर हमारी उम्मीद से छोटा शुरू होता है।",
          gu: "એક શાંત ઓરડો થોડો ઓછો શાંત થયો. બદલાવ ઘણીવાર આપણી ઇચ્છા કરતાં નાનો શરૂ થાય છે.",
        },
      },
    },
    {
      id: "end-custom",
      scene: { kind: "street", setting: "teastall", figures: [ravi(24, "stand"), meera(44, "think"), owner(74, "stand")] },
      text: {
        en: "Ravi drinks from the steel glass. Meera says nothing. The tea is fine. Something else is not.",
        hi: "रवि स्टील के गिलास से चाय पीता है। मीरा कुछ नहीं कहती। चाय ठीक है। कुछ और ठीक नहीं है।",
        gu: "રવિ સ્ટીલના ગ્લાસથી ચા પીએ છે. મીરા કંઈ કહેતી નથી. ચા બરાબર છે. બીજું કંઈક બરાબર નથી.",
      },
      choices: [],
      ending: {
        tone: "mixed",
        summary: {
          en: "Nothing changed today. But now you know the word for this is not 'custom'. Under Indian law, it is an offence.",
          hi: "आज कुछ नहीं बदला। लेकिन अब आप जानते हैं कि इसका नाम 'रिवाज़' नहीं है। भारतीय क़ानून में यह अपराध है।",
          gu: "આજે કશું બદલાયું નહીં. પણ હવે તમે જાણો છો કે આનું નામ 'રિવાજ' નથી. ભારતીય કાયદામાં આ ગુનો છે.",
        },
      },
    },
    {
      id: "end-open",
      scene: { kind: "street", setting: "home", figures: [ravi(40, "think")] },
      text: {
        en: "Ravi goes home. You never find out what he wanted.",
        hi: "रवि घर चला जाता है। आपको कभी पता नहीं चलता कि वह क्या चाहता था।",
        gu: "રવિ ઘરે જાય છે. તમને ક્યારેય ખબર નથી પડતી કે તે શું ઇચ્છતો હતો.",
      },
      choices: [],
      ending: {
        tone: "open",
        summary: {
          en: "Sometimes the first step is simply asking the person affected what they want. Try another path and see.",
          hi: "कभी-कभी पहला कदम बस यह पूछना होता है कि प्रभावित व्यक्ति क्या चाहता है। दूसरा रास्ता आज़माकर देखें।",
          gu: "ક્યારેક પહેલું પગલું ફક્ત અસરગ્રસ્ત વ્યક્તિને પૂછવું હોય છે કે તે શું ઇચ્છે છે. બીજો રસ્તો અજમાવીને જુઓ.",
        },
      },
    },
  ],
  reflection: {
    insight: { en: "Equality is written down. Living it is up to us.", hi: "समानता लिखी हुई है। उसे जीना हम पर है।", gu: "સમાનતા લખેલી છે. તેને જીવવું આપણા પર છે." },
    body: {
      en: "The Constitution ended untouchability in 1950. Laws since then punish it. But a law is only as strong as the people who know it, and insist on it.",
      hi: "संविधान ने 1950 में छुआछूत ख़त्म की। उसके बाद के क़ानून इसे दंडित करते हैं। लेकिन क़ानून उतना ही मज़बूत है जितने लोग उसे जानते हैं, और उस पर ज़ोर देते हैं।",
      gu: "સંવિધાને 1950માં અસ્પૃશ્યતા નાબૂદ કરી. ત્યાર પછીના કાયદા તેને દંડ આપે છે. પણ કાયદો એટલો જ મજબૂત છે જેટલા લોકો તેને જાણે છે, અને તેના પર આગ્રહ રાખે છે.",
    },
  },
  sources: [SRC_CONST, SRC_PCR, SRC_POA, SRC_NCSC],
};
