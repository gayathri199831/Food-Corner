import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Components/Dashboard/Main";
import Detail from "./Components/FoodDetail/Detail";
//import Checkout from "./Components/Order/Checkout";
import ShippingDetails from "./Components/Shipping/ShippingDetails";
import Checkout from "./Components/Shipping/Checkout";
import WelcomePage from "./Components/Welcome/WelcomePage";
// import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{ ...styles.detail, headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            ...styles.detail,
            title: "Welcome to SAGA foods",
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ ...styles.detail }}
        />
        <Stack.Screen
          name="shippingDetails"
          component={ShippingDetails}
          options={{ ...styles.detail }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ ...styles.detail }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    title: "",
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerTitleAlign: "center",
  },
});
