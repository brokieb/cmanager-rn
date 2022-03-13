import {
  faHouseMedical,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import AddScreen from './src/screen/menuScreens/addContentMenuScreen';
import ShowScreen from './src/screen/menuScreens/showContentMenuScreen';
import store from './src/stores/store';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              switch (route.name) {
                case 'Przeglądaj':
                  iconName = faUserPlus;
                  break;
                case 'Dodaj':
                  iconName = faHouseMedical;
                  break;
              }

              return <FontAwesomeIcon icon={iconName} size={24} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen
            name="Przeglądaj"
            component={ShowScreen}
            tabBarIcon={faUserPlus}
          />
          <Tab.Screen name="Dodaj" component={AddScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
