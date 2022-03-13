import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Style } from "../style/selectCardTodoTemplateStyle";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const Stack = createNativeStackNavigator();

export const MainScreen = ({ navigation, route, elements, title }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={Style.container}>
        {elements.map(({ title, icon }, key) => (
          <TouchableOpacity
            key={key}
            style={Style.singleBox}
            onPress={() => {
              navigation.navigate(title);
            }}
          >
            <FontAwesomeIcon icon={icon} style={Style.boxIcon} size={42} />
            <Text style={Style.boxTitle}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const SelectCardTodoTemplate = ({ screenTitle, screenName, elements }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenTitle}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              icon={<FontAwesomeIcon icon={faWifi} color="red" />}
              disabled
              type="clear"
              color="yellow"
            />
          ),
        }}
      >
        {(props) => (
          <MainScreen {...props} title={screenTitle} elements={elements} />
        )}
      </Stack.Screen>
      {elements.map(({ title, screen }, key) => (
        <Stack.Screen name={title} component={screen} key={key} />
      ))}
    </Stack.Navigator>
  );
};
export default SelectCardTodoTemplate;
