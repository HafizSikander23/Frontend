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
import ToggleSwitch from 'toggle-switch-react-native'
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

      text3: 1,
      text4: 1,
      text5: 1,
      text6: 1,
      text7: 1,
      text0: 2,
      isOn2: false,


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
  toggle = (isOn2) => {
    this.setState({
      isOn2: isOn2
    })
  }

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>


        <View style={{ backgroundColor: '#EEEEF6', height: 60, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
              <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
            </TouchableOpacity>
            <Text style={{ fontWeight: '700', fontSize: 20, marginLeft: 5 }}>Time Slots</Text>


          </View>
        </View>


        <View style={{ paddingHorizontal: 10, borderRadius: 10, alignSelf: 'center', height: 50, width: width, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5, backgroundColor: '#EEEEF6' }}>

          <TouchableOpacity style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text0", 'pending')}  >
            <View style={styles.active_button}>
              <Text style={styles.active_text}>Specifiq hours</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.changebtn("text0", 'pending')}  >
            <View style={styles.in_active_button}>
              <Text style={styles.in_active_text}>Always available</Text>
            </View>
          </TouchableOpacity>


        </View>

        <Text style={{ fontSize: 17, fontWeight: '500', marginLeft: 20, marginTop: 10 }}>Add hours to your availaibility</Text>


        <View style={{ width: width / 1.1, alignSelf: 'center', paddingTop: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: '600' }}>Monday</Text>
          <ToggleSwitch
            isOn={this.state.isOn2}
            onColor="#8F49DE"
            offColor="#EEEEEE"
            // label="Example label"
            // labelStyle={{ color: "black", fontWeight: "900" }}
            size="small"
            onToggle={isOn2 => this.toggle(isOn2)}
          />
        </View>
        <View style={{ flexDirection: 'row', width: width / 1.5, alignSelf: 'center', marginTop: 7 }}>

          <View style={{ width: 90, height: 27, borderWidth: 1.5, borderColor: '#067A91', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: '#067A91', fontSize: 15, fontWeight: '600' }}>09.00 AM</Text>
          </View>


          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', marginHorizontal: 20 }}>to</Text>

          <View style={{ width: 90, height: 27, borderWidth: 1.5, borderColor: '#067A91', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: '#067A91', fontSize: 15, fontWeight: '600' }}>09.00 AM</Text>
          </View>


        </View>

        <Text style={{ fontSize: 14, marginLeft: 18, marginTop: 4 }}>Session  type</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center', marginTop: 13 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <CheckBox
              disabled={false}
              value={this.state.checked1}
              onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
              tintColors={{ true: 'black', false: 'gray' }}
              onTintColor={"black"}
              onCheckColor={'black'}
              boxType={'square'}
              style={{ width: 18, height: 18, padding: 2 }}
            />

            <Text style={{ marginLeft: 8 }}>Video Appointment</Text>



          </View>






          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <CheckBox
              disabled={false}
              value={this.state.checked1}
              onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
              tintColors={{ true: 'black', false: 'gray' }}
              onTintColor={"black"}
              onCheckColor={'black'}
              boxType={'square'}
              style={{ width: 18, height: 18, padding: 2 }}
            />

            <Text style={{ marginLeft: 8 }}>In-clinic appointment</Text>



          </View>

        </View>


        <View style={{ width: 130, height: 27, backgroundColor: '#8F49DE', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}>
          <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>Add more hours</Text>
        </View>




        <View style={{ width: width / 1.1, alignSelf: 'center', paddingTop: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: '600' }}>Tuesday</Text>
          <ToggleSwitch
            isOn={this.state.isOn2}
            onColor="#8F49DE"
            offColor="#EEEEEE"
            // label="Example label"
            // labelStyle={{ color: "black", fontWeight: "900" }}
            size="small"
            onToggle={isOn2 => this.toggle(isOn2)}
          />
        </View>



        <View style={{ width: width / 1.1, alignSelf: 'center', paddingTop: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: '600' }}>Wednesday</Text>
          <ToggleSwitch
            isOn={this.state.isOn2}
            onColor="#8F49DE"
            offColor="#EEEEEE"
            // label="Example label"
            // labelStyle={{ color: "black", fontWeight: "900" }}
            size="small"
            onToggle={isOn2 => this.toggle(isOn2)}
          />
        </View>








        <View style={{ flexDirection: 'row', width: width / 1.5, alignSelf: 'center', marginTop: 7 }}>

          <View style={{ width: 90, height: 27, borderWidth: 1.5, borderColor: '#067A91', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: '#067A91', fontSize: 15, fontWeight: '600' }}>09.00 AM</Text>
          </View>


          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', marginHorizontal: 20 }}>to</Text>

          <View style={{ width: 90, height: 27, borderWidth: 1.5, borderColor: '#067A91', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: '#067A91', fontSize: 15, fontWeight: '600' }}>09.00 AM</Text>
          </View>


        </View>

        <Text style={{ fontSize: 14, marginLeft: 18, marginTop: 4 }}>Session  type</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center', marginTop: 13 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <CheckBox
              disabled={false}
              value={this.state.checked1}
              onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
              tintColors={{ true: 'black', false: 'gray' }}
              onTintColor={"black"}
              onCheckColor={'black'}
              boxType={'square'}
              style={{ width: 18, height: 18, padding: 2 }}
            />

            <Text style={{ marginLeft: 8 }}>Video Appointment</Text>



          </View>






          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <CheckBox
              disabled={false}
              value={this.state.checked1}
              onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
              tintColors={{ true: 'black', false: 'gray' }}
              onTintColor={"black"}
              onCheckColor={'black'}
              boxType={'square'}
              style={{ width: 18, height: 18, padding: 2 }}
            />

            <Text style={{ marginLeft: 8 }}>In-clinic appointment</Text>



          </View>

        </View>
        <View style={{ flexDirection: 'row', width: width / 1.5, alignSelf: 'center', marginTop: 20 }}>

          <View style={{ width: 90, height: 27, borderWidth: 1.5, borderColor: '#8F49DE', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: '#8F49DE', fontSize: 15, fontWeight: '600' }}>09.00 AM</Text>
          </View>


          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600', marginHorizontal: 20 }}>to</Text>

          <View style={{ width: 90, height: 27, borderWidth: 1.5, borderColor: '#8F49DE', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ color: '#8F49DE', fontSize: 15, fontWeight: '600' }}>09.00 AM</Text>
          </View>


        </View>



        <Text style={{ fontSize: 14, marginLeft: 18, marginTop: 4 }}>Session  type</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width / 1.1, alignSelf: 'center', marginTop: 13 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <CheckBox
              disabled={false}
              value={this.state.checked1}
              onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
              tintColors={{ true: 'black', false: 'gray' }}
              onTintColor={"black"}
              onCheckColor={'black'}
              boxType={'square'}
              style={{ width: 18, height: 18, padding: 2 }}
            />

            <Text style={{ marginLeft: 8 }}>Video Appointment</Text>



          </View>






          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <CheckBox
              disabled={false}
              value={this.state.checked1}
              onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
              tintColors={{ true: 'black', false: 'gray' }}
              onTintColor={"black"}
              onCheckColor={'black'}
              boxType={'square'}
              style={{ width: 18, height: 18, padding: 2 }}
            />

            <Text style={{ marginLeft: 8 }}>In-clinic appointment</Text>



          </View>

        </View>

        <View style={{ width: 130, height: 27, backgroundColor: '#8F49DE', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}>
          <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>Add more hours</Text>
        </View>



        <View style={{ width: width / 1.1, alignSelf: 'center', paddingTop: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: '600' }}>Thursday</Text>
          <ToggleSwitch
            isOn={this.state.isOn2}
            onColor="#8F49DE"
            offColor="#EEEEEE"
            // label="Example label"
            // labelStyle={{ color: "black", fontWeight: "900" }}
            size="small"
            onToggle={isOn2 => this.toggle(isOn2)}
          />
        </View>




        <View style={{ width: width / 1.1, alignSelf: 'center', paddingTop: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: '600' }}>Friday</Text>
          <ToggleSwitch
            isOn={this.state.isOn2}
            onColor="#8F49DE"
            offColor="#EEEEEE"
            // label="Example label"
            // labelStyle={{ color: "black", fontWeight: "900" }}
            size="small"
            onToggle={isOn2 => this.toggle(isOn2)}
          />
        </View>









      </View>

    )
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
    color: '#82829B',
    fontSize: 14,
    fontWeight: '800'


  },
  text1: {
    color: 'black', fontSize: 12, fontWeight: '400', marginTop: 5,
  },
  text: {
    color: 'white', fontSize: 12, fontWeight: '400', marginTop: 5
  },
  view1: {
    width: 65, height: 80, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
  },
  view: {
    width: 65, height: 80, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8F49DE'
  },

  checked: {
    width: 17, height: 17, backgroundColor: '#8F49DE', borderRadius: 30
  },

  uncheked: {
    width: 17, height: 17, borderRadius: 100,
  },



})

export default testing;
