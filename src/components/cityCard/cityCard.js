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

function CustomCityCard(props) {
  const {navigation, title, path, value} = props;
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
      <ImageBackground
        style={styles.bgImg}
        imageStyle={{
          resizeMode: 'stretch',
          borderRadius: 10,
        }}
        source={props && path}>
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginRight: 15,
  },
  bgImg: {
    height: 160,
    width: 160,
  },
  body: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,1,0.5)',
    paddingBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 15,
    textAlign: 'left',
  },
  value: {
    color: '#23AC23',
    fontSize: 14,
  },
});

export default CustomCityCard;
