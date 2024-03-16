import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141b26",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#141b26",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 200,
    height: 40,
    borderRadius: 4,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    gap: 16,
  },
});
