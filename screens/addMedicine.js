import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar
} from 'react-native';
import { Actions, Lightbox } from 'react-native-router-flux';
import { Icon, Left } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class addMedicine extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 30,
        }}>
        <StatusBar backgroundColor="white" barStyle="light-content" />

        <View style={{ flexDirection: 'row', width: width / 1.1, alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="arrowleft" type="AntDesign" style={{ color: 'black', marginTop: 3.5, fontSize: 20, }} />
          </TouchableOpacity>


          <Text style={{ fontWeight: 'bold', fontSize: 19, fontWeight: '600', marginLeft: 10 }}>Add Medicine</Text>
        </View>

        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
              paddingTop: 30,
            }}>
            Pill Name
          </Text>
          <TextInput
            style={{
              width: '85%',
              height: 40,
              borderRadius: 15,
              paddingLeft: 20,
              color: 'gray',
              backgroundColor: '#FAFAFA',
              fontSize: 13,
            }}
            placeholder="Type Here"
            placeholderTextColor="gray"
          />
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 20 }}>
          <View style={{}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              How many
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FAFAFA',
                paddingVertical: 13,
                paddingHorizontal: 25,
                borderRadius: 15,
              }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>Tablet</Text>
              <Icon
                name="caret-down"
                type="FontAwesome"
                style={{ fontSize: 20, color: 'black', paddingLeft: 30 }}
              />
            </View>
          </View>

          <View style={{ marginLeft: 50 }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              How long
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FAFAFA',
                paddingVertical: 13,
                paddingHorizontal: 30,
                borderRadius: 15,
              }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>2</Text>
            </View>
          </View>
        </View>

        <View style={{ width: width / 3, paddingTop: 10 }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            When to take
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#FAFAFA',
              paddingVertical: 5,
              paddingHorizontal: 25,
              borderRadius: 13,
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Tablet</Text>
            <Icon
              name="caret-down"
              type="FontAwesome"
              style={{ fontSize: 20, color: 'black', paddingLeft: 20 }}
            />
          </View>
        </View>

        <View style={{ width: width / 1.25, paddingTop: 10 }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Additional Notes
          </Text>
          <TextInput
            style={{
              width: '100%',
              height: 150,
              borderRadius: 15,
              paddingLeft: 20,
              color: 'gray',
              backgroundColor: '#FAFAFA',
              fontSize: 13,
              textAlignVertical: 'top',
            }}
            placeholder="Type Here"
            placeholderTextColor="gray"
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 25,
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            width: width / 1.3,
            marginLeft: 20,
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            Joint Document
          </Text>
          <Icon
            name="attachment"
            type="Entypo"
            style={{ fontSize: 15, color: 'gray', paddingVertical: 7 }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: '#8F49DE',
              marginTop: 100,
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
      </View>
    );
  }
}

export default addMedicine;
