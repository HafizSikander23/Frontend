


import React, { Component } from "react";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
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
  Modal,
  AsyncStorage,
  ImageBackground,
  Dimensions,
  BackHandler,
  Linking,
  PermissionsAndroid,
  Platform
} from "react-native";
import { Icon } from 'native-base';

import { Actions } from "react-native-router-flux";





const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;




class patient_site_appointment_detai extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      token: '',
      testing: [],
    }
  }
  submit = () => {
    Actions.Vendor_Registration_B4()
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View style={{ flex: 1 }}>
          <ProgressSteps disabledStepNumColor='#186ADE' activeStepNumColor='#186ADE' activeStepIconBorderColor='#3085F4' activeStepIconColor='#D6E7FD' progressBarColor='#D6E7FD' completedStepIconColor='#3085F4' completedProgressBarColor='#D6E7FD' disabledStepIconColor='#D6E7FD' >


            <ProgressStep label="" nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>

              <View style={{ width: width / 1.1, alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
                <Text style={{ color: 'black', marginBottom: 15, marginTop: 20, fontSize: 23, fontWeight: '600' }}>Identity Proof</Text>
                <Text style={{ fontSize: 15, color: 'black', width: '95%', fontWeight: '300' }} numberOfLines={3} >Please upload your identity proof to ensure that the ownership of your profile remains only with you</Text>
                <Text style={{ color: 'gray', marginTop: 5, fontSize: 14, }}>Acceptable documents includes passport or National ID card</Text>


              </View>
              <View style={{ width: width / 1.1, height: height / 5, marginTop: 30, alignSelf: 'center', borderRadius: 10, borderStyle: 'dashed', borderWidth: 2, borderColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Icon name="file" type="FontAwesome" style={{ color: "gray", marginRight: 10, fontSize: 12 }} />
                <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>Upload (PDF,JPG,PNG)</Text>

              </View>
            </ProgressStep>




            <ProgressStep onSubmit={() => this.submit()} label="" previousBtnStyle={styles.previous_button} previousBtnTextStyle={styles.previous_text} nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>



              <View style={{ width: width / 1.05, height: height / 4, alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
                <Text style={{ color: 'black', marginBottom: 15, marginTop: 20, fontSize: 23, fontWeight: '600' }}>Store registration proof</Text>
                <Text style={{ fontSize: 15, color: 'black', width: '95%', fontWeight: '300', marginTop: 15 }} numberOfLines={3} >Pharma Agreement registration</Text>
                <Text style={{ color: 'gray', marginTop: 5, fontSize: 14, }}>Acceptable documents includes medical registration certification</Text>


              </View>
              <View style={{ width: width / 1.05, height: height / 5, marginTop: -20, alignSelf: 'center', borderRadius: 10, borderStyle: 'dashed', borderWidth: 2, borderColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Icon name="file" type="FontAwesome" style={{ color: "gray", marginRight: 10, fontSize: 12 }} />
                <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>Upload (PDF,JPG,PNG)</Text>

              </View>


            </ProgressStep>







          </ProgressSteps>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123',
  },
  next_button: {
    backgroundColor: '#9B56EC', width: width / 3.5, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 8,
  },
  next_text: {
    color: 'white',
    fontSize: 17,
  },
  previous_text: {
    color: '#3085F4', fontSize: 17,
  },
  previous_button: {
    backgroundColor: '#E9F0FF', width: width / 3.5, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 8, alignSelf: 'flex-start'
  },
  checked: {
    width: 10, height: 10, backgroundColor: '#3085F4', borderRadius: 30
  },

  uncheked: {
    width: 10, height: 10, borderRadius: 100,
  },




})



export default patient_site_appointment_detai;


