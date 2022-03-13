import { useLayoutEffect, useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import SingleContentCard from "../components/singleContentCard";
import { NavigationContext } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ShowSimpleDataTemplate = ({ templateData }) => {
  const [editMode, setEditMode] = useState(false);
  const navigation = useContext(NavigationContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            setEditMode((e) => !e);
          }}
          type="clear"
          icon={<FontAwesomeIcon icon={faPenToSquare} size={22} />}
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      {templateData.map((item, key) => (
        <SingleContentCard
          cardData={item}
          key={key}
          localId={key}
          editMode={editMode}
        />
      ))}
    </View>
  );
};
export default ShowSimpleDataTemplate;
