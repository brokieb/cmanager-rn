import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Button } from "react-native-elements";
import { useEffect, useLayoutEffect, useState, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setClient } from "../../stores/clientReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShowSimpleDataTemplate from "../../template/showSimpleDataTemplate";

const ShowClientsScreen = ({ navigation }) => {
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
      console.log(e, "!!!");
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
