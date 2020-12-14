import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

function CustomPropertyCard(props) {
  const {navigation, title, path, value} = props;
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
      <View style={[styles.row]}>
        <View style={{flex: 0.9}}>
          <ImageBackground
            style={styles.img}
            imageStyle={{
              resizeMode: 'stretch',
              borderRadius: 10,
            }}
            source={require('../../assets/product.png')}>
            <View style={styles.heartSection}>
              <Entypo name="heart" size={20} color="red" />
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 5,
            marginLeft: 10,
          }}>
          <Text style={styles.title}>$140,000</Text>

          <View style={styles.row}>
            <Text>m2</Text>
            <Text style={styles.valueText}>215</Text>
          </View>
          <View style={styles.row}>
            <Text>Number Of Rooms</Text>
            <Text style={styles.valueText}>4+1</Text>
          </View>
          <View style={styles.row}>
            <Text>District</Text>
            <Text style={styles.valueText}>Toranto</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginRight: 15,
  },
  img: {
    height: 120,
    width: '100%',
    borderRadius: 12,
    resizeMode: 'stretch',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginLeft: 4,
    marginTop: 10,
  },
  value: {
    color: '#23AC23',
    fontSize: 14,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueText: {
    color: 'grey',
  },
  heartSection: {
    marginVertical: 7,
    marginHorizontal: 7,
    alignSelf: 'flex-end',
  },
});

export default CustomPropertyCard;
