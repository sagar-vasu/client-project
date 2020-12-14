import React from 'react';

import {StyleSheet, View, TextInput, Text} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

function IconInput(props) {
  const {title, showIcon, showText} = props;
  return (
    <View style={{marginHorizontal: 10, marginVertical: 5}}>
      <Text>{title}</Text>
      <View style={styles.sectionStyle}>
        <TextInput
          style={{flex: 1, paddingLeft: 8}}
          placeholder={props.placeholder}
          underlineColorAndroid="transparent"
          onChangeText={props.onChangeText}
        />

        {showIcon ? (
          <Entypo
            name="map"
            size={25}
            color="rgb(96,104,215)"
            style={styles.imageStyle}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#333333',
    height: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageStyle: {
    margin: 5,
    paddingLeft: 5,
    marginRight: 10,
  },
});

export default IconInput;
