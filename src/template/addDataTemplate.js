import { Form, Formik, Field, Rese } from "formik";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import Style from "../style/formFieldsStyle";
import ParseFormData from "../libs/parseFormData";
const AddDataTemplate = ({ formData, onSubmit }) => {
  let initValues = {};
  formData.forEach(({ groupInputs, groupType, groupName }) => {
    groupInputs.forEach(({ name }) => {
      initValues = {
        ...initValues,
        [groupName]: { ...initValues[groupName], [name]: "" },
      };
    });
  });
  return (
    <ScrollView>
      <Formik
        initialValues={initValues}
        onSubmit={(values, actions) => {
          const readyData = ParseFormData(values);
          onSubmit(readyData);
          actions.resetForm();
          alert("DIS!");
        }}
      >
        {(
          { handleChange, handleBlur, handleSubmit, values, setFieldValue },
          key
        ) => {
          return (
            <View key={key}>
              {formData.map(
                ({ groupTitle, groupName, groupType, groupInputs }, key) => {
                  return (
                    <View key={key} style={Style.groupBox}>
                      <Text style={Style.groupBoxTitle}>{groupTitle}</Text>
                      {
                        {
                          text: groupInputs.map(
                            ({ title, name, type, required }, key) => {
                              return (
                                <View key={key} style={Style.inputTextBox}>
                                  <Text style={Style.inputTextTitle}>
                                    {title}
                                  </Text>
                                  <TextInput
                                    onChangeText={handleChange(
                                      `${groupName}.${name}`
                                    )}
                                    onBlur={handleBlur(`${groupName}.${name}`)}
                                    value={values[groupName][name]}
                                    style={Style.inputTextField}
                                  />
                                </View>
                              );
                            }
                          ),
                          checkbox: (
                            <View style={Style.inputCheckboxBox}>
                              {groupInputs.map(
                                ({ title, name, type, required }, key) => {
                                  return (
                                    <Field name={name} key={key}>
                                      {({
                                        checkbox,
                                        field, // { name, value, onChange, onBlur }
                                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                        meta,
                                      }) => (
                                        <TouchableOpacity
                                          style={[
                                            Style.inputCheckboxField,
                                            values[groupName][name] === "1" &&
                                              Style.inputCheckboxFieldChecked,
                                          ]}
                                          onPress={() => {
                                            console.log(
                                              groupName,
                                              "!!!!!",
                                              name,
                                              "@@"
                                            );
                                            setFieldValue(
                                              `${groupName}.${name}`,
                                              values[groupName][name] === ""
                                                ? "1"
                                                : ""
                                            );
                                          }}
                                        >
                                          <Text>{title}</Text>
                                        </TouchableOpacity>
                                      )}
                                    </Field>
                                  );
                                }
                              )}
                            </View>
                          ),
                          radio: <Text>Radio</Text>,
                        }[groupType]
                      }
                    </View>
                  );
                }
              )}
              <View style={Style.submitButtonBox}>
                <Button
                  title="Wyślij dane"
                  onPress={handleSubmit}
                  containerStyle={Style.submitButtonBox}
                  buttonStyle={Style.submitButton}
                  titleStyle={Style.submitButtonTitle}
                />
              </View>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};
export default AddDataTemplate;
