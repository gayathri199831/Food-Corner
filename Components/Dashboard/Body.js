import { Button, View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-web";
import Detail from "../FoodDetail/Detail";
import { useState } from "react";
import FoodList from "./FoodList";

const Body = ({navigation}) => {
  const [foodContent, setFoodContent] = useState('fastFood');

  return (
    <>
      <View style={styles.tabs}>
        <Text style={styles.tab} onPress={()=>setFoodContent('fastFood')}>Fast Food</Text>
        <Text style={styles.tab} onPress={()=>setFoodContent('deserts')}>Deserts</Text>
        <Text style={styles.tab} onPress={()=>setFoodContent('mainCourse')}>Main Course</Text>
      </View>
      <View>
        <FoodList type={foodContent} navigation={navigation}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default Body;
