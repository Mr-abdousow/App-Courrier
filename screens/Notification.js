import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Prices = () => {
  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        <View>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
      </View>
      {/* End Header Container */}

      {/* Filter Container */}
      <View style={styles.filterContainer}>
        <View style={styles.filterTextActive}>
          <Text style={{ color: "#fff" }}>All</Text>
        </View>
        <View style={styles.filterText}>
          <Text>Following</Text>
        </View>
        <View style={styles.filterText}>
          <Text>Channel</Text>
        </View>
        <View style={styles.filterText}>
          <Text>Feed</Text>
        </View>
      </View>
      {/* End Filter Container */}

      {/* Message Container */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.messageContainer}>
          <View style={styles.messages}>
            <View style={styles.messageContent}>
              <View>
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
                <Entypo name="dot-single" size={48} color="blue" />
              </View>
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                  }}
                  source={require("../assets/hero1.jpg")}
                />
              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Annabelle Ramos</Text>
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
        </View>
      </ScrollView>
      {/* End Message Container */}
    </View>
  );
};

export default Prices;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor : '#e9ecef'
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

  filterContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  scrollView: {
    scrollbarWidth: 0,
    overflow: "hidden",
  },

  filterText: {
    fontSize: 15,
    color: "#fff",
    padding: 15,
    margin: 10,
    textAlign: "center",
    borderColor: "#000",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
  },
  filterTextActive: {
    fontSize: 15,
    padding: 15,
    margin: 10,
    textAlign: "center",
    borderColor: "#000",
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  },
  messageContainer: {
    borderRadius: 10,
    marginBottom: 60,
  },

  messages: {
    backgroundColor: "#ffffff",
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },

  messageContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 100,
  },
});
