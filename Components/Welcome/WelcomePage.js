import { useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";

const WelcomePage = ({ navigation }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("C:/Learning/React-Native/Workspace/Food-Corner/assets/Saga-removebg-preview.png")}
        style={styles.logo}
      />
      {loader ? <ActivityIndicator size="large" color="white" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,99,71)",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 250,
    width: 250,
  },
});

export default WelcomePage;
