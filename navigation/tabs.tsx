import * as React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  RefreshControl,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Pages } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import colors from "../config/colors";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Tab.Navigator
        initialRouteName={Pages.ExercisePage}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let rn = route.name;

            if (rn === Pages.TutorialPage) {
              return (
                <FontAwesome
                  size={30}
                  name="lightbulb-o"
                  color={focused ? colors.light.main : "grey"}
                />
              );
            } else if (rn === Pages.ExercisePage) {
              return (
                <FontAwesome
                  size={30}
                  name="tachometer"
                  color={focused ? colors.light.main : "grey"}
                />
              );
            }
          },
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: { marginTop: 2 },
        })}
      >
        <Tab.Screen
          options={{ title: "ExercisePage", tabBarActiveTintColor: "black" }}
          name="ExercisePage"
          children={() => <View></View>}
        />
        <Tab.Screen
          options={{ title: "TutorialPage", tabBarActiveTintColor: "black" }}
          name="TutorialPage"
          children={() => <View></View>}
        />
      </Tab.Navigator>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Tabs;
