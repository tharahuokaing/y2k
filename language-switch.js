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
    // Extend for all countries
};

// Default language
let lang = "en";

// ================= SWITCH LANGUAGE FUNCTION =================
function switchCountryLang(countryCode) {
    if (countryLangMap[countryCode]) {
        lang = countryLangMap[countryCode];
        // Speak confirmation in selected language loudly
        speakText(getLanguageName(lang), true);
    }
}

// ================= SPEAK TEXT FUNCTION =================
function speakText(text, scream = false) {
    if (!window.speechSynthesis) return;

    const utter = new SpeechSynthesisUtterance(text);

    // Use the selected language
    utter.lang = lang;

    // Dramatic adjustments for screaming effect
    utter.rate = scream ? 1.1 : 0.9;      // slightly faster for urgency
    utter.pitch = scream ? 1.6 : 1.1;     // higher pitch to sound intense
    utter.volume = scream ? 1.0 : 0.9;    // max volume

    window.speechSynthesis.speak(utter);
}

// ================= HELPER FUNCTION =================
function getLanguageName(code) {
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
