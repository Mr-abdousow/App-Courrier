import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Home,
  Historique,
  Notification,
  Settings,
  Transaction,
} from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff",
      padding: 15,
    },
  };

  return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabBarIcon}>
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>
                    ACCUEIL
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Historique"
          component={Historique}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabBarIcon}>
                  <FontAwesome
                    name="history"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>
                    HISTORIQUE
                  </Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    top: Platform.OS == "ios" ? -10 : -20,
                    width: Platform.os == "ios" ? 50 : 60,
                    height: Platform.os == "ios" ? 50 : 60,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#16247d",
                  }}
                >
                  <FontAwesome5 name="exchange-alt" size={24} color="#fff" />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabBarIcon}>
                  <Ionicons
                    name="notifications"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>
                    MESSAGES
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabBarIcon}>
                  <Ionicons
                    name="settings"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>
                    SETTINGS
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  tabBarIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
});
