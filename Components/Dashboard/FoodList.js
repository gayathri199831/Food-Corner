import { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, Button } from "react-native";
import data from "../../data.json";
const FoodList = ({ foodData ,navigation}) => {

  // console.log("data", foodData);

  return (
    <>
      <View style={styles.itemBox}>
        {foodData.map((item, key) => {
          return (
            <View style={styles.foodItem} key={key}>
              <Image
                source={require(`C:/Learning/React-Native/Workspace/Food-Corner/assets/productImages/${item.imagePath}`)}
                style={{ width: 140, height: 140 }}
              />
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>Rs. {item.price}</Text>
              </View>
              <Button title="Order" color="rgb(255,99,71)" onPress={()=>navigation.navigate("Detail", { data:item })} />
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  foodItem: {
    borderWidth: 1,
    borderColor: "gray",
    width: "fit-content",
    margin: 20,
    borderRadius: 10,
    padding: 5,
  },
  itemBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"center"
  },
  itemName:{
    fontSize:18,
    fontWeight:"bold"
  }
});

export default FoodList;
