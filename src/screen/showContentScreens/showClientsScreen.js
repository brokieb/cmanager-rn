import {useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';

import ShowSimpleDataTemplate from '../../template/showSimpleDataTemplate';

const ShowClientsScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const clients = useSelector((state) => state.clients.value);
  useEffect(async () => {
    try {
      setRefreshing(false);
      setLoading(false);
    } catch (e) {
      // read error
      console.log(e, '!!!');
    }
  }, []);
  useEffect;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
          }}
        />
      }
    >
      {loading ? (
        <Text>ŁaDOWANKO</Text>
      ) : (
        <ShowSimpleDataTemplate templateData={clients} />
      )}
    </ScrollView>
  );
};
export default ShowClientsScreen;
