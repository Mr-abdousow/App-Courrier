import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Settings = () => {
  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Profil</Text>
        </View>
        <View>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
      </View>
      {/* End Header Container */}

      {/* Profil Info container */}
      <View style={styles.profilInfoContainer}>
        <View>
          <Image
            source={require("../assets/hero2.jpg")}
            style={{
              height: 70,
              width: 70,
              borderRadius: 30,
            }}
          />
        </View>

        <View style={styles.profilInfos}>
            <View><Text style={{fontWeight:'bold'}}>Abdou Sow</Text></View>
            <View><Text>abdourahmane.sow@talentsconsult.org</Text></View>
            <View><Text style={{color:'#2a72ee', marginVertical:5, borderBottomWidth:1}}>Edit Profile</Text></View>
        </View>
      </View>
      {/* Profil Info container */}

      {/*  */}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },

  headerContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profilInfoContainer : {
    marginVertical : 20,
    flexDirection:'row',
    alignItems:'center',
    gap : 10
  }
});
