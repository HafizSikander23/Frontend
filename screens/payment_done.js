import React, { Component } from 'react'
import { StatusBar, Image, Text, View, Dimensions, TouchableOpacity, AsyncStorage, BackHandler } from 'react-native'
import { Container, Header, Content, Icon, Footer, FooterTab, Badge, Right, Picker, Left, Button } from 'native-base';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import { Actions } from 'react-native-router-flux';
// import Connection from "../connection";
import { connect } from "react-redux";
// import moment from 'moment';

import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogFooter,
  DialogButton,
  DialogTitle,
} from "react-native-popup-dialog";
class payment_done extends React.Component {


  constructor(props) {

    super(props)

    this.state = {
      visible: true
    }
  }



  Done = () => {
    this.setState({
      visible: false,
    })
    Actions.Patient_Tab_Screen()
  }




  render() {
    return (
      <>
        <StatusBar backgroundColor="#EEEEF6" barStyle="light-content" />

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(2, 2, 2, 0.8)', }}>

          <Dialog
            style={{ backgroundColor: 'black', padding: 0 }}
            width={"85%"}
            visible={this.state.visible}
            dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}>

            <DialogContent style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
              <Image style={{ width: 150, height: 150, borderRadius: 12, alignSelf: 'center', marginTop: 30 }} resizeMode="contain" source={require('../assets/Group1.png')} />



              <Text style={{ fontSize: 22, textAlign: 'center', color: '#9B56EC', fontWeight: 'bold', marginTop: 25 }}>Congratulations!</Text>

              <Text style={{ fontSize: 14, textAlign: 'center', color: 'black', marginTop: 10, paddingHorizontal: 25 }}>Appointment successfully booked. You will receive a notification and the doctor you selected will contact you. </Text>


              <TouchableOpacity activeOpacity={0.8} onPress={() => { this.Done() }}>
                <View style={{ width: "85%", marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#9B56EC', paddingVertical: 15, alignSelf: 'center', marginTop: 30 }}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Done</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity activeOpacity={0.8} onPress={() => { this.Done() }}>
                <View style={{ width: "85%", marginBottom: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#E9F0FF', paddingVertical: 15, alignSelf: 'center', }}>
                  <Text style={{ color: '#9B56EC', fontWeight: 'bold' }}>Close</Text>
                </View>
              </TouchableOpacity>
            </DialogContent>
          </Dialog>

        </View>


      </>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    Category: state.Category,
    Time: state.Time,
    Something_went_wrong_try_agin_later: state.Something_went_wrong_try_agin_later,
    Your_appointment_successfully_booked: state.Your_appointment_successfully_booked,
    Payment_processed_successfully: state.Payment_processed_successfully,
    You_have_succesfully_paid: state.You_have_succesfully_paid,
    Appointment_Details: state.Appointment_Details,
    Doctor_Name: state.Doctor_Name,
    Date: state.Date,
    Go_to_Home: state.Go_to_Home,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add_Vehicle: (vehicle) => { dispatch({ type: "add_Vehicle", payload: vehicle }) },
    spanish_lang: (Category, Time, Something_went_wrong_try_agin_later, Your_appointment_successfully_booked, Payment_processed_successfully, You_have_succesfully_paid, Appointment_Details, Doctor_Name, Date, Go_to_Home) => { dispatch({ type: "spanish_lang", payload: Category, Time, Something_went_wrong_try_agin_later, Your_appointment_successfully_booked, Payment_processed_successfully, You_have_succesfully_paid, Appointment_Details, Doctor_Name, Date, Go_to_Home }) },
    english_lang: (Category, Time, Something_went_wrong_try_agin_later, Your_appointment_successfully_booked, Payment_processed_successfully, You_have_succesfully_paid, Appointment_Details, Doctor_Name, Date, Go_to_Home) => { dispatch({ type: "english_lang", payload: Category, Time, Something_went_wrong_try_agin_later, Your_appointment_successfully_booked, Payment_processed_successfully, You_have_succesfully_paid, Appointment_Details, Doctor_Name, Date, Go_to_Home }) },
    add_Social_User: (social_user) => { dispatch({ type: "add_Social_User", payload: social_user }) },
    // change_counter:(counter)=>{dispatch({type:"change_counter",payload:counter})},
    // // change_counterNO:(counterNO)=>{dispatch({type:"change_counterNO",payload:counterNO})},
    // addservice:(service)=>{dispatch({type:"addservice",payload:service})},






  }
}



export default connect(mapStateToProps, mapDispatchToProps)(payment_done);