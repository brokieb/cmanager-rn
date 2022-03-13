import {faAt, faPhone, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {removeClient} from '../stores/clientReducer';
import Style from '../style/singleContentCardStyle';
const SingleContentCard = ({cardData, editMode, localId}) => {
  const dispatch = useDispatch();
  const removeElement = () => {
    dispatch(removeClient(localId));
  };
  return (
    <TouchableOpacity
      style={[Style.CardBox, editMode && Style.CardBoxRemovable]}
      onPress={() => {
        if (editMode) {
          removeElement();
        } else {
          console.log('DZIAŁAMY W INNYM TRYBIE');
        }
      }}
    >
      {editMode && (
        <View style={Style.RemoveTitle}>
          <FontAwesomeIcon icon={faTrash} size={42} />
        </View>
      )}
      <View style={Style.CardBoxWrapper}>
        <View>
          <Text style={Style.CardTitle}>
            {cardData.contactDetails.name} {cardData.contactDetails.surname}
          </Text>
        </View>
        <View style={Style.DetailsBox}>
          {cardData.contactDetails.phone && (
            <View style={Style.SingleDetailsLine}>
              <FontAwesomeIcon
                icon={faPhone}
                style={Style.ContactDetailsIcon}
                size={22}
              />
              <Text style={Style.ContactDetailsTitle}>
                {cardData.contactDetails.phone}
              </Text>
            </View>
          )}
          {cardData.contactDetails.email && (
            <View style={Style.SingleDetailsLine}>
              <FontAwesomeIcon
                icon={faAt}
                style={Style.ContactDetailsIcon}
                size={22}
              />
              <Text style={Style.ContactDetailsTitle}>
                {cardData.contactDetails.email}
              </Text>
            </View>
          )}
        </View>
        <View style={Style.VerticalLine} />
        {cardData.requirements && (
          <View style={Style.DetailsWrapper}>
            <Text style={Style.DetailsTitle}>Wymagania</Text>
            <View style={Style.DetailsContainer}>
              {Object.keys(cardData.requirements).map((item, key) => (
                <Text style={Style.SingleDetails} key={key}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default SingleContentCard;
