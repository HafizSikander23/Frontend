
import { Row } from 'native-base';
import React, { Component } from 'react';
import ImageLoad from 'react-native-image-placeholder';

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
  Pressable,
  ToastAndroid,
  BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';
import { connect } from "react-redux";
// import Connection from "../connection";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class book_appointment extends React.Component {

  constructor(props) {

    super(props)


    this.state = {
      show: false,
      date1: new Date(),
      mode1: 'time',
      dateshow1: '',
      timeshow1: '',
      timeshow2: '',
      dateshow2: '',

      date_1: '',
      date_2: '',
      date_3: '',
      date_4: '',
      date_5: '',
      date_6: '',
      date_7: '',
      day_1: 'aa',
      day_2: '',
      day_3: '',
      day_4: '',
      day_5: '',
      day_6: '',
      day_7: '',
      appointment_date: this.props.final_date_1,
      data1: [],



      arr: [],
      arr1: [],
      arr2: [],
      arr3: [],
      arr4: [],
      arr5: [],


      record1: [],
      record2: [],
      data4: [],
      monday1: [],
      tuesday1: [],
      wednesday1: [],
      thursday1: [],
      saturday1: [],
      friday1: [],
      sunday1: [],

      main_array: [],

      category: this.props.day_1,
      text1: 2,
      text2: 1,
      text3: 1,
      text4: 1,
      text5: 1,
      text6: 1,
      text7: 2,
      text8: 1,
      text20: 1,
      text21: 1,

      timeSelected: false,
      timeSelected1: false,
      add_new: false,


      show1: false,
      updated_time: '',
      value_for_updating_index: '',
      changes_time_for_specific_day: this.props.day_1,
      appointment_time: '',

      final_date: '',
      spinner: false,
      payment_method: '',
      note: '',
      appointment_for: 'Self',
      relation: false,
      relative_id: '',
      type_1: ''


    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  onButtonPress = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    // then navigate
    navigate("NewScreen");
  };
  handleBackButtonClick() {
    // BackHandler.exitApp();
    Actions.pop()
    return true;
  }





  componentDidMount = async () => {
    let tax = Number(
      (this.state.tax_percentage / 100) * this.props.fee
    ).toFixed(2);
    let user = await AsyncStorage.getItem('customer');
    console.log('QQQQQQQQQQQQ', this.props.day)
    console.log('QQQQQQQQQQQQ', this.props.time)

    let total_fee = Number(this.props.fee) + Number(3)
    let parsed = JSON.parse(user);
    let aaa = new Date()
    let id = parsed[0].id;
    let type_1 = this.props.type_1


    this.setState({

      id: id,
      tax: tax,
      total_fee: total_fee,
      type_1: type_1



    })
    this.display_all_relative()
    //  this.get_first_appointment()
  }




  get_first_appointment = () => {

    let uploaddata = new FormData();
    uploaddata.append('id', this.state.id);
    let api = Connection + 'rest_apis.php?action=get_first_appointment';

    console.log('pass => ', api)
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        otherHeader: 'foo',
      },
      body: uploaddata,
    })
      .then(response => response.json())
      .then(response => {
        let record = response.response;
        console.log('recccccccccco', record)


        if (record != 'fail') {
          let balance_1 = record[0]
          // console.log('recccccccccco',balance_1)
          let balance_2 = balance_1["first_appointments"]
          let tax_percentage = balance_1["tax_percentage"]

          if (balance_2 == 'true') {
            let total_fee = Number(this.props.fee) + Number(4.99)

            console.log('recccccccccco', balance_2)

            this.setState({
              first_appointments: true,
              total_fee: total_fee,
              tax_percentage: tax_percentage
            })
          } else {
            let total_fee = Number(this.props.fee) + Number(0)

            this.setState({
              first_appointments: false,
              total_fee: total_fee,
              tax_percentage: tax_percentage

            })
          }


        } else {

          this.setState({
            balance: 0

          })
        }

      })
      .catch((error) => {
        console.error(error);

      });


  }






  display_all_relative = () => {
    let uploaddata = new FormData();
    uploaddata.append("user_id", this.state.id);


    this.setState({
      skalton: true
    })




    let api = Connection + "rest_apis.php?action=display_all_relatives";
    console.log("pass => ", api);
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        otherHeader: "foo",
      },
      body: uploaddata,

    })
      .then((response) => response.json())
      .then((response) => {

        let record4 = response.response
        let len = record4.length
        console.log('reeeeeeeee', record4)
        if (record4 != 'fail') {

          this.setState({
            data1: record4,
            skalton: false
          })

          for (let i = 0; i < len; i++) {
            let doctor_time = record4[i].id
            let boxes = "box" + doctor_time;
            this.setState({ [boxes]: false })

          }
        } else {
          this.setState({
            data1: "",
            skalton: false,
          })

        }
      })
      .catch((error) => {
        console.error(error);
      });

  };







  changebtn(value, val) {

    this.setState({
      payment_method: val
    })

    if (this.state[value] == 2) {



      this.setState({
        text1: 1,
        text2: 1,
        text3: 1,
        text4: 1,
        text5: 1,
        text6: 1,

        [value]: 2,


      })
    }
    else {
      this.setState({
        text1: 1,
        text2: 1,
        text3: 1,
        text4: 1,
        text5: 1,
        text6: 1,

        [value]: 2,


      })

    }

  }







  createtable9 = () => {
    let table = []
    let record1 = this.state.data1
    let len = record1.length
    if (record1 != 'fail') {
      for (let i = 0; i < len; i++) {
        let name = record1[i].name
        let gender = record1[i].gender
        let age = record1[i].age
        let id = record1[i].id
        let boxes = "box" + id;
        // let boxred = "boxred" + doctor_time;




        table.push(<View>
          {
            <View>

              <TouchableOpacity onPress={() => this.selected_time(id)} activeOpacity={0.8} style={(this.state[boxes] == true ? styles.select : styles.unselect)}   >
                <Text style={{ color: '#FE0000', fontWeight: 'bold', maxWidth: '90%' }} numberOfLines={1} >{name}</Text>
                <Text style={{ color: '#FE0000', }}>{age}, {gender}</Text>


              </TouchableOpacity>


            </View>

          }
        </View>
        )
      }
      return table
    }
    else {
      let img = []
      img.push(<View style={{ flex: 1, justifyContent: 'center' }} >
        {
          <View>

          </View>
        }</View>)
      return img
    }
  }








  selected_time = (val, val1) => {

    let record1 = this.state.data1
    let len = record1.length
    let boxes = "box" + val;

    if (this.state[boxes] == false) {
      for (let i = 0; i < len; i++) {

        let doctor_time = record1[i].id
        let boxes = "box" + doctor_time;
        this.setState({ [boxes]: false })

      }


    } else {

    }

    setTimeout(() => {
      if (this.state[boxes] == false) {

        this.setState({ [boxes]: true })
        this.setState({
          relative_id: val,
          daybox: this.state.changes_time_for_specific_day
        })



      } else {
        this.setState({ [boxes]: false })

        this.setState({
          relative_id: "",
          daybox: ''
        })
      }

    }, 100)


  }





  changebtn_2(value, val) {

    if (val == 'Self') {
      this.setState({
        relation: false
      })
    } else {
      this.setState({
        relation: true
      })
    }


    this.setState({
      appointment_for: val
    })

    if (this.state[value] == 2) {



      this.setState({

        text7: 1,
        text8: 1,
        [value]: 2,


      })
    }
    else {
      this.setState({

        text7: 1,
        text8: 1,
        [value]: 2,


      })

    }

  }



  changebtn_3(value, val) {



    this.setState({
      type_1: val
    })

    if (this.state[value] == 2) {



      this.setState({

        text20: 1,
        text21: 1,
        [value]: 2,


      })
    }
    else {
      this.setState({

        text20: 1,
        text21: 1,
        [value]: 2,


      })

    }

  }







  Payment = () => {
    if (this.state.appointment_for != 'Self' && this.state.relative_id == '') {
      alert('Please select your relative.')

    } else {
      if (this.state.type_1 == '') {
        alert('Please select your type for appointment.')

      } else {



        if (this.state.payment_method == "") {
          alert('Please select your payment method for appointment.')
        }
        else if (this.state.payment_method == "Paypal") {
          // alert("Paypal is coming soon please select other payment method.")
          Actions.Paypal({ type_1: this.state.type_1, tax: this.state.tax, relation: this.state.relation, relative_id: this.state.relative_id, note: this.state.note, email: this.props.email, stripe_key: this.props.stripe_key, payment_method: this.state.payment_method, experience: this.props.experience, a_r: this.props.a_r, address: this.props.address, fcm_token: this.props.fcm_token, s_key: this.props.s_key, paypal: this.props.paypal, access: this.props.access, category: this.props.category, doctor_id: this.props.doctor_id, time: this.props.time, date: this.props.date, day: this.props.day, appointment_price: this.state.total_fee, fcm_token: this.props.fcm_token, doctor_name: this.props.doctor_name, city: this.props.city, doctor_profile: this.props.doctor_profile, p_age: this.state.p_age })


        } else {
          Actions.Payment({ type_1: this.state.type_1, tax: this.state.tax, relation: this.state.relation, relative_id: this.state.relative_id, note: this.state.note, email: this.props.email, stripe_key: this.props.stripe_key, payment_method: this.state.payment_method, experience: this.props.experience, a_r: this.props.a_r, address: this.props.address, fcm_token: this.props.fcm_token, s_key: this.props.s_key, paypal: this.props.paypal, access: this.props.access, category: this.props.category, doctor_id: this.props.doctor_id, time: this.props.time, date: this.props.date, day: this.props.day, fee: this.state.total_fee, fcm_token: this.props.fcm_token, doctor_name: this.props.doctor_name, city: this.props.city, doctor_profile: this.props.doctor_profile, p_age: this.state.p_age })
        }
      }
    }
  }










  render() {
    const text = 'Terms of Use';
    const text1 = 'Privacy Policy';

    const terms = text.split('').map(word => (
      <TouchableOpacity  >
        <Text style={{ color: '#235fa9', fontSize: 15, marginBottom: -5, }}>{word}</Text>
      </TouchableOpacity>
    ));


    const privacy = text1.split('').map(word => (
      <TouchableOpacity  >
        <Text style={{ color: '#235fa9', fontSize: 15, marginBottom: -5, }}>{word}</Text>
      </TouchableOpacity>
    ));

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor="#EEEEF6" barStyle="light-content" />

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
            Consult Doctor</Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
          </Text>


        </View>
        <ScrollView>

          <TouchableOpacity activeOpacity={0.8}


            style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, marginTop: 15, }}>

            <View>

              <Image style={{
                width: 80, height: 80, borderRadius: 80, alignSelf: 'center'

              }} source={require('../assets/doc9.jpeg')} />





            </View>
            <View style={{ marginLeft: 10, width: '77%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingRight: 10 }}>
                <View>
                  <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', }} numberOfLines={1} ellipsizeMode="tail">Dr. Jane Fernandes Dcosta</Text>


                  <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>Cardiologist</Text>
                  <Text style={{ color: '#82829B', fontSize: 14, fontWeight: '400' }}>MBBS, MD - Cardiology</Text>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '400' }}>8 yrs expertise</Text>

                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                      <Icon name="star" type="Entypo" style={{ color: "#19B46E", fontSize: 16 }} />


                      <Text style={{ color: '#19B46E', fontSize: 13, fontWeight: 'bold' }}>4.5/5 ratings</Text>



                    </View>



                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 15 }}>
                      <Icon name="account-group" type="MaterialCommunityIcons" style={{ color: "#19B46E", fontSize: 16 }} />


                      <Text style={{ color: '#19B46E', fontSize: 13, fontWeight: 'bold' }}> 23 patients consulted</Text>



                    </View>
                  </View>





                </View>


              </View>


            </View>
          </TouchableOpacity>
          <View style={{ width: width, height: 2, backgroundColor: 'lightgray', marginVertical: 15 }}></View>


          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', marginLeft: 15 }}>
            <Icon name="clockcircleo" type="AntDesign" style={{ color: "black", fontSize: 16 }} />

            <Text style={{ color: 'black', textAlign: 'right', fontSize: 12, fontWeight: '600', }} numberOfLines={1} ellipsizeMode="tail"> Video consultation time</Text>


          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'flex-start', width: '80%', marginLeft: 15, marginTop: 8 }}>

            <Text style={{ color: '#8F49DE', fontSize: 13, fontWeight: 'bold', }} numberOfLines={1} ellipsizeMode="tail"> Today, 5:30 PM</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10, backgroundColor: '#EEEEF6', paddingHorizontal: 10, paddingVertical: 4 }}>
              <Icon name="timer-sand-full" type="MaterialCommunityIcons" style={{ color: "black", fontSize: 16 }} />

              <Text style={{ color: 'black', textAlign: 'right', fontSize: 12, fontWeight: '600', }} numberOfLines={1} ellipsizeMode="tail"> Starts in 1 hour 18 minutes</Text>


            </View>

          </View>
          <View style={{ width: width, height: 2, backgroundColor: 'lightgray', marginVertical: 15 }}></View>

          <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 15 }} numberOfLines={1} ellipsizeMode="tail">Location</Text>

          <Text style={{ color: 'black', fontWeight: '400', paddingHorizontal: 15 }}>Fortis Hospital, Washington Ave. Manchester, Kentucky 39495</Text>


          <Image style={{
            width: width / 1.1, height: 150, marginTop: 10, borderRadius: 12, alignSelf: 'center'

          }} source={require('../assets/mapp.jpeg')} />





          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, borderRadius: 8, marginBottom: 10, width: width / 1.1, alignSelf: 'center', borderColor: '#EEEEF6', borderWidth: 1, borderStyle: 'dashed', paddingVertical: 10 }}>
            <Image style={{
              width: 45, height: 45, borderRadius: 30, alignSelf: 'center'

            }} source={require('../assets/Vector.png')} />
            <View style={{ width: '70%', }}>
              <Text style={{ color: 'black', fontWeight: '600', fontSize: 15 }}> Apply coupon code</Text>
              <Text style={{ color: 'gray', fontWeight: '600', fontSize: 12 }}> Unlock offers with coupon code</Text>

            </View>
            <Text style={{ color: '#186ADE', fontWeight: '600', fontSize: 15 }}> Apply  </Text>


          </View>




          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, paddingHorizontal: 20 }}>Billing details</Text>

          <View
            style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>


            <Text style={{ color: 'gray', fontSize: 12 }}>Consultation fee</Text>





            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>€30</Text>




          </View>

          <View
            style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>


            <Text style={{ color: 'gray', fontSize: 12 }}>Service fee & tax</Text>





            <Text style={{ color: '#19B46E', fontSize: 14, fontWeight: 'bold' }}>FREE</Text>




          </View>


          <View style={{ width: width / 1.1, height: 2, backgroundColor: 'lightgray', alignSelf: 'center', marginVertical: 15 }}></View>



          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>


            <Text style={{ color: 'gray', fontSize: 12 }}>Total payable</Text>





            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>€30</Text>




          </View>



          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, borderRadius: 8, marginBottom: 10, paddingHorizontal: 15, width: width / 1.1, alignSelf: 'center', backgroundColor: '#FFF9E3', paddingVertical: 10 }}>
            <Image style={{
              width: 45, height: 45, borderRadius: 30, alignSelf: 'center'

            }} source={require('../assets/Frame338.png')} />
            <View style={{ width: '82%', }}>
              {/* <Text style={{ color: 'black',   fontWeight: '600',fontSize:15 }}> Apply coupon code</Text> */}
              <Text style={{ color: '#C59A02', fontWeight: '600', fontSize: 13 }}> You will get 0.3 reward points after successful consultation. Learn more</Text>

            </View>
            {/* <Text style={{ color: '#186ADE',   fontWeight: '600',fontSize:15 }}> Apply  </Text> */}


          </View>
          <View style={{ width: width, height: 2, backgroundColor: 'lightgray', marginVertical: 15 }}></View>



          <TouchableOpacity activeOpacity={0.8}
            style={{ width: width / 1.1, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center', borderRadius: 8, backgroundColor: '#EEEEF6', paddingHorizontal: 10 }}>


            <Text style={{ color: '#2E2E37', fontWeight: '400', fontSize: 16 }}>Visit Reason- Illness</Text>

            <Icon name="chevron-down" type="Entypo" style={{ color: "#60606C", fontSize: 24, }} />

          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.8}
            style={{ width: width / 1.1, alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center', borderRadius: 8, backgroundColor: '#EEEEF6', paddingHorizontal: 10 }}>


            <Text style={{ color: '#2E2E37', fontWeight: '400', fontSize: 16 }}>I am a new patient</Text>

            <Icon name="chevron-down" type="Entypo" style={{ color: "#60606C", fontSize: 24, }} />

          </TouchableOpacity>

          <View style={{ width: width, height: 2, backgroundColor: 'lightgray', marginVertical: 15 }}></View>



          <View style={{ width: width / 1.1, alignSelf: 'center', marginTop: 20, borderWidth: 1, borderColor: '#EADCFC', borderRadius: 12, paddingBottom: 15, backgroundColor: '#F7F2FC', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#EADCFC', paddingHorizontal: 20, paddingVertical: 10, borderTopLeftRadius: 8, borderTopRightRadius: 8, width: '100%' }}>


              <Text style={{ color: '#8F49DE', fontWeight: '600', fontSize: 14 }}>Labtani Instant booking benefits</Text>



            </View>




            <View style={{ flexDirection: 'row', paddingHorizontal: 15, backgroundColor: '#F7F2FC', paddingTop: 10 }}>
              <Icon name="checkmark-circle" type="Ionicons" style={{ color: "#8F49DE", fontSize: 18, marginTop: 3 }} />


              <Text style={{ color: '#2E2E37', fontSize: 14, marginLeft: 10 }}>We assure we will connect you to the doctor. If your consultation does not happen for unforeseen reasons, we will give you 100% money back or give you the option to re-schedule appointment.</Text>
            </View>




            <View style={{ flexDirection: 'row', paddingHorizontal: 15, backgroundColor: '#F7F2FC', paddingTop: 10 }}>
              <Icon name="checkmark-circle" type="Ionicons" style={{ color: "#8F49DE", fontSize: 18, marginTop: 3 }} />


              <Text style={{ color: '#2E2E37', fontSize: 14, marginLeft: 10 }}>24/7 live chat support to address all your queries</Text>
            </View>

          </View>


          <View style={{ width: width, height: 2, backgroundColor: 'lightgray', marginVertical: 15 }}></View>

          <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 15 }} numberOfLines={1} ellipsizeMode="tail">Note</Text>



          <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 15 }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "gray", fontSize: 12, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 14, marginLeft: 10, marginRight: 10 }}>Cancellation fees apply. You can cancel or reschedule your appointment up to 24 hours before the scheduled time.</Text>
          </View>





          <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 15, marginBottom: 15 }}>
            <Icon name="circle" type="FontAwesome" style={{ color: "gray", fontSize: 12, marginTop: 3 }} />


            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 14, marginLeft: 10, marginRight: 10 }}>If you cancel or reschedule your appointment before 24 hours of the scheduled time, you will be charged €1.</Text>
          </View>




          <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 20, }}>
            <Text style={{ color: '#60606C', fontWeight: '600', fontSize: 12, marginRight: 10 }}>Updates will be send to.</Text>


            <Text style={{ color: '#186ADE', fontWeight: '600', fontSize: 12, }}> +212 9234567890</Text>
          </View>




          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, flexWrap: 'wrap' }}>
            <Text allowFontScaling={false} style={{ color: '#60606C', fontWeight: '600', }}>By booking the appointment, you Agree to Labtani's</Text>
            <Text allowFontScaling={false} style={{ color: '#235fa9', }}>{terms} </Text>
            <Text allowFontScaling={false} style={{ color: '#60606C', fontWeight: '600', }}> and </Text>

            <Text allowFontScaling={false} style={{ color: '#235fa9', }}> {privacy}</Text>


          </View>




          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, borderRadius: 8, marginBottom: 10, width: width, paddingHorizontal: 15, alignSelf: 'center', backgroundColor: '#EEEEF6', paddingVertical: 10 }}>
            <Image style={{
              width: 45, height: 45, borderRadius: 30, alignSelf: 'center'

            }} source={require('../assets/Frame338.png')} />
            <View style={{ width: '65%', }}>
              <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15 }}>Appointment for</Text>
              <Text style={{ color: 'black', fontWeight: '600', fontSize: 12 }}>John Doe</Text>

            </View>
            <Text style={{ color: '#186ADE', fontWeight: '600', fontSize: 15 }}> Change  </Text>


          </View>






          <View style={{ marginBottom: 30 }}></View>
        </ScrollView>

        <View style={{ flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, position: 'absolute', bottom: 0, width: width, paddingVertical: 4 }}>
          <View style={{ backgroundColor: 'white', marginHorizontal: 4, marginVertical: 15, paddingHorizontal: 15, borderRadius: 8, paddingVertical: 10, width: width / 2.2, }}>
            <Text style={{ color: '#60606C', fontSize: 15, fontWeight: 'bold', }} numberOfLines={1} ellipsizeMode="tail">GNF 1000</Text>

            <Text style={{ fontSize: 12 }}>See Details</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Payment_Options()} style={{ width: width / 2.1, borderRadius: 4, height: 45, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8F49DE' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm & Pay</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  text1: {
    color: 'gray'
  },
  text: {
    color: 'white'
  },
  view1: {
    paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingVertical: 10
  },
  view: {
    paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingVertical: 10, backgroundColor: '#FE0000',
  },
  unselect: {
    marginTop: 10, width: width / 3.5, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', height: 50, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, paddingHorizontal: 5, paddingVertical: 10, backgroundColor: 'white',

  },
  select: {
    marginTop: 10, width: width / 3.5, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', height: 50, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, paddingHorizontal: 5, paddingVertical: 10, backgroundColor: 'white', borderColor: '#FE0000', borderWidth: 2
  },
  unselect_text: {
    color: '#FE0000', fontWeight: 'bold'

  },
  select_text: {
    color: 'white', fontWeight: 'bold'

  },
  select_text_red: {
    color: 'white', fontWeight: 'bold', fontSize: 15

  },
  unselect_text_red: {
    color: 'white', fontWeight: 'bold', fontSize: 15

  },
  select_red: {
    width: 130, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#FFD242', marginLeft: 10, paddingVertical: 10,
  },
  unselect_red: {
    width: 130, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#FFD242', marginLeft: 10, paddingVertical: 10,
  },
  checked: {
    width: 17, height: 17, backgroundColor: '#FE0000', borderRadius: 30
  },

  uncheked: {
    width: 17, height: 17, borderRadius: 100,
  },

})


