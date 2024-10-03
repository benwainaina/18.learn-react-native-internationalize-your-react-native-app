import { useTranslation as translationLibrary } from "react-i18next";

export const useTranslationUtility = () => {
  /**
   * translation hook
   */
  const { t, i18n } = translationLibrary();

  return {
    setLanguage: (newLanguage: string) => i18n.changeLanguage(newLanguage),
    translate: (translationKey: string) => t(translationKey),
    currentLanguage: () => i18n.language,
  };
};
