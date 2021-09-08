import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";
import db from "./localdb";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunk: [],
    };
  }
  componentDidMount() {
    console.log();
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            centerComponent={{
              text: "Monkey Chunky",
              style: { color: "white", fontSize: 20 },
            }}
            backgroundColor="red"
          />
          <Image
            source={require("./logo.png")}
            style={{ height: 100, width: 100, alignSelf: "center" }}
          />
          <TextInput
            onChangeText={(data) => {
              this.setState({
                text: data.toLowerCase(),
              });
            }}
            placeholder="Enter a word"
            value={this.state.text}
            style={styles.inputText}
          ></TextInput>
          <Button
            title="go"
            onPress={() => {
              console.log(this.state.text);
              this.setState({
                chunk: db[this.state.text].chunks,
              });
            }}
          />
          <View style={styles.chunks}>
            {this.state.chunk.map((item) => (
              <TouchableOpacity style={styles.chunkButton}>
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8b8b8",
    marginBottom: 40,
  },
  inputText: {
    backgroundColor: "white",
    borderWidth: 5,
    marginTop: 50,
    marginBottom: 30,
  },
  chunks: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  chunkButton: {
    backgroundColor: "blue",
    marginRight: 20,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    height: 50,
  },
});
