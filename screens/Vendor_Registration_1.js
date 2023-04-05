
import React, { Component } from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  BackHandler,
  AsyncStorage,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { Icon } from 'native-base';
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "react-native-image-picker";
import ImageLoad from 'react-native-image-placeholder';

import { Actions } from 'react-native-router-flux';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogFooter,
  DialogButton,
  DialogTitle,
} from "react-native-popup-dialog";
import moment from 'moment';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

class Patient_Login_Screen extends React.Component {
  constructor(props) {

    super(props)

    this.state = {

      skalton: false,
      placeholder: '+92',
      country: 'Select Country',
      text19: 2,
      aa: '',
      email: '',
      detail: '',
      count: 0,
      visible: false,
      gallrey_di_image: null,
      array: [],


    }
  }






























  render() {







    return (



      <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
          </TouchableOpacity>
          <Text style={{ fontWeight: '500', fontSize: 22, width: '90%', }}>Get started</Text>
        </View>

        <View style={{ width: width / 1.05, paddingVertical: 10, alignSelf: 'center', backgroundColor: '#f0f6fc', borderRadius: 10 }}>
          <Text style={{ color: '#9B56EC', marginBottom: 5, marginLeft: 15, marginTop: 20, fontSize: 17, fontWeight: '500' }}>Step A: Profile detail</Text>
          <Text style={{ fontSize: 17, color: '#60606C', width: '95%', marginLeft: 15 }} numberOfLines={3} >Pharmacy  basic details, establishment details etc.

          </Text>




          <TouchableOpacity style={{
            marginLeft: 15, marginBottom: 30,
            marginTop: 15,
            width: 100,
            height: 35,
            borderRadius: 5,
            backgroundColor: '#a35cd1',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'gray',

          }}>
            <TouchableOpacity onPress={() => Actions.Vendor_Basic_Detail()} >
              <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>

            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <Text style={{ color: '#2E2E37', marginBottom: 5, marginLeft: 20, marginTop: 20, fontSize: 17, fontWeight: '500' }}>Step B: Profile Varification</Text>
        <Text style={{ fontSize: 16, color: '#60606C', width: '95%', marginLeft: 20, fontWeight: '400' }} numberOfLines={3} >User dentity,  proof, registration proof, establishment ownership proof etc.</Text>
        <Text style={{ color: '#2E2E37', marginBottom: 5, marginLeft: 20, marginTop: 30, fontSize: 17, fontWeight: '500' }}>Step C: Start getting patients
        </Text>
        <Text style={{ fontSize: 16, color: '#60606C', width: '95%', marginLeft: 20 }} numberOfLines={3} >Location ,Timing, Fees</Text>



      </View>



    )
  }
}





const styles = StyleSheet.create({
  input: {
    marginLeft: 15,
    marginTop: 7,
    width: width / 1.1,
    height: 40,
    margin: 29,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 20,
    color: 'black',
  },

})



export default Patient_Login_Screen;