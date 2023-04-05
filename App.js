/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
} from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import { Router, Scene, Stack } from 'react-native-router-flux';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
// import testing from "./screens/testing";
//  import signup from "./screens/signup";
//  import login from "./screens/login";
//  import home from "./screens/home";
//  import category from "./screens/category";
//  import product from "./screens/product";
import login1 from "./screens/login1";
//  import patientsignup from "./screens/patientsignup";
import Forget_Password from "./screens/Forget_Password";
import Verification_Screen from "./screens/Verification_Screen";
import Change_Password from "./screens/Change_Password";
import Patient_Home from "./screens/Patient_Home";
import Chat from "./screens/Chat";
import Patient_Profile from "./screens/Patient_Profile";
import Patient_Tab_Screen from "./screens/Patient_Tab_Screen";
import Patient_All_Appointment from "./screens/Patient_All_Appointment";
// import patient_site_appointment_detai from "./screens/patient_site_appointment_detai";
// import Edit_Profile from "./screens/Edit_Profile";
// import Doctor_Appointment_Profile from "./screens/Doctor_Appointment_Profile";
// import appointment_checkout from "./screens/appointment_checkout";
// import All_Doctors from "./screens/All_Doctors";
// import My_Family from "./screens/My_Family";
// import Add_Patient from "./screens/Add_Patient";
// import Chatroom from "./screens/Chatroom";
// import Favourite from "./screens/Favourite";
// import Laboratory from "./screens/Laboratory";
// import Description from "./screens/Description";
// import Services from "./screens/Services";
// import Reviews from "./screens/Reviews";

// import NearestPharmacies from "./screens/NearestPharmacies";
// import PharmacieHamdallaye from "./screens/PharmacieHamdallaye";
// import pills from "./screens/pills";
// import My_Orders from "./screens/My_Orders";

// import Payment_Options from "./screens/Payment_Options";
// import payment_done from "./screens/payment_done";
// import Referral from "./screens/Referral";
// import Payments from "./screens/Payments";
// import Medical_Record from "./screens/Medical_Record";

import Doctor_Appointment_Profile from "./screens/Doctor_Appointment_Profile";
import All_Doctors from "./screens/All_Doctors";


import Doctor_registration_1 from "./screens/Doctor_registration_1";
// import Doctor_registration_2 from "./screens/Doctor_registration_2";
// import Doctor_registration_3 from "./screens/Doctor_registration_3";
// import Doctor_registration_4 from "./screens/Doctor_registration_4";

// import Doctor_registration_5 from "./screens/Doctor_registration_5";

import Doctor_registration_6 from "./screens/Doctor_registration_6";

import Edit_Profile from "./screens/Edit_Profile";


// import Doctor_registration_B1 from "./screens/Doctor_registration_B1";
// import Doctor_registration_B2 from "./screens/Doctor_registration_B2";
// import Doctor_registration_B3 from "./screens/Doctor_registration_B3";
import Doctor_registration_B4 from "./screens/Doctor_registration_B4";




// import Doctor_registration_C1 from "./screens/Doctor_registration_C1";
// import Doctor_registration_C2 from "./screens/Doctor_registration_C2";
import Doctor_registration_C3 from "./screens/Doctor_registration_C3";
import Basic_Detail from "./screens/Basic_Detail";
import Booking_Option from "./screens/Booking_Option";
import Upload_Store_Picture from "./screens/Upload_Store_Picture";
import SignUp1 from "./screens/SignUp1";

import testing from "./screens/testing";
import getting_patients from "./screens/getting_patients";
import patient_site_appointment_detai from "./screens/patient_site_appointment_detai";
import Upload_Document from "./screens/Upload_Document";

import Time_Slots from "./screens/Time_Slots";
import Time_Slots_1 from "./screens/Time_Slots_1";


import Doctors from "./screens/Doctors";

import Personal_Detail from "./screens/Personal_Detail";

import Doctor_Hours from "./screens/Doctor_Hours";

import Registration from "./screens/Registration";
import Education from "./screens/Education";
import Services_Experience1 from "./screens/Services_Experience1";
import Establishment from "./screens/Establishment";


import My_Patient from "./screens/My_Patient";
import addMedicine from "./screens/addMedicine";


