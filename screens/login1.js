import { Row } from 'native-base';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';

import { Router, Scene, Actions } from 'react-native-router-flux';



class testing extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor="white" barStyle="light-content" />


        <Image style={{ height: height / 4, width: width / 1.1, alignSelf: 'center' }} resizeMode='stretch'
          source={require('../assets/Doctors.png')} />

        <Text style={{ fontWeight: '600', fontSize: 24, textAlign: "center", }}>Login</Text>


        <View style={{ width: width / 1.1, marginTop: 20, alignSelf: 'center' }} >
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Email</Text>
          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#e6e6e6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter your email or phone number" placeholderTextColor='gray' />
          {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

        </View>


        <View style={{ width: width / 1.1, marginTop: 30, alignSelf: 'center' }} >
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Password</Text>

          <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#e6e6e6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Enter your password" placeholderTextColor='gray' />
          {/* <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#235fa9", fontSize: 24,position:'absolute',left:10,top:20 }} /> */}

        </View>
        <TouchableOpacity onPress={() => Actions.Forget_Password()}>


          <Text style={{ color: 'black', fontSize: 11, textAlign: 'right', marginTop: 10, marginRight: 18 }}>Forgot Password?</Text>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Patient_Tab_Screen()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 20, borderRadius: 8 }}>
          <Text style={{ color: 'white', fontSize: 16, }}>Login</Text>
        </TouchableOpacity>


        <View style={{ flexDirection: 'row', alignSelf: 'center', width: width / 1.6, justifyContent: 'space-between', marginTop: 40 }}>

          <View style={{ flexDirection: 'row', width: '47%', height: 39, borderColor: 'gray', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
            <Icon name="user-circle" type="FontAwesome" style={{ color: "gray", fontSize: 17, }} />
            <Text style={{ fontSize: 15, color: 'gray', fontWeight: '500', marginLeft: 7 }}>Doctor</Text>
          </View>




          <View style={{ flexDirection: 'row', width: '47%', height: 39, borderColor: '#9B56EC', borderWidth: 1.5, alignItems: 'center', justifyContent: 'center', borderRadius: 6, backgroundColor: '#F7F2FC' }}>
            <Icon name="user-circle" type="FontAwesome" style={{ color: "#9B56EC", fontSize: 17, }} />
            <Text style={{ fontSize: 15, color: '#9B56EC', fontWeight: '500', marginLeft: 7 }}>Provider</Text>
          </View>




        </View>






        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: '500', marginTop: 40 }}>Get the right patients for your practice</Text>
        <TouchableOpacity onPress={() => Actions.SignUp1()}>

          <Text style={{ color: '#9B56EC', textAlign: "center", fontSize: 17, fontWeight: '600', marginTop: 4 }}> Signup</Text>

        </TouchableOpacity>
















      </View>

    )
  }
}


export default testing;
