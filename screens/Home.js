import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Accueil</Text>
        </View>
        <View>
          <Entypo name="dots-three-horizontal" size={24} color="#16247d" />
        </View>
      </View>
      {/* End Header Container */}

      {/* Stats Container */}
      <View
        style={{
          marginTop: 10,
          backgroundColor: "#16247d",
          borderRadius: 10,
          boxShadow: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontSize: 15 }}>
              Courriers Totaux
            </Text>
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 15 }}>À livrer</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
              20
            </Text>
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
              23
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10, marginBottom: 5 }}>
        <Text>Courriers</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 5 }}>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 10,
            width: "50%",
            borderRadius: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                padding: 5,
                borderRadius: 10,
                backgroundColor: "#305bf6",
              }}
            >
              <Feather name="calendar" size={18} color="#fff" />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>8</Text>
            </View>
          </View>

          <View>
            <Text style={{ marginVertical: 10, fontSize: 15, color: "gray" }}>
              Aujourdh'ui
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            padding: 10,
            width: "50%",
            borderRadius: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                padding: 5,
                borderRadius: 10,
                backgroundColor: "red",
              }}
            >
              <Feather name="calendar" size={18} color="#fff" />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>4</Text>
            </View>
          </View>

          <View>
            <Text style={{ marginVertical: 10, fontSize: 15, color: "gray" }}>
              À venir
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 10,
            width: "50%",
            borderRadius: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                padding: 5,
                borderRadius: 10,
                backgroundColor: "#000",
              }}
            >
              <Feather name="calendar" size={18} color="#fff" />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>10</Text>
            </View>
          </View>

          <View>
            <Text style={{ marginVertical: 10, fontSize: 15, color: "gray" }}>
              Tous
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            padding: 10,
            width: "50%",
            borderRadius: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                padding: 5,
                borderRadius: 10,
                backgroundColor: "green",
              }}
            >
              <AntDesign name="checkcircleo" size={18} color="#fff" />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>2</Text>
            </View>
          </View>

          <View>
            <Text style={{ marginVertical: 10, fontSize: 15, color: "gray" }}>
              Terminé
            </Text>
          </View>
        </View>
      </View>
      {/* Stats Content */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.messages}>
          <View style={styles.messageContent}>
            <View>
              {/* <FontAwesome5 name="history" size={48} color="#16247d" /> */}
              <AntDesign name="message1" size={24} color="#16247d" />
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Message Historique</Text>
              </View>
              <View>
                <Text>You have a new channel follower</Text>
              </View>
              <View>
                <Text style={{ marginVertical: 5, color: "gray" }}>
                  1 minute ago - Channel
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#e9ecef",
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

  statsContent: {
    marginVertical: 10,
  },

  messages: {
    backgroundColor: "#ffffff",
    height: 100,
    borderRadius: 5,
    marginTop: 10,
  },

  messageContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 100,
  },
  messageContainer: {
    borderRadius: 10,
    marginBottom: 20,
  },
  scrollView: {
    scrollbarWidth: 0,
    overflow: "hidden",
  },
});
