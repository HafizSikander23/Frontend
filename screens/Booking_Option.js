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



     render() {

          return (
               <View style={{ flex: 1, backgroundColor: 'white' }}>


                    <ScrollView>




                         <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 22, marginTop: 18 }}>What types of bookings do you want to receive ?</Text>


                         <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Video Visits only</Text>

                              </View>


                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  In-person visit only</Text>

                              </View>





                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '60%' }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Both video and in-person visits</Text>

                              </View>





                         </View>



                         <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 22, marginTop: 18 }}>Does your clinic have a pharmacy?</Text>


                         <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Yes</Text>

                              </View>


                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
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

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Yes</Text>

                              </View>


                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%', marginLeft: 20 }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  No</Text>

                              </View>

                         </View>




                         <Text style={{ fontSize: 24, fontWeight: '600', marginLeft: 22, marginTop: 18 }}>Does your clinic have a laboratory ?</Text>


                         <View style={{ width: width / 1.1, marginTop: 5, alignSelf: 'center' }}>


                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Yes</Text>

                              </View>


                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%' }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
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

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Yes</Text>

                              </View>


                              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: '40%', marginLeft: 20 }}>

                                   <TouchableOpacity activeOpacity={0.8} style={{ width: 20, height: 20, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                                        <View style={(this.state.text2 == 1 ? styles.uncheked : styles.checked)}>

                                        </View>
                                   </TouchableOpacity>
                                   <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  No</Text>

                              </View>

                         </View>



                         <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between', paddingBottom: 40, marginTop: 50 }}>


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

     active_button: {
          width: width / 1 - 40, alignSelf: 'center', borderWidth: 3, borderColor: '#9B56EC', marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingLeft: 20, borderRadius: 30
     },

     in_active_button: {
          width: width / 1 - 40, alignSelf: 'center', borderWidth: 3, borderColor: '#f8f8f9', marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingLeft: 20, borderRadius: 30
     },
     checked: {
          width: 10, height: 10, backgroundColor: '#8F49DE', borderRadius: 30
     },

     uncheked: {
          width: 10, height: 10, borderRadius: 100,
     },

})
export default testing;
