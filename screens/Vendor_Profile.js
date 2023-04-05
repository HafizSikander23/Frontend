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
import RBSheet from "react-native-raw-bottom-sheet";
import { Icon, } from 'native-base';



class testing extends React.Component {

  logout = () => {

    this.RBSheet2.close()

    Actions.Vendor_Login({ role: 'doctor' });

  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor="#EEEEF6" barStyle="light-content" />

        <View style={{ backgroundColor: '#EEEEF6', height: 80 }}>
          <Text style={{ fontWeight: '500', fontSize: 23, textAlign: "center", marginTop: 30 }}>More</Text>

        </View>

        <ScrollView>
          <TouchableOpacity onPress={() => Actions.Vendor_Edit_Profile()} style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>

            <Icon name="user-circle" type="FontAwesome" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>Edit Profile</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </TouchableOpacity>



          <TouchableOpacity onPress={() => Actions.Vendor_Customers()} style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="group" type="FontAwesome" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>My customers</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </TouchableOpacity>



          <TouchableOpacity onPress={() => Actions.Vendor_Documents()}
            style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>

            <Icon name="heart" type="AntDesign" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>My documents</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </TouchableOpacity>



          <TouchableOpacity onPress={() => Actions.Doctors()}
            style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="heart" type="AntDesign" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>My products</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </TouchableOpacity>









          <TouchableOpacity style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="text-document-inverted" type="Entypo" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>Blogs</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </TouchableOpacity>









          <TouchableOpacity onPress={() => Actions.Vendor_Payments()} style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="dollar" type="Foundation" style={{ color: "#8F49DE", fontSize: 25, paddingLeft: 10 }} />

            <Text style={{ fontSize: 17, width: '80%' }}>Payments History</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </TouchableOpacity>









          <View style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="questioncircle" type="AntDesign" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>Help and Feedback</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </View>



          <View style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="questioncircle" type="AntDesign" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>My reviews</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </View>


          <TouchableOpacity
            style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="group" type="FontAwesome" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>My subscription</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </TouchableOpacity>



          <View style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="settings" type="Ionicons" style={{ color: "#8F49DE", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%' }}>Setting</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </View>



          <TouchableOpacity onPress={() => this.RBSheet2.open()} style={{ width: width / 1.1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: 'lightgray', paddingBottom: 15 }}>


            <Icon name="settings" type="Ionicons" style={{ color: "#F40606", fontSize: 23, }} />

            <Text style={{ fontSize: 17, width: '80%', color: '#F40606' }}>Logout</Text>


            <Icon name="right" type="AntDesign" style={{ color: "#82829B", fontSize: 23, }} />

          </TouchableOpacity>


        </ScrollView>
        <RBSheet
          ref={ref => {
            this.RBSheet2 = ref;
          }}
          height={220}
          closeOnDragDown={true}
          openDuration={220}
          customStyles={{
            container: {
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            },
            draggableIcon: {
              backgroundColor: "lightgray",
            },
          }}
        >
          <View>
            <Text style={{ fontSize: 18, color: '#9B56EC', marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}>Logout</Text>
            <View style={{ width: width / 1 - 50, borderBottomWidth: 1, borderColor: '#d2d5da', marginVertical: 20, alignSelf: 'center' }}></View>

            <Text style={{ color: 'black', fontSize: 19, alignSelf: 'center', fontWeight: '600' }}>Are you sure you want to logout?</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25, marginBottom: 10, paddingHorizontal: 17 }}>
              <TouchableOpacity onPress={() => this.RBSheet2.close()} activeOpacity={0.8}
                style={{ width: width / 2.3, paddingVertical: 13, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'white', borderColor: 'lightgray', borderWidth: 1.5, }}>
                <Text style={{ color: '#82829B', fontWeight: 'bold', fontSize: 17 }}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.logout()} activeOpacity={0.8}
                style={{ width: width / 2.3, paddingVertical: 13, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#9B56EC', }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>

    )
  }
}


export default testing;
