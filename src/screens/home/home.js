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
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {CustomCityCard, CustomPropertyCard} from '../../components';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Entypo name="menu" color="black" size={28} />
          <Text style={styles.title}>SUB2</Text>
          <Image
            style={styles.userImg}
            source={require('./src/assets/user.png')}
          />
        </View>

        <View>
          <ScrollView>
            <View style={{marginVertical: 30}}>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={{flex: 1, paddingLeft: 15}}
                  underlineColorAndroid="transparent"
                  placeholder="Search Properties"
                />

                <View style={styles.row}>
                  <TouchableOpacity
                    style={[styles.iconSection, {backgroundColor: '#2CE92C'}]}
                    activeOpacity={0.8}>
                    <FontAwesome
                      name="search"
                      size={20}
                      style={styles.imageStyle}
                      color="white"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.iconSection}
                    activeOpacity={0.8}>
                    <FontAwesome
                      name="filter"
                      size={20}
                      style={styles.imageStyle}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: 10}}>
              <View style={[styles.row]}>
                <Text style={styles.heading}>Popular Cities</Text>

                <TouchableOpacity activeOpacity={0.6} style={styles.seeAll}>
                  <Text style={styles.seeAll}>SEE ALL</Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}>
                <CustomCityCard
                  path={require('../../assets/product.png')}
                  title="Toronto"
                  value="84 Properties"
                />
                <CustomCityCard
                  title="Monaco"
                  value="183 Properties"
                  path={require('../../assets/product.png')}
                />
                <CustomCityCard path={require('../../assets/product.png')} />
                <CustomCityCard path={require('../../assets/product.png')} />
              </ScrollView>
            </View>

            <View style={{marginHorizontal: 10, marginVertical: 5}}>
              <View style={[styles.row]}>
                <Text style={styles.heading}>Featured</Text>

                <TouchableOpacity activeOpacity={0.6} style={styles.seeAll}>
                  <Text style={styles.seeAll}>SEE ALL</Text>
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 40}}>
                <CustomPropertyCard />
                <CustomPropertyCard />
                <CustomPropertyCard />
                <CustomPropertyCard />
              </View>
            </View>
          </ScrollView>
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
});

export default HomeScreen;
