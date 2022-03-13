import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  groupBox: {
    marginVertical: 20,
    marginHorizontal: 5,
    paddingHorizontal: 20,
  },
  groupBoxTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  inputTextBox: {
    marginVertical: 5,
  },
  inputTextTitle: {
    marginHorizontal: 15,
    marginBottom: 2,
  },
  inputTextField: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  inputCheckboxBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  inputCheckboxField: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 15,
    display: "flex",
    justifyContent: "center",
  },
  inputCheckboxFieldChecked: {
    backgroundColor: "red",
  },
  submitButtonBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  submitButton: {
    width: 200,
    paddingVertical: 20,
    display: "flex",
    justifyContent: "center",
  },
  submitButtonTitle: {
    fontSize: 24,
  },
});

export default Style;
