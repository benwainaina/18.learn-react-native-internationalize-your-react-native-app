import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { useTranslationUtility } from "../shared/utilities/useTranslation.utility";

export const ProfileComponent = () => {
  /**
   * hooks
   */
  const { translate } = useTranslationUtility();

  /**
   * states
   */
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  /**
   * effects
   */
  useEffect(() => {
    setFormIsValid(username !== "" && password !== "");
  }, [username, password]);

  return (
    <View style={styles.wrapper}>
      <View style={{ rowGap: 24, width: "100%" }}>
        <TextInput
          placeholder={translate("content.profile.form.username")}
          style={styles.input}
          onChangeText={(newText: string) => setUsername(newText)}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholder={translate("content.profile.form.password")}
          style={styles.input}
          onChangeText={(newText: string) => setPassword(newText)}
        ></TextInput>
      </View>
      <TouchableHighlight
        disabled={!formIsValid}
        underlayColor={""}
        style={{
          ...styles.button,
          opacity: !formIsValid ? 0.6 : 1.0,
        }}
        onPress={() => setShowNotification(true)}
      >
        <Text style={styles.buttonText}>
          {translate("content.profile.form.button")}
        </Text>
      </TouchableHighlight>
      {showNotification && (
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            {translate("content.profile.notifications.success")}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    height: "100%",
    alignItems: "center",
    rowGap: 32,
    paddingTop: 64,
    // justifyContent: "center",
  },
  input: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 16,
    width: "100%",
    alignItems: "center",
    borderRadius: 24,
    fontWeight: "bold",
  },
  buttonText: {
    textTransform: "capitalize",
    color: "white",
  },
  notification: {
    position: "absolute",
    bottom: 0,
    elevation: 4,
    backgroundColor: "#17DD97",
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  notificationText: {
    color: "black",
  },
});
/* Rectangle 6 */

// position: absolute;
// width: 290px;
// height: 78px;
// left: 15px;
// top: 474px;

// background: #FFFFFF;
// box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
// border-radius: 12px;
