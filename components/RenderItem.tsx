import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import useFetch from './useFetch';
import axios from 'axios';
import {setSaveValue} from '../features/SaveInputValue';
import {useDispatch, useSelector} from 'react-redux';
import {setEditingText} from '../features/EditingText';
import {setEdit} from '../features/EditableInput';
import {Rootstate} from '../features/store';
import {setTodoArr} from '../features/TodoData';

export default function renderItem(): JSX.Element {
  const {regetTask} = useFetch('http://192.168.0.102:3001/tasks');

  const dispatch = useDispatch();

  const TodoArr = useSelector((store: Rootstate) => store.todoArr.todoArr);

  // function for change title of the item
  const propertyChange = async (id: string, succeed: boolean) => {
    try {
      await axios.put(`http://192.168.0.102:3001/tasks/${id}`, {succeed});
      // Optionally, you can call getTask() here if needed
      regetTask();

      // Log the updated value after the API call is complete
      console.log(!succeed);
    } catch (error) {
      console.log(error);
    }
  };

  // function for delete task
  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`http://192.168.0.102:3001/tasks/${id}`);
      regetTask();
    } catch (error) {
      console.log(error);
    }
  };

  // function for edit the task
  const handleEdit = (id: string) => {
    const editText = TodoArr.filter(item => item._id === id);
    dispatch(setSaveValue(editText[0].title));
    dispatch(setEditingText(true));
    dispatch(setEdit(editText));
    const currentData = TodoArr.filter(item => item._id !== id);
    dispatch(setTodoArr(currentData));
  };

  return (
    <View style={styles.ListContainer}>
      {TodoArr &&
        Array.isArray(TodoArr) &&
        TodoArr.map(item => (
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
              <TouchableOpacity
                onPress={() => {
                  handleEdit(item._id);
                }}>
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
