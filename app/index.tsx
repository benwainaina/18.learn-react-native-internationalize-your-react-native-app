import {
  getFocusedRouteNameFromRoute,
  useRoute,
} from "@react-navigation/native";
import { AppRoutes } from "./routes";
import { LanguageSelectorSharedComponent } from "./shared/components/LanguageSelector.component.shared";
import { Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  /**
   * constants
   */
  const availableRoutes: Array<{ routeName: string; label: string }> = [
    { routeName: "home", label: "Home" },
    { routeName: "profile", label: "Profile" },
  ];

  /**
   * hooks
   */
  const route = useRoute();
  const nestedRoute = getFocusedRouteNameFromRoute(route);
  const navigation = useNavigation();

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
    <View
      style={{
        justifyContent: "space-between",
        height: "100%",
        paddingHorizontal: 12,
        backgroundColor: "white",
      }}
    >
      <View style={{ paddingVertical: 12 }}>
        <LanguageSelectorSharedComponent />
      </View>
      <AppRoutes></AppRoutes>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 24,
          columnGap: 124,
        }}
      >
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
              }}
            >
              {availableRoute.label}
            </Text>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}
