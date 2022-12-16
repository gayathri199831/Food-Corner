import { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";

const Checkout = ({ route, navigation }) => {
  const data = route.params.data;
  const [show, setShow] = useState(false);
  console.log("data", data);
  const navigateHome = () => {
    setShow(false);
    navigation.navigate("Home");
  };
  return (
    <View style={{ ...styles.details, opacity: show ? 0.3 : 1 }}>
      <Text style={styles.purchase}>Purchase Details</Text>
      <View style={styles.imageDetails}>
        <Image
          source={require(`C:/Learning/React-Native/Workspace/Food-Corner/assets/productImages/${data.imagePath}`)}
          style={styles.image}
        />
        <View style={styles.dishDetails}>
          <Text style={styles.dishName}>{data.name}</Text>
          <Text style={styles.dishQuantity}>Qt: {data.quantity}</Text>
          <Text style={styles.dishPrice}>Total Price : {data.totalPrice}</Text>
        </View>
      </View>
      <View style={styles.payCancelButton}>
        <Pressable style={styles.pay} onPress={() => setShow(true)}>
          <Text style={styles.payText}>Pay</Text>
        </Pressable>
        <Pressable
          style={{ ...styles.pay, backgroundColor: "rgb(210,210,210)" }}
          onPress={navigateHome}
        >
          <Text style={styles.payText}>Cancel</Text>
        </Pressable>
      </View>
      <View>
        <Modal animationType="fade" visible={show} transparent={true}>
          <View style={styles.modal}>
            <View style={styles.thankYouName}>
              <Text style={styles.thankYouText}>Thank you for your Order!!!</Text>
              <Text style={styles.thankName}>
                {data.contactDetails.fullName}
              </Text>
            </View>
            <View style>
              <Pressable
                style={{ ...styles.pay, backgroundColor: "rgb(255,99,71)" }}
                onPress={navigateHome}
              >
                <Text style={styles.payText}>Order More</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    position: "relative",
  },
  purchase: {
    backgroundColor: "rgb(210,210,210)",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    marginBottom: 15,
  },
  imageDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  dishDetails: {
    justifyContent: "center",
  },
  dishName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  dishPrice: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 5,
    marginBottom: 8,
  },
  dishQuantity: {
    // marginLeft: 10,
    // marginRight: 10,
    fontSize: 20,
    fontWeight: 500,
  },
  payCancelButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  pay: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "rgb(255,99,71)",
  },
  payText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  modal: {
    position: "absolute",
    top: 250,
    // bottom: 20,
    // right: 50,
    right: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 200,
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 80,
    marginLeft: 40,
  },
  thankYouName: {
    textAlign: "center",
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  thankName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Checkout;
