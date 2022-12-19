import { useState } from "react";
import { Image, View, Text, StyleSheet, Button } from "react-native";

const Detail = ({ route, navigation }) => {
  const dish = route.params.data;
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter > 1 ? counter - 1 : counter);
  };

  const onOrderClick = () => {
    const data = { ...dish, totalPrice, quantity: counter };
    navigation.navigate("shippingDetails", { data: data });
  };

  let totalPrice = counter * dish.price;

  return (
    <View style={styles.main}>
      <View>
        <Image
          source={require(`C:/Learning/React-Native/Workspace/Food-Corner/assets/productImages/${dish.imagePath}`)}
          style={styles.foodImage}
        />
        <View>
          <Text style={styles.itemName}>{dish.name}</Text>
          <Text style={styles.itemPrice}>Rs. {dish.price} only</Text>
          <Text style={styles.description}>{dish.description}</Text>
        </View>
        <View style={styles.fixToText}>
          <Text style={styles.itemPrice}>Total : {totalPrice}</Text>
          <View style={styles.counter}>
            <Button title="-" onPress={decreaseCounter} />
            <Text style={styles.counterNumber}>{counter}</Text>
            <Button title="+" onPress={increaseCounter} />
          </View>
        </View>
      </View>

      <View>
        <Button
          title="Order Now"
          color="rgb(255,99,71)"
          onPress={onOrderClick}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: 0.2,
    textAlign: "justify",
    padding: 5,
  },
  itemName: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 5,
    marginBottom: 8,
    textAlign: "center",
  },
  foodImage: {
    width: "100%",
    height: 400,
  },
  fixToText: {
    flexDirection: "row",
    padding: 3,
    justifyContent: "space-between",
    marginRight: 10,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  counterNumber: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 500,
  },
  main:{
    flex:1,
    justifyContent:"space-between"
  }
});

export default Detail;
