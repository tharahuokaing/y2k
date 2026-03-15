// ================= COUNTRY-LANGUAGE MAP =================
let countryLangMap = {
    US: "en",
    KH: "km",
    FR: "fr",
    CN: "zh-CN",
    JP: "ja",
    DE: "de",
    BR: "pt-BR",
    IN: "hi",
    RU: "ru",
    EG: "ar",
    // add all other countries as needed
};

// default language
let lang = "en";

// ================= SWITCH LANGUAGE FUNCTION =================
function switchCountryLang(countryCode) {
    if (countryLangMap[countryCode]) {
        lang = countryLangMap[countryCode];
        // Optional: speak confirmation in selected language
        speakText(getLanguageName(lang));
    }
}

// ================= SPEAK TEXT FUNCTION =================
function speakText(text) {
    if (!window.speechSynthesis) return; // browser does not support
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang; // speak in the selected language
    utter.rate = 0.9;  // speed
    utter.pitch = 1.1; // pitch
    window.speechSynthesis.speak(utter);
}

// ================= HELPER: OPTIONAL LANGUAGE NAME =================
function getLanguageName(code) {
    // Map language code to native language name for demo
    const langNames = {
        "en": "English",
        "km": "ភាសាខ្មែរ",
        "fr": "Français",
        "zh-CN": "中文",
        "ja": "日本語",
        "de": "Deutsch",
        "pt-BR": "Português",
        "hi": "हिन्दी",
        "ru": "Русский",
        "ar": "العربية"
    };
    return langNames[code] || "Language switched";
}
