import {
  Button,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-web";
import Detail from "../FoodDetail/Detail";
import data from "../../data.json";
import { useState } from "react";

const Header = ({ navigation }) => {
  const [filterData, setfilterData] = useState();
  // const image = {require('../../assets/')}
  console.log("data-header", data);

  const searchItem = (e) => {
    const value = e.target.value.toLowerCase();
    let foodData = [];

    if (value.length > 2) {
      for (let foodItem in data) {
        console.log("foodItem", data[foodItem]);
        let food = data[foodItem].filter((item) => {
          let itemName = item.name.toLowerCase();
          return itemName.includes(value);
        });
        console.log("filtered data", food);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/homePageImage.webp")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.imageBg}>
          <Text style={styles.text}>Hungry ??</Text>
          <TextInput
            style={styles.search}
            placeholder="Search...."
            onChange={(e) => searchItem(e)}
          />
        </View>
        {/* <View>
         <Text style={color="white"}>Hiii</Text>
        </View> */}
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
  search: {
    borderBottomColor: "white",
    borderBottomWidth: 3,
    color: "white",
    padding: 8,
    // width: 200,
    marginHorizontal: "auto",
    // borderRadius:10,
    alignItems: "center",
  },
});

export default Header;
