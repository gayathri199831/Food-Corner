import { Button, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-web";
import Detail from "../FoodDetail/Detail";
import Header from "./Header";

const Main = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate("Detail", { name: "Home" })}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Main;
