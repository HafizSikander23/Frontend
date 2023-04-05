import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet
} from 'react-native';
import { Actions, Lightbox } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class history extends React.Component {
  constructor(props) {

    super(props)

    this.state = {

      text1: 1,
      text2: 1,
      text3: 1,
      text0: 2,

      //   text4:1,
      check_design: 'History',
      visible: false,
      data1: [],
      skalton: false,
      checked1: false,
    }
  }


  changebtn(value, val) {
    this.setState({
      check_design: val,

    })

    if (this.state[value] == 2) {



      this.setState({
        text0: 1,

        text1: 1,
        text2: 1,
        text3: 1,



        [value]: 2,


      })
    }
    else {
      this.setState({
        text0: 1,

        text1: 1,
        text2: 1,
        text3: 1,

        [value]: 2,


      })

    }

  }



  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>
            <Text style={{ fontWeight: '500', fontSize: 20, }}>Patient Profile</Text>
            <Text style={{ fontWeight: '500', fontSize: 20, }}>     </Text>

          </View>
        </View>









        <View
          style={{
            width: width,
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{
                width: 90,
                height: 90,

                borderRadius: 90,
              }}
              source={require('../assets/profile.png')}
            />
            <Icon
              name="chatbubble-ellipses"
              type="Ionicons"
              style={{ color: 'gray', fontSize: 18, paddingTop: 70 }}
            />
          </View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              paddingTop: 5,
              fontSize: 23,
            }}>
            Jane Doe
          </Text>
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: 14,
              paddingTop: 7,
            }}>
            Last appointment 11-02-2022
          </Text>
        </View>




        <View style={{ width: width, paddingHorizontal: 10, borderRadius: 10, alignSelf: 'center', height: 50, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5, }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={{ width: width / 3.5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text0", 'History')}  >
              <View style={(this.state.text0 == 1 ? styles.in_active_button : styles.active_button)}>
                <Text style={(this.state.text0 == 1 ? styles.in_active_text : styles.active_text)}>History</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: width / 3.5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text1", 'Diagnosis')}  >
              <View style={(this.state.text1 == 1 ? styles.in_active_button : styles.active_button)}>
                <Text style={(this.state.text1 == 1 ? styles.in_active_text : styles.active_text)}>Diagnosis</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: width / 3.5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text2", 'Information')}  >
              <View style={(this.state.text2 == 1 ? styles.in_active_button : styles.active_button)}>
                <Text style={(this.state.text2 == 1 ? styles.in_active_text : styles.active_text)}>Information</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ width: width / 3.5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text3", 'Prescription')}  >
              <View style={(this.state.text3 == 1 ? styles.in_active_button : styles.active_button)}>
                <Text style={(this.state.text3 == 1 ? styles.in_active_text : styles.active_text)}>Prescription</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {this.state.check_design == 'History' &&
          <View>
            <View
              style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 15 }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{ fontSize: 20, color: '#8F49DE' }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                  width: '68%',
                }}>
                In Clinic Consultation:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                }}>
                05-12-2022
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#F7F2FC',
                width: width / 1.1,
                marginHorizontal: 15,
                paddingVertical: 20,
                marginTop: 15,
                paddingLeft: 30,
                borderWidth: 2,
                // borderColor: '#f7d2d2',
                borderColor: '#e0e0e0',
                borderRadius: 10,
                borderStyle: 'dashed',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '31%',
                  }}>
                  Symptoms:
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>Normal Headache</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '31%',
                  }}>
                  Diagnosis:
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>
                  Given tablet to cure
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '31%',
                  }}>
                  Prescription:
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>
                  Paracetamol 250 mg-tablet
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginHorizontal: 20,
              }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{ fontSize: 20, color: '#8F49DE' }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                  width: '68%',
                }}>
                Online Consultation:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                }}>
                05-01-2023
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#F7F2FC',
                width: width / 1.1,
                marginHorizontal: 15,
                paddingVertical: 10,
                paddingLeft: 30,
                borderWidth: 2,
                // borderColor: '#f7d2d2',
                borderColor: '#e0e0e0',
                borderRadius: 10,
                borderStyle: 'dashed',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '31%',
                  }}>
                  Symptoms:
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>Normal Headache</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '31%',
                  }}>
                  Diagnosis:
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>
                  Given tablet to cure
                </Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '31%',
                  }}>
                  Prescription:
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>
                  Paracetamol 250 mg-tablet
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    width: '64%',
                  }}>
                  Video Consultation History:
                </Text>
                <View
                  style={{
                    backgroundColor: 'teal',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 22,
                    borderRadius: 10,
                    height: 18,
                  }}>
                  <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>
                    See Video
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginHorizontal: 20,
              }}>
              <Icon
                name="caret-right"
                type="FontAwesome"
                style={{ fontSize: 20, color: '#8F49DE' }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                  width: '68%',
                }}>
                Online Consultation:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                }}>
                05-01-2023
              </Text>
            </View>
          </View>
        }




        {this.state.check_design == 'Diagnosis' &&


          <ScrollView>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{ fontSize: 20, color: '#8F49DE' }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                  width: '52%',
                }}>
                In Clinic Consultation:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                }}>
                05-12-2022
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  marginHorizontal: 15,
                  alignItems: 'center',
                }}>
                <Icon
                  name="caret-down"
                  type="FontAwesome"
                  style={{ fontSize: 20, color: '#8F49DE', paddingLeft: 18 }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    paddingLeft: 12,
                    fontSize: 15,
                  }}>
                  Symptoms
                </Text>
              </View>
              <TextInput
                style={{
                  width: '94%',
                  height: 70,
                  borderRadius: 15,
                  paddingLeft: 20,
                  paddingTop: 15,
                  marginTop: 10,
                  marginHorizontal: 10,
                  color: 'gray',
                  backgroundColor: '#F7F2FC',
                  fontSize: 13,
                  textAlignVertical: 'top',
                }}
                placeholder="Type Here"
                placeholderTextColor="gray"
              />
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  marginHorizontal: 15,
                  alignItems: 'center',
                }}>
                <Icon
                  name="caret-down"
                  type="FontAwesome"
                  style={{ fontSize: 20, color: '#8F49DE', paddingLeft: 18 }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    paddingLeft: 12,
                    fontSize: 15,
                  }}>
                  Diagnosis
                </Text>
              </View>
              <TextInput
                style={{
                  width: '94%',
                  height: 70,
                  borderRadius: 15,
                  paddingLeft: 20,
                  paddingTop: 15,
                  marginTop: 15,
                  marginHorizontal: 10,
                  color: 'gray',
                  backgroundColor: '#F7F2FC',
                  fontSize: 13,
                  textAlignVertical: 'top',
                }}
                placeholder="Type Here"
                placeholderTextColor="gray"
              />
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  marginHorizontal: 15,
                  alignItems: 'center',
                }}>
                <Icon
                  name="caret-down"
                  type="FontAwesome"
                  style={{ fontSize: 20, color: '#8F49DE', paddingLeft: 18 }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    paddingLeft: 12,
                    fontSize: 15,
                  }}>
                  Prescription
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  paddingTop: 10,
                  paddingLeft: 18,
                }}>
                Medication
              </Text>
              <TextInput
                style={{
                  width: '93%',
                  height: 40,
                  borderRadius: 10,
                  paddingLeft: 20,
                  paddingTop: 15,
                  marginTop: 5,
                  marginHorizontal: 15,
                  color: 'gray',
                  backgroundColor: '#EEEEF6',
                  fontSize: 14,
                  textAlignVertical: 'top',
                }}
                placeholder="Enter Your medication"
                placeholderTextColor="gray"
              />

              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  paddingTop: 20,
                  paddingLeft: 18,
                }}>
                Type of medication
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  width: '93%',
                  height: 40,
                  borderRadius: 10,
                  paddingLeft: 20,
                  marginTop: 5,
                  marginHorizontal: 15,
                  backgroundColor: '#EEEEF6',
                }}>
                <Text style={{ color: 'gray', fontSize: 14 }}>Select</Text>
                <Icon
                  name="down"
                  type="AntDesign"
                  style={{
                    fontSize: 19,
                    color: 'gray',
                    paddingLeft: 18,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>

              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  paddingTop: 20,
                  paddingLeft: 18,
                }}>
                Dosage
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  width: '93%',
                  height: 40,
                  borderRadius: 10,
                  paddingLeft: 20,
                  marginTop: 5,
                  marginHorizontal: 15,
                  backgroundColor: '#EEEEF6',
                }}>
                <Text style={{ color: 'gray', fontSize: 14 }}>Select</Text>
                <Icon
                  name="down"
                  type="AntDesign"
                  style={{
                    fontSize: 19,
                    color: 'gray',
                    paddingLeft: 18,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>

              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  paddingTop: 20,
                  paddingLeft: 22,
                }}>
                Days
              </Text>

              <View style={{ flexDirection: 'row', paddingTop: 10, width: width / 1.1, alignSelf: 'center', justifyContent: 'space-between' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 7,
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.checked1}
                    onValueChange={() =>
                      this.setState({ checked1: !this.state.checked1 })
                    }
                    tintColors={{ true: '#8F49DE', false: 'gray' }}
                    onTintColor={'#8F49DE'}
                    onCheckColor={'#8F49DE'}
                    boxType={'square'}
                    style={{ width: 18, height: 18, padding: 2 }}
                  />
                  <Text style={{ color: 'black', fontSize: 15, marginLeft: 8 }}>Mon</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.checked1}
                    onValueChange={() =>
                      this.setState({ checked1: !this.state.checked1 })
                    }
                    tintColors={{ true: '#8F49DE', false: 'gray' }}
                    onTintColor={'#8F49DE'}
                    onCheckColor={'#8F49DE'}
                    boxType={'square'}
                    style={{ width: 18, height: 18, padding: 2 }}
                  />
                  <Text style={{ color: 'black', fontSize: 15, marginLeft: 8 }}>Tue</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.checked1}
                    onValueChange={() =>
                      this.setState({ checked1: !this.state.checked1 })
                    }
                    tintColors={{ true: '#8F49DE', false: 'gray' }}
                    onTintColor={'#8F49DE'}
                    onCheckColor={'#8F49DE'}
                    boxType={'square'}
                    style={{ width: 18, height: 18, padding: 2 }}
                  />
                  <Text style={{ color: 'black', fontSize: 15, marginLeft: 8 }}>Wed</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.checked1}
                    onValueChange={() =>
                      this.setState({ checked1: !this.state.checked1 })
                    }
                    tintColors={{ true: '#8F49DE', false: 'gray' }}
                    onTintColor={'#8F49DE'}
                    onCheckColor={'#8F49DE'}
                    boxType={'square'}
                    style={{ width: 18, height: 18, padding: 2 }}
                  />
                  <Text style={{ color: 'black', fontSize: 15, marginLeft: 8 }}>Thu</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.checked1}
                    onValueChange={() =>
                      this.setState({ checked1: !this.state.checked1 })
                    }
                    tintColors={{ true: '#8F49DE', false: 'gray' }}
                    onTintColor={'#8F49DE'}
                    onCheckColor={'#8F49DE'}
                    boxType={'square'}
                    style={{ width: 18, height: 18, padding: 2 }}
                  />
                  <Text style={{ color: 'black', fontSize: 15, marginLeft: 8 }}>Fri</Text>
                </View>
              </View>

              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  paddingTop: 10,
                  paddingLeft: 22,
                }}>
                Timing
              </Text>

              <TextInput
                style={{
                  width: '91%',
                  height: 40,
                  borderRadius: 10,
                  paddingLeft: 20,
                  paddingTop: 15,
                  marginTop: 5,
                  marginHorizontal: 22,
                  color: 'gray',
                  backgroundColor: '#EEEEF6',
                  fontSize: 14,
                }}
                placeholder="Select time"
                placeholderTextColor="gray"
              />

              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  paddingTop: 20,
                  paddingLeft: 22,
                }}>
                Duration
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  width: '91%',
                  height: 40,
                  borderRadius: 10,
                  paddingLeft: 20,
                  marginTop: 5,
                  marginHorizontal: 22,
                  backgroundColor: '#EEEEF6',
                }}>
                <Text style={{ color: 'gray', fontSize: 14 }}>Select duration</Text>
                <Icon
                  name="down"
                  type="AntDesign"
                  style={{
                    fontSize: 19,
                    color: 'gray',
                    paddingLeft: 18,
                    position: 'absolute',
                    right: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 35,
                marginHorizontal: 10,
                alignItems: 'center',
              }}>
              <Icon
                name="caret-right"
                type="FontAwesome"
                style={{ fontSize: 20, color: '#8F49DE' }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 7,
                  fontSize: 15,
                  width: '45%',
                }}>
                Video Consultation:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 12,
                  fontSize: 15,
                }}>
                05-12-2022
              </Text>
            </View>

            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <View
                style={{
                  backgroundColor: '#8F49DE',
                  marginTop: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 7,
                  paddingHorizontal: 50,
                  borderRadius: 20,
                }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>
                  Save
                </Text>
              </View>
            </View>
          </ScrollView>


        }



















        {this.state.check_design == 'Information' &&
          <ScrollView>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{ fontSize: 20, color: '#8F49DE' }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  fontSize: 17,
                  width: '68%',
                }}>
                Patient details
              </Text>
            </View>

            <View
              style={{ flexDirection: 'row', marginHorizontal: 17, paddingTop: 7 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontWeight: '400' }}>Gender</Text>
                <Text style={{ color: 'gray', paddingTop: 3 }}>Male</Text>
              </View>

              <View style={{ alignItems: 'center', paddingLeft: 30 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontWeight: '400' }}>Age</Text>
                <Text style={{ color: 'gray', paddingTop: 3 }}>28</Text>
              </View>

              <View style={{ alignItems: 'center', paddingLeft: 30 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontWeight: '400' }}>
                  Marital Status
                </Text>
                <Text style={{ color: 'gray', paddingTop: 3 }}>Single</Text>
              </View>

              <View style={{ alignItems: 'center', paddingLeft: 30 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontWeight: '400' }}>
                  Blood group
                </Text>
                <Text style={{ color: 'gray', paddingTop: 3 }}>A+</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginVertical: 20,
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{ fontSize: 20, color: '#8F49DE' }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  fontSize: 17,
                  width: '68%',
                }}>
                More Details
              </Text>
            </View>

            <View style={{ marginHorizontal: 15 }}>
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'gray',
                    width: '50%',
                  }}>
                  Medical Conditions
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>
                  Migrane, Blood Pressure
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'gray',
                    width: '50%',
                  }}>
                  Allergies
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>Soy, Tomato</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'gray',
                    width: '50%',
                  }}>
                  Current Medications
                </Text>
                <Text style={{ color: 'black', fontSize: 15, width: '50%' }}>
                  Antihistamics 220, Cartienain Hipnic Forte
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'gray',
                    width: '50%',
                  }}>
                  Past Medications
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>N/A</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'gray',
                    width: '50%',
                  }}>
                  Surgeries
                </Text>
                <Text style={{ color: 'black', fontSize: 15 }}>N/A</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
                alignItems: 'center',
              }}>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{ fontSize: 20, color: '#8F49DE' }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  fontSize: 17,
                  width: '68%',
                }}>
                Documents
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 33,
                paddingBottom: 20,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'gray',
                  fontWeight: 'bold',
                  fontSize: 17,
                  width: '40%',
                }}>
                By Doctor
              </Text>

              <Text
                style={{
                  color: 'gray',
                  fontWeight: 'bold',
                  fontSize: 17,
                  width: '40%',
                }}>
                By Patient
              </Text>

              <Text
                style={{
                  color: 'gray',
                  fontWeight: 'bold',
                  fontSize: 17,
                  width: '40%',
                }}>
                By Labo
              </Text>
            </View>

            <View style={{ paddingHorizontal: 20, paddingTop: 5 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="file-document"
                  type="MaterialCommunityIcons"
                  style={{ color: 'gray', fontSize: 50 }}
                />
                <View style={{ paddingLeft: 10, width: '43%' }}>
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
                    CT Scan
                  </Text>
                  <Text style={{ color: 'gray', paddingTop: 7 }}>Report.pdf</Text>
                </View>

                <Icon
                  name="md-eye-outline"
                  type="Ionicons"
                  style={{ color: 'gray', fontSize: 27, width: '15%' }}
                />

                <Icon
                  name="download"
                  type="Feather"
                  style={{ color: 'gray', fontSize: 23, width: '15%' }}
                />

                <Icon
                  name="dots-vertical"
                  type="MaterialCommunityIcons"
                  style={{ color: 'gray', fontSize: 27 }}
                />
              </View>
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 7,
                  paddingTop: 5,
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                Uploaded by Patient on 12-02-22
              </Text>
            </View>

            <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="file-document"
                  type="MaterialCommunityIcons"
                  style={{ color: 'gray', fontSize: 50 }}
                />
                <View style={{ paddingLeft: 10, width: '43%' }}>
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
                    S. Creatinine test
                  </Text>
                  <Text style={{ color: 'gray', paddingTop: 7 }}>Report.pdf</Text>
                </View>

                <Icon
                  name="md-eye-outline"
                  type="Ionicons"
                  style={{ color: 'gray', fontSize: 27, width: '15%' }}
                />

                <Icon
                  name="download"
                  type="Feather"
                  style={{ color: 'gray', fontSize: 23, width: '15%' }}
                />

                <Icon
                  name="dots-vertical"
                  type="MaterialCommunityIcons"
                  style={{ color: 'gray', fontSize: 27 }}
                />
              </View>
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 7,
                  paddingTop: 5,
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                Uploaded by Patient on 12-02-22
              </Text>
            </View>

            <View style={{ paddingHorizontal: 20, paddingVertical: 10, }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="file-document"
                  type="MaterialCommunityIcons"
                  style={{ color: 'gray', fontSize: 50 }}
                />
                <View style={{ paddingLeft: 10, width: '43%' }}>
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
                    Hb Blood test
                  </Text>
                  <Text style={{ color: 'gray', paddingTop: 7 }}>Report.pdf</Text>
                </View>

                <Icon
                  name="md-eye-outline"
                  type="Ionicons"
                  style={{ color: 'gray', fontSize: 27, width: '15%' }}
                />

                <Icon
                  name="download"
                  type="Feather"
                  style={{ color: 'gray', fontSize: 23, width: '15%' }}
                />

                <Icon
                  name="dots-vertical"
                  type="MaterialCommunityIcons"
                  style={{ color: 'gray', fontSize: 27 }}
                />
              </View>
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 7,
                  paddingTop: 5,
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                Uploaded by Patient on 12-02-22
              </Text>
            </View>
          </ScrollView>
        }













        {this.state.check_design == 'Prescription' &&

          <View>

            <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 38 }}>Medicine</Text>
            <View

              style={{
                backgroundColor: '#F7F2FC',
                width: width / 1.1,
                alignSelf: 'center',
                paddingVertical: 20,
                marginTop: 10,
                borderRadius: 15,
                // borderStyle: 'dashed',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  paddingLeft: 20,
                }}>
                Paracetamol 250 mg
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  paddingBottom: 5,

                }}>
                <Icon
                  name="delete-outline"
                  type="MaterialCommunityIcons"
                  style={{ fontSize: 18, color: 'red', paddingLeft: 140 }}
                />
                <Text
                  style={{
                    paddingLeft: 2,
                    fontSize: 15,
                    color: 'red',
                    width: '31%',
                  }}>
                  Delete
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  paddingLeft: 20,
                }}>
                Start on: February 11 2022
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  paddingLeft: 20,
                  paddingTop: 20,
                }}>
                When to tale: After food
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  paddingLeft: 20,
                  paddingTop: 20,
                }}>
                Duration: 2 days
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: 'gray',
                  paddingLeft: 20,
                  paddingTop: 20,
                }}>
                Document Joint:
              </Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => Actions.addMedicine()}
                style={{
                  backgroundColor: '#8F49DE',
                  marginTop: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 7,
                  paddingHorizontal: 25,
                  borderRadius: 20,
                }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>
                  Add medicine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    );
  }
}



const styles = StyleSheet.create({

  active_button: {
    width: '98%',
    height: 45,
    borderBottomColor: '#8F49DE',
    borderBottomWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',

  },

  in_active_button: {
    width: '98%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  active_text: {
    color: '#8F49DE',
    fontSize: 14,
    fontWeight: 'bold'
  },

  in_active_text: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold'


  },

})



export default history;
