import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import CheckBox from "expo-checkbox";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Image
          style={{
            height: 290,
            width: "70%",
            borderRadius: 30,
            marginVertical: 30,
          }}
          source={require("../assets/undraw_Access_account_re_8spm.png")}
        />
      </View>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginBottom: -35 }}>
          {/* <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            Nous sommes ravis de vous revoir.
          </Text> */}

          {/* <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
            }}
          >
            Connectez-vous pour accéder à tous vos e-mails, rester en contact
            avec vos contacts et gérer votre boîte de réception avec facilité.
          </Text> */}
        </View>

        <View
          style={{
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
            Email
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Entrez votre adresse email"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{ width: "100%" }}
            />
          </View>
        </View>

        {/* <View
            style={{
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
              Numéro de Téléphone
            </Text>
  
            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="+221"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{
                  width: "12%",
                  borderRightWidth: 1,
                  borderLeftColor: COLORS.grey,
                  height: "100%",
                }}
              />
  
              <TextInput
                placeholder="Entrez votre numéro de téléphone"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{
                  width: "80%",
                }}
              />
            </View>
          </View> */}

        <View
          style={{
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
            Mot de passe
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Entrez votre mot de passe"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={{ width: "100%" }}
            />

            <TouchableOpacity
              onPress={showPassword}
              style={{ position: "absolute", right: 12 }}
            >
              {isPasswordShown ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
          }}
        >
          <CheckBox
            style={{
              marginRight: 8,
            }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.secondary : undefined}
          />
          <Text>Souvenir de moi</Text>
        </View>

        <Button
          onPress={() => navigation.navigate("HomeScreen")}
          title="Se connecter"
          textColor={COLORS.white}
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10,
              }}
            />
            <Text>Ou S'inscrire avec </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10,
              }}
            />
          </View> */}

        {/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10,
              }}
              onPress={() => console.log("Pressed")}
            >
              <Image
                resizeMode="contain"
                style={{ height: 36, width: 36, marginRight: 8 }}
                source={require("../assets/facebook.png")}
              />
              <Text>Facebook</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10,
              }}
              onPress={() => console.log("Pressed")}
            >
              <Image
                resizeMode="contain"
                style={{ height: 36, width: 36, marginRight: 8 }}
                source={require("../assets/google.png")}
              />
              <Text>Google</Text>
            </TouchableOpacity>
          </View> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Mot de passe oublié ?
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Réinitialiser
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
