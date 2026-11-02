import type { Locale } from "@/content/types";

/**
 * UI strings. Keys are stable; values per locale.
 * Content strings live with the content, not here.
 */
const strings = {
  // Brand
  "brand.name": { en: "SAWAAL", hi: "सवाल", gu: "સવાલ" },
  "brand.tagline": { en: "Think. Question. Understand.", hi: "सोचो। सवाल करो। समझो।", gu: "વિચારો. સવાલ કરો. સમજો." },
  "home.hero": {
    en: "A question can change how you see the world.",
    hi: "एक सवाल दुनिया को देखने का नज़रिया बदल सकता है।",
    gu: "એક સવાલ દુનિયાને જોવાની રીત બદલી શકે છે.",
  },
  "home.start": { en: "Start today's question", hi: "आज का सवाल शुरू करें", gu: "આજનો સવાલ શરૂ કરો" },
  "home.continue": { en: "Continue today's question", hi: "आज का सवाल जारी रखें", gu: "આજનો સવાલ ચાલુ રાખો" },
  "home.done": { en: "You've done today's question", hi: "आज का सवाल हो गया", gu: "આજનો સવાલ થઈ ગયો" },
  "home.replay": { en: "See it again", hi: "फिर से देखें", gu: "ફરીથી જુઓ" },
  "home.more": { en: "More questions", hi: "और सवाल", gu: "વધુ સવાલો" },
  "home.explore": { en: "Explore stories", hi: "कहानियाँ देखें", gu: "કહાનીઓ જુઓ" },
  "home.todaysTopic": { en: "Today", hi: "आज", gu: "આજે" },
  "home.seconds": { en: "about {n} seconds", hi: "लगभग {n} सेकंड", gu: "લગભગ {n} સેકન્ડ" },
  "home.comeBack": { en: "Come back tomorrow for a new one.", hi: "कल एक नए सवाल के लिए वापस आएँ।", gu: "કાલે નવા સવાલ માટે પાછા આવો." },

  // Navigation
  "nav.today": { en: "Today", hi: "आज", gu: "આજે" },
  "nav.explore": { en: "Explore", hi: "खोजें", gu: "શોધો" },
  "nav.journey": { en: "My Journey", hi: "मेरी यात्रा", gu: "મારી યાત્રા" },
  "nav.back": { en: "Back", hi: "वापस", gu: "પાછા" },
  "nav.close": { en: "Close", hi: "बंद करें", gu: "બંધ કરો" },
  "nav.home": { en: "Home", hi: "होम", gu: "હોમ" },
  "nav.skipToContent": { en: "Skip to content", hi: "सीधे सामग्री पर जाएँ", gu: "સીધા સામગ્રી પર જાઓ" },
  "nav.language": { en: "Language", hi: "भाषा", gu: "ભાષા" },

  // Lesson flow
  "lesson.see": { en: "See", hi: "देखो", gu: "જુઓ" },
  "lesson.choose": { en: "Choose", hi: "चुनो", gu: "પસંદ કરો" },
  "lesson.discover": { en: "Discover", hi: "जानो", gu: "જાણો" },
  "lesson.reflect": { en: "Reflect", hi: "सोचो", gu: "વિચારો" },
  "lesson.next": { en: "Next", hi: "आगे", gu: "આગળ" },
  "lesson.whatHappens": { en: "What's missing?", hi: "क्या कमी है?", gu: "શું ખૂટે છે?" },
  "lesson.showMe": { en: "Show me", hi: "दिखाइए", gu: "બતાવો" },
  "lesson.continue": { en: "Continue", hi: "जारी रखें", gu: "ચાલુ રાખો" },
  "lesson.finish": { en: "Finish", hi: "समाप्त", gu: "પૂર્ણ" },
  "lesson.insight": { en: "One thing to remember", hi: "एक बात याद रखें", gu: "એક વાત યાદ રાખો" },
  "lesson.why": { en: "Why?", hi: "क्यों?", gu: "કેમ?" },
  "lesson.evidence": { en: "See evidence", hi: "सबूत देखें", gu: "પુરાવા જુઓ" },
  "lesson.tryAgain": { en: "Try a different choice", hi: "दूसरा विकल्प आज़माएँ", gu: "બીજો વિકલ્પ અજમાવો" },
  "lesson.share": { en: "Share this question", hi: "यह सवाल साझा करें", gu: "આ સવાલ શેર કરો" },
  "lesson.shared": { en: "Link copied", hi: "लिंक कॉपी हो गया", gu: "લિંક કૉપી થઈ" },
  "lesson.youChose": { en: "You chose", hi: "आपने चुना", gu: "તમે પસંદ કર્યું" },
  "lesson.fiction": { en: "Fictional scenario", hi: "काल्पनिक घटना", gu: "કાલ્પનિક પ્રસંગ" },
  "lesson.confidence": { en: "How sure are you?", hi: "आप कितने निश्चित हैं?", gu: "તમે કેટલા ચોક્કસ છો?" },
  "lesson.confidence.low": { en: "Not sure", hi: "निश्चित नहीं", gu: "ચોક્કસ નહીં" },
  "lesson.confidence.high": { en: "Very sure", hi: "पूरी तरह निश्चित", gu: "પૂરેપૂરા ચોક્કસ" },
  "lesson.lock": { en: "Lock in", hi: "पक्का करें", gu: "નક્કી કરો" },
  "lesson.complete": { en: "Done for today", hi: "आज के लिए हो गया", gu: "આજ માટે થઈ ગયું" },
  "lesson.completeStory": { en: "Story complete", hi: "कहानी पूरी", gu: "કહાની પૂર્ણ" },
  "lesson.completeInv": { en: "Investigation closed", hi: "जाँच पूरी", gu: "તપાસ પૂર્ણ" },
  "lesson.rate.strong": { en: "Thoughtful", hi: "सोच-समझकर", gu: "વિચારપૂર્વક" },
  "lesson.rate.okay": { en: "Reasonable", hi: "उचित", gu: "વાજબી" },
  "lesson.rate.risky": { en: "Worth a second look", hi: "दोबारा सोचने लायक", gu: "ફરી વિચારવા જેવું" },
  "lesson.narrate": { en: "Read aloud", hi: "सुनें", gu: "સાંભળો" },
  "lesson.narrateStop": { en: "Stop reading", hi: "रोकें", gu: "રોકો" },
  "lesson.narrateUnsupported": { en: "Read-aloud is not available on this device", hi: "इस डिवाइस पर सुनने की सुविधा उपलब्ध नहीं है", gu: "આ ડિવાઇસ પર સાંભળવાની સુવિધા ઉપલબ્ધ નથી" },

  // Evidence sheet
  "evidence.title": { en: "Evidence and sources", hi: "सबूत और स्रोत", gu: "પુરાવા અને સ્ત્રોતો" },
  "evidence.kind": { en: "How to read this", hi: "इसे कैसे समझें", gu: "આને કેવી રીતે સમજવું" },
  "evidence.kind.fact": {
    en: "Fact: settled law or well-established science.",
    hi: "तथ्य: स्थापित क़ानून या पुष्ट विज्ञान।",
    gu: "તથ્ય: સ્થાપિત કાયદો કે પુષ્ટ વિજ્ઞાન.",
  },
  "evidence.kind.hypothesis": {
    en: "Hypothesis: a reasonable idea that still needs checking.",
    hi: "परिकल्पना: एक उचित विचार जिसे अभी जाँचना बाकी है।",
    gu: "પરિકલ્પના: એક વાજબી વિચાર જે હજી ચકાસવો બાકી છે.",
  },
  "evidence.kind.opinion": {
    en: "Opinion: reasonable people disagree. Decide for yourself.",
    hi: "राय: समझदार लोग असहमत हो सकते हैं। खुद तय करें।",
    gu: "મત: સમજદાર લોકો અસંમત હોઈ શકે. પોતે નક્કી કરો.",
  },
  "evidence.kind.fiction": {
    en: "Fiction: an invented scenario for learning.",
    hi: "कल्पना: सीखने के लिए बनाई गई घटना।",
    gu: "કલ્પના: શીખવા માટે બનાવેલો પ્રસંગ.",
  },
  "evidence.scenario": {
    en: "The people and messages in this scene are invented. The laws and sources are real.",
    hi: "इस दृश्य के लोग और संदेश काल्पनिक हैं। क़ानून और स्रोत असली हैं।",
    gu: "આ દૃશ્યના લોકો અને સંદેશા કાલ્પનિક છે. કાયદા અને સ્ત્રોતો સાચા છે.",
  },
  "evidence.reviewed": { en: "Reviewed", hi: "समीक्षा", gu: "સમીક્ષા" },
  "evidence.open": { en: "Open source", hi: "स्रोत खोलें", gu: "સ્ત્રોત ખોલો" },
  "evidence.report": { en: "Report an inaccuracy", hi: "गलती की सूचना दें", gu: "ભૂલની જાણ કરો" },
  "evidence.report.body": {
    en: "Tell us what seems wrong. We check every report against primary sources.",
    hi: "बताइए क्या गलत लगता है। हम हर सूचना को मूल स्रोतों से जाँचते हैं।",
    gu: "કહો શું ખોટું લાગે છે. અમે દરેક જાણને મૂળ સ્ત્રોતો સામે ચકાસીએ છીએ.",
  },
  "evidence.report.placeholder": { en: "What is inaccurate, and where did you check?", hi: "क्या गलत है, और आपने कहाँ जाँचा?", gu: "શું ખોટું છે, અને તમે ક્યાં ચકાસ્યું?" },
  "evidence.report.send": { en: "Send report", hi: "सूचना भेजें", gu: "જાણ મોકલો" },
  "evidence.report.saved": { en: "Thank you. Your report is saved and ready to send.", hi: "धन्यवाद। आपकी सूचना सहेज ली गई है।", gu: "આભાર. તમારી જાણ સાચવી લેવાઈ છે." },
  "evidence.kindLabel.law": { en: "Law", hi: "क़ानून", gu: "કાયદો" },
  "evidence.kindLabel.science": { en: "Science", hi: "विज्ञान", gu: "વિજ્ઞાન" },
  "evidence.kindLabel.official": { en: "Official", hi: "आधिकारिक", gu: "અધિકૃત" },
  "evidence.kindLabel.guide": { en: "Guide", hi: "मार्गदर्शिका", gu: "માર્ગદર્શિકા" },
  "evidence.kindLabel.news": { en: "News", hi: "समाचार", gu: "સમાચાર" },
  "evidence.kindLabel.reference": { en: "Reference", hi: "संदर्भ", gu: "સંદર્ભ" },

  // Explore
  "explore.title": { en: "Explore", hi: "खोजें", gu: "શોધો" },
  "explore.sub": { en: "Short stories you play, not read.", hi: "छोटी कहानियाँ जो आप पढ़ते नहीं, खेलते हैं।", gu: "નાની કહાનીઓ જે તમે વાંચતા નથી, રમો છો." },
  "explore.stories": { en: "Stories", hi: "कहानियाँ", gu: "કહાનીઓ" },
  "explore.investigate": { en: "Investigate", hi: "जाँच करें", gu: "તપાસ કરો" },
  "explore.investigate.sub": { en: "Become a truth detective", hi: "सच के जासूस बनें", gu: "સત્યના ડિટેક્ટિવ બનો" },
  "explore.decide": { en: "Decide", hi: "फ़ैसला करें", gu: "નિર્ણય કરો" },
  "explore.decide.title": { en: "Run Your City", hi: "अपना शहर चलाएँ", gu: "તમારું શહેર ચલાવો" },
  "explore.decide.sub": { en: "A budget, four needs, your call.", hi: "एक बजट, चार ज़रूरतें, फ़ैसला आपका।", gu: "એક બજેટ, ચાર જરૂરિયાતો, નિર્ણય તમારો." },
  "explore.play": { en: "Play", hi: "खेलें", gu: "રમો" },
  "explore.replay": { en: "Play again", hi: "फिर खेलें", gu: "ફરી રમો" },
  "explore.completed": { en: "Completed", hi: "पूरा हुआ", gu: "પૂર્ણ" },
  "explore.minutes": { en: "{n} min", hi: "{n} मिनट", gu: "{n} મિનિટ" },
  "explore.choices": { en: "Your choices shape the story.", hi: "आपके फ़ैसले कहानी बदलते हैं।", gu: "તમારા નિર્ણયો કહાની બદલે છે." },

  // Story
  "story.begin": { en: "Begin", hi: "शुरू करें", gu: "શરૂ કરો" },
  "story.learn": { en: "Good to know", hi: "जानने योग्य", gu: "જાણવા જેવું" },
  "story.ending": { en: "How it ended", hi: "अंत कैसे हुआ", gu: "અંત કેવો આવ્યો" },
  "story.anotherPath": { en: "Try another path", hi: "दूसरा रास्ता आज़माएँ", gu: "બીજો રસ્તો અજમાવો" },
  "story.endingsFound": { en: "{n} of {total} endings found", hi: "{total} में से {n} अंत मिले", gu: "{total}માંથી {n} અંત મળ્યા" },
  "story.step": { en: "Scene {n}", hi: "दृश्य {n}", gu: "દૃશ્ય {n}" },

  // Investigate
  "inv.tapClues": { en: "Tap anything that looks suspicious.", hi: "जो भी संदिग्ध लगे, उस पर टैप करें।", gu: "જે કંઈ શંકાસ્પદ લાગે, તેના પર ટૅપ કરો." },
  "inv.found": { en: "{n} of {total} clues found", hi: "{total} में से {n} सुराग मिले", gu: "{total}માંથી {n} સંકેત મળ્યા" },
  "inv.verdict": { en: "Give your verdict", hi: "अपना फ़ैसला दें", gu: "તમારો નિર્ણય આપો" },
  "inv.howSure": { en: "How sure should anyone be that this is true?", hi: "किसी को यह कितना सच मानना चाहिए?", gu: "કોઈએ આને કેટલું સાચું માનવું જોઈએ?" },
  "inv.notTrue": { en: "Almost certainly not", hi: "लगभग निश्चित रूप से नहीं", gu: "લગભગ ચોક્કસ નહીં" },
  "inv.cantTell": { en: "Can't tell yet", hi: "अभी नहीं कह सकते", gu: "હજી કહી શકાય નહીં" },
  "inv.true": { en: "Almost certainly", hi: "लगभग निश्चित", gu: "લગભગ ચોક્કસ" },
  "inv.fine": { en: "This part is fine", hi: "यह हिस्सा ठीक है", gu: "આ ભાગ બરાબર છે" },
  "inv.lookCloser": { en: "Look closer", hi: "ध्यान से देखें", gu: "ધ્યાનથી જુઓ" },
  "inv.clueboard": { en: "Clue board", hi: "सुराग बोर्ड", gu: "સંકેત બોર્ડ" },
  "inv.keepLooking": { en: "Keep looking, or give your verdict.", hi: "और खोजें, या फ़ैसला दें।", gu: "વધુ શોધો, કે નિર્ણય આપો." },
  "inv.yourCall": { en: "Your call", hi: "आपका फ़ैसला", gu: "તમારો નિર્ણય" },
  "inv.honest": { en: "The honest range", hi: "ईमानदार दायरा", gu: "પ્રમાણિક મર્યાદા" },

  // Decide
  "decide.title": { en: "Run Your City", hi: "अपना शहर चलाएँ", gu: "તમારું શહેર ચલાવો" },
  "decide.intro": {
    en: "You have ₹100 crore for one year. Four needs. Every rupee here is a rupee not there.",
    hi: "आपके पास एक साल के लिए ₹100 करोड़ हैं। चार ज़रूरतें। यहाँ लगा हर रुपया वहाँ नहीं लगेगा।",
    gu: "તમારી પાસે એક વર્ષ માટે ₹100 કરોડ છે. ચાર જરૂરિયાતો. અહીં વપરાયેલો દરેક રૂપિયો ત્યાં નહીં વપરાય.",
  },
  "decide.hypothetical": { en: "Hypothetical city, hypothetical numbers", hi: "काल्पनिक शहर, काल्पनिक आँकड़े", gu: "કાલ્પનિક શહેર, કાલ્પનિક આંકડા" },
  "decide.remaining": { en: "Left to allocate", hi: "बाँटने के लिए बाकी", gu: "ફાળવવા બાકી" },
  "decide.crore": { en: "₹{n} cr", hi: "₹{n} करोड़", gu: "₹{n} કરોડ" },
  "decide.water": { en: "Water supply", hi: "पानी की आपूर्ति", gu: "પાણી પુરવઠો" },
  "decide.roads": { en: "Road safety", hi: "सड़क सुरक्षा", gu: "રસ્તા સલામતી" },
  "decide.sanitation": { en: "Sanitation", hi: "सफ़ाई", gu: "સ્વચ્છતા" },
  "decide.amenities": { en: "Parks and amenities", hi: "पार्क और सुविधाएँ", gu: "બગીચા અને સુવિધાઓ" },
  "decide.build": { en: "See the year unfold", hi: "देखें साल कैसा रहा", gu: "જુઓ વર્ષ કેવું રહ્યું" },
  "decide.allocateAll": { en: "Allocate the full budget to continue", hi: "आगे बढ़ने के लिए पूरा बजट बाँटें", gu: "આગળ વધવા પૂરું બજેટ ફાળવો" },
  "decide.results": { en: "One year later", hi: "एक साल बाद", gu: "એક વર્ષ પછી" },
  "decide.residents": { en: "What residents say", hi: "निवासी क्या कहते हैं", gu: "રહેવાસીઓ શું કહે છે" },
  "decide.again": { en: "Try a different budget", hi: "दूसरा बजट आज़माएँ", gu: "બીજું બજેટ અજમાવો" },
  "decide.insight": {
    en: "There is no budget that makes everyone happy. There are only choices, and reasons.",
    hi: "ऐसा कोई बजट नहीं जो सबको खुश करे। बस चुनाव हैं, और उनके कारण।",
    gu: "એવું કોઈ બજેટ નથી જે બધાને ખુશ કરે. ફક્ત પસંદગીઓ છે, અને તેના કારણો.",
  },
  "decide.note": {
    en: "Real municipal budgets are public documents. Your city's is online. The trade-offs you just felt are the ones your councillors face.",
    hi: "असली नगर बजट सार्वजनिक दस्तावेज़ होते हैं। आपके शहर का बजट ऑनलाइन है। जो उलझन आपने अभी महसूस की, वही आपके पार्षदों के सामने होती है।",
    gu: "સાચા નગર બજેટ જાહેર દસ્તાવેજો હોય છે. તમારા શહેરનું બજેટ ઑનલાઇન છે. જે મૂંઝવણ તમે હમણાં અનુભવી, તે જ તમારા કાઉન્સિલરો સામે હોય છે.",
  },
  "decide.tradeoffs": { en: "Trade-offs", hi: "समझौते", gu: "સમાધાનો" },

  // Journey
  "journey.title": { en: "My Journey", hi: "मेरी यात्रा", gu: "મારી યાત્રા" },
  "journey.sub": { en: "Curiosity, not competition.", hi: "जिज्ञासा, प्रतिस्पर्धा नहीं।", gu: "જિજ્ઞાસા, સ્પર્ધા નહીં." },
  "journey.questions": { en: "Questions explored", hi: "सवाल खोजे", gu: "સવાલો શોધ્યા" },
  "journey.stories": { en: "Stories completed", hi: "कहानियाँ पूरी", gu: "કહાનીઓ પૂર્ણ" },
  "journey.investigations": { en: "Investigations", hi: "जाँचें", gu: "તપાસો" },
  "journey.topics": { en: "Topics discovered", hi: "विषय खोजे", gu: "વિષયો શોધ્યા" },
  "journey.milestones": { en: "Milestones", hi: "मील के पत्थर", gu: "સીમાચિહ્નો" },
  "journey.next": { en: "Explore next", hi: "आगे खोजें", gu: "આગળ શોધો" },
  "journey.empty": { en: "Your journey starts with one question.", hi: "आपकी यात्रा एक सवाल से शुरू होती है।", gu: "તમારી યાત્રા એક સવાલથી શરૂ થાય છે." },
  "journey.startFirst": { en: "Try today's question", hi: "आज का सवाल आज़माएँ", gu: "આજનો સવાલ અજમાવો" },
  "journey.sourcesOpened": { en: "Sources opened", hi: "स्रोत खोले", gu: "સ્ત્રોતો ખોલ્યા" },
  "journey.reset": { en: "Clear my progress", hi: "मेरी प्रगति हटाएँ", gu: "મારી પ્રગતિ દૂર કરો" },
  "journey.resetConfirm": { en: "Clear everything stored on this device?", hi: "इस डिवाइस पर सहेजी सभी प्रगति हटाएँ?", gu: "આ ડિવાઇસ પર સાચવેલી બધી પ્રગતિ દૂર કરવી?" },
  "journey.local": { en: "Progress is stored only on this device. No account, no tracking.", hi: "प्रगति सिर्फ़ इस डिवाइस पर सहेजी जाती है। कोई खाता नहीं, कोई ट्रैकिंग नहीं।", gu: "પ્રગતિ ફક્ત આ ડિવાઇસ પર સાચવાય છે. કોઈ ખાતું નહીં, કોઈ ટ્રેકિંગ નહીં." },
  "journey.about": { en: "About SAWAAL", hi: "सवाल के बारे में", gu: "સવાલ વિશે" },

  // Milestones
  "ms.first-question": { en: "Asked your first question", hi: "पहला सवाल किया", gu: "પહેલો સવાલ કર્યો" },
  "ms.first-question.d": { en: "Every journey starts here.", hi: "हर यात्रा यहीं से शुरू होती है।", gu: "દરેક યાત્રા અહીંથી શરૂ થાય છે." },
  "ms.source-opener": { en: "Checked a source", hi: "स्रोत जाँचा", gu: "સ્ત્રોત ચકાસ્યો" },
  "ms.source-opener.d": { en: "You went past the claim to the evidence.", hi: "आप दावे से आगे सबूत तक गए।", gu: "તમે દાવાથી આગળ પુરાવા સુધી ગયા." },
  "ms.second-thought": { en: "Had a second thought", hi: "दोबारा सोचा", gu: "ફરી વિચાર્યું" },
  "ms.second-thought.d": { en: "You replayed a question and chose differently.", hi: "आपने एक सवाल फिर खेला और अलग चुना।", gu: "તમે એક સવાલ ફરી રમ્યો અને અલગ પસંદ કર્યું." },
  "ms.storyteller": { en: "Finished a story", hi: "एक कहानी पूरी की", gu: "એક કહાની પૂરી કરી" },
  "ms.storyteller.d": { en: "Decisions, not lectures.", hi: "फ़ैसले, भाषण नहीं।", gu: "નિર્ણયો, ભાષણ નહીં." },
  "ms.all-paths": { en: "Found every ending", hi: "हर अंत खोजा", gu: "દરેક અંત શોધ્યો" },
  "ms.all-paths.d": { en: "You explored all the paths of one story.", hi: "आपने एक कहानी के सभी रास्ते देखे।", gu: "તમે એક કહાનીના બધા રસ્તા જોયા." },
  "ms.detective": { en: "Closed an investigation", hi: "एक जाँच पूरी की", gu: "એક તપાસ પૂરી કરી" },
  "ms.detective.d": { en: "Clues before conclusions.", hi: "निष्कर्ष से पहले सुराग।", gu: "નિષ્કર્ષ પહેલાં સંકેતો." },
  "ms.comfortable-uncertainty": { en: "Comfortable with 'not sure'", hi: "'पक्का नहीं' से सहज", gu: "'ચોક્કસ નહીં' સાથે સહજ" },
  "ms.comfortable-uncertainty.d": { en: "You chose uncertainty when the evidence was thin.", hi: "सबूत कम थे तो आपने अनिश्चितता चुनी।", gu: "પુરાવા ઓછા હતા ત્યારે તમે અનિશ્ચિતતા પસંદ કરી." },
  "ms.mayor": { en: "Ran a city", hi: "एक शहर चलाया", gu: "એક શહેર ચલાવ્યું" },
  "ms.mayor.d": { en: "You felt the trade-offs behind a budget.", hi: "आपने बजट के पीछे की उलझनें महसूस कीं।", gu: "તમે બજેટ પાછળની મૂંઝવણો અનુભવી." },
  "ms.five-questions": { en: "Five questions explored", hi: "पाँच सवाल खोजे", gu: "પાંચ સવાલો શોધ્યા" },
  "ms.five-questions.d": { en: "A habit is forming.", hi: "एक आदत बन रही है।", gu: "એક આદત બની રહી છે." },
  "ms.polyglot": { en: "Switched language", hi: "भाषा बदली", gu: "ભાષા બદલી" },
  "ms.polyglot.d": { en: "Ideas travel across languages.", hi: "विचार भाषाओं के पार जाते हैं।", gu: "વિચારો ભાષાઓની પાર જાય છે." },

  // Topics
  "topic.science": { en: "Science", hi: "विज्ञान", gu: "વિજ્ઞાન" },
  "topic.misinformation": { en: "Misinformation", hi: "गलत जानकारी", gu: "ખોટી માહિતી" },
  "topic.equality": { en: "Equality", hi: "समानता", gu: "સમાનતા" },
  "topic.rights": { en: "Rights", hi: "अधिकार", gu: "અધિકારો" },
  "topic.stereotypes": { en: "Stereotypes", hi: "रूढ़ धारणाएँ", gu: "રૂઢ માન્યતાઓ" },
  "topic.social-media": { en: "Social media", hi: "सोशल मीडिया", gu: "સોશિયલ મીડિયા" },
  "topic.scams": { en: "Scams", hi: "ठगी", gu: "ઠગાઈ" },
  "topic.civic": { en: "Civic life", hi: "नागरिक जीवन", gu: "નાગરિક જીવન" },
  "topic.democracy": { en: "Democracy", hi: "लोकतंत्र", gu: "લોકશાહી" },
  "topic.health": { en: "Health", hi: "स्वास्थ्य", gu: "આરોગ્ય" },

  // About
  "about.title": { en: "Don't tell people what to think. Teach them how to think.", hi: "लोगों को यह न बताओ कि क्या सोचें। उन्हें सिखाओ कि कैसे सोचें।", gu: "લોકોને શું વિચારવું તે ન કહો. તેમને કેવી રીતે વિચારવું તે શીખવો." },
  "about.body": {
    en: "SAWAAL is an independent learning project. It does not promote any party, ideology or religion. It teaches tools: asking for evidence, knowing your rights, and spotting manipulation. Every lesson lists its sources and a review date. Scenarios are fictional; laws and references are real.",
    hi: "सवाल एक स्वतंत्र शिक्षण परियोजना है। यह किसी पार्टी, विचारधारा या धर्म का प्रचार नहीं करती। यह औज़ार सिखाती है: सबूत माँगना, अपने अधिकार जानना, और हेरफेर पहचानना। हर पाठ अपने स्रोत और समीक्षा की तारीख बताता है। घटनाएँ काल्पनिक हैं; क़ानून और संदर्भ असली हैं।",
    gu: "સવાલ એક સ્વતંત્ર શિક્ષણ પરિયોજના છે. તે કોઈ પક્ષ, વિચારધારા કે ધર્મનો પ્રચાર કરતી નથી. તે સાધનો શીખવે છે: પુરાવા માગવા, પોતાના અધિકારો જાણવા, અને હેરફેર ઓળખવી. દરેક પાઠ પોતાના સ્ત્રોતો અને સમીક્ષાની તારીખ આપે છે. પ્રસંગો કાલ્પનિક છે; કાયદા અને સંદર્ભો સાચા છે.",
  },
  "about.aiNote": {
    en: "Content drafted with AI assistance is marked for human review before it is treated as verified.",
    hi: "AI की मदद से तैयार सामग्री को सत्यापित मानने से पहले मानवीय समीक्षा के लिए चिह्नित किया जाता है।",
    gu: "AIની મદદથી તૈયાર સામગ્રીને ચકાસેલી માનતા પહેલાં માનવ સમીક્ષા માટે ચિહ્નિત કરાય છે.",
  },
  "about.open": { en: "Open the question", hi: "सवाल खोलें", gu: "સવાલ ખોલો" },
  "offline.ready": { en: "Ready to work offline", hi: "ऑफ़लाइन चलने के लिए तैयार", gu: "ઑફલાઇન ચાલવા તૈયાર" },
} as const;

export type UiKey = keyof typeof strings;

export function uiString(key: UiKey, locale: Locale, vars?: Record<string, string | number>): string {
  const entry = strings[key] as Record<string, string>;
  let s = entry[locale] ?? entry.en;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
  }
  return s;
}