import Vendor_Login from "./screens/Vendor_Login";
import Vendor_SignUp from "./screens/Vendor_SignUp";

import Vendor_Registration_1 from "./screens/Vendor_Registration_1";
import Vendor_Basic_Detail from "./screens/Vendor_Basic_Detail";

import Vendor_Registration_6 from "./screens/Vendor_Registration_6";
import Vendor_Profile_Verification from "./screens/Vendor_Profile_Verification";

import Vendor_Registration_B4 from "./screens/Vendor_Registration_B4";
import Vendor_getting_patients from "./screens/Vendor_getting_patients";

import Vendor_Registration_C3 from "./screens/Vendor_Registration_C3";
import Vendor_Home from "./screens/Vendor_Home";
import Vendor_All_Orders from "./screens/Vendor_All_Orders";
import Vendor_Order_Detail from "./screens/Vendor_Order_Detail";
import Vendor_Laboratory_Test from "./screens/Vendor_Laboratory_Test";
import Vendor_Profile from "./screens/Vendor_Profile";
import Vendor_Edit_Profile from "./screens/Vendor_Edit_Profile";






import Payment_Options from "./screens/Payment_Options";
import payment_done from "./screens/payment_done";
// import Referral from "./screens/Referral";
import Payments from "./screens/Payments";
import Vendor_Payments from "./screens/Vendor_Payments";
import Vendor_Customers from "./screens/Vendor_Customers";

import Vendor_Tab_Screen from "./screens/Vendor_Tab_Screen";
import Vendor_Documents from "./screens/Vendor_Documents";

import addblog from "./screens/addblog";
import articles from "./screens/articles";



console.disableYellowBox = true;


