import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function CustomButton(props) {
  const {navigation, onPress, style} = props;
  return (
    <View style={style}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.btn, {width: props.width}]}
        onPress={onPress}>
        <Text style={styles.btnText}>Login in to your account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#2CE92C',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 30,
    marginVertical: 10,
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomButton;
