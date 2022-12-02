import { Image, View, Text, StyleSheet, Button } from "react-native";

const Detail = ({ route }) => {
  const dish=route.params.data;
  return (
    <View>
      <Image
        source={require(`C:/Learning/React-Native/Workspace/Food-Corner/assets/productImages/${dish.imagePath}`)}
        style={{ width: 140, height: 140 }}
      />
      <View>
        <Text style={styles.itemName}>{dish.name}</Text>
        <Text>Rs. {dish.price}</Text>
      </View>
    </View>
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
  }
});

export default Detail;