export default function App() {

  return (

    <>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <SafeAreaView></SafeAreaView>

      <Router>
        <Stack key="root">

          <Scene key="login1" component={login1} title="login1" hideNavBar={true} />
          <Scene key="addblog" component={addblog} title="addblog" hideNavBar={true} />
          <Scene key="articles" component={articles} title="articles" hideNavBar={true} />

          <Scene key="Forget_Password" component={Forget_Password} title="Forget_Password" hideNavBar={true} />

          <Scene key="Verification_Screen" component={Verification_Screen} title="Verification_Screen" hideNavBar={true} />

          <Scene key="Change_Password" component={Change_Password} title=" Change_Password " hideNavBar={true} />

          <Scene key="Patient_Home" component={Patient_Home} title="Patient_Home" hideNavBar={true} />
          <Scene key="Chat" component={Chat} title="Chat" hideNavBar={true} />
          <Scene key="Patient_Profile" component={Patient_Profile} title="Patient_Profile" hideNavBar={true} />


          <Scene key="Patient_Tab_Screen" component={Patient_Tab_Screen} title="Patient_Tab_Screen" hideNavBar={true} />

          <Scene key="Patient_All_Appointment" component={Patient_All_Appointment} title="Patient_All_Appointment" hideNavBar={true} />
          {/* <Scene key="patient_site_appointment_detai" component={ patient_site_appointment_detai  } title="patient_site_appointment_detai"  hideNavBar={true}/>
<Scene key="Edit_Profile" component={ Edit_Profile  } title="Edit_Profile"  hideNavBar={true}/>
<Scene key="Doctor_Appointment_Profile" component={ Doctor_Appointment_Profile  } title="Doctor_Appointment_Profile"  hideNavBar={true}/
<Scene key="appointment_checkout" component={ appointment_checkout  } title="appointment_checkout"  hideNavBar={true}/>
<Scene key="All_Doctors" component={ All_Doctors  } title="All_Doctors"   hideNavBar={true}/>
<Scene key="My_Family" component={ My_Family   } title="My_Family "    hideNavBar={true}/>
<Scene key="Add_Patient" component={ Add_Patient   } title="Add_Patient "   hideNavBar={true}/>

<Scene key="Chatroom" component={ Chatroom   } title="Chatroom "   hideNavBar={true}/>
<Scene key="Favourite" component={ Favourite   } title="Favourite "  hideNavBar={true}/>
<Scene key="Description" component={Description   } title="Description "   hideNavBar={true}/>

<Scene key="Laboratory" component={Laboratory   } title="Laboratory "  hideNavBar={true}/>
<Scene key="Services" component={Services   } title="Services " hideNavBar={true}/>

<Scene key="Reviews" component={Reviews   } title="Reviews " hideNavBar={true}/>
<Scene key="NearestPharmacies" component={NearestPharmacies   } title="NearestPharmacies "  hideNavBar={true}/>
<Scene key="PharmacieHamdallaye" component={PharmacieHamdallaye   } title="PharmacieHamdallaye "  hideNavBar={true}/>
<Scene key="pills" component={pills   } title="pills "  hideNavBar={true}/>

<Scene key="My_Orders" component={My_Orders   } title="My_Orders "  hideNavBar={true}/>
<Scene key="Payment_Options" component={Payment_Options   } title="Payment_Options "  hideNavBar={true}/>
<Scene key="payment_done" component={payment_done   } title="payment_done "  hideNavBar={true}/>
<Scene key="Referral" component={Referral   } title="Referral "  hideNavBar={true}/>
<Scene key="Payments" component={Payments   } title="Payments "  hideNavBar={true}/>
<Scene key="Medical_Record" component={Medical_Record   } title="Medical_Record "  hideNavBar={true}/>
 */}

          <Scene key="All_Doctors" component={All_Doctors} title="All_Doctors" hideNavBar={true} />
          <Scene key="Doctor_Appointment_Profile" component={Doctor_Appointment_Profile} title="Doctor_Appointment_Profile" hideNavBar={true} />

          <Scene key="Doctor_registration_1" component={Doctor_registration_1} title="Doctor_registration_1" hideNavBar={true} />
          {/* 
<Scene key="Doctor_registration_2" component={ Doctor_registration_2 } title="Doctor_registration_2"  hideNavBar={true}/>
<Scene key="Doctor_registration_3" component={ Doctor_registration_3 } title="Doctor_registration_3"   hideNavBar={true}/>
<Scene key="Doctor_registration_4" component={ Doctor_registration_4 } title="Doctor_registration_4"  hideNavBar={true}/>
<Scene key="Doctor_registration_5" component={ Doctor_registration_5} title="Doctor_registration_5"    hideNavBar={true}/> */}
          <Scene key="Doctor_registration_6" component={Doctor_registration_6} title="Doctor_registration_6" hideNavBar={true} />

          {/* 


<Scene key="Doctor_registration_B1" component={ Doctor_registration_B1 } title="Doctor_registration_B1"  hideNavBar={true}/>
<Scene key="Doctor_registration_B2" component={ Doctor_registration_B2} title="Doctor_registration_B2"   hideNavBar={true}/>
<Scene key="Doctor_registration_B3" component={ Doctor_registration_B3 } title="Doctor_registration_B3"  hideNavBar={true}/> */}
          <Scene key="Doctor_registration_B4" component={Doctor_registration_B4} title="Doctor_registration_B4" hideNavBar={true} />





          {/* 
<Scene key="Doctor_registration_C1" component={ Doctor_registration_C1 } title="Doctor_registration_C1"  hideNavBar={true}/>
<Scene key="Doctor_registration_C2" component={ Doctor_registration_C2} title="Doctor_registration_C2"  hideNavBar={true}/> */}
          <Scene key="Doctor_registration_C3" component={Doctor_registration_C3} title="Doctor_registration_C3" hideNavBar={true} />


          <Scene key="Basic_Detail" component={Basic_Detail} title="Basic_Detail" hideNavBar={true} />
          <Scene key="Booking_Option" component={Booking_Option} title="Booking_Option" hideNavBar={true} />
          <Scene key="Upload_Store_Picture" component={Upload_Store_Picture} title="Upload_Store_Picture" hideNavBar={true} />
          <Scene key="SignUp1" component={SignUp1} title="SignUp1" hideNavBar={true} />

          <Scene key="testing" component={testing} title="testing" hideNavBar={true} />
          <Scene key="getting_patients" component={getting_patients} title="getting_patients" hideNavBar={true} />
          <Scene key="patient_site_appointment_detai" component={patient_site_appointment_detai} title="patient_site_appointment_detai" hideNavBar={true} />
          <Scene key="Upload_Document" component={Upload_Document} title="Upload_Document" hideNavBar={true} />


          <Scene key="Time_Slots" component={Time_Slots} title="Time_Slots" hideNavBar={true} />
          <Scene key="Time_Slots_1" component={Time_Slots_1} title="Time_Slots_1" hideNavBar={true} />

          <Scene key="Doctors" component={Doctors} title="Doctors" hideNavBar={true} />

          <Scene key="Personal_Detail" component={Personal_Detail} title="Personal_Detail" hideNavBar={true} />

          <Scene key="Doctor_Hours" component={Doctor_Hours} title="Doctor_Hours" hideNavBar={true} />

          <Scene key="Registration" component={Registration} title="Registration" hideNavBar={true} />
          <Scene key="Education" component={Education} title="Education" hideNavBar={true} />
          <Scene key="Services_Experience1" component={Services_Experience1} title="Services_Experience1" hideNavBar={true} />
          <Scene key="Establishment" component={Establishment} title="Establishment" hideNavBar={true} />



          <Scene key="Edit_Profile" component={Edit_Profile} title="Edit_Profile" hideNavBar={true} />

          <Scene key="My_Patient" component={My_Patient} title="My_Patient" hideNavBar={true} />
          <Scene key="addMedicine" component={addMedicine} title="addMedicine" hideNavBar={true} />






          <Scene key="Vendor_Login" component={Vendor_Login} title="Vendor_Login" initial hideNavBar={true} />
          <Scene key="Vendor_SignUp" component={Vendor_SignUp} title="Vendor_SignUp" hideNavBar={true} />

          <Scene key="Vendor_Registration_1" component={Vendor_Registration_1} title="Vendor_Registration_1" hideNavBar={true} />
          <Scene key="Vendor_Basic_Detail" component={Vendor_Basic_Detail} title="Vendor_Basic_Detail" hideNavBar={true} />
          <Scene key="Vendor_Registration_6" component={Vendor_Registration_6} title="Vendor_Registration_6" hideNavBar={true} />
          <Scene key="Vendor_Profile_Verification" component={Vendor_Profile_Verification} title="Vendor_Profile_Verification" hideNavBar={true} />

          <Scene key="Vendor_Registration_B4" component={Vendor_Registration_B4} title="Vendor_Registration_B4" hideNavBar={true} />
          <Scene key="Vendor_getting_patients" component={Vendor_getting_patients} title="Vendor_getting_patients" hideNavBar={true} />
          <Scene key="Vendor_Registration_C3" component={Vendor_Registration_C3} title="Vendor_Registration_C3" hideNavBar={true} />
          <Scene key="Vendor_Home" component={Vendor_Home} title="Vendor_Home" hideNavBar={true} />
          <Scene key="Vendor_All_Orders" component={Vendor_All_Orders} title="Vendor_All_Orders" hideNavBar={true} />
          <Scene key="Vendor_Order_Detail" component={Vendor_Order_Detail} title="Vendor_Order_Detail" hideNavBar={true} />
          <Scene key="Vendor_Laboratory_Test" component={Vendor_Laboratory_Test} title="Vendor_Laboratory_Test" hideNavBar={true} />
          <Scene key="Vendor_Profile" component={Vendor_Profile} title="Vendor_Profile" hideNavBar={true} />
          <Scene key="Vendor_Edit_Profile" component={Vendor_Edit_Profile} title="Vendor_Edit_Profile" hideNavBar={true} />



          <Scene key="Payment_Options" component={Payment_Options} title="Payment_Options " hideNavBar={true} />
          <Scene key="payment_done" component={payment_done} title="payment_done " hideNavBar={true} />
          {/* <Scene key="Referral" component={Referral   } title="Referral "  hideNavBar={true}/> */}
          <Scene key="Payments" component={Payments} title="Payments " hideNavBar={true} />
          <Scene key="Vendor_Payments" component={Vendor_Payments} title="Vendor_Payments " hideNavBar={true} />

          <Scene key="Vendor_Customers" component={Vendor_Customers} title="Vendor_Customers " hideNavBar={true} />


          <Scene key="Vendor_Tab_Screen" component={Vendor_Tab_Screen} title="Vendor_Tab_Screen" hideNavBar={true} />
          <Scene key="Vendor_Documents" component={Vendor_Documents} title="Vendor_Documents" hideNavBar={true} />





















        </Stack>
      </Router>

    </>
  )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export default App;
