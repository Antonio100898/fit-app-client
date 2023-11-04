import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";

export const Container = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
