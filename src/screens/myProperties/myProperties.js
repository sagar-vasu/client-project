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
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {CustomCityCard, IconInput} from '../../components';

const screenWidth = Dimensions.get('screen').width;

function MyPropertiesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Entypo name="menu" color="black" size={28} />
          <Text style={styles.title}>My Properties</Text>
          <Image
            style={styles.userImg}
            source={require('../../assets/user.png')}
          />
        </View>

        <View style={{marginVertical: 40}}>
          <ScrollView>
            <TouchableOpacity activeOpacity={0.7} style={styles.row}>
              <View style={{flex: 0.7}}>
                <ImageBackground
                  style={styles.img}
                  imageStyle={{
                    resizeMode: 'stretch',
                    borderRadius: 10,
                  }}
                  source={require('../../assets/product.png')}></ImageBackground>
              </View>
              <View style={{flex: 0.7, marginLeft: 10}}>
                <Text style={styles.heading}>$140,000</Text>
                <Text>St 123, New avn, NY, United</Text>
              </View>
              <Feather name="edit" size={25} color="rgb(96,104,215)" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.row}>
              <View style={{flex: 0.7}}>
                <ImageBackground
                  style={styles.img}
                  imageStyle={{
                    resizeMode: 'stretch',
                    borderRadius: 10,
                  }}
                  source={require('../../assets/product.png')}></ImageBackground>
              </View>
              <View style={{flex: 0.7, marginLeft: 10}}>
                <Text style={styles.heading}>$140,000</Text>
                <Text>St 123, New avn, NY, United</Text>
              </View>
              <Feather name="edit" size={25} color="rgb(96,104,215)" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.row}>
              <View style={{flex: 0.7}}>
                <ImageBackground
                  style={styles.img}
                  imageStyle={{
                    resizeMode: 'stretch',
                    borderRadius: 10,
                  }}
                  source={require('../../assets/product.png')}></ImageBackground>
              </View>
              <View style={{flex: 0.7, marginLeft: 10}}>
                <Text style={styles.heading}>$140,000</Text>
                <Text>St 123, New avn, NY, United</Text>
              </View>
              <Feather name="edit" size={25} color="rgb(96,104,215)" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.row}>
              <View style={{flex: 0.7}}>
                <ImageBackground
                  style={styles.img}
                  imageStyle={{
                    resizeMode: 'stretch',
                    borderRadius: 10,
                  }}
                  source={require('../../assets/product.png')}></ImageBackground>
              </View>
              <View style={{flex: 0.7, marginLeft: 10}}>
                <Text style={styles.heading}>$140,000</Text>
                <Text>St 123, New avn, NY, United</Text>
              </View>
              <Feather name="edit" size={25} color="rgb(96,104,215)" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.row}>
              <View style={{flex: 0.7}}>
                <ImageBackground
                  style={styles.img}
                  imageStyle={{
                    resizeMode: 'stretch',
                    borderRadius: 10,
                  }}
                  source={require('../../assets/product.png')}></ImageBackground>
              </View>
              <View style={{flex: 0.7, marginLeft: 10}}>
                <Text style={styles.heading}>$140,000</Text>
                <Text>St 123, New avn, NY, United</Text>
              </View>
              <Feather name="edit" size={25} color="rgb(96,104,215)" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.row}>
              <View style={{flex: 0.7}}>
                <ImageBackground
                  style={styles.img}
                  imageStyle={{
                    resizeMode: 'stretch',
                    borderRadius: 10,
                  }}
                  source={require('../../assets/product.png')}></ImageBackground>
              </View>
              <View style={{flex: 0.7, marginLeft: 10}}>
                <Text style={styles.heading}>$140,000</Text>
                <Text>St 123, New avn, NY, United</Text>
              </View>
              <Feather name="edit" size={25} color="rgb(96,104,215)" />
            </TouchableOpacity>
            <View style={{height: 70}} />
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
            <AntDesign color="white" name="pluscircle" size={30} />
            <Text style={styles.btnText}>Add New Property</Text>
            <Text style={styles.btnText}></Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 7,
  },
  userImg: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },

  title: {
    fontSize: 20,
    color: 'rgb(98,98,98)',
  },

  heading: {
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
    marginHorizontal: 13,
    marginVertical: 8,
  },
  img: {
    height: 120,
    width: '100%',
    borderRadius: 12,
    resizeMode: 'stretch',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
  },

  btn: {
    backgroundColor: '#2CE92C',
    paddingVertical: 12,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MyPropertiesScreen;

// export default MyPropertiesScreen;
