import { Row } from 'native-base';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

import { Icon, } from 'native-base';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


class testing extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>


        <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>

              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>



            <Text style={{ fontWeight: '500', fontSize: 19, marginLeft: 5, marginTop: 5 }}>Doctors</Text>


            <Text>     </Text>
          </View>

        </View>


        <ScrollView>



          <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 15, fontWeight: '600' }}>Our Doctors</Text>
          <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 40 }}>


            <Image style={{
              width: 80, height: 80, borderRadius: 80, alignSelf: 'center',

            }} source={require('../assets/Rectangle1.png')} />

            <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 15 }}>Myself</Text>


          </View>


          <TouchableOpacity onPress={() => Actions.Doctor_Appointment_Profile()} style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 35, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 7, marginTop: 10 }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', fontWeight: '600' }}>Complete my doctor profile</Text>
          </TouchableOpacity>

          <View style={{ paddingBottom: 15, borderBottomColor: 'gray', borderBottomWidth: 1.5, width: width / 1.1, alignSelf: 'center' }}>

          </View>






















          <View style={{ backgroundColor: 'white', marginTop: 10, paddingBottom: 40 }}>
            <View style={{ backgroundColor: 'white', width: width / 1.1, alignSelf: 'center', paddingVertical: 15, marginTop: 5, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3, }}>
              <TouchableOpacity activeOpacity={0.8}


                style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', }}>

                <View style={{ marginLeft: 11 }}>

                  <Image style={{
                    width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

                  }} source={require('../assets/Rectangle1.png')} />
















                </View>
                <View style={{ marginLeft: 13, width: '77%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                    <View>
                      <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', }} numberOfLines={1} ellipsizeMode="tail">Dr. Jane Fernandes Dcosta</Text>


                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400', marginTop: 5 }}>Cardiologist</Text>
                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400', marginTop: 4 }}>8 yrs expertise</Text>

                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                          <Icon name="star" type="Entypo" style={{ color: "#19B46E", fontSize: 15 }} />


                          <Text style={{ color: '#19B46E', fontSize: 11, fontWeight: 'bold' }}>4.5/5 ratings</Text>



                        </View>



                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 15 }}>
                          <Icon name="account-group" type="MaterialCommunityIcons" style={{ color: "#19B46E", fontSize: 15 }} />


                          <Text style={{ color: '#19B46E', fontSize: 11, fontWeight: 'bold' }}> 23 patients consulted</Text>



                        </View>
                      </View>





                    </View>


                  </View>


                </View>

              </TouchableOpacity>




              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginLeft: 20, marginTop: 13 }}>

                <View style={{ width: '50%' }}>

                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#82829B' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 3 }}>9:00AM, tomorrow</Text>

                </View>



                <View style={{ width: '50%' }}>

                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#82829B' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 3 }}>06:30AM, today</Text>

                </View>




              </View>





              <TouchableOpacity onPress={() => Actions.Doctor_Appointment_Profile()} style={{ backgroundColor: '#9B56EC', width: "45%", height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 7, marginTop: 14 }}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', }}>View Information</Text>
              </TouchableOpacity>














            </View>


            <View style={{ backgroundColor: 'white', width: width / 1.1, alignSelf: 'center', paddingVertical: 15, marginTop: 5, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3, }}>
              <TouchableOpacity activeOpacity={0.8}


                style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', }}>

                <View style={{ marginLeft: 11 }}>

                  <Image style={{
                    width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

                  }} source={require('../assets/Rectangle1.png')} />
















                </View>
                <View style={{ marginLeft: 13, width: '77%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                    <View>
                      <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', }} numberOfLines={1} ellipsizeMode="tail">Dr. Jane Fernandes Dcosta</Text>


                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400', marginTop: 5 }}>Cardiologist</Text>
                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400', marginTop: 4 }}>8 yrs expertise</Text>

                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                          <Icon name="star" type="Entypo" style={{ color: "#19B46E", fontSize: 15 }} />


                          <Text style={{ color: '#19B46E', fontSize: 11, fontWeight: 'bold' }}>4.5/5 ratings</Text>



                        </View>



                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 15 }}>
                          <Icon name="account-group" type="MaterialCommunityIcons" style={{ color: "#19B46E", fontSize: 15 }} />


                          <Text style={{ color: '#19B46E', fontSize: 11, fontWeight: 'bold' }}> 23 patients consulted</Text>



                        </View>
                      </View>





                    </View>


                  </View>


                </View>

              </TouchableOpacity>




              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginLeft: 20, marginTop: 13 }}>

                <View style={{ width: '50%' }}>

                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#82829B' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 3 }}>9:00AM, tomorrow</Text>

                </View>



                <View style={{ width: '50%' }}>

                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#82829B' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 3 }}>06:30AM, today</Text>

                </View>




              </View>





              <TouchableOpacity onPress={() => Actions.Doctor_Appointment_Profile()} style={{ backgroundColor: '#9B56EC', width: "45%", height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 7, marginTop: 14 }}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', }}>View Information</Text>
              </TouchableOpacity>













            </View>
            <TouchableOpacity onPress={() => Actions.Edit_Profile()}
              style={{ backgroundColor: '#9B56EC', width: width / 1.1, height: 40, flexDirection: 'row', marginTop: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginTop: 100, }}>
              <Icon name="plus" type="Entypo" style={{ color: 'white', marginRight: 3.5, fontSize: 20, }} />

              <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>Add doctor</Text>
            </TouchableOpacity>


          </View>

















        </ScrollView>
      </View>

    )
  }
}


export default testing;
