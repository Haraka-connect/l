// Translations for each language
const translations = {
    en: {
        welcome: "Welcome",
        description: "This is a description in English."
    },
    es: {
        welcome: "Bienvenido",
        description: "Esta es una descripción en español."
    },
    fr: {
        welcome: "Bienvenue",
        description: "Ceci est une description en français."
    },
    zh: {
        welcome: "欢迎",
        description: "这是中文描述。"
    },
    ar: {
        welcome: "أهلا وسهلا",
        description: "هذا وصف باللغة العربية."
    },
    hi: {
        welcome: "स्वागत है",
        description: "यह हिंदी में एक विवरण है।"
    },
    ru: {
        welcome: "Добро пожаловать",
        description: "Это описание на русском языке."
    },
    de: {
        welcome: "Willkommen",
        description: "Dies ist eine Beschreibung auf Deutsch."
    },
    ja: {
        welcome: "ようこそ",
        description: "これは日本語の説明です。"
    },
    pt: {
        welcome: "Bem-vindo",
        description: "Esta é uma descrição em português."
    }
};

// Get DOM elements
const languageSelector = document.getElementById('languageSelector');
const welcomeElement = document.getElementById('welcome');
const descriptionElement = document.getElementById('description');

// Function to update translations
function updateTranslations(language) {
    welcomeElement.textContent = translations[language].welcome;
    descriptionElement.textContent = translations[language].description;
}

// Event listener for language change
languageSelector.addEventListener('change', () => {
    const selectedLanguage = languageSelector.value;
    updateTranslations(selectedLanguage);
});

// Load the default language on page load
document.addEventListener('DOMContentLoaded', () => {
    const defaultLanguage = languageSelector.value;
    updateTranslations(defaultLanguage);
});