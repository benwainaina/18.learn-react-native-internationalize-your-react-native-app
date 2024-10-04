import {
  getFocusedRouteNameFromRoute,
  useRoute,
} from "@react-navigation/native";
import "./i18n.config";
import { AppRoutes } from "./routes";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { LanguageSelectorSharedComponent } from "./shared/components/LanguageSelector.component.shared";
import { useTranslation } from "react-i18next";

export default function Index() {
  /**
   * constants
   */
  const availableRoutes: Array<{ routeName: string; label: string }> = [
    { routeName: "home", label: "footer.navigation.home" },
    { routeName: "profile", label: "footer.navigation.profile" },
  ];

  /**
   * hooks
   */
  const route = useRoute();
  const nestedRoute = getFocusedRouteNameFromRoute(route);
  const navigation = useNavigation();
  const { t: translate } = useTranslation();

  /**
   * states
   */
  const [currentRouteName, setCurrentRouteName] = useState<string>("home");

  /**
   * effects
   */
  useEffect(() => {
    if (nestedRoute) {
      setCurrentRouteName(nestedRoute);
    }
  }, [nestedRoute]);

  return (
    <View style={styles.wrapper}>
      <View style={{ paddingVertical: 12 }}>
        <LanguageSelectorSharedComponent />
      </View>
      <AppRoutes></AppRoutes>
      <View style={styles.wrapper__content}>
        {availableRoutes.map((availableRoute) => (
          <TouchableHighlight
            key={availableRoute.routeName}
            underlayColor={""}
            onPress={() => navigation.navigate(availableRoute.routeName)}
          >
            <Text
              style={{
                fontWeight:
                  availableRoute.routeName === currentRouteName
                    ? "bold"
                    : "normal",
                textTransform: "capitalize",
              }}
            >
              {translate(availableRoute.label)}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  wrapper__content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    columnGap: 124,
  },
});
