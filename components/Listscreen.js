import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      });
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => alert(item.body)}>
        <View style={styles.itemContainer}>
          <View style={styles.itemWrapper}>
            <Text style={{ fontSize: 16, fontWeight: "200" }}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    let { container } = styles;
    let { dataSource, isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor="#95adbe"
            style="dark"
            translucent={false}
          />
          <View
            style={{ margin: 20, flexDirection: "row", alignItems: "center" }}
          >
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Image
                source={require('./profile.jpg')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  borderWidth: 2,
                  borderColor: "#95adbe",
                }}
              />
            </TouchableOpacity>
            <View style={{ paddingStart: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: 200 }}>Welcome !</Text>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#95adbe" }}
              >
                Rizky Nuansa
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderRadius: 100 / 2,
                  elevation: 4,
                }}
              >
                <Image
                  source={require("./notifiaction.png")}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: "#95adbe",
                  }}
                />
              </View>
            </View>
          </View>

          {/* The search button */}
          <View style={{ flexDirection: "row" }}>
            <View style={styles.searchContainer}>
              <View style={styles.searchWrapper}>
                <TextInput
                  style={styles.searchInput}
                  onChange={() => {}}
                  placeholder="What are you looking?"
                  fontWeight="300"
                />
              </View>
            </View>

            <TouchableOpacity style={styles.searchBtn}>
              <Image
                source={require("./search.png")}
                resizeMode="contain"
                style={styles.searchBtnImage}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "200",
              color: "black",
              paddingStart: 20,
              paddingTop: 10,
            }}
          >
            Today List
          </Text>

          <View style={container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              data={dataSource}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    marginStart: 24,
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  searchWrapper: {
    backgroundColor: "#F3F4F8",
    marginRight: 12,
    justifyContent: "center",
    padding: 16,
    borderRadius: 16,
    height: "100%",
    width: "100%",
  },
  searchBtn: {
    width: 50,
    height: 50,
    backgroundColor: "#FF7754",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 20,
  },
  searchBtnImage: {
    flex: 1,
    width: "50%",
    height: "50%",
    tintColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  itemContainer: {
    height: 60,
    borderRadius: 16,
    elevation: 2,
    // borderWidth: 1,
    // borderColor: "#95adbe",
    backgroundColor: "#F3F4F8",
    justifyContent: "center",
    paddingStart: 8,
    paddingBottom: 2,
  },
  itemWrapper: {
    padding: 5,
    borderBottomWidth: 1,
    justifyContent: "center",
    borderBottomWidth: 0,
  },
});
