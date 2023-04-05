


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
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: 'white', }}>


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
                fontWeight: "700",
                fontSize: 19,
              }}
            >
              My documents</Text>
            <Text></Text>

          </View>



          <ScrollView>












            <TouchableOpacity activeOpacity={0.8}


              style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10, marginBottom: 10, }}>

              <View style={{ flexDirection: 'row', borderBottomColor: 'lightgray', borderBottomWidth: 1.5, paddingBottom: 9 }}>
                <View>

                  <Image style={{
                    width: 75, height: 75, borderRadius: 60, alignSelf: 'center'

                  }} source={require('../assets/doc8.png')} />








                </View>
                <View style={{ marginLeft: 10, width: '77%', }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                    <View>

                      <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Pharmacie 123</Text>
                      <Text style={{ color: 'gray', fontSize: 16, fontWeight: '600', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">2020 New yorfk</Text>


                      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <Icon name="star" type="Entypo" style={{ color: "#19B46E", fontSize: 16 }} />


                        <Text style={{ color: '#19B46E', fontSize: 13, fontWeight: 'bold' }}>4.5/5 ratings</Text>



                      </View>




                    </View>


                  </View>



                </View>


              </View>
            </TouchableOpacity>




            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', paddingHorizontal: 8, marginLeft: 10 }} numberOfLines={1} ellipsizeMode="tail">Business registration</Text>


            <View style={{ backgroundColor: '#F5F5F5', width: width / 1.1, alignSelf: 'center', marginTop: 20, }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="star" type="Entypo" style={{ color: "#19B46E", fontSize: 16 }} />


                <Text style={{ color: '#19B46E', fontSize: 13, fontWeight: '500', marginTop: 5 }}>Verified</Text>


              </View>



              <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', marginBottom: 5 }}>


                <Icon name="file-text" type="FontAwesome" style={{ color: "#82829B", fontSize: 40 }} />



                <View style={{ width: '83%', marginTop: 6 }}>

                  <Text style={{ color: 'black', fontSize: 13, fontWeight: '600', }} numberOfLines={1} ellipsizeMode="tail">Business Registration document </Text>
                  <View style={{ flexDirection: 'row', }}>

                    <Text style={{ color: 'gray', fontSize: 15, fontWeight: '300', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Report.pdf</Text>








                    <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 40 }}>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>

                        <Icon name="eyeo" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />



                      </View>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 18 }}>


                        <Icon name="download" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />
                      </View>

                    </View>







                  </View>



                </View>
              </View>
            </View>





            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25, marginBottom: 10, paddingHorizontal: 17 }}>
              <TouchableOpacity onPress={() => this.RBSheet2.close()} activeOpacity={0.8}
                style={{ width: width / 2.3, paddingVertical: 13, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#FAF9F9', }}>
                <Text style={{ color: '#2E2E37', fontWeight: '600', fontSize: 15 }}>Insurance Licence</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.logout()} activeOpacity={0.8}
                style={{ width: width / 2.3, paddingVertical: 13, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#9B56EC', }}>
                <Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>+ Add Documents</Text>
              </TouchableOpacity>
            </View>





            <View style={{ backgroundColor: '#F5F5F5', width: width / 1.1, alignSelf: 'center', marginTop: 10, }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="star" type="Entypo" style={{ color: "#F10000", fontSize: 16 }} />


                <Text style={{ color: '#F10000', fontSize: 13, fontWeight: '500', marginTop: 5 }}>Expired</Text>


              </View>



              <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', marginBottom: 5 }}>


                <Icon name="file-text" type="FontAwesome" style={{ color: "#82829B", fontSize: 40 }} />



                <View style={{ width: '83%', marginTop: 6 }}>

                  <Text style={{ color: 'black', fontSize: 13, fontWeight: '600', }} numberOfLines={1} ellipsizeMode="tail">Insurance Licence</Text>
                  <View style={{ flexDirection: 'row', }}>

                    <Text style={{ color: 'gray', fontSize: 15, fontWeight: '300', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Report.pdf</Text>








                    <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 40 }}>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>

                        <Icon name="eyeo" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />



                      </View>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 18 }}>


                        <Icon name="download" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />
                      </View>

                    </View>







                  </View>



                </View>
              </View>
            </View>


            <View style={{ width: width / 1.1, alignSelf: 'center', marginTop: 15 }}>
              <TouchableOpacity onPress={() => this.RBSheet2.close()} activeOpacity={0.8}
                style={{ width: width / 2.2, paddingVertical: 13, justifyContent: 'center', borderRadius: 10, backgroundColor: '#FAF9F9', }}>
                <Text style={{ color: '#2E2E37', fontWeight: '600', fontSize: 15, marginLeft: 15, }}>Pharmacy Agreement</Text>
              </TouchableOpacity>

            </View>




            <View style={{ backgroundColor: '#F5F5F5', width: width / 1.1, alignSelf: 'center', marginTop: 10, }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="star" type="Entypo" style={{ color: "#8F49DE", fontSize: 16 }} />


                <Text style={{ color: '#8F49DE', fontSize: 13, fontWeight: '500', marginTop: 5 }}>In Verification </Text>


              </View>



              <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', marginBottom: 5 }}>


                <Icon name="file-text" type="FontAwesome" style={{ color: "#82829B", fontSize: 40 }} />



                <View style={{ width: '83%', marginTop: 6 }}>

                  <Text style={{ color: 'black', fontSize: 13, fontWeight: '600', }} numberOfLines={1} ellipsizeMode="tail">Pharmacy Agreement</Text>
                  <View style={{ flexDirection: 'row', }}>

                    <Text style={{ color: 'gray', fontSize: 15, fontWeight: '300', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Report.pdf</Text>








                    <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 40 }}>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>

                        <Icon name="eyeo" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />



                      </View>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 18 }}>


                        <Icon name="download" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />
                      </View>

                    </View>







                  </View>



                </View>
              </View>
            </View>





            <View style={{ width: width / 1.1, alignSelf: 'center', marginTop: 15 }}>
              <TouchableOpacity onPress={() => this.RBSheet2.close()} activeOpacity={0.8}
                style={{ width: width / 2.2, paddingVertical: 13, justifyContent: 'center', borderRadius: 10, backgroundColor: '#FAF9F9', }}>
                <Text style={{ color: '#2E2E37', fontWeight: '600', fontSize: 15, marginLeft: 15, }}> Admin  ID</Text>
              </TouchableOpacity>

            </View>





            <View style={{ backgroundColor: '#F5F5F5', width: width / 1.1, alignSelf: 'center', marginTop: 20, }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="star" type="Entypo" style={{ color: "#19B46E", fontSize: 16 }} />


                <Text style={{ color: '#19B46E', fontSize: 13, fontWeight: '500', marginTop: 5 }}>Verified</Text>


              </View>



              <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', marginBottom: 5 }}>


                <Icon name="file-text" type="FontAwesome" style={{ color: "#82829B", fontSize: 40 }} />



                <View style={{ width: '83%', marginTop: 6 }}>

                  <Text style={{ color: 'black', fontSize: 13, fontWeight: '600', }} numberOfLines={1} ellipsizeMode="tail">Passport</Text>
                  <View style={{ flexDirection: 'row', }}>

                    <Text style={{ color: 'gray', fontSize: 15, fontWeight: '300', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Report.pdf</Text>








                    <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 40 }}>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>

                        <Icon name="eyeo" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />



                      </View>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 18 }}>


                        <Icon name="download" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />
                      </View>

                    </View>







                  </View>



                </View>
              </View>
            </View>




            <View style={{ width: width / 1.1, alignSelf: 'center', marginTop: 15 }}>
              <TouchableOpacity onPress={() => this.RBSheet2.close()} activeOpacity={0.8}
                style={{ width: width / 2.2, paddingVertical: 13, justifyContent: 'center', borderRadius: 10, backgroundColor: '#FAF9F9', }}>
                <Text style={{ color: '#2E2E37', fontWeight: '600', fontSize: 15, marginLeft: 15, }}> Admin  ID</Text>
              </TouchableOpacity>

            </View>














            <View style={{ backgroundColor: '#F5F5F5', width: width / 1.1, alignSelf: 'center', marginTop: 20, }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                <Icon name="star" type="Entypo" style={{ color: "#19B46E", fontSize: 16 }} />


                <Text style={{ color: '#19B46E', fontSize: 13, fontWeight: '500', marginTop: 5 }}>Verified</Text>


              </View>



              <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', marginBottom: 5 }}>


                <Icon name="file-text" type="FontAwesome" style={{ color: "#82829B", fontSize: 40 }} />



                <View style={{ width: '83%', marginTop: 6 }}>

                  <Text style={{ color: 'black', fontSize: 13, fontWeight: '600', }} numberOfLines={1} ellipsizeMode="tail">Passport</Text>
                  <View style={{ flexDirection: 'row', }}>

                    <Text style={{ color: 'gray', fontSize: 15, fontWeight: '300', marginTop: 5 }} numberOfLines={1} ellipsizeMode="tail">Report.pdf</Text>








                    <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 40 }}>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>

                        <Icon name="eyeo" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />



                      </View>

                      <View style={{ backgroundColor: 'white', height: 33, width: 33, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: 18 }}>


                        <Icon name="download" type="AntDesign" style={{ color: "#82829B", fontSize: 21 }} />
                      </View>

                    </View>







                  </View>



                </View>
              </View>
            </View>


































            <View style={{ marginBottom: 70 }}></View>











          </ScrollView>




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


