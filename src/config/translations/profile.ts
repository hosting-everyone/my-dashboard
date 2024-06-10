import { createI18n } from '@/utils/i18n';
import { common } from './common';
import { provider } from './provider';

// Define the shape of the profile translations
interface ProfileTranslations {
  logout: string;
  language: string;
  'language description': string;
  settings: string;
  'dark mode': string;
  'dark mode description': string;
  'dev mode': string;
  'dev mode description': string;
}

// Define the shape of the i18n configuration
interface I18nConfig {
  en: ProfileTranslations;
  cn: ProfileTranslations;
}

// Create the profile translations using createI18n function
export const profile = createI18n<I18nConfig>(provider, {
  en: {
    logout: common.en.logout,
    language: 'Language',
    'language description': 'Select your language',
    settings: 'Settings',
    'dark mode': 'Dark Mode',
    'dark mode description': 'Enables dark theme in order to protect your eyes',
    'dev mode': 'Developer Mode',
    'dev mode description': 'Used for debugging and testing',
  },
  cn: {
    logout: common.cn.logout,
    language: '你的語言',
    'language description': '選擇你的語言',
    settings: '設置',
    'dark mode': '黑暗模式',
    'dark mode description': '啟用深色主題可以保護您的眼睛',
    'dev mode': '開發者模式',
    'dev mode description': '用於調試和測試',
  },
});
