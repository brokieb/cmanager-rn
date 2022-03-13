import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import AddDataTemplate from "../../template/addDataTemplate";
import clientFormData from "../../database/client";
import { addClient } from "../../stores/clientReducer";
const AddClientScreen = () => {
  const dispatch = useDispatch();
  return (
    <AddDataTemplate
      formData={clientFormData}
      onSubmit={(values) => {
        dispatch(addClient(values));
      }}
    />
  );
};
export default AddClientScreen;
