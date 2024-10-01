import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeComponent } from "./home/Home.component";
import { ProfileComponent } from "./profile/Profile.component";

const AppStack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="home" component={HomeComponent}></AppStack.Screen>
      <AppStack.Screen
        name="profile"
        component={ProfileComponent}
      ></AppStack.Screen>
    </AppStack.Navigator>
  );
};
