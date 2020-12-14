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

import {CustomButton} from '../../components';

function LoginScreen() {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#23AC23" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/logoBack.png')}
          style={styles.logobg}>
          <Text style={styles.logoHeading}>Sub2</Text>
        </ImageBackground>

        <View style={styles.body}>
          <View style={styles.card}>
            <View>
              <Text style={styles.title}>Email</Text>
              <TextInput style={styles.input} placeholder="example@gamil.com" />
            </View>
            <View style={{marginTop: 15}}>
              <Text style={styles.title}>Password</Text>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={{flex: 1}}
                  underlineColorAndroid="transparent"
                  secureTextEntry={showPass}
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setShowPass(!showPass)}>
                  <Entypo
                    name={showPass ? 'eye' : 'eye-with-line'}
                    size={25}
                    style={styles.imageStyle}
                    color="#23AC23"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <CustomButton
              style={{marginVertical: 15}}
              width={240}
              name="Login in to your account"
            />

            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.passwordText}>Forgot your password?</Text>
            </TouchableOpacity>

            <View style={styles.socialIconsSection}>
              <TouchableOpacity activeOpacity={0.7}>
                <Entypo
                  name="facebook-with-circle"
                  color="#4567a2"
                  size={50}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <Entypo
                  name="google--with-circle"
                  color="rgb(199,77,77)"
                  size={50}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <Entypo
                  name="twitter-with-circle"
                  color="#14B6FA"
                  size={50}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footerSection}>
          <Text style={[styles.acountText, {color: 'white'}]}>
            Don`t have an account?
          </Text>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[styles.passwordText, {color: 'white'}]}>
              Register Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23AC23',
  },
  logobg: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  logoHeading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#23AC23',
  },

  body: {
    marginHorizontal: 12,
    marginVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    color: '#23AC23',
    fontSize: 14,
  },

  input: {
    marginVertical: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'lightgrey',
    paddingVertical: 5,
    height: 40,
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1.5,
    borderBottomColor: 'lightgrey',
    height: 40,
  },
  imageStyle: {
    margin: 5,
    paddingLeft: 5,
  },

  btn: {
    backgroundColor: '#2CE92C',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 30,
    marginVertical: 10,
    width: 240,
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  passwordText: {
    color: '#313131',
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  acountText: {
    color: '#313131',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 3,
  },

  socialIconsSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },

  icon: {
    marginHorizontal: 10,
  },

  footerSection: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
  },
});

export default LoginScreen;
