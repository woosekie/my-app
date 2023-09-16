import React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
      <View style={{ margin: 20, flexDirection: "column", alignItems: "center" }}>
          <Image
            source={require("./profile.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 2,
              borderColor: "#95adbe",
            }}
          />
        <View style>
          <Text style={{ fontSize: 20, fontWeight: "300", color: "black" , marginTop: 8}}>
            Rizky Nuansa
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemWrapper}>
            <Text style={{ fontSize: 16, fontWeight: "200" }}>
              tedsds
            </Text>
          </View>
        </View>
      </View>
  );
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
    backgroundColor: "white",
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
