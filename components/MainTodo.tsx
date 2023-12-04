import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function MainTodo(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToDo app</Text>
      <View style={styles.inputBut}>
        <TextInput
          style={styles.TaskInput}
          placeholder="Enter task"></TextInput>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
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
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
  },

  button: {},
});
