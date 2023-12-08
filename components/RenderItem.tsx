import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import useFetch from './useFetch';
import axios from 'axios';

export default function renderItem(): JSX.Element {
  const {saveInfo} = useFetch('http://192.168.0.101:3001/tasks');

  const {getTask} = useFetch('http://192.168.0.101:3001/tasks');

  const propertyChange = async (id: string, succeed: boolean) => {
    try {
      await axios.put(`http://192.168.0.101:3001/tasks/${id}`, {succeed});
      // Optionally, you can call getTask() here if needed
      getTask();

      // Log the updated value after the API call is complete
      console.log(!succeed);
    } catch (error) {
      console.log(error);
    }
  };

  const addOrUpdateTodo = async () => {
    try {
      if (editMode) {
        await axios.put(`http://192.168.0.101:3001/tasks/${editedTaskId}`, {
          title: inputValue,
        });
        setEditMode(false);
      } else {
        await axios.post<dataProps[]>('http://192.168.0.101:3001/postTask', {
          title: inputValue,
          succeed: false,
        });
      }

      getTask();
      dispatch(setSaveValue(''));
    } catch (error) {
      console.log(error);
    }



  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`http://192.168.0.101:3001/tasks/${id}`);
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.ListContainer}>
      {saveInfo &&
        Array.isArray(saveInfo) &&
        saveInfo.map(item => (
          <View style={styles.ListItem} key={item._id}>
            <View style={styles.ckeckView}>
              <BouncyCheckbox
                isChecked={item.succeed}
                onPress={() => {
                  propertyChange(item._id, !item.succeed);
                }}
                fillColor="green"
                size={27}
              />
              <Text style={styles.ItemName}>{item.title}</Text>
            </View>
            <View style={styles.EditDel}>
              <TouchableOpacity>
                <Text style={styles.EditTxt}> Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteItem(item._id);
                }}>
                <Image
                  style={styles.delImg}
                  source={require('../assets/delete.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    width: 300,
    borderRadius: 10,
    gap: 25,
  },

  ckeckView: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  ListItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },

  EditDel: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },

  EditTxt: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },

  DelTxt: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },

  delImg: {
    width: 20,
    height: 20,
  },
});
