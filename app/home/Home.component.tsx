import { Image, Text, View } from "react-native";
import LogoPng from "../../assets/images/logo.png";

export const HomeComponent = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        rowGap: 128,
        backgroundColor: "white",
      }}
    >
      <View style={{ alignItems: "center", rowGap: 12 }}>
        <Text style={{ fontSize: 16 }}>Welcome back</Text>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Benson</Text>
      </View>
      <View>
        <Image source={LogoPng} style={{ width: 120, height: 120 }} />
      </View>
    </View>
  );
};
