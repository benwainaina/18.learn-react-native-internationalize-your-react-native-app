import { Image, StyleSheet, Text, View } from "react-native";
import LogoPng from "../../assets/images/logo.png";

export const HomeComponent = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper__section_one}>
        <Text style={styles.wrapper__section_one__salutation}>
          Welcome back
        </Text>
        <Text style={styles.wrapper__section_one__username}>Benson</Text>
      </View>
      <View>
        <Image source={LogoPng} style={styles.wrapper__logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    rowGap: 128,
    backgroundColor: "white",
  },
  wrapper__section_one: {
    alignItems: "center",
    rowGap: 12,
  },
  wrapper__section_one__salutation: { fontSize: 16 },
  wrapper__section_one__username: { fontSize: 24, fontWeight: "bold" },
  wrapper__logo: { width: 120, height: 120 },
});
