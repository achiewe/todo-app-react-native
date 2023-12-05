import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function renderItem(): JSX.Element {
  return (
    <View style={styles.ListContainer}>
      <View style={styles.ListItem}>
        <View style={styles.ckeckView}>
          <BouncyCheckbox
            onPress={(isChecked: boolean) => {
              isChecked = true;
            }}
            fillColor="green"
            size={27}
          />
          <Text style={styles.ItemName}>archi </Text>
        </View>
        <View style={styles.EditDel}>
          <TouchableOpacity>
            <Text style={styles.EditTxt}> Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.delImg}
              source={require('../assets/delete.png')}
            />
          </TouchableOpacity>
        </View>
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
