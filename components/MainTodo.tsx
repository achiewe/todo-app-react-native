import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Rootstate} from '../features/store';
import {setSaveValue} from '../features/SaveInputValue';
import axios from 'axios';
import {dataProps} from '../types';
import useFetch from './useFetch';

export default function MainTodo(): JSX.Element {
  const inputValue = useSelector(
    (store: Rootstate) => store.saveValue.saveValue,
  );
  const dispatch = useDispatch();
  const {regetTask} = useFetch('http://192.168.0.101:3001/tasks');

  const editingText = useSelector(
    (store: Rootstate) => store.editingText.editingText,
  );

  const editableInput = useSelector((store: Rootstate) => store.edit.edit);

  const title = inputValue;

  console.log(editableInput);

  const addTodo = async () => {
    if (editingText) {
      try {
        await axios.put(
          `http://192.168.0.101:3001/tasks/title/${editableInput[0]?._id}`,
          {title},
        );
        // Optionally, you can call getTask() here if needed
        dispatch(setSaveValue(''));
        regetTask();
        // Log the updated value after the API call is complete
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post<dataProps[]>(
          'http://192.168.0.101:3001/postTask',
          {
            title: inputValue,
            succeed: false,
          },
        );
        dispatch(setSaveValue(''));
        regetTask();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToDo app</Text>
      <View style={styles.inputBut}>
        <TextInput
          onChangeText={text => dispatch(setSaveValue(text))}
          value={inputValue}
          style={styles.TaskInput}
          placeholder="Enter task"
          placeholderTextColor={'#A6A6A6'}></TextInput>
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.taskText}> Add Task </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 40,
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },

  inputBut: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: '100%',
  },

  TaskInput: {
    width: 300,
    borderColor: '#A6A6A6',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 16,
  },

  button: {
    width: 300,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  taskText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
