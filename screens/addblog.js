import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { Actions, Lightbox } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class addblog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked1: false,
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: width,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              // paddingVertical:70,
              height: 150,
              marginTop: 20,
              borderTopWidth: 2,
              borderBottomWidth: 2,
              borderColor: 'lightgray',
              borderStyle: 'dashed',
            }}>
            <Icon
              name="note-add"
              type="MaterialIcons"
              style={{ fontSize: 20, color: 'gray' }}
            />
            <Text style={{ color: 'gray', fontSize: 15, paddingLeft: 10 }}>
              Image (PDF, JPG, PNG)
            </Text>
          </View>

          <View
            style={{
              width: width / 1.06,
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              marginTop: 50,
              paddingBottom: 10,
            }}>
            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                paddingLeft: 30,
                paddingTop: 10,
              }}>
              Enter your article title
            </Text>
            <View
              style={{
                width: '85%',
                alignSelf: 'center',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                borderWidth: 2,
                borderColor: 'lightgray',
                borderStyle: 'dashed',
                borderRadius: 10,
              }}></View>

            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                paddingLeft: 30,
                paddingTop: 10,
              }}>
              Description
            </Text>
            <View
              style={{
                width: '85%',
                alignSelf: 'center',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 330,
                borderWidth: 2,
                borderColor: 'lightgray',
                borderStyle: 'dashed',
                borderRadius: 10,
                position: 'relative',
              }}></View>

            <Text
              style={{
                color: 'gray',
                fontWeight: 'bold',
                paddingLeft: 30,
                paddingTop: 10,
              }}>
              Status
            </Text>
            <View
              style={{
                width: '85%',
                alignSelf: 'center',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                height: 50,
                borderColor: 'lightgray',
                borderStyle: 'dashed',
                borderRadius: 10,
                position: 'relative',
              }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>Active</Text>
              <Icon name="down" type="AntDesign" style={{ fontSize: 18 }} />
            </View>

            <View
              style={{
                width: '85%',
                alignSelf: 'center',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                height: 50,
                marginTop: 30,
                //   borderWidth: 2,
                borderColor: 'lightgray',
                borderStyle: 'dashed',
                borderRadius: 10,
              }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>
                Set As Feature
              </Text>
              <CheckBox
                disabled={false}
                value={this.state.checked1}
                onValueChange={() =>
                  this.setState({ checked1: !this.state.checked1 })
                }
                tintColors={{ true: '#8F49DE', false: 'gray' }}
                onTintColor={'#8F49DE'}
                onCheckColor={'#8F49DE'}
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#8F49DE',
              width: width / 2.4,
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 9,
              alignSelf: 'center',
              marginVertical: 30,
            }}>
            <Text style={{ color: 'white', fontSize: 17 }}>Save</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default addblog;
