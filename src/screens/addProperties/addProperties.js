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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {CustomCityCard, IconInput} from '../../components';

const screenWidth = Dimensions.get('screen').width;

function AddPropertyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" color="black" size={28} />
          <Text style={styles.title}>New Property</Text>
          <Image
            style={styles.userImg}
            source={require('../../assets/user.png')}
          />
        </View>

        <View style={{marginVertical: 40}}>
          <ScrollView>
            <View>
              <IconInput
                placeholder="St 123, New avn, NY, USA"
                showIcon={true}
                title="Add Address"
              />
              <IconInput placeholder="$122,000" title="Price" />
              <IconInput placeholder="$57,000" title="Mortgage" />

              <Text style={{marginHorizontal: 10}}>Comments</Text>
              <View style={styles.detailsInput}>
                <TextInput
                  style={{flex: 1, paddingLeft: 8}}
                  placeholder="Description"
                  title="Comments"
                  multiline={true}
                />
                <Text style={styles.text}>0/500</Text>
              </View>
            </View>

            <View style={{marginVertical: 10, marginHorizontal: 10}}>
              <Text style={{marginHorizontal: 10}}>Add Some Photos</Text>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <TouchableOpacity>
                  <ImageBackground
                    style={styles.add}
                    imageStyle={{borderRadius: 10, resizeMode: 'stretch'}}
                    source={require('../../assets/product.png')}>
                    <AntDesign
                      style={[styles.icon, {color: 'red'}]}
                      color="red"
                      name="delete"
                      size={17}
                    />
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ImageBackground
                    style={styles.add}
                    imageStyle={{borderRadius: 10}}
                    source={require('../../assets/addProperty.png')}>
                    <AntDesign
                      style={styles.icon}
                      name="pluscircle"
                      size={17}
                    />
                    <View style={styles.camSection}>
                      <AntDesign name="camera" size={30} color="lightgrey" />
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </ScrollView>
            </View>

            <View style={{height: 60}} />
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
            <Text style={styles.btnText}>Add Property</Text>
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
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1.5,
    borderBottomColor: 'lightgrey',
    elevation: 1,
    marginHorizontal: 10,
    borderRadius: 30,
    height: 50,
  },
  imageStyle: {
    padding: 5,
  },

  iconSection: {
    backgroundColor: 'rgb(96,104,215)',
    borderRadius: 30,
    width: 35,
    height: 35,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heading: {
    fontSize: 20,
    color: 'rgb(98,98,98)',
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'rgb(193,191,202)',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
  },

  btn: {
    backgroundColor: '#2CE92C',
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignSelf: 'center',
    width: screenWidth,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  detailsInput: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#333333',
    height: 80,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: 'grey',
    marginRight: 10,
  },

  add: {
    width: 90,
    resizeMode: 'stretch',
    height: 90,
    margin: 5,
  },
  camSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'flex-end',
    margin: 8,
    color: '#2CE92C',
  },
});

export default AddPropertyScreen;
