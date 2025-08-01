'use client'

import { useState, useEffect } from 'react';

// 支持的语言
export const SUPPORTED_LOCALES = ['en', 'zh'] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];

// 默认语言
export const DEFAULT_LOCALE: Locale = 'en';

// 语言显示名称
export const LOCALE_NAMES = {
  en: 'English',
  zh: '中文'
} as const;

// 语言数据缓存
const localeCache = new Map<string, any>();

/**
 * 检测浏览器语言偏好
 */
export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  // 检查本地存储的语言偏好
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale as Locale)) {
    return savedLocale as Locale;
  }

  // 检测浏览器语言
  const browserLang = navigator.language.toLowerCase();
  
  // 直接匹配
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('en')) return 'en';
  
  // 默认返回英文
  return DEFAULT_LOCALE;
}

/**
 * 设置当前语言
 */
export function setLocale(locale: Locale) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale);
    // 触发自定义事件通知其他组件
    window.dispatchEvent(new CustomEvent('localeChange', { detail: locale }));
  }
}

/**
 * 异步加载语言文件
 */
export async function loadLocaleData(locale: Locale): Promise<any> {
  const cacheKey = `locale-${locale}`;
  
  // 检查缓存
  if (localeCache.has(cacheKey)) {
    return localeCache.get(cacheKey);
  }

  try {
    // 动态导入语言文件
    const data = await import(`../locales/${locale}/common.json`);
    localeCache.set(cacheKey, data.default);
    return data.default;
  } catch (error) {
    console.error(`Failed to load locale data for ${locale}:`, error);
    // 如果加载失败，尝试加载默认语言
    if (locale !== DEFAULT_LOCALE) {
      return loadLocaleData(DEFAULT_LOCALE);
    }
    return {};
  }
}

/**
 * Hook：使用国际化
 */
export function useTranslation(initialLocale?: Locale) {
  const [locale, setCurrentLocale] = useState<Locale>(initialLocale || DEFAULT_LOCALE);
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  // 初始化：检测和设置语言
  useEffect(() => {
    const detectedLocale = initialLocale || detectBrowserLocale();
    setCurrentLocale(detectedLocale);
    
    // 加载语言数据
    loadLocaleData(detectedLocale).then(data => {
      setTranslations(data);
      setIsLoading(false);
    });
  }, [initialLocale]);

  // 监听语言变化
  useEffect(() => {
    const handleLocaleChange = (event: CustomEvent) => {
      const newLocale = event.detail as Locale;
      setCurrentLocale(newLocale);
      setIsLoading(true);
      
      loadLocaleData(newLocale).then(data => {
        setTranslations(data);
        setIsLoading(false);
      });
    };

    window.addEventListener('localeChange', handleLocaleChange as EventListener);
    return () => {
      window.removeEventListener('localeChange', handleLocaleChange as EventListener);
    };
  }, []);

  // 翻译函数
  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return value || fallback || key;
  };

  // 切换语言函数
  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return {
    locale,
    t,
    switchLocale,
    isLoading,
    availableLocales: SUPPORTED_LOCALES,
    localeNames: LOCALE_NAMES
  };
}

/**
 * 获取当前语言（服务器端安全）
 */
export function getCurrentLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  return localStorage.getItem('locale') as Locale || detectBrowserLocale();
}

/**
 * 格式化数字（根据语言环境）
 */
export function formatNumber(num: number, locale: Locale): string {
  try {
    return new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : 'en-US').format(num);
  } catch {
    return num.toString();
  }
}

/**
 * 格式化日期（根据语言环境）
 */
export function formatDate(date: Date, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US').format(date);
  } catch {
    return date.toLocaleDateString();
  }
}
