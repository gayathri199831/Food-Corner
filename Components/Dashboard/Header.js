import {
  Button,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-web";
import Detail from "../FoodDetail/Detail";

const Header = ({navigation}) => {
  // const image = {require('../../assets/')}

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/homePageImage.webp")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.imageBg}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("Detail", { name: "Home" })}
          >
            Hungry ??
          </Text>
        </View>
       
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 200,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    // height:200
  },
  imageBg: {
    backgroundColor: "#000000c0",
    height: 200,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    // height:200,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "rgb(210,210,210)",
  },
  tab: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "rgb(90,90,90)",
  },
});

export default Header;
