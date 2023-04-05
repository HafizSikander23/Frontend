


import React, { Component } from "react";
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
import { Actions } from "react-native-router-flux";
// import Connection from '../connection'
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';
import { connect } from 'react-redux';
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "react-native-image-picker";
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageLoad from 'react-native-image-placeholder';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Call } from 'react-native-openanything';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;


class patient_site_appointment_detai extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      token: '',
      images: [

        "https://media.istockphoto.com/photos/accessible-information-is-crucial-for-current-medical-research-picture-id1287845968?b=1&k=20&m=1287845968&s=170667a&w=0&h=B3ucd3Y_G2SqLgz1wjKtEUY6brC0gRAx1bQUypz8nmc=",
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60r",
        "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://media.istockphoto.com/photos/mass-testing-for-covid19-sarscov2-infection-concept-several-rapid-picture-id1304108977?b=1&k=20&m=1304108977&s=170667a&w=0&h=lfBQM5amAwL3vfirxKGfZL6C6UvS1xYa-pQmKwXtkQg=", // Network image

      ],
      multi_images: [],
      spinner: false,
      filepath: this.props.perscription1,
      fileuri: this.props.perscription1,
      profile1: null,
      p_image: null,
      sender_email: "masclinicas121@gmail.com",
      subject: 'Perscription Form',

      fileName: this.props.perscription,
      visible2: false

    };
  }


  backAction = () => {
    Actions.pop()
    return true;
  };



  componentWillUnmount() {
    this.backHandler.remove();
  }



  onClickImage = async (item) => {
    this.selectedImage = [
      {
        url: item,
        props: {
          source: item
        },
      },
    ];
    this.setState({
      visible2: true
    })
  }


  onSwipeDown = () => {
    this.setState({
      visible2: false
    })
  }








  componentDidMount = async () => {


    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );

    let user = await AsyncStorage.getItem('customer');
    let parsed = JSON.parse(user);
    let name = parsed[0].name;
    let mobile_number = parsed[0].mobile_number;
    let id = parsed[0].id;
    let profile = parsed[0].profile;
    let email = parsed[0].email;
    let age = parsed[0].age;
    let gender = parsed[0].gender;
    console.log('relatttttionnnnnn', this.props.relation)

    this.setState({

      id: id,
      name: name,
      image2: profile,
      email: email,
      mobile_number: mobile_number,
      age: age,
      gender: gender

    })

    var today = new Date();

    var nextweek_T = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let date0 = nextweek_T.toString()
    let ddd = date0.split(' ')
    let day_1 = ddd[0]
    let dd_2 = ddd[1]
    let dd_3 = ddd[2]
    let dd_4 = ddd[3]
    let final_date_1 = dd_2 + ' ' + dd_3 + ', ' + dd_4
    console.log('sssssssssss', final_date_1)
    this.setState({
      day_1: day_1,
      final_date_1: final_date_1
    })


    if (this.props.perscription == null) {
      this.setState({
        p_image: null
      })
    } else {
      let perscription1 = Connection + 'perscription/' + this.props.perscription
      this.setState({

        p_image: perscription1
      })
    }
  }



  next = () => {
    this.RBSheet1.close()
    Actions.cancel_appointment({ fee: this.props.fee, time: this.props.time, date: this.props.date, appointment_id: this.props.appointment_id, doctor_id: this.props.doctor_id, fcm_token: this.props.fcm_token })
  }



  call = () => {
    Call('+0634417471').catch(err => console.error(err));
  }



  render() {
    return (
      <>
        <StatusBar backgroundColor="#EEEEF6" barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: 'white' }}>


          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              paddingVertical: 15,
              backgroundColor: "#EEEEF6",
            }}
          >
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon

                name="arrowleft"
                type="AntDesign"
                style={{ color: "black", fontSize: 25 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Order details</Text>
            <Text></Text>

          </View>



          <ScrollView>












            <TouchableOpacity activeOpacity={0.8}


              style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10, marginTop: 15, marginBottom: 10, }}>

              <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 9 }}>
                <View>

                  <Image style={{
                    width: 75, height: 75, borderRadius: 60, alignSelf: 'center'

                  }} source={require('../assets/doc8.png')} />








                </View>
                <View style={{ marginLeft: 10, width: '77%', }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                    <View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <Icon name="questioncircle" type="AntDesign" style={{ color: "#159AB3", fontSize: 16 }} />


                        <Text style={{ color: '#159AB3', fontSize: 12, fontWeight: 'bold' }}>  Feb 5, 2022, 7:30 PM (Pending) </Text>



                      </View>
                      <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Maxime belanger</Text>






                    </View>


                  </View>



                </View>


              </View>
            </TouchableOpacity>




            <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', paddingHorizontal: 8, marginLeft: 10 }} numberOfLines={1} ellipsizeMode="tail">Delivery Method</Text>


            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, marginHorizontal: 5, width: width / 1.1, alignSelf: 'center' }}>

              <TouchableOpacity activeOpacity={0.8} style={{ width: 25, height: 25, borderRadius: 100, borderColor: '#8F49DE', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
                <View style={(this.state.text1 == 1 ? styles.uncheked : styles.checked)}>

                </View>
              </TouchableOpacity>
              <Text allowFontScaling={false} style={{ fontWeight: '500', color: 'black', }}>  Delivery at home</Text>

            </View>



            <Text style={{ color: 'black', fontSize: 14, fontWeight: '600', paddingHorizontal: 8, marginLeft: 10, marginTop: 8 }} numberOfLines={1} ellipsizeMode="tail">Delivery Method</Text>



            <View style={{ width: 68, height: 20, backgroundColor: '#8F49DE', borderRadius: 7, marginLeft: 20, justifyContent: 'center', alignItems: 'center', marginTop: 7 }}>
              <Text style={{ color: 'white', fontSize: 13, fontWeight: '500' }}>Not ready </Text>
            </View>









            <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', paddingHorizontal: 15, marginTop: 25 }} numberOfLines={1} ellipsizeMode="tail">Delivery Location </Text>

            <Text style={{ color: 'black', fontWeight: '200', fontSize: 13, paddingHorizontal: 15 }}>2020 customer adress. USA.</Text>


            <Image style={{
              width: width / 1.1, height: 150, marginTop: 10, borderRadius: 12, alignSelf: 'center'

            }} source={require('../assets/mapp.jpeg')} />








            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', paddingHorizontal: 17, marginTop: 30 }} numberOfLines={1} ellipsizeMode="tail">Uploaded Prescription</Text>
            <View style={{ width: width / 1.1, alignSelf: 'center', justifyContent: 'center', borderColor: 'lightgray', borderWidth: 1.5, height: 37, marginTop: 5 }}>
              <Text style={{ color: 'black', fontSize: 14, fontWeight: '300', paddingHorizontal: 15 }} numberOfLines={1} ellipsizeMode="tail">File uploaded  test.pdf</Text>

            </View>



            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', paddingHorizontal: 15, marginTop: 20 }} numberOfLines={1} ellipsizeMode="tail">Order details</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15 }}>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15 }}>Booked for:</Text>

              <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15 }}> Alexandre Diallo</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15 }}>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15 }}>Appointment ID:</Text>

              <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15 }}> 18920404</Text>
            </View>



            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15 }}>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15 }}>Product:</Text>

              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>Benylin: All In One® Cold & Flu. 18 capsule</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15 }}>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15 }}>DIN:</Text>

              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>12345678</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15 }}>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15 }}>Dosage form:</Text>

              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>Capsule</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15 }}>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15 }}>Quantity:</Text>

              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>02</Text>
            </View>



            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 15 }}>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15 }}>Payment Method:</Text>

              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>Online Payment</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between', paddingHorizontal: 15 }}>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 15 }}>Total:</Text>

              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>100000 GNF</Text>
            </View>


























            <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 8, marginTop: 20, justifyContent: 'center', width: width / 1.1, alignSelf: 'center', backgroundColor: '#FCF0F0', paddingVertical: 10 }}>
              <Icon name="squared-cross" type="Entypo" style={{ color: "#D91F11", fontSize: 21 }} />


              <Text style={{ color: '#D91F11', width: '80%', fontWeight: '600', fontSize: 15, marginLeft: 9 }}> For cancellation, please contact us</Text>


            </View>




            <View style={{ backgroundColor: '#159AB3', width: width / 1.7, height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 20, borderRadius: 38 }}>
              <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>Ready to Dispatch</Text>
            </View>








            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', paddingHorizontal: 15, marginTop: 15 }} numberOfLines={1} ellipsizeMode="tail">Note</Text>



            <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 15, paddingBottom: 50 }}>
              <Icon name="circle" type="FontAwesome" style={{ color: "gray", fontSize: 15, marginTop: 3 }} />


              <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, marginLeft: 10 }}>Cancellation fees apply. You can cancel or reschedule your appointment up to 24 hours before the scheduled time.</Text>
            </View>






          </ScrollView>


          {this.state.spinner == true &&
            <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(2, 2, 2, 0.8)', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{
                width: width / 1.2, height: height / 9 - 20, backgroundColor: "white", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
                borderRadius: 6
              }}>
                <UIActivityIndicator color='#FE0000' />
                <Text style={{ fontSize: 16, color: '#FE0000', fontWeight: 'bold' }}>Progressing your request</Text>
              </View>
            </View>
          }
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({


  four: {
    width: width / 1.1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
    paddingVertical: 15

  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#FE0000'

  },
  unselect_date: {
    width: 100, height: 50, paddingVertical: 5, marginVertical: 5, paddingHorizontal: 10, borderRadius: 6, backgroundColor: 'white', marginHorizontal: 5, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, alignItems: 'center', justifyContent: 'center',
  },
  select_date: {
    width: 100, height: 50, paddingVertical: 5, backgroundColor: '#04B08D', marginVertical: 5, paddingHorizontal: 10, borderRadius: 6, marginHorizontal: 5, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, alignItems: 'center', justifyContent: 'center',
  },

  unselect_time: {
    height: 40, paddingVertical: 5, marginVertical: 5, paddingHorizontal: 10, borderRadius: 6, backgroundColor: 'white', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, alignItems: 'center', justifyContent: 'center',
  },
  select_time: {
    height: 40, paddingVertical: 5, backgroundColor: '#04B08D', marginVertical: 5, paddingHorizontal: 10, borderRadius: 6, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, alignItems: 'center', justifyContent: 'center',
  },
  patient: {
    height: 50, paddingVertical: 5, marginVertical: 5, paddingHorizontal: 10, borderRadius: 6, backgroundColor: 'white', marginHorizontal: 5, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, alignItems: 'center', justifyContent: 'center',
  },
  fileview: {
    paddingHorizontal: 20,
    width: width,
    alignItems: 'center', justifyContent: 'center'
  }
})




export default patient_site_appointment_detai;


