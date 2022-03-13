import {
  faCalendarDays,
  faCity,
  faGear,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';

import SelectCardTodoTemplate from '../../template/selectCardTodoMenuTemplate';
import ShowClientsScreen from '../showContentScreens/showClientsScreen';
const HomeScreen = ({navigation}) => {
  const clients = useSelector((state) => state.clients.value);
  return (
    <>
      <SelectCardTodoTemplate
        screenTitle="Co chcesz przejrzeć?"
        screenName="showContentScreen"
        elements={[
          {
            title: 'Klienci',
            name: 'showClient',
            icon: faUsers,
            screen: ShowClientsScreen,
          },
          {title: 'Nieruchomości', icon: faCity, screen: ''},
          {title: 'Spotkania', icon: faCalendarDays, screen: ''},
          {title: 'Disy', icon: faGear, screen: ''},
        ]}
      />
      <View style={{display: 'flex', flexDirection: 'row', margin: 20}}>
        <Button
          title="reset data"
          onPress={() => {
            AsyncStorage.setItem('@client', JSON.stringify([]));
          }}
        />
        <Button
          title="+++"
          onPress={() => {
            AsyncStorage.setItem('@client', JSON.stringify([]));
          }}
        />
        <Button
          title="----"
          onPress={() => {
            AsyncStorage.setItem('@client', JSON.stringify([]));
          }}
        />
      </View>
    </>
  );
};

export default HomeScreen;
