
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
import DateTimePickerModal from "react-native-modal-datetime-picker";

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

          <View style={{ width: width / 1.05, alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
            <Text style={{ color: 'black', marginBottom: 15, marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Upload Store picture </Text>
            <Text style={{ fontSize: 16, color: 'black', width: '95%', marginTop: 30 }} >Please upload your Clinique picture </Text>
            <Text style={{ color: 'gray', marginTop: 5, fontSize: 14, }}>Acceptable documents includes passport or National ID card</Text>


          </View>
          <View style={{ width: width / 1.05, height: height / 6, marginTop: 30, alignSelf: 'center', borderRadius: 10, borderStyle: 'dashed', borderWidth: 2, borderColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
            <Icon name="file" type="FontAwesome" style={{ color: "gray", marginRight: 10, fontSize: 12 }} />
            <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>Upload (PDF,JPG,PNG)</Text>

          </View>





          <View style={{ width: width / 1.05, alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>

            <Text style={{ fontSize: 16, color: 'black', width: '95%', marginTop: 30 }} >Please upload your Clinique picture </Text>
            <Text style={{ color: 'gray', marginTop: 5, fontSize: 14, }}>Acceptable documents includes passport or National ID card</Text>


          </View>
          <View style={{ width: width / 1.05, height: height / 6, marginTop: 20, alignSelf: 'center', borderRadius: 10, borderStyle: 'dashed', borderWidth: 2, borderColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
            <Icon name="file" type="FontAwesome" style={{ color: "gray", marginRight: 10, fontSize: 12 }} />
            <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>Upload (PDF,JPG,PNG)</Text>

          </View>




          <View style={{ width: width / 1.05, alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>

            <Text style={{ fontSize: 16, color: 'black', width: '95%', marginTop: 30 }} >Please upload your Clinique picture </Text>
            <Text style={{ color: 'gray', marginTop: 5, fontSize: 14, }}>Acceptable documents includes passport or National ID card</Text>


          </View>
          <View style={{ width: width / 1.05, height: height / 6, marginTop: 20, alignSelf: 'center', borderRadius: 10, borderStyle: 'dashed', borderWidth: 2, borderColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
            <Icon name="file" type="FontAwesome" style={{ color: "gray", marginRight: 10, fontSize: 12 }} />
            <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>Upload (PDF,JPG,PNG)</Text>

          </View>














          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', paddingBottom: 40, marginTop: 70 }}>


            <View style={{ backgroundColor: '#E9F0FF', width: '48%', height: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, }}>
              <Text style={{ color: '#3085F4', fontSize: 17, }}>Previous</Text>
            </View>



            <View style={{ backgroundColor: '#9B56EC', width: '48%', height: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, }}>
              <Text style={{ color: 'white', fontSize: 17, }}>Next</Text>
            </View>


          </View>
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