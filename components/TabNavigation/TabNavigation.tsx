import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Settings from "../SettingsMainTab/SettingsMainTab";
import Profile from "../ProfileMainTab/ProfileMainTab";
import { TrainingStackScreen } from "@/components/TrainingMainTab/TrainingMainTab";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "cyan",
        headerShown: false,
        headerStyle: {
          backgroundColor: "transparent",
        },
        tabBarStyle: {
          position: "absolute",
          bottom: -45,
          backgroundColor: "#1f1f1f",
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (

            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={TrainingStackScreen}
        options={{
          tabBarLabel: "Workouts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" color={color} size={size} />
          ),

        }}

      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
