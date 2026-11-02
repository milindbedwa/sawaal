import type { L10n, Source } from "./types";

/**
 * Run Your City: a deliberately simple, clearly hypothetical model.
 * Shares are percentages of a fictional ₹100 crore annual budget.
 * Levels: low < 18%, mid 18–32%, high > 32%.
 */
export type Sector = "water" | "roads" | "sanitation" | "amenities";
export type Level = "low" | "mid" | "high";

export const SECTORS: Sector[] = ["water", "roads", "sanitation", "amenities"];
export const BUDGET = 100;

export function levelOf(share: number): Level {
  return share < 18 ? "low" : share <= 32 ? "mid" : "high";
}

export const SECTOR_HINT: Record<Sector, L10n> = {
  water: { en: "Pipelines, pumping, tanker days", hi: "पाइपलाइन, पंपिंग, टैंकर के दिन", gu: "પાઇપલાઇન, પમ્પિંગ, ટેન્કરના દિવસો" },
  roads: { en: "Potholes, crossings, streetlights", hi: "गड्ढे, क्रॉसिंग, स्ट्रीटलाइट", gu: "ખાડા, ક્રોસિંગ, સ્ટ્રીટલાઇટ" },
  sanitation: { en: "Waste pickup, drains, toilets", hi: "कचरा उठाना, नालियाँ, शौचालय", gu: "કચરો ઉપાડવો, ગટરો, શૌચાલય" },
  amenities: { en: "Parks, libraries, playgrounds", hi: "पार्क, पुस्तकालय, खेल के मैदान", gu: "બગીચા, પુસ્તકાલય, રમતનાં મેદાન" },
};

export const OUTCOME: Record<Sector, Record<Level, L10n>> = {
  water: {
    low: { en: "Supply drops to a few hours a day in summer. Tanker queues return.", hi: "गर्मियों में आपूर्ति दिन में कुछ घंटे रह जाती है। टैंकर की कतारें लौट आती हैं।", gu: "ઉનાળામાં પુરવઠો દિવસમાં થોડા કલાક રહી જાય છે. ટેન્કરની લાઇનો પાછી આવે છે." },
    mid: { en: "Most areas get regular supply. Old pipes still leak in places.", hi: "ज़्यादातर इलाकों में नियमित आपूर्ति। पुराने पाइप कहीं-कहीं अब भी रिसते हैं।", gu: "મોટા ભાગના વિસ્તારોમાં નિયમિત પુરવઠો. જૂની પાઇપો ક્યાંક હજી લીક થાય છે." },
    high: { en: "Leaks fixed, new pipeline laid. Steady supply, even in summer.", hi: "रिसाव ठीक, नई पाइपलाइन बिछी। गर्मियों में भी स्थिर आपूर्ति।", gu: "લીક ઠીક થયા, નવી પાઇપલાઇન નંખાઈ. ઉનાળામાં પણ સ્થિર પુરવઠો." },
  },
  roads: {
    low: { en: "Potholes multiply after the monsoon. Two-wheeler accidents rise.", hi: "मानसून के बाद गड्ढे बढ़ जाते हैं। दोपहिया हादसे बढ़ते हैं।", gu: "ચોમાસા પછી ખાડા વધે છે. ટુ-વ્હીલર અકસ્માતો વધે છે." },
    mid: { en: "Main roads repaired. Side lanes wait another year.", hi: "मुख्य सड़कें ठीक। गलियाँ एक और साल इंतज़ार करती हैं।", gu: "મુખ્ય રસ્તા રિપેર. ગલીઓ બીજું વર્ષ રાહ જુએ છે." },
    high: { en: "Crossings, lights and speed breakers near schools. Fewer accidents.", hi: "स्कूलों के पास क्रॉसिंग, लाइट और स्पीड ब्रेकर। कम हादसे।", gu: "શાળાઓ પાસે ક્રોસિંગ, લાઇટ અને સ્પીડ બ્રેકર. ઓછા અકસ્માતો." },
  },
  sanitation: {
    low: { en: "Garbage piles up. Drains clog, and the clinic sees more fevers.", hi: "कचरे के ढेर लगते हैं। नालियाँ जाम, और क्लिनिक में बुखार के मरीज़ बढ़ते हैं।", gu: "કચરાના ઢગલા થાય છે. ગટરો જામ, અને ક્લિનિકમાં તાવના દર્દી વધે છે." },
    mid: { en: "Daily pickup in most wards. Drains cleaned before the rains.", hi: "ज़्यादातर वार्डों में रोज़ कचरा उठता है। बारिश से पहले नालियाँ साफ़।", gu: "મોટા ભાગના વોર્ડમાં રોજ કચરો ઉપડે છે. વરસાદ પહેલાં ગટરો સાફ." },
    high: { en: "Segregated waste, public toilets maintained, cleaner markets.", hi: "कचरा अलग-अलग, सार्वजनिक शौचालय ठीक, बाज़ार साफ़।", gu: "કચરો અલગ, જાહેર શૌચાલય જળવાયેલાં, બજારો સ્વચ્છ." },
  },
  amenities: {
    low: { en: "The park stays locked. Children play on the road.", hi: "पार्क बंद रहता है। बच्चे सड़क पर खेलते हैं।", gu: "બગીચો બંધ રહે છે. બાળકો રસ્તા પર રમે છે." },
    mid: { en: "One park reopens with benches. The library keeps its hours.", hi: "एक पार्क बेंचों के साथ खुलता है। पुस्तकालय अपने समय पर चलता है।", gu: "એક બગીચો બેન્ચ સાથે ફરી ખૂલે છે. પુસ્તકાલય પોતાના સમયે ચાલે છે." },
    high: { en: "New playground, evening lights, a reading room. People linger.", hi: "नया खेल का मैदान, शाम की रोशनी, एक वाचनालय। लोग रुकते हैं।", gu: "નવું રમતનું મેદાન, સાંજની લાઇટ, એક વાંચનખંડ. લોકો રોકાય છે." },
  },
};

