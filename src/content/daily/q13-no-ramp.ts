import type { DailyQuestion } from "../types";

export const q13NoRamp: DailyQuestion = {
  id: "q13",
  slug: "steps-no-ramp",
  topic: "rights",
  title: { en: "Steps, no ramp", hi: "सीढ़ियाँ, रैंप नहीं", gu: "પગથિયાં, રેમ્પ નહીં" },
  scene: {
    kind: "street",
    setting: "office",
    sign: { en: "Bank. Entry via steps", hi: "बैंक। प्रवेश सीढ़ियों से", gu: "બેંક. પ્રવેશ પગથિયાંથી" },
    figures: [
      {
        x: 30,
        pose: "wheelchair",
        color: "cobalt",
        facing: "right",
        name: { en: "Dev", hi: "देव", gu: "દેવ" },
        says: {
          en: "Six steps. No ramp. Third visit this month.",
          hi: "छह सीढ़ियाँ। रैंप नहीं। इस महीने तीसरी बार आया हूँ।",
          gu: "છ પગથિયાં. રેમ્પ નહીં. આ મહિને ત્રીજી વાર આવ્યો છું.",
        },
      },
      {
        x: 72,
        pose: "stand",
        color: "amber",
        facing: "left",
        scale: 0.85,
        says: { en: "Sir, someone will come down to you.", hi: "सर, कोई नीचे आ जाएगा।", gu: "સર, કોઈ નીચે આવી જશે." },
      },
    ],
    caption: {
      en: "Dev uses a wheelchair. The bank's only entrance is up a flight of steps, so he waits outside.",
      hi: "देव व्हीलचेयर इस्तेमाल करते हैं। बैंक का इकलौता दरवाज़ा सीढ़ियों के ऊपर है, इसलिए वे बाहर इंतज़ार करते हैं।",
      gu: "દેવ વ્હીલચેર વાપરે છે. બેંકનો એકમાત્ર દરવાજો પગથિયાં ઉપર છે, એટલે તેઓ બહાર રાહ જુએ છે.",
    },
  },
  prompt: { en: "What do you think?", hi: "आप क्या सोचते हैं?", gu: "તમે શું વિચારો છો?" },
  interaction: "cards",
  choices: [
    {
      id: "old-buildings",
      label: { en: "That's just how old buildings are", hi: "पुरानी इमारतें ऐसी ही होती हैं", gu: "જૂની ઇમારતો આવી જ હોય છે" },
      response: {
        heading: { en: "Old is not an excuse.", hi: "पुराना होना बहाना नहीं है।", gu: "જૂનું હોવું બહાનું નથી." },
        body: {
          en: "The law asks public buildings and services to meet accessibility standards, including existing ones within set timelines. A ramp is not a luxury.",
          hi: "क़ानून सार्वजनिक इमारतों और सेवाओं से सुलभता के मानक पूरे करने को कहता है, पुरानी इमारतों से भी तय समय में। रैंप कोई ऐश नहीं है।",
          gu: "કાયદો જાહેર ઇમારતો અને સેવાઓને સુલભતાના માપદંડ પૂરા કરવા કહે છે, જૂની ઇમારતોને પણ નક્કી સમયમાં. રેમ્પ કોઈ વૈભવ નથી.",
        },
        quality: "risky",
      },
    },
    {
      id: "bring-someone",
      label: { en: "He should bring someone to help", hi: "उन्हें मदद के लिए किसी को साथ लाना चाहिए", gu: "તેમણે મદદ માટે કોઈને સાથે લાવવું જોઈએ" },
      response: {
        heading: { en: "Help is kind. It is not the fix.", hi: "मदद अच्छी है। पर यह समाधान नहीं है।", gu: "મદદ સારી છે. પણ તે ઉકેલ નથી." },
        body: {
          en: "Nobody else has to bring a helper to use their own bank. Depending on others for entry is exactly what accessibility is meant to end.",
          hi: "अपने बैंक जाने के लिए किसी और को मददगार साथ नहीं लाना पड़ता। प्रवेश के लिए दूसरों पर निर्भर रहना ही वह चीज़ है जिसे सुलभता ख़त्म करना चाहती है।",
          gu: "પોતાની બેંકમાં જવા બીજા કોઈને મદદગાર સાથે લાવવો પડતો નથી. પ્રવેશ માટે બીજા પર નિર્ભર રહેવું એ જ છે જે સુલભતા દૂર કરવા માગે છે.",
        },
        quality: "okay",
      },
    },
    {
      id: "legal-right",
      label: { en: "Accessibility is a legal right; ask for it", hi: "सुलभता क़ानूनी अधिकार है; इसकी माँग करें", gu: "સુલભતા કાયદેસર અધિકાર છે; તેની માગણી કરો" },
      response: {
        heading: { en: "Yes.", hi: "हाँ।", gu: "હા." },
        body: {
          en: "The Rights of Persons with Disabilities Act, 2016 makes accessibility a duty, not a favour. Dev can ask the bank, and complain if it does not act.",
          hi: "दिव्यांगजन अधिकार अधिनियम, 2016 सुलभता को कर्तव्य बनाता है, एहसान नहीं। देव बैंक से माँग कर सकते हैं, और कार्रवाई न हो तो शिकायत कर सकते हैं।",
          gu: "દિવ્યાંગજન અધિકાર અધિનિયમ, 2016 સુલભતાને ફરજ બનાવે છે, ઉપકાર નહીં. દેવ બેંકને માગણી કરી શકે, અને કાર્યવાહી ન થાય તો ફરિયાદ કરી શકે.",
        },
        quality: "strong",
      },
    },
  ],
  discover: [
    {
      glyph: "scroll",
      tone: "found",
      text: {
        en: "The Rights of Persons with Disabilities Act, 2016 requires accessibility standards for public buildings, transport and services.",
        hi: "दिव्यांगजन अधिकार अधिनियम, 2016 सार्वजनिक इमारतों, परिवहन और सेवाओं के लिए सुलभता मानक अनिवार्य करता है।",
        gu: "દિવ્યાંગજન અધિકાર અધિનિયમ, 2016 જાહેર ઇમારતો, પરિવહન અને સેવાઓ માટે સુલભતાના માપદંડ અનિવાર્ય કરે છે.",
      },
    },
    {
      glyph: "shield",
      tone: "found",
      text: {
        en: "The Act is built on dignity and equal participation. The point is access as of right, not charity.",
        hi: "यह अधिनियम गरिमा और समान भागीदारी पर टिका है। मक़सद है अधिकार के रूप में पहुँच, दान नहीं।",
        gu: "આ અધિનિયમ ગૌરવ અને સમાન ભાગીદારી પર ઊભો છે. મુદ્દો અધિકાર તરીકે પહોંચ છે, દાન નહીં.",
      },
    },
    {
      glyph: "megaphone",
      tone: "found",
      text: {
        en: "The government runs the Accessible India Campaign (Sugamya Bharat Abhiyan) to make buildings, transport and websites accessible.",
        hi: "सरकार इमारतों, परिवहन और वेबसाइटों को सुलभ बनाने के लिए सुगम्य भारत अभियान चलाती है।",
        gu: "સરકાર ઇમારતો, પરિવહન અને વેબસાઇટોને સુલભ બનાવવા સુગમ્ય ભારત અભિયાન ચલાવે છે.",
      },
    },
    {
      glyph: "hand",
      tone: "neutral",
      text: {
        en: "What can you do? Ask the branch manager in writing. If nothing changes, approach the State or Chief Commissioner for Persons with Disabilities.",
        hi: "आप क्या कर सकते हैं? शाखा प्रबंधक से लिखित में माँग करें। कुछ न बदले तो राज्य या मुख्य दिव्यांगजन आयुक्त से संपर्क करें।",
        gu: "તમે શું કરી શકો? શાખા મેનેજરને લેખિતમાં માગણી કરો. કશું ન બદલાય તો રાજ્ય કે મુખ્ય દિવ્યાંગજન કમિશનરનો સંપર્ક કરો.",
      },
    },
  ],
  insight: {
    en: "Access is not help. It is a right.",
    hi: "पहुँच मदद नहीं है। यह अधिकार है।",
    gu: "પહોંચ મદદ નથી. તે અધિકાર છે.",
  },
  why: {
    en: "A step that stops one person is a wall. Removing it costs little and changes everything for them.",
    hi: "जो सीढ़ी एक व्यक्ति को रोक दे, वह दीवार है। उसे हटाने में कम ख़र्च है, पर उनके लिए सब बदल जाता है।",
    gu: "જે પગથિયું એક વ્યક્તિને રોકે, તે દીવાલ છે. તેને દૂર કરવામાં ઓછો ખર્ચ છે, પણ તેમના માટે બધું બદલાઈ જાય છે.",
  },
  claimKind: "fact",
  fictionalScenario: true,
  sources: [
    {
      kind: "law",
      label: {
        en: "The Rights of Persons with Disabilities Act, 2016 (India Code)",
        hi: "दिव्यांगजन अधिकार अधिनियम, 2016 (India Code)",
        gu: "દિવ્યાંગજન અધિકાર અધિનિયમ, 2016 (India Code)",
      },
      url: "https://www.indiacode.nic.in/",
      note: {
        en: "Chapter VIII (Sections 40 to 46) deals with accessibility: standards for buildings, transport, information and services, with timelines for existing infrastructure.",
        hi: "अध्याय VIII (धारा 40 से 46) सुलभता पर है: इमारतों, परिवहन, सूचना और सेवाओं के मानक, मौजूदा ढाँचे के लिए समय-सीमा के साथ।",
        gu: "અધ્યાય VIII (કલમ 40થી 46) સુલભતા પર છે: ઇમારતો, પરિવહન, માહિતી અને સેવાઓના માપદંડ, હાલના માળખા માટે સમયમર્યાદા સાથે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "Department of Empowerment of Persons with Disabilities, Government of India",
        hi: "दिव्यांगजन सशक्तिकरण विभाग, भारत सरकार",
        gu: "દિવ્યાંગજન સશક્તિકરણ વિભાગ, ભારત સરકાર",
      },
      url: "https://depwd.gov.in/",
      note: {
        en: "The nodal department for the Act and its rules. Also links to the Chief Commissioner for Persons with Disabilities, who hears complaints.",
        hi: "इस अधिनियम और इसके नियमों का नोडल विभाग। मुख्य दिव्यांगजन आयुक्त, जो शिकायतें सुनते हैं, का लिंक भी यहाँ है।",
        gu: "આ અધિનિયમ અને તેના નિયમોનો નોડલ વિભાગ. મુખ્ય દિવ્યાંગજન કમિશનર, જે ફરિયાદો સાંભળે છે, તેની લિંક પણ અહીં છે.",
      },
    },
    {
      kind: "official",
      label: {
        en: "Accessible India Campaign (Sugamya Bharat Abhiyan)",
        hi: "सुगम्य भारत अभियान",
        gu: "સુગમ્ય ભારત અભિયાન",
      },
      url: "https://depwd.gov.in/",
      note: {
        en: "A government campaign for accessible buildings, transport and digital services. Details are on the Department's website.",
        hi: "सुलभ इमारतों, परिवहन और डिजिटल सेवाओं के लिए सरकारी अभियान। विवरण विभाग की वेबसाइट पर है।",
        gu: "સુલભ ઇમારતો, પરિવહન અને ડિજિટલ સેવાઓ માટેનું સરકારી અભિયાન. વિગતો વિભાગની વેબસાઇટ પર છે.",
      },
    },
  ],
  reviewedOn: "2026-11-02",
  durationSec: 70,
};
