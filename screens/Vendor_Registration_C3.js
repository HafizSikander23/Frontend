
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

        <ScrollView>



          <View style={{ flexDirection: 'row', width: width, paddingVertical: 10, borderColor: 'lightgray', paddingHorizontal: 10, alignItems: 'center', alignSelf: 'center', }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: "black", fontSize: 25 }} />
            </TouchableOpacity>
            <Text style={{ color: 'black', marginLeft: 10, fontSize: 22, fontWeight: '600' }}>Profile is under verification</Text>


          </View>
          <Text style={{ fontSize: 16, color: 'gray', width: '95%', marginLeft: 15, marginTop: 15 }} numberOfLines={3} >Our team is verifying your profile details which you have provided.kindly give us 7 working days to verify the information</Text>

          <View style={{ width: width / 1.05, paddingVertical: 10, alignSelf: 'center', borderRadius: 10 }}>
            <Text style={{ color: 'black', marginBottom: 5, marginLeft: 15, marginTop: 25, fontSize: 20, fontWeight: '500' }}>Step A: Profile detail</Text>
            <Text style={{ fontSize: 17, color: 'gray', width: '95%', marginLeft: 15, marginTop: 5 }} numberOfLines={3} >Doctor's basic details, medical registration, education qualification, establishment details etc.
            </Text>



            <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginTop: 15 }}>
              <TouchableOpacity style={{
                width: '50%',
                height: 50,
                borderRadius: 10,
                backgroundColor: '#EBF7ED',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'gray',

              }}>

                <Text style={{ color: '#19B46E', fontSize: 18, }}>Completed</Text>

                <Icon name="checkmark-done-circle" type="Ionicons" style={{ color: "#19B46E", position: 'absolute', right: 15, top: 15, fontSize: 20, }} />

              </TouchableOpacity>



              <TouchableOpacity style={{
                marginLeft: 10,

                width: '30%',
                height: 50,
                borderRadius: 10,
                backgroundColor: 'white',
                justifyContent: 'center',
                borderColor: 'gray',

              }}>

                <Text style={{ color: '#19B46E', fontSize: 16, marginLeft: 10, fontWeight: '600' }}>CHANGE</Text>


              </TouchableOpacity>


            </View>
          </View>







          <View style={{ width: width / 1.05, paddingVertical: 10, alignSelf: 'center', borderRadius: 10 }}>
            <Text style={{ color: 'black', marginBottom: 5, marginLeft: 15, marginTop: 15, fontSize: 20, fontWeight: '500' }}>Step B: Profile verification</Text>
            <Text style={{ fontSize: 17, color: 'gray', width: '95%', marginLeft: 15, marginTop: 5 }} numberOfLines={3} >Doctor identity proof, registration proof, establishment ownership proof etc.
            </Text>



            <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginTop: 15 }}>
              <TouchableOpacity style={{
                width: '50%',
                height: 50,
                borderRadius: 10,
                backgroundColor: '#EBF7ED',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'gray',

              }}>

                <Text style={{ color: '#19B46E', fontSize: 18, }}>Completed</Text>

                <Icon name="checkmark-done-circle" type="Ionicons" style={{ color: "#19B46E", position: 'absolute', right: 15, top: 15, fontSize: 20, }} />

              </TouchableOpacity>



              <TouchableOpacity style={{
                marginLeft: 10,

                width: '30%',
                height: 50,
                borderRadius: 10,
                backgroundColor: 'white',
                justifyContent: 'center',
                borderColor: 'gray',

              }}>

                <Text style={{ color: '#19B46E', fontSize: 16, marginLeft: 10, fontWeight: '600' }}>CHANGE</Text>


              </TouchableOpacity>


            </View>
          </View>



          <View style={{ width: width / 1.05, paddingVertical: 10, alignSelf: 'center', borderRadius: 10 }}>
            <Text style={{ color: 'black', marginBottom: 5, marginLeft: 15, marginTop: 15, fontSize: 20, fontWeight: '500' }}>Step C: Start getting patients
            </Text>
            <Text style={{ fontSize: 17, color: 'gray', width: '95%', marginLeft: 15, marginTop: 5 }} numberOfLines={3} >Location, Timings, Fees
            </Text>



            <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginTop: 15 }}>
              <TouchableOpacity style={{
                width: '50%',
                height: 50,
                borderRadius: 10,
                backgroundColor: '#EBF7ED',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'gray',

              }}>

                <Text style={{ color: '#19B46E', fontSize: 18, }}>Completed</Text>

                <Icon name="checkmark-done-circle" type="Ionicons" style={{ color: "#19B46E", position: 'absolute', right: 15, top: 15, fontSize: 20, }} />

              </TouchableOpacity>



              <TouchableOpacity style={{
                marginLeft: 10,

                width: '30%',
                height: 50,
                borderRadius: 10,
                backgroundColor: 'white',
                justifyContent: 'center',
                borderColor: 'gray',

              }}>

                <Text style={{ color: '#19B46E', fontSize: 16, marginLeft: 10, fontWeight: '600' }}>CHANGE</Text>


              </TouchableOpacity>


            </View>
          </View>

          <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Vendor_Login()} style={{
            width: '50%',
            height: 43,
            borderRadius: 10,
            backgroundColor: '#9B56EC',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'gray',
            alignSelf: 'center',
            marginTop: 40
          }}>

            <Text style={{ color: 'white', fontSize: 17, }}>Continue</Text>


          </TouchableOpacity>


          <View style={{ marginBottom: 30 }}></View>


        </ScrollView>



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