import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  CardBox: {
    backgroundColor: 'white',
    position: 'relative',
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
    zIndex: 1,
  },
  CardBoxWrapper: {
    padding: 20,
  },
  RemoveTitle: {
    backgroundColor: 'white',
    position: 'absolute',
    opacity: 0.88,
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardTitle: {
    fontSize: 32,
  },
  DetailsBox: {
    marginTop: 20,
  },
  SingleDetailsLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ContactDetailsIcon: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  ContactDetailsTitle: {
    fontSize: 24,
  },
  DetailsWrapper: {
    marginVertical: 10,
  },
  DetailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  },
  DetailsTitle: {
    fontSize: 24,
  },
  SingleDetails: {
    fontSize: 16,
  },
  VerticalLine: {
    width: '80%',
    marginTop: 15,
    height: 1,
    backgroundColor: '#909090',
  },
});

export default Style;
