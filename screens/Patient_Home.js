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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

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
      code: ""




    }
  }

  render() {
    const CELL_COUNT = 6;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor="white" barStyle="light-content" />



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center', flexDirection: 'row', paddingVertical: 10 }}>

          <View style={{ justifyContent: 'space-between', width: '60%', flexDirection: 'row', }}>

            <Image style={{ height: 40, width: 40, borderRadius: 1000 }}
              source={require('../assets/home1.png')} />
            <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 10, paddingTop: 8 }}>Hello, Doctor Jane Doe</Text>

          </View>



          <Icon name="bell" type="Feather" style={{ color: 'black', fontSize: 25, marginTop: 6 }} />



        </View>
        <ScrollView>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, marginTop: 10 }}>

            <Icon name="location-sharp" type="Ionicons" style={{ color: '#60606C', fontSize: 23, }} />

            <Text style={{ color: '#60606C', fontSize: 16, fontWeight: '600', marginLeft: 7 }}>Conakry, Guinea</Text>
            <Icon name="down" type="AntDesign" style={{ color: '#60606C', fontSize: 23, marginLeft: 7 }} />




          </View>











          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.8}

              // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

              style={{ width: width / 1.3, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 20, marginBottom: 10, marginLeft: 10 }}>

              <View>

                <Image style={{
                  width: 70, height: 70, borderRadius: 60, alignSelf: 'center'

                }} source={require('../assets/doc8.png')} />







              </View>
              <View style={{ marginLeft: 10, width: '70%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                  <View>

                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', }} ellipsizeMode="tail">Patient Doe</Text>


                    <View style={{ flexDirection: 'row', }}>

                      <Text style={{ color: 'black', fontSize: 11, fontWeight: '600', marginTop: 3 }}>Online visit</Text>

                      <View style={{ paddingHorizontal: 5, paddingVertical: 3, borderColor: '#8F49DE', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 6, borderWidth: 1.3, width: 80, marginLeft: 15 }}>


                        <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>Upcoming</Text>

                      </View>

                    </View>




                    <View style={{ flexDirection: 'row', }}>

                      <Text style={{ color: 'black', fontSize: 11, fontWeight: '300', marginTop: 3 }}>Today</Text>




                      <Text style={{ color: 'black', fontSize: 11, fontWeight: '300', marginTop: 3, marginLeft: 15 }}>16:00 PM</Text>


                    </View>















                  </View>


                </View>
                <TouchableOpacity onPress={() => Actions.patient_site_appointment_detai({ status: 'pending' })} style={{ paddingHorizontal: 5, marginTop: 10, paddingVertical: 3, borderColor: '#159AB3', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 6, borderWidth: 1.3, width: 120 }}>
                  <Text style={{ color: '#159AB3', fontSize: 12, fontWeight: 'bold' }}>View details</Text>
                </TouchableOpacity>

              </View>
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={0.8}

              // onPress={() => Actions.Doctor_Appointment_Profile({type_1:'',  day_1:this.state.day_1, provider:false, tax_percentage:tax_percentage,language:language,stripe_key:stripe_key, app: app, fcm_token: fcm_token, s_key: s_key, paypal: paypal, access: access, name1: name, profile: profile, category: category, doctor_id: doctor_id, experience: experience, fee: fee, address: address, lat: lat, lng: lng, total_review: total_review, a_r: a_r, license_number: license_number, degree: degree, c_name: c_name, appointment: appointment,email:email })} 

              style={{ width: width / 1.3, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: 20, marginBottom: 10, marginLeft: 10 }}>

              <View>

                <Image style={{
                  width: 70, height: 70, borderRadius: 60, alignSelf: 'center'

                }} source={require('../assets/doc8.png')} />







              </View>
              <View style={{ marginLeft: 10, width: '70%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                  <View>

                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', }} ellipsizeMode="tail">Patient Doe</Text>


                    <View style={{ flexDirection: 'row', }}>

                      <Text style={{ color: 'black', fontSize: 11, fontWeight: '600', marginTop: 3 }}>Online visit</Text>

                      <View style={{ paddingHorizontal: 5, paddingVertical: 3, borderColor: '#8F49DE', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 6, borderWidth: 1.3, width: 80, marginLeft: 15 }}>


                        <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>Upcoming</Text>

                      </View>

                    </View>




                    <View style={{ flexDirection: 'row', }}>

                      <Text style={{ color: 'black', fontSize: 11, fontWeight: '300', marginTop: 3 }}>Today</Text>




                      <Text style={{ color: 'black', fontSize: 11, fontWeight: '300', marginTop: 3, marginLeft: 15 }}>16:00 PM</Text>


                    </View>















                  </View>


                </View>
                <TouchableOpacity onPress={() => Actions.Doctor_Appointment_Profile({ status: 'pending' })} style={{ paddingHorizontal: 5, marginTop: 10, paddingVertical: 3, borderColor: '#159AB3', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 6, borderWidth: 1.3, width: 120 }}>
                  <Text style={{ color: '#159AB3', fontSize: 12, fontWeight: 'bold' }}>View details</Text>
                </TouchableOpacity>

              </View>
            </TouchableOpacity>


          </ScrollView>


          <Text style={{ fontSize: 18, marginTop: 10, fontWeight: '600', marginLeft: 20, marginTop: 7, }}>Dashboard</Text>




          <View style={{ width: width / 1.1, flexDirection: 'row', backgroundColor: '#FF86511A', alignSelf: 'center', borderRadius: 10, marginTop: 15 }}>

            <View style={{ width: 45, height: 45, backgroundColor: '#FF8651', borderRadius: 13, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>

              <Icon name="calendar-clock" type="MaterialCommunityIcons" style={{ color: 'white', fontSize: 25, }} />

            </View>


            <View style={{ marginLeft: 17 }}>

              <Text style={{ color: 'black', fontSize: 12, fontWeight: '300', }}>No of slots available</Text>




              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700', marginTop: 4 }}>22</Text>

            </View>



          </View>




          <View style={{ width: width / 1.1, flexDirection: 'row', backgroundColor: '#19B46E1A', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>

            <View style={{ width: 45, height: 45, backgroundColor: '#19B46E', borderRadius: 13, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>

              <Icon name="calendar-check" type="MaterialCommunityIcons" style={{ color: 'white', fontSize: 25, }} />

            </View>


            <View style={{ marginLeft: 17 }}>

              <Text style={{ color: 'black', fontSize: 12, fontWeight: '300', }}>Accepted requests today</Text>




              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700', marginTop: 4 }}>14</Text>

            </View>



          </View>






          <View style={{ width: width / 1.1, flexDirection: 'row', backgroundColor: '#D91F111A', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>

            <View style={{ width: 45, height: 45, backgroundColor: '#D91F11', borderRadius: 13, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>

              <Icon name="calendar-times" type="FontAwesome5" style={{ color: 'white', fontSize: 22, }} />

            </View>


            <View style={{ marginLeft: 17 }}>

              <Text style={{ color: 'black', fontSize: 12, fontWeight: '300', }}>No of no show patients</Text>




              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700', marginTop: 4 }}>2</Text>

            </View>



          </View>







          <View style={{ width: width / 1.1, flexDirection: 'row', backgroundColor: '#3085F41A', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>

            <View style={{ width: 45, height: 45, backgroundColor: '#3085F4', borderRadius: 13, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>

              <Icon name="woman" type="Ionicons" style={{ color: 'white', fontSize: 25, }} />

            </View>


            <View style={{ marginLeft: 17 }}>

              <Text style={{ color: 'black', fontSize: 12, fontWeight: '300', }}>No of patients</Text>




              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700', marginTop: 4 }}>34</Text>

            </View>



          </View>








          <View style={{ width: width / 1.1, flexDirection: 'row', backgroundColor: '#F5C5181A', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>

            <View style={{ width: 45, height: 45, backgroundColor: '#F5C518', borderRadius: 13, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>

              <Icon name="dollar" type="Foundation" style={{ color: 'white', fontSize: 30, }} />

            </View>


            <View style={{ marginLeft: 17 }}>

              <Text style={{ color: 'black', fontSize: 12, fontWeight: '300', }}>Today's revenue</Text>




              <Text style={{ color: 'black', fontSize: 15, fontWeight: '700', marginTop: 4 }}>GNF  200000</Text>

            </View>



          </View>
























          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', }}>Trending</Text>

            <Text style={{ color: '#246BFD', fontSize: 13, fontWeight: 'bold' }}>See All</Text>



          </View>





          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {/* <View style={{justifyContent:'space-between',width:width/1.1,flexDirection:'row', alignSelf:'center', alignItems:'center'}}> */}
            <View style={{ width: width / 1.8, marginHorizontal: 10, paddingBottom: 15, marginBottom: 10, borderRadius: 4, marginTop: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: 'white' }}>
              <Image style={{ width: "100%", height: 150, }} source={require('../assets/istockphoto-1402004971-170667a.jpg')} />

              <Text style={{ fontSize: 16, marginTop: 10, fontWeight: '600', paddingHorizontal: 10 }} numberOfLines={2}>Adding Salt to Your Food May Increase Risk of Pre...</Text>

            </View>


            <View style={{ width: width / 1.8, marginHorizontal: 10, paddingBottom: 15, marginBottom: 10, borderRadius: 4, marginTop: 10, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: 'white' }}>
              <Image style={{ width: "100%", height: 150, }} source={require('../assets/istockphoto-1402004971-170667a.jpg')} />

              <Text style={{ fontSize: 16, marginTop: 10, fontWeight: '600', paddingHorizontal: 10 }} numberOfLines={2}>Adding Salt to Your Food May Increase Risk of Pre...</Text>

            </View>




          </ScrollView>






          <View style={{ marginBottom: 50 }}></View>


        </ScrollView>
      </View>

    )
  }
}
const styles = StyleSheet.create({

  root: { paddingHorizontal: 30, alignSelf: 'center', marginTop: 30 },

  cell: {
    width: 45,
    height: 45,
    lineHeight: 42,
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    color: 'black',
    backgroundColor: '#EEEEF6',
    borderWidth: 1,
    borderColor: '#EEEEF6'
  },
  focusCell: {
    borderColor: '#007fff',
  },
})

export default testing;
