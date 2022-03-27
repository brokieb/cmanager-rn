import { faWifi, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-menu";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";

import { Style } from "../style/selectCardTodoTemplateStyle";

const Stack = createNativeStackNavigator();
const renderTouchable = () => <TouchableOpacity />;
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
            <>
              <Button
                icon={<FontAwesomeIcon icon={faWifi} color="red" size={20} />}
                disabled
                type="clear"
                color="yellow"
              />
              <Menu
                onSelect={(value) => alert(`User selected the number ${value}`)}
              >
                <MenuTrigger use>
                  <FontAwesomeIcon icon={faBars} color="black" size={32} />
                </MenuTrigger>
                <MenuOptions style={{ paddingTop: 50 }}>
                  <MenuOption value={1} renderTouchable={renderTouchable}>
                    <Text>Moje konto</Text>
                  </MenuOption>
                  <MenuOption value={4} renderTouchable={renderTouchable}>
                    <Text>Preferencje</Text>
                  </MenuOption>
                  <MenuOption value={5} renderTouchable={renderTouchable}>
                    <Text>Wyloguj się</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </>
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
