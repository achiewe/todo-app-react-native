import {StyleSheet, Text, View} from 'react-native';

export default function renderItem(): JSX.Element {
  return (
    <View style={styles.ListContainer}>
      <View style={styles.ListItem}>
        <Text style={styles.ItemName}>archi </Text>
        <View style={styles.EditDel}></View>
      </View>
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
    height: 100,
    borderRadius: 10,
    gap: 10,
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
    gap: 5,
    alignItems: 'center',
  },
});
