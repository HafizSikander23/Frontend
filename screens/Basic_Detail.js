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
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Icon, } from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import ImageLoad from 'react-native-image-placeholder';
class testing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkbox_state: false,
      multi_image_check: 'false',
      multi_Images: [],
      subject: "",
      number: "",
      symptoms: "",
      spinner: false,
      checked: false,
      checked1: false,
      profile: null,

      text1: 2,
      text2: 1,
      check_design: 'via SMS',




    }
  }






  changebtn(value, val) {
    this.setState({
      skalton: true
    })

    if (this.state[value] == 2) {


      this.setState({
        text1: 1,
        text2: 1,

        [value]: 2,


      })
    }
    else {
      this.setState({
        text1: 1,
        text2: 1,

        [value]: 2,


      })

    }
    this.setState({
      check_design: val,
      skalton: false
    })
  }



  submit = () => {
    Actions.Doctor_registration_6()
  }


  render() {

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View style={{ flex: 1 }}>
          <View style={{ width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>


          </View>
          <ProgressSteps disabledStepNumColor='#186ADE' activeStepNumColor='#186ADE' activeStepIconBorderColor='#3085F4' activeStepIconColor='#D6E7FD' progressBarColor='#D6E7FD' completedStepIconColor='#3085F4' completedProgressBarColor='#D6E7FD' disabledStepIconColor='#D6E7FD' >


            <ProgressStep label="" nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>



              <ScrollView>

                <Text style={{ color: '#2E2E37', fontSize: 28, fontWeight: '600', marginLeft: 22, }}>Basic details</Text>


                <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 22, marginTop: 18 }}>How many practice do you have ?</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Just one</Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  2 and more</Text>

                  </View>



                </View>




                <View style={{ width: width / 1.1, marginTop: 10, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Practice Name</Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Type Practice Name" placeholderTextColor='gray' />

                </View>


                <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Practice  Phone Number</Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="+224" placeholderTextColor='gray' />

                </View>




                <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Practice Website</Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Type website address" placeholderTextColor='gray' />

                </View>



                <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Practice Email</Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Email Adress" placeholderTextColor='gray' />

                </View>





                <View style={{ width: width / 1.1, marginTop: 30, height: 50, alignSelf: 'center' }} >
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>City</Text>

                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Conakry" placeholderTextColor='gray' />

                </View>



                <View style={{ width: width / 1.1, alignSelf: 'center', marginTop: 35 }}>
                  <Text style={{ fontSize: 14, fontWeight: '500' }}>Practice Or Provider's specialty</Text>
                  <Text style={{ fontSize: 13, fontWeight: '300' }}>You can add up to three specialties.</Text>

                </View>

                <View style={{ width: width / 1.1, height: 50, alignSelf: 'center' }} >


                  <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 8, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 20, borderRadius: 6, alignSelf: 'center', color: 'black', }} placeholder="Select Specialization" placeholderTextColor='gray' />

                </View>

                <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 22, marginTop: 4, color: '#3085F4' }}>Add Speciality</Text>



                <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 22, marginTop: 14 }}>How many doctors do you have in your practice ?</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Just me</Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  1- 3 doctors
                    </Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '25%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  4-8 doctors</Text>

                  </View>



                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '27%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  9-14 doctors</Text>

                  </View>



                </View>











              </ScrollView>
            </ProgressStep>




            <ProgressStep label="" previousBtnStyle={styles.previous_button} previousBtnTextStyle={styles.previous_text} nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>



              <ScrollView>




                <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 22, }}>What types of bookings do you want to receive ?</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Video Visits only</Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  In-person visit only</Text>

                  </View>





                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '60%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Both video and in-person visits</Text>

                  </View>





                </View>



                <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 22, marginTop: 18 }}>Does your clinic have a pharmacy?</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Yes</Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  No</Text>

                  </View>

                </View>



                <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 40, marginTop: 18 }}>Would you like to sell your products on the
                  platform?</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%', marginLeft: 20 }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Yes</Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%', marginLeft: 20 }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  No</Text>

                  </View>

                </View>




                <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 22, marginTop: 18 }}>Does your clinic have a laboratory ?</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Yes</Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  No</Text>

                  </View>

                </View>



                <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 40, marginTop: 18 }}>Would you like to sell your products on the
                  platform?</Text>


                <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%', marginLeft: 20 }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Yes</Text>

                  </View>


                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%', marginLeft: 20 }}>

                    <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                      <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                      </View>
                    </TouchableOpacity>
                    <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  No</Text>

                  </View>

                </View>







              </ScrollView>


            </ProgressStep>






            <ProgressStep onSubmit={() => this.submit()} label="" previousBtnStyle={styles.previous_button} previousBtnTextStyle={styles.previous_text} nextBtnStyle={styles.next_button} nextBtnTextStyle={styles.next_text}>


              <ScrollView>

                <View style={{ width: width / 1.05, alignSelf: 'center', borderRadius: 10, }}>
                  <Text style={{ color: 'black', marginBottom: 15, fontSize: 25, fontWeight: 'bold' }}>Upload Store picture </Text>
                  <Text style={{ fontSize: 16, color: 'black', width: '95%', marginTop: 20 }} >Please upload your Clinique picture </Text>
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




                <View style={{ width: width / 1.05, alignSelf: 'center', borderRadius: 10, marginTop: 10, }}>

                  <Text style={{ fontSize: 16, color: 'black', width: '95%', marginTop: 30 }} >Please upload your Clinique picture </Text>
                  <Text style={{ color: 'gray', marginTop: 5, fontSize: 14, }}>Acceptable documents includes passport or National ID card</Text>


                </View>
                <View style={{ width: width / 1.05, height: height / 6, marginTop: 20, alignSelf: 'center', borderRadius: 10, borderStyle: 'dashed', borderWidth: 2, borderColor: 'lightgray', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginBottom: 40 }}>
                  <Icon name="file" type="FontAwesome" style={{ color: "gray", marginRight: 10, fontSize: 12 }} />
                  <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>Upload (PDF,JPG,PNG)</Text>

                </View>

 


              </ScrollView>





            </ProgressStep>
          </ProgressSteps>
        </View>

  


      </View>

    )
  }
}

const styles = StyleSheet.create({

  active_button: {
    width: width / 1 - 40, alignSelf: 'center', borderWidth: 3, borderColor: '#9B56EC', marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingLeft: 20, borderRadius: 30
  },

  in_active_button: {
    width: width / 1 - 40, alignSelf: 'center', borderWidth: 3, borderColor: '#f8f8f9', marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingLeft: 20, borderRadius: 30
  },
  checked: {
    width: 17, height: 17, backgroundColor: '#8F49DE', borderRadius: 30
  },

  uncheked: {
    width: 17, height: 17, borderRadius: 100,
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
})
export default testing;
