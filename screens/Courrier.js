import { StyleSheet, Text, View } from "react-native";

const Transaction = () => {
  return (
    <View style={styles.container}>
      <Text>Transaction</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
