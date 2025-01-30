import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141b26",
    padding: 12,
  },
  button: {
    height: 36,
  },
  input: {
    position: 'relative',
    borderWidth: 1,
    borderColor: "#141b26",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexGrow:1 ,
    height: 36,
    borderRadius: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  autoComplete: {
    zIndex: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: 42,
    width: 240,
    left:0,
    borderRadius: 4
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5
  }
});
