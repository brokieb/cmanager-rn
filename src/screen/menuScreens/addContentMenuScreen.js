import {
  faCoffee,
  faUserPlus,
  faHouseMedical,
  faCalendarPlus,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import SelectCardTodoTemplate from "../../template/selectCardTodoMenuTemplate";
import AddBuildScreen from "../addContentScreens/addBuildingScreen";
import AddClientScreen from "../addContentScreens/addClientScreen";
import AddMeetScreen from "../addContentScreens/addMeetScreen";
const HomeScreen = ({ navigation }) => {
  return (
    <SelectCardTodoTemplate
      screenTitle="Co do dodania?"
      screenName="addContentScreen"
      elements={[
        {
          title: "Nowy klient",
          name: "addClient",
          icon: faUserPlus,
          screen: AddClientScreen,
        },
        {
          title: "Nowa nieruchomość",
          name: "addBuilding",
          icon: faHouseMedical,
          screen: AddBuildScreen,
        },
        {
          title: "Nowe spotkanie",
          name: "addMeet",
          icon: faCalendarPlus,
          screen: AddMeetScreen,
        },
        // { title: "Ustawienia", icon: faGear, screen: AddMeetScreen },
      ]}
    />
  );
};

export default HomeScreen;
