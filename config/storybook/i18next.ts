import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import russianLocale from '../../public/locales/ru/translation.json';
import englishLocale from '../../public/locales/en/translation.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    defaultNS: 'translation',
    ns: ['translation'],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs: ['en', 'ru'],
    resources: {
      ru: {
        translation: russianLocale,
      },
      en: {
        translation: englishLocale,
      },
    },
  });

export default i18n;
