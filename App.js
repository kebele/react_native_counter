import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const MyCustomButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

// let count = 0;

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // count = count + 1;
    // alert(count);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    // count = count - 1;
    // alert(count);
    setCount(count - 1);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Image source={require("./assets/icon.png")} style={styles.image} /> */}
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh94zRwOzwOPWIaUWMN8isp5LBCheCLKWBaA&usqp=CAU",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>counter : {count}</Text>
        <Text style={styles.subtext}>click buttons to change the counter</Text>
        {/* <View style={styles.buttonContainer}>
          <Button title="increment" />
          <Button title="decrement" />
        </View> */}
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginStart: 12 }]}>
            <Text style={styles.buttonText}>decrement</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.buttonContainer}>
          <MyCustomButton title="increment +" onPress={handleIncrement} />
          <MyCustomButton
            title="- decrement"
            style={{ marginStart: 16, backgroundColor: "pink" }}
            onPress={handleDecrement}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    fontSize: 30,
    marginTop: 16,
  },
  subtext: {
    fontSize: 20,
    color: "gray",
  },
  image: {
    // width: 300,
    height: 180,
    borderRadius: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    marginTop: 16,
  },
  button: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
});
