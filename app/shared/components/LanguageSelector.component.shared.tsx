import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useTranslationUtility } from "../utilities/useTranslation.utility";
import ChevronDown from "../../../assets/images/chevron-down.png";
import ChevronUp from "../../../assets/images/chevron-up.png";

interface ILanguage {
  /**
   * language identifier
   */
  key: string;

  /**
   * language label
   */
  label: string;
}

export const LanguageSelectorSharedComponent = () => {
  /**
   * constants
   */
  const supportedLanguages: Array<ILanguage> = [
    { key: "en", label: "English" },
    { key: "ar", label: "Arabic" },
  ];

  /**
   * hooks
   */
  const { currentLanguage, setLanguage } = useTranslationUtility();

  /**
   * states
   */
  const [showPicker, setShowPicker] = useState<boolean>(false);

  /**
   * handlers
   */
  const onLanguageChange = (newLanguage: string) => {
    if (newLanguage !== currentLanguage()) {
      setLanguage(newLanguage);
      setShowPicker(false);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight
        style={styles.wrapper__active_language}
        onPress={() => setShowPicker(!showPicker)}
        underlayColor={""}
      >
        <>
          <Text style={styles.wrapper__active_language__text}>
            {currentLanguage()}
          </Text>
          <Image
            style={styles.wrapper__active_language__icon}
            source={showPicker ? ChevronUp : ChevronDown}
          />
        </>
      </TouchableHighlight>
      {showPicker && (
        <View style={styles.wrapper__picker}>
          {supportedLanguages.map((language) => (
            <TouchableHighlight
              underlayColor={""}
              key={language.key}
              onPress={() => onLanguageChange(language.key)}
            >
              <Text
                style={
                  language.key === currentLanguage()
                    ? styles.wrapper__picker__is_active_language
                    : {}
                }
              >
                {language.label}
              </Text>
            </TouchableHighlight>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { alignSelf: "flex-end" },
  wrapper__active_language: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  wrapper__active_language__text: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
  },
  wrapper__active_language__icon: {
    width: 12,
    aspectRatio: 10 / 6,
  },
  wrapper__picker: {
    position: "absolute",
    marginTop: 28,
    zIndex: 10,
    backgroundColor: "white",
    elevation: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: -24,
    rowGap: 12,
  },
  wrapper__picker__is_active_language: {
    fontWeight: "bold",
  },
});
