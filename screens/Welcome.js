import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

import COLORS from "../constants/colors";
import Button from "../components/Button";
const Welcome = ({navigation}) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/hero1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />

          <Image
            source={require("../assets/hero3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -10,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />

          <Image
            source={require("../assets/hero3.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />

          <Image
            source={require("../assets/hero2.jpg")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.getStarted}>Talent Consulting</Text>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              N'hésitez pas à explorer toutes les fonctionnalités que notre
              application offre pour rendre votre expérience de messagerie aussi
              fluide et agréable que possible.
            </Text>
          </View>

          <Button
            title="Démarrer"
            onPress={() => navigation.navigate("Login")}
          />

          {/* <View
            style={{
              flexDirection: "row",
              marginTop: 22,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Avez-vous déjà un compte ?
            </Text>

            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Se Connecter
              </Text>
            </Pressable>
          </View> */}
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
  },
  getStarted: {
    fontSize: 50,
    fontWeight: 800,
    color: COLORS.white,
  },
});
