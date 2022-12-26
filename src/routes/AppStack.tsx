
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamsList } from "../types/AppStackParamsList";
import { Text, SafeAreaView, View} from "react-native";

const Stack = createNativeStackNavigator();

import Welcome from "../screens/Welcome";
import Timer from "../screens/Timer";

export default function AppStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Timer" component={Timer} />
      </Stack.Navigator>
    )
}
