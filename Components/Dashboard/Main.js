import { Button, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-web";
import Detail from "../FoodDetail/Detail";
import Body from "./Body";
import Header from "./Header";
import data from "../../data.json";
import { useState, useEffect } from "react";

const Main = ({ navigation }) => {
  const [foodContent, setFoodContent] = useState("fastFood");
  const [foodData, setFoodData] = useState(data["fastFood"]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFoodData(data[foodContent]);
  }, [foodContent]);

  // const image = {require('../../assets/')}
  console.log("data-header", data);

  const searchItem = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    if (value.length > 2) {
      let filteredData = [];
      for (let foodItem in data) {
        console.log("foodItem", data[foodItem]);
        let food = data[foodItem].filter((item) => {
          let itemName = item.name.toLowerCase();
          return itemName.includes(value);
        });
        filteredData = [...filteredData, ...food];
        console.log("filtered data", food);
      }
      setFoodData(filteredData);
    } else {
      setFoodData(data[foodContent]);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header navigation={navigation} searchItem={searchItem} />
        <Body
          navigation={navigation}
          foodContent={foodContent}
          setFoodContent={setFoodContent}
          foodData={foodData}
          searchValue={searchValue}
          // setFoodData={setFoodData}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  //  / container: {
  //     backgroundColor: "white",
  //     borderRadius: 8,
  //     width: ITEM_WIDTH,
  //     paddingBottom: 40,
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 3,
  //     },
  //     shadowOpacity: 0.29,
  //     shadowRadius: 4.65,
  //     elevation: 7,
  //   },
  //   image: {
  //     width: ITEM_WIDTH,
  //     height: 300,
  //   },
  // header: {
  //   color: "#222",
  //   fontSize: 28,
  //   fontWeight: "bold",
  //   paddingLeft: 20,
  //   paddingTop: 20,
  // },
  // body: {
  //   color: "#222",
  //   fontSize: 18,
  //   paddingLeft: 20,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  // },
});

export default Main;
