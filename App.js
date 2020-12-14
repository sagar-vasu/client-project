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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('screen').width;

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Entypo name="menu" color="black" size={28} />
          <Text style={styles.title}>Inbox</Text>
          <Image
            style={styles.userImg}
            source={require('./src/assets/user.png')}
          />
        </View>

        <View style={{marginVertical: 40}}>
          <ScrollView>
            <View>
              <Image
                style={styles.user}
                source={require('./src/assets/user.png')}
              />
              <Text style={styles.userName}>Alex Jones</Text>
            </View>

            <View style={{marginVertical: 40}}>
              <View style={styles.timeSection}>
                <Text style={styles.timeText}>5:13</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '70%',
                  alignItems: 'flex-end',
                  marginBottom: 25,
                }}>
                <Image
                  style={{width: 35, height: 35, marginHorizontal: 5}}
                  source={require('./src/assets/user.png')}
                />
                <View style={styles.bodycard}>
                  <Text
                    style={[
                      styles.heading,
                      {fontFamily: 'Phantom', marginVertical: 5},
                    ]}>
                    Hello world i am sagar from mithi tharparkar and i am hereo
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: '70%',
                  marginBottom: 25,
                  alignSelf: 'flex-end',
                }}>
                <View
                  style={[
                    styles.bodycard,
                    {
                      backgroundColor: 'white',
                      borderWidth: 0,
                      elevation: 3,
                      borderBottomEndRadius: 1,
                      borderBottomStartRadius: 25,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.heading,
                      {
                        fontFamily: 'Phantom',
                        marginVertical: 5,
                        color: 'black',
                      },
                    ]}>
                    Hello world i am sagar from mithi tharparkar and i am hereo
                  </Text>
                </View>
              </View>
            </View>
            <View style={{height: 70}} />
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="dots-horizontal" size={25} />
          <Text style={{marginLeft: 5}}>Alext is typing...</Text>
        </View>
        <View style={styles.sectionStyle}>
          <AntDesign
            color="#2CE92C"
            style={styles.imageStyle}
            name="pluscircle"
            size={30}
          />

          <TextInput
            style={{flex: 1, paddingLeft: 8}}
            underlineColorAndroid="transparent"
          />
          <MaterialCommunityIcons
            name="send-circle"
            size={45}
            color="#2CE92C"
            style={styles.imageStyle}
          />
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

  user: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },

  userName: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },

  footer: {position: 'absolute', bottom: 0, width: '100%'},
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    height: 50,

    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    marginBottom: 2,
  },
  imageStyle: {
    margin: 5,
    paddingLeft: 5,
    marginRight: 10,
  },

  // chat css

  mainCard: {
    alignSelf: 'flex-end',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  bodycard: {
    elevation: 1,
    backgroundColor: '#2CE92C',
    borderWidth: 1,
    borderColor: '#2CE92C',
    padding: 10,
    marginRight: 6,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'PhantomSansSemiBold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },

  timeSection: {
    borderRadius: 10,
    backgroundColor: 'grey',
    width: 60,
    paddingHorizontal: 5,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },

  timeText: {
    color: 'white',
  },
});

export default App;
