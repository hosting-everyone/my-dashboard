import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

// Define the shape of the nested error object
interface ErrorTranslations {
  'not enabled': string;
  'not enabled description': string;
  'not found': string;
  'not found description': string;
}

// Define the shape of the nested bn object
interface BNTranslations {
  enable: string;
  disable: string;
  save: string;
  discard: string;
}

// Define the shape of the feature translations
interface FeatureTranslations {
  unsaved: string;
  error: ErrorTranslations;
  bn: BNTranslations;
}

// Define the shape of the i18n configuration
interface I18nConfig {
  en: FeatureTranslations;
  cn: FeatureTranslations;
}

// Create the feature translations using createI18n function
export const feature = createI18n<I18nConfig>(provider, {
  en: {
    unsaved: 'Save Changes',
    error: {
      'not enabled': 'Not Enabled',
      'not enabled description': 'Try enable this feature?',
      'not found': 'Not Found',
      'not found description': "Hmm... Weird we can't find it",
    },
    bn: {
      enable: 'Enable Feature',
      disable: 'Disable',
      save: 'Save',
      discard: 'Discard',
    },
  },
  cn: {
    unsaved: '您有未保存的更改',
    error: {
      'not enabled': '未啟用',
      'not enabled description': '嘗試啟用此功能？',
      'not found': '未找到功能',
      'not found description': '奇怪...我們找不到它',
    },
    bn: {
      enable: '啟用功能',
      disable: '關閉功能',
      save: '保存更改',
      discard: '放棄',
    },
  },
});
