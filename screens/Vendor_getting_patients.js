


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
    Actions.Vendor_Registration_C3()
  }



  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View style={{ flex: 1 }}>
          <ProgressSteps disabledStepNumColor='#186ADE' activeStepNumColor='#186ADE' activeStepIconBorderColor='#3085F4' activeStepIconColor='#D6E7FD' progressBarColor='#D6E7FD' completedStepIconColor='#3085F4' completedProgressBarColor='#3085F4' disabledStepIconColor='#D6E7FD' >


            <ProgressStep label="" nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>

              <View style={{ width: width / 1.1, alignSelf: 'center', borderRadius: 10, marginTop: 10, paddingBottom: 40 }}>
                <Text style={{ color: 'black', marginBottom: 15, fontSize: 25, fontWeight: '600' }}>Location & Timings</Text>

                <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 3, marginTop: 10 }}>Contact</Text>

                <View style={{ flexDirection: 'row', width: width / 1.1, justifyContent: 'space-between', alignSelf: 'center', }}>

                  {/* <View style={{width:'25%',alignItems:'center', justifyContent:'center'}}> */}

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '25%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="+224" placeholderTextColor='#2E2E37' />


                  {/* </View> */}


                  {/* <View style={{width:'72%',justifyContent:'center',alignItems:'center',paddingTop:35}}>  */}
                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: '70%', height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="9876543210" placeholderTextColor='#2E2E37' />


                  {/* </View> */}


                </View>
                <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 14, fontWeight: '500' }}>Your Clinic address</Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#D9D9D9', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="1010 Sainte Catherine, Montreal" placeholderTextColor='#2E2E37' />

                </View>

                <Text style={{ color: 'gray', marginTop: 32, fontSize: 14, }}>Drop a pin to link your Clinic address</Text>


                <Image style={{ width: width / 1.1, height: height / 5, alignSelf: 'center', marginTop: 5 }}
                  source={require('../assets/map.png')} />
                <Text style={{ fontSize: 15, color: 'black', width: '95%', fontWeight: '600', marginTop: 10, }} >Practice Timings </Text>


                <Text style={{ color: '#2E2E37', marginTop: 7, fontSize: 14, fontWeight: '600' }}>Days</Text>



                <View style={{ flexDirection: 'row', width: width / 1.1, justifyContent: 'space-between', alignSelf: 'center', marginTop: 10 }}>

                  <View style={{ backgroundColor: '#3085F4', width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Mo</Text>
                  </View>

                  <View style={{ backgroundColor: '#3085F4', width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Tu</Text>
                  </View>

                  <View style={{ backgroundColor: '#3085F4', width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>We</Text>
                  </View>

                  <View style={{ backgroundColor: '#EEEEF6', width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#2E2E37', fontSize: 15 }}>Th</Text>
                  </View>

                  <View style={{ backgroundColor: '#EEEEF6', width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#2E2E37', fontSize: 15 }}>Fr</Text>
                  </View>

                  <View style={{ backgroundColor: '#EEEEF6', width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#2E2E37', fontSize: 15 }}>Sa</Text>
                  </View>

                  <View style={{ backgroundColor: '#EEEEF6', width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#2E2E37', fontSize: 15 }}>Su</Text>
                  </View>




                </View>






                <Text style={{ color: '#2E2E37', marginTop: 20, fontSize: 14, fontWeight: '600' }}>Session 1</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: width / 1.1, marginTop: 10 }}>

                  <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'lightgray', height: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 18, color: '#82829B', width: '40%' }}>From</Text>

                    <Icon name="chevron-small-down" type="Entypo" style={{ color: "gray", fontSize: 30 }} />



                  </View>





                  <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'lightgray', height: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 18, color: '#82829B', width: '40%' }}>To</Text>

                    <Icon name="chevron-small-down" type="Entypo" style={{ color: "gray", fontSize: 30 }} />



                  </View>


                </View>



                <Text style={{ color: '#2E2E37', marginTop: 20, fontSize: 14, fontWeight: '600' }}>Session 2</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: width / 1.1, marginTop: 10 }}>

                  <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'lightgray', height: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 18, color: '#82829B', width: '40%' }}>From</Text>

                    <Icon name="chevron-small-down" type="Entypo" style={{ color: "gray", fontSize: 30 }} />



                  </View>





                  <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'lightgray', height: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 18, color: '#82829B', width: '40%' }}>To</Text>

                    <Icon name="chevron-small-down" type="Entypo" style={{ color: "gray", fontSize: 30 }} />



                  </View>


                </View>

















              </View>

            </ProgressStep>




            <ProgressStep onSubmit={() => this.submit()} label="" previousBtnStyle={styles.previous_button} previousBtnTextStyle={styles.previous_text} nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>



              <View style={{ width: width / 1.1, alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
                <Text style={{ color: 'black', marginBottom: 15, fontSize: 25, fontWeight: '600' }}>Location & Timings</Text>








                <Text style={{ color: '#2E2E37', marginTop: 10, fontSize: 17, fontWeight: '600' }}>Days</Text>



                <View style={{ flexDirection: 'row', width: width / 1.1, justifyContent: 'space-between', alignSelf: 'center', marginTop: 10 }}>

                  <View style={{ backgroundColor: '#3085F4', width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Mo</Text>
                  </View>

                  <View style={{ backgroundColor: '#3085F4', width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Tu</Text>
                  </View>

                  <View style={{ backgroundColor: '#3085F4', width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>We</Text>
                  </View>

                  <View style={{ backgroundColor: '#EEEEF6', width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#2E2E37', fontSize: 15 }}>Th</Text>
                  </View>

                  <View style={{ backgroundColor: '#EEEEF6', width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#2E2E37', fontSize: 15 }}>Fr</Text>
                  </View>

                  <View style={{ backgroundColor: '#EEEEF6', width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#2E2E37', fontSize: 15 }}>Sa</Text>
                  </View>

                  <View style={{ backgroundColor: '#EEEEF6', width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#2E2E37', fontSize: 15 }}>Su</Text>
                  </View>




                </View>

                <Text style={{ color: '#2E2E37', marginTop: 20, fontSize: 15, fontWeight: '600' }}>Session 1</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: width / 1.1, marginTop: 15 }}>

                  <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'lightgray', height: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 18, color: '#82829B', width: '40%' }}>From</Text>

                    <Icon name="chevron-small-down" type="Entypo" style={{ color: "gray", fontSize: 30 }} />



                  </View>





                  <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'lightgray', height: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 18, color: '#82829B', width: '40%' }}>To</Text>

                    <Icon name="chevron-small-down" type="Entypo" style={{ color: "gray", fontSize: 30 }} />



                  </View>


                </View>



                <Text style={{ color: '#2E2E37', marginTop: 20, fontSize: 15, fontWeight: '600' }}>Session 2</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: width / 1.1, marginTop: 15 }}>

                  <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'lightgray', height: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 18, color: '#82829B', width: '40%' }}>From</Text>

                    <Icon name="chevron-small-down" type="Entypo" style={{ color: "gray", fontSize: 30 }} />



                  </View>





                  <View style={{ flexDirection: 'row', borderWidth: 1.5, borderColor: 'lightgray', height: 40, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 18, color: '#82829B', width: '40%' }}>To</Text>

                    <Icon name="chevron-small-down" type="Entypo" style={{ color: "gray", fontSize: 30 }} />



                  </View>


                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

                  <Icon name="plus" type="Entypo" style={{ color: "gray", fontSize: 28, color: '#3085F4' }} />
                  <Text style={{ color: '#3085F4', fontSize: 14, fontWeight: '600' }}>ADD TIMING</Text>

                </View>







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


