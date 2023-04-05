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
            <View style={{ flexDirection: 'row' }}>
              <Icon name="ios-location-sharp" type="Ionicons" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />

              <Text style={{ fontWeight: '500', fontSize: 15, marginLeft: 5, marginTop: 5 }}>Conakry, Guinea</Text>
              <Icon name="down" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </View>
            <Text>     </Text>
          </View>

        </View>


        <ScrollView>



          <View style={{ width: width / 1.1, marginTop: 10, height: 50, alignSelf: 'center' }} >
            <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 38, borderRadius: 6, alignSelf: 'center', color: '#60606C', fontWeight: '600', }} placeholder="Fever" placeholderTextColor='gray' />

            <Icon name="search1" type="AntDesign" style={{ color: '#60606C', fontSize: 15, position: 'absolute', left: 5, bottom: 2, marginLeft: 10, marginBottom: 10 }} />
          </View>











          <View style={{ width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ color: '#82829B', fontWeight: '500', fontSize: 15 }}>Searching for 'General Physician'</Text>
            <Text style={{ color: '#3085F4', fontWeight: '700', fontSize: 12 }}>122 results</Text>

          </View>











          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={{ backgroundColor: '#EEEEF6', flexDirection: 'row', alignItems: 'center', marginHorizontal: 4, marginVertical: 15, marginLeft: 10, paddingHorizontal: 15, borderRadius: 60, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderWidth: 0.5, borderColor: 'lightgray' }}>
              <Icon name="filter" type="Ionicons" style={{ color: "gray", fontSize: 16, marginRight: 10 }} />

              <Text>Filters</Text>
            </View>


            <View style={{ backgroundColor: 'white', marginHorizontal: 4, marginVertical: 15, paddingHorizontal: 15, borderRadius: 60, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderWidth: 0.5, borderColor: 'lightgray' }}>

              <Text>In-Clinic</Text>
            </View>


            <View style={{ backgroundColor: 'white', marginHorizontal: 4, marginVertical: 15, paddingHorizontal: 15, borderRadius: 60, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderWidth: 0.5, borderColor: 'lightgray' }}>

              <Text>Video Consult</Text>
            </View>


            <View style={{ backgroundColor: 'white', marginHorizontal: 4, marginVertical: 15, paddingHorizontal: 15, borderRadius: 60, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderWidth: 0.5, borderColor: 'lightgray' }}>

              <Text>For-Myself</Text>
            </View>

          </ScrollView>





















          <View style={{ backgroundColor: 'white' }}>
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


                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>Cardiologist</Text>
                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>8 yrs expertise</Text>

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


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="home-plus" type="MaterialCommunityIcons" style={{ color: "#82829B", fontSize: 20 }} />
                <Text style={{ marginLeft: 4, fontSize: 14 }}>Morocco • Fortis Cardio Clinic</Text>
              </View>


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="dollar" type="Foundation" style={{ color: "#82829B", fontSize: 25, marginLeft: 4, fontWeight: 'bold' }} />
                <Text style={{ marginLeft: 8, fontSize: 14, fontWeight: 'bold' }}>30 consultation fees</Text>
              </View>


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginLeft: 20 }}>

                <View style={{ width: '50%' }}>

                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#82829B' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 3 }}>9:00AM, tomorrow</Text>

                </View>



                <View style={{ width: '50%' }}>

                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#82829B' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 3 }}>06:30AM, today</Text>

                </View>




              </View>



              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', marginTop: 5, justifyContent: 'space-between' }}>

                <TouchableOpacity onPress={() => Actions.Doctor_Appointment_Profile()} style={{ backgroundColor: '#9B56EC', width: "45%", height: 35, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 7 }}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Book appointment</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => Actions.Doctor_Appointment_Profile()} style={{ backgroundColor: '#159AB3', width: "45%", height: 35, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginRight: 15 }}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Video consultation</Text>
                </TouchableOpacity>



              </View>








            </View>



            <View style={{ backgroundColor: 'white', width: width / 1.1, alignSelf: 'center', marginTop: 15, paddingVertical: 15, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3 }}>
              <TouchableOpacity activeOpacity={0.8}


                style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', }}>

                <View style={{ marginLeft: 11 }}>

                  <Image style={{
                    width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

                  }} source={require('../assets/Rectangle2.png')} />
















                </View>
                <View style={{ marginLeft: 13, width: '77%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                    <View>
                      <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', }} numberOfLines={1} ellipsizeMode="tail">M.D. Esther Howard</Text>


                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>Oncologist</Text>
                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>8 yrs expertise</Text>

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


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="home-plus" type="MaterialCommunityIcons" style={{ color: "#82829B", fontSize: 20 }} />
                <Text style={{ marginLeft: 4, fontSize: 14 }}>Morocco • Fortis Cardio Clinic</Text>
              </View>


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="dollar" type="Foundation" style={{ color: "#82829B", fontSize: 25, marginLeft: 4, fontWeight: 'bold' }} />
                <Text style={{ marginLeft: 8, fontSize: 14, fontWeight: 'bold' }}>30 consultation fees</Text>
              </View>


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginLeft: 20 }}>

                <View style={{ width: '45%' }}>

                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#82829B' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500' }}>9:00AM, tomorrow</Text>

                </View>


                <View style={{ backgroundColor: '#9B56EC', width: "47%", height: 35, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 10 }}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Book appointment</Text>
                </View>





              </View>




            </View>



            <View style={{ backgroundColor: 'white', width: width / 1.1, alignSelf: 'center', marginTop: 15, paddingVertical: 15, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3 }}>
              <TouchableOpacity activeOpacity={0.8}


                style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', }}>

                <View style={{ marginLeft: 11 }}>

                  <Image style={{
                    width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

                  }} source={require('../assets/Rectangle3.png')} />
















                </View>
                <View style={{ marginLeft: 13, width: '77%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                    <View>
                      <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', }} numberOfLines={1} ellipsizeMode="tail">Dr. Karima Dize</Text>


                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>General Physician, Pulmonologist</Text>
                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>8 yrs expertise</Text>

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


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="home-plus" type="MaterialCommunityIcons" style={{ color: "#82829B", fontSize: 20 }} />
                <Text style={{ marginLeft: 4, fontSize: 14 }}>Morocco • Fortis Cardio Clinic</Text>
              </View>


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="dollar" type="Foundation" style={{ color: "#82829B", fontSize: 25, marginLeft: 4, fontWeight: 'bold' }} />
                <Text style={{ marginLeft: 8, fontSize: 14, fontWeight: 'bold' }}>30 consultation fees</Text>
              </View>


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginLeft: 20 }}>

                <View style={{ width: '45%' }}>

                  <Text style={{ fontSize: 10, color: '#82829B', fontWeight: '700' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', }}>9:00AM, tomorrow</Text>

                </View>


                <View style={{ backgroundColor: '#159AB3', width: "47%", height: 35, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 10 }}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Video constulation</Text>
                </View>





              </View>




            </View>




            <View style={{ backgroundColor: 'white', width: width / 1.1, alignSelf: 'center', marginTop: 15, paddingVertical: 15, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3 }}>
              <TouchableOpacity activeOpacity={0.8}


                style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', }}>

                <View style={{ marginLeft: 11 }}>

                  <Image style={{
                    width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

                  }} source={require('../assets/Rectangle4.png')} />
















                </View>
                <View style={{ marginLeft: 13, width: '77%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                    <View>
                      <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', }} numberOfLines={1} ellipsizeMode="tail">Dr. Jane Fernandes Dcosta</Text>


                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>Cardiologist</Text>
                      <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>8 yrs expertise</Text>

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


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="home-plus" type="MaterialCommunityIcons" style={{ color: "#82829B", fontSize: 20 }} />
                <Text style={{ marginLeft: 4, fontSize: 14 }}>Morocco • Fortis Cardio Clinic</Text>
              </View>


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="dollar" type="Foundation" style={{ color: "#82829B", fontSize: 25, marginLeft: 4, fontWeight: 'bold' }} />
                <Text style={{ marginLeft: 8, fontSize: 14, fontWeight: 'bold' }}>30 consultation fees</Text>
              </View>


              <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', marginLeft: 20 }}>

                <View style={{ width: '45%' }}>

                  <Text style={{ fontSize: 10, color: '#82829B', fontWeight: '700' }}>NEXT AVAILABLE AT:</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', }}>9:00AM, tomorrow</Text>

                </View>


                <View style={{ backgroundColor: '#60606C', width: "47%", height: 35, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 10 }}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Contact clinic</Text>
                </View>





              </View>




            </View>










          </View>





        </ScrollView>
      </View>

    )
  }
}


export default testing;
