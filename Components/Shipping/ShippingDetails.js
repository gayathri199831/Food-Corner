import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  CheckBox,
} from "react-native";
//import { CheckBox } from "react-native-web"

const contactFields = {
  fullName: "",
  number: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  accept: false,
};
const ShippingDetails = ({ navigation, route }) => {
  const [disabled, setDisabled] = useState(true);
  const [contactDetails, setContactDetails] = useState(contactFields);
  console.log("routedata", route.params.data);
  const data1 = route.params.data;
  const validateForm = (data) => {
    if (!data.fullName) {
      setDisabled(true);
      return false;
    }
    if (!data.number) {
      setDisabled(true);
      return false;
    }
    if (!data.address) {
      setDisabled(true);
      return false;
    }
    if (!data.city) {
      setDisabled(true);
      return false;
    }
    if (!data.state) {
      setDisabled(true);
      return false;
    }
    if (!data.zip) {
      setDisabled(true);
      return false;
    }
    if (!data.accept) {
      setDisabled(true);
      return false;
    }
    return true;
    //navigation.navigate('Detail', { data: data })
  };

  const handleChange = (e, name) => {
    console.log("event", e.target.checked);
    let value = e.target.value;
    let item = { ...contactDetails };
    if (name == "fullName") {
      item = { ...contactDetails, fullName: value };
      setContactDetails(item);
    } else if (name == "number") {
      item = { ...contactDetails, number: value };
      setContactDetails(item);
    } else if (name == "address") {
      item = { ...contactDetails, address: value };
      setContactDetails(item);
    } else if (name == "city") {
      item = { ...contactDetails, city: value };
      setContactDetails(item);
    } else if (name == "state") {
      item = { ...contactDetails, state: value };
      setContactDetails(item);
    } else if (name == "zip") {
      item = { ...contactDetails, zip: value };
      setContactDetails(item);
    } else if (name == "accept") {
      item = { ...contactDetails, accept:e.target.checked };
      setContactDetails(item);
    }
    if (validateForm(item)) {
      setDisabled(false);
    }
  };

  const handleSubmit=()=>{
    const value={contactDetails,...data1}
    console.log("value",value)
    navigation.navigate('Checkout', { data: value })
  }

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.checkoutHead}>
          Fill below info to complete your order
        </Text>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            onChange={(e) => handleChange(e, "fullName")}
            placeholder="Enter Your Full Name.."
          ></TextInput>
          <Text style={styles.formLabel}>Mobile Number</Text>
          <TextInput
            style={styles.textInput}
            onChange={(e) => handleChange(e, "number")}
            placeholder="Enter Your Number.."
          ></TextInput>
          <Text style={styles.formLabel}>Address</Text>
          <TextInput
            style={styles.textInput}
            onChange={(e) => handleChange(e, "address")}
            placeholder="Enter Your Full Address.."
          ></TextInput>
          <Text style={styles.formLabel}>City</Text>
          <TextInput
            style={styles.textInput}
            onChange={(e) => handleChange(e, "city")}
            placeholder="Enter Your City.."
          ></TextInput>
          <Text style={styles.formLabel}>State</Text>
          <TextInput
            style={styles.textInput}
            onChange={(e) => handleChange(e, "state")}
            placeholder="Enter Your State.."
          ></TextInput>
          <Text style={styles.formLabel}>Zip</Text>
          <TextInput
            style={styles.textInput}
            onChange={(e) => handleChange(e, "zip")}
            placeholder="Enter Your Full Name.."
          ></TextInput>
          <View style={styles.checkbox}>
            <CheckBox
              style={styles.formLabel}
              onChange={(e) => handleChange(e, "accept")}
              value={contactDetails.accept}
            />
            <Text style={styles.formLabel}>Accept Terms & Conditions</Text>
          </View>
        </View>
      </View>
      <View style={styles.checkoutBtn}>
        <Button title="Checkout" onPress={handleSubmit} disabled={disabled} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
  },
  form: {
    marginTop: 15,
    marginBottom: 15,
  },
  checkoutHead: {
    backgroundColor: "orange",
    textAlign: "center",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  formLabel: {
    marginLeft: 12,
    fontWeight: "bold",
    fontSize: 16,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  checkoutBtn: {
    marginBottom: 0,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ShippingDetails;