export interface Resident {
  name: L10n;
  role: L10n;
  /** Which sector this resident cares about most */
  cares: Sector;
  praise: L10n;
  complaint: L10n;
}

export const RESIDENTS: Resident[] = [
  {
    name: { en: "Salma", hi: "सलमा", gu: "સલમા" },
    role: { en: "runs a tea stall", hi: "चाय की दुकान चलाती हैं", gu: "ચાની દુકાન ચલાવે છે" },
    cares: "water",
    praise: { en: "Water comes every morning now. I can open on time.", hi: "अब हर सुबह पानी आता है। मैं समय पर दुकान खोल पाती हूँ।", gu: "હવે રોજ સવારે પાણી આવે છે. હું સમયસર દુકાન ખોલી શકું છું." },
    complaint: { en: "Parks are nice. But I buy water from a tanker to make tea.", hi: "पार्क अच्छे हैं। पर चाय बनाने का पानी मैं टैंकर से खरीदती हूँ।", gu: "બગીચા સરસ છે. પણ ચા બનાવવાનું પાણી હું ટેન્કરથી ખરીદું છું." },
  },
  {
    name: { en: "Imran", hi: "इमरान", gu: "ઇમરાન" },
    role: { en: "delivers on a two-wheeler", hi: "दोपहिया पर डिलीवरी करते हैं", gu: "ટુ-વ્હીલર પર ડિલિવરી કરે છે" },
    cares: "roads",
    praise: { en: "No more swerving around craters at night. My back thanks you.", hi: "रात में गड्ढों से बचने की ज़रूरत नहीं। मेरी कमर आपका शुक्रिया करती है।", gu: "રાત્રે ખાડાથી બચવાની જરૂર નથી. મારી કમર તમારો આભાર માને છે." },
    complaint: { en: "I fell twice this year. A road is not a luxury.", hi: "इस साल मैं दो बार गिरा। सड़क कोई विलासिता नहीं है।", gu: "આ વર્ષે હું બે વાર પડ્યો. રસ્તો કોઈ મોજશોખ નથી." },
  },
  {
    name: { en: "Tara", hi: "तारा", gu: "તારા" },
    role: { en: "nurse at the ward clinic", hi: "वार्ड क्लिनिक में नर्स", gu: "વોર્ડ ક્લિનિકમાં નર્સ" },
    cares: "sanitation",
    praise: { en: "Fewer fevers after the rains this year. The drains were cleared.", hi: "इस साल बारिश के बाद बुखार के मरीज़ कम आए। नालियाँ साफ़ थीं।", gu: "આ વર્ષે વરસાદ પછી તાવના દર્દી ઓછા આવ્યા. ગટરો સાફ હતી." },
    complaint: { en: "Every clogged drain shows up at my clinic a week later.", hi: "हर जाम नाली एक हफ़्ते बाद मेरे क्लिनिक में दिखती है।", gu: "દરેક જામ ગટર એક અઠવાડિયા પછી મારા ક્લિનિકમાં દેખાય છે." },
  },
  {
    name: { en: "Dev", hi: "देव", gu: "દેવ" },
    role: { en: "father of two", hi: "दो बच्चों के पिता", gu: "બે બાળકોના પિતા" },
    cares: "amenities",
    praise: { en: "The children have somewhere to go in the evening. That matters.", hi: "बच्चों के पास शाम को जाने की जगह है। यह मायने रखता है।", gu: "બાળકો પાસે સાંજે જવાની જગ્યા છે. એ મહત્ત્વનું છે." },
    complaint: { en: "Roads and pipes, yes. But where do my kids play? On the road.", hi: "सड़कें और पाइप, ठीक है। पर मेरे बच्चे खेलें कहाँ? सड़क पर।", gu: "રસ્તા અને પાઇપ, બરાબર. પણ મારાં બાળકો રમે ક્યાં? રસ્તા પર." },
  },
];

