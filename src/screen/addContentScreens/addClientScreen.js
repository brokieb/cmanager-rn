import {useDispatch} from 'react-redux';

import clientFormData from '../../database/client';
import {addClient} from '../../stores/clientReducer';
import AddDataTemplate from '../../template/addDataTemplate';
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
