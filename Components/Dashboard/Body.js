import { Button, View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-web";
import Detail from "../FoodDetail/Detail";
import { useState, useEffect } from "react";
import FoodList from "./FoodList";
import data from "../../data.json";

const Body = ({
  navigation,
  foodContent,
  setFoodContent,
  foodData,
  searchValue,
}) => {
  return (
    <>
      <View style={styles.tabs}>
        {searchValue.length > 2 ? (
          <Text style={{ ...styles.tab, paddingBottom: 20 }}>
            Your Searched Items for {searchValue}........
          </Text>
        ) : (
          <>
            <Text
              style={foodContent == "fastFood" ? styles.tabActive : styles.tab}
              onPress={() => setFoodContent("fastFood")}
            >
              Fast Food
            </Text>
            <Text
              style={foodContent == "deserts" ? styles.tabActive : styles.tab}
              onPress={() => setFoodContent("deserts")}
            >
              Deserts
            </Text>
            <Text
              style={
                foodContent == "mainCourse" ? styles.tabActive : styles.tab
              }
              onPress={() => setFoodContent("mainCourse")}
            >
              Main Course
            </Text>
          </>
        )}
      </View>
      <View>
        {searchValue.length > 2 && foodData.length == 0 ? (
          <View style={styles.noItemFound}>
            <Text style={styles.tab}> No items found</Text>
          </View>
        ) : (
          <FoodList foodData={foodData} navigation={navigation} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    // paddingLeft:5,
    // paddingRight: 20,
    // padding: 20,
    backgroundColor: "rgb(210,210,210)",
  },
  tab: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "rgb(90,90,90)",
  },
  tabActive: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "rgb(90,90,90)",
    // borderBottomColor: "black",
    //  borderWidth:2,
    borderBottomWidth: 5,
    paddingBottom: 15,
  },
  noItemFound: {
    //  display:"flex",
    // alignItems: "center",
    // justifyContent:"center",
    // marginTop:200
    marginVertical: "50%",
    marginHorizontal: "auto",
  },
});

export default Body;