export const DECIDE_SOURCES: Source[] = [
  {
    kind: "law",
    label: { en: "Constitution of India, Part IXA and the Twelfth Schedule (municipalities)", hi: "भारत का संविधान, भाग IXA और बारहवीं अनुसूची (नगरपालिकाएँ)", gu: "ભારતનું સંવિધાન, ભાગ IXA અને બારમી અનુસૂચિ (નગરપાલિકાઓ)" },
    url: "https://legislative.gov.in/constitution-of-india/",
    note: { en: "The 74th Amendment (1992) gives urban local bodies responsibility for water supply, roads, sanitation, parks and more.", hi: "74वाँ संशोधन (1992) शहरी स्थानीय निकायों को पानी, सड़क, सफ़ाई, पार्क आदि की ज़िम्मेदारी देता है।", gu: "74મો સુધારો (1992) શહેરી સ્થાનિક સંસ્થાઓને પાણી, રસ્તા, સ્વચ્છતા, બગીચા વગેરેની જવાબદારી આપે છે." },
  },
  {
    kind: "official",
    label: { en: "Ministry of Housing and Urban Affairs", hi: "आवासन और शहरी कार्य मंत्रालय", gu: "આવાસ અને શહેરી બાબતોનું મંત્રાલય" },
    url: "https://mohua.gov.in/",
    note: { en: "Policies and schemes that fund city services. Your own municipal corporation publishes its annual budget online.", hi: "शहरी सेवाओं को वित्त देने वाली नीतियाँ और योजनाएँ। आपका नगर निगम अपना वार्षिक बजट ऑनलाइन प्रकाशित करता है।", gu: "શહેરી સેવાઓને નાણાં આપતી નીતિઓ અને યોજનાઓ. તમારું નગર નિગમ પોતાનું વાર્ષિક બજેટ ઑનલાઇન પ્રકાશિત કરે છે." },
  },
];
