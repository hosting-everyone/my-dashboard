import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

interface AuthTranslations {
  login: string;
  'login description': string;
  login_bn: string;
}

interface I18nConfig {
  en: AuthTranslations;
  nl: AuthTranslations;
  cn: AuthTranslations;
}

export const auth = createI18n<I18nConfig>(provider, {
  en: {
    login: 'Sign in',
    'login description': 'Login and start using our bot today',
    login_bn: 'Login with Discord',
  },
  nl: {
    login: 'Sign in',
    'login description': 'Login and start using our bot today',
    login_bn: 'Login with Discord',
  },
  cn: {
    login: '登入控制面板',
    'login description': '登錄並開始使用我們的機器人',
    login_bn: '使用 Discord 登錄',
  },
});