const mapStateToProps = (state) => {
  return {
    Select_Time: state.Select_Time,
    Check_up_Time: state.Check_up_Time,
    Next: state.Next,
    Progressing_your_request: state.Progressing_your_request,
    Please_select_appointment_time_for_moving_next: state.Please_select_appointment_time_for_moving_next,
    Slot_already_booked: state.Slot_already_booked,
    List_of_Schedule: state.List_of_Schedule,
    No_Slots_available: state.No_Slots_available,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add_Vehicle: (vehicle) => { dispatch({ type: "add_Vehicle", payload: vehicle }) },
    spanish_lang: (Select_Time, Check_up_Time, Next, Progressing_your_request, Please_select_appointment_time_for_moving_next, Slot_already_booked, List_of_Schedule, No_Slots_available) => { dispatch({ type: "spanish_lang", payload: Select_Time, Check_up_Time, Next, Progressing_your_request, Please_select_appointment_time_for_moving_next, Slot_already_booked, List_of_Schedule, No_Slots_available }) },
    english_lang: (Select_Time, Check_up_Time, Next, Progressing_your_request, Please_select_appointment_time_for_moving_next, Slot_already_booked, List_of_Schedule, No_Slots_available) => { dispatch({ type: "english_lang", payload: Select_Time, Check_up_Time, Next, Progressing_your_request, Please_select_appointment_time_for_moving_next, Slot_already_booked, List_of_Schedule, No_Slots_available }) },
    add_Social_User: (social_user) => { dispatch({ type: "add_Social_User", payload: social_user }) },
    // change_counter:(counter)=>{dispatch({type:"change_counter",payload:counter})},
    // // change_counterNO:(counterNO)=>{dispatch({type:"change_counterNO",payload:counterNO})},
    // addservice:(service)=>{dispatch({type:"addservice",payload:service})},






  }
}



export default connect(mapStateToProps, mapDispatchToProps)(book_appointment);