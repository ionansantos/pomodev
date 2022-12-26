import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import   AppStack   from "./src/routes/AppStack";
import theme from "./src/themes/dark";
import {SafeAreaView, Text } from "react-native";
import React from "react";


export default function App() {
    return (
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    )
}