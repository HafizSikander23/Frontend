import React, { Component } from 'react';
import { StyleSheet, StatusBar, ScrollView, Image, SafeAreaView, ImageBackground, TextInput, Dimensions, View, BackHandler, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { Container, Header, Content, Icon, Footer, FooterTab, Drawer, Badge, Right, Picker, Left, Button, Body, Title, Segment } from 'native-base';
// import ImagePlaceholder from 'react-native-img-placeholder';
// import Connection from "../connection";
import { Actions } from 'react-native-router-flux';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


class chat extends React.Component {
  constructor() {
    super();
    this.state = {

      data1: [],
      skalton: false,
      token: ''


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



    return true;
  }


  getchatlist = () => {

    let uploaddata = new FormData();
    uploaddata.append('user_id', this.state.user_id);
    this.setState({ spinner1: true })
    let api = Connection + 'rest_apis.php?action=get_chat_list_for_user';
    console.log("pass => ", api)
    fetch(api, {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data",
        "otherHeader": "foo",
      },

      body: uploaddata,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response.response)
        this.setState({ spinner1: false })

        this.setState({
          data1: response.response,
          skalton: false
        })

      })
      .catch((error) => {
        console.error(error);

      });

  }




  componentDidMount = async () => {

    // let user = await AsyncStorage.getItem('customer');
    // let parsed = JSON.parse(user);
    // let id = parsed[0].id;
    // let role = parsed[0].role;
    // this.setState({
    //   user_id: id,
    //   role: role

    // })
    // this.getchatlist()
    // this.get_total_chat()


  }



  get_total_chat = () => {

    let uploaddata = new FormData();
    uploaddata.append('id', this.state.user_id);
    let api = Connection + 'rest_apis.php?action=get_total_chat';
    // console.log('pass => ', api)
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

        if (record != 'fail') {
          let t_p = record[0]
          this.setState({
            total_chats: t_p
          })
        } else {

          this.setState({
            total_chats: 0

          })
        }

      })
      .catch((error) => {
        console.error(error);

      });


  }


  createtable1 = () => {
    let table = []

    let record = this.state.data1
    let len = record.length
    if (record != 'fail') {
      for (let i = 0; i < len; i++) {
        let chat_name = record[i].chat_name
        let id = record[i].id
        let receiver_id = record[i].receiver_id
        let sender_id = record[i].sender_id
        let fcm_token = record[i].fcm_token
        let active = record[i].active
        let chat_message = record[i].chat_message
        let time = record[i].time
        let disable = record[i].disable
        let splitmessage = chat_message.split(".")
        let chat_image = record[i].chat_image
        let path = Connection + 'images/' + chat_image

        table.push(<View>
          {
            <View>
              {this.state.user_id == receiver_id ?

                <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Chatroom({ disable: disable, chat_iiid: id, receiver_id: sender_id, sender_id: sender_id, chat_name: chat_name, path: path, fcm_token: fcm_token, active: active, })} >
                  <View style={styles.FriendListView}>
                    <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#FE0000', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                      <ImagePlaceholder
                        style={{ width: 55, height: 55, borderRadius: 60 }}
                        loadingStyle={{ size: 'large', color: 'blue' }}
                        source={{ uri: path }}
                        borderRadius={100}
                        placeholderStyle={{ width: 57, height: 57, borderRadius: 60 }}
                      />

                      {active == 'online' ?
                        <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                          <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                        </View>
                        :
                        <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                          <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgray' }}></View>
                        </View>
                      }
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                      <View style={{ flexDirection: 'column', width: '80%' }}>
                        <Text style={styles.Text} numberOfLines={1} ellipsizeMode="tail">{chat_name.length > 20 ? ((chat_name.substring(0, 13 - 3)) + '...') : chat_name}</Text>
                        {splitmessage[1] == "jpg" &&
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
                            <Icon name="photo" type="FontAwesome" color="white" style={{ fontSize: 15, color: 'gray', }} />
                            <Text style={{ fontSize: 12, color: 'gray', fontWeight: 'bold', marginLeft: 5 }}>Photo</Text>
                          </View>
                        }

                        {splitmessage[1] == "pdf" &&
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
                            <Icon name="file-pdf" type="FontAwesome5" color="white" style={{ fontSize: 16, color: 'gray', }} />
                            <Text style={{ fontSize: 12, color: 'gray', fontWeight: 'bold', marginLeft: 5 }} >File</Text>
                          </View>
                        }

                        {splitmessage[1] != "jpg" && splitmessage[1] != "pdf" &&
                          <Text style={styles.Age} numberOfLines={1} ellipsizeMode="tail">{chat_message.length > 40 ? ((chat_message.substring(0, 40 - 3)) + '...') : chat_message}</Text>
                        }
                      </View>
                      {disable == 'false' ?
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: 'bold' }}>{time}</Text>
                        :
                        <Text style={{ color: 'green', fontSize: 12, fontWeight: 'bold' }}>Completed</Text>
                      }
                    </View>
                  </View>

                  <View style={{ width: width / 1 - 30, alignSelf: 'center', borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
                </TouchableOpacity>

                :

                <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Chatroom({ disable: disable, chat_iiid: id, receiver_id: receiver_id, sender_id: sender_id, chat_name: chat_name, path: path, fcm_token: fcm_token, active: active, })} >
                  <View style={styles.FriendListView}>
                    <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#FE0000', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                      <ImagePlaceholder
                        style={{ width: 55, height: 55, borderRadius: 60 }}
                        loadingStyle={{ size: 'large', color: 'blue' }}
                        source={{ uri: path }}
                        borderRadius={100}
                        placeholderStyle={{ width: 55, height: 55, borderRadius: 60 }}
                      />

                      {active == 'online' ?
                        <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                          <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                        </View>
                        :
                        <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                          <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgray' }}></View>
                        </View>
                      }
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                      <View style={{ flexDirection: 'column', width: '80%' }}>
                        <Text style={styles.Text} numberOfLines={1} ellipsizeMode="tail">{chat_name.length > 20 ? ((chat_name.substring(0, 13 - 3)) + '...') : chat_name}</Text>

                        {splitmessage[1] == "jpg" &&
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
                            <Icon name="photo" type="FontAwesome" color="white" style={{ fontSize: 15, color: 'gray', }} />
                            <Text style={{ fontSize: 11, color: 'gray', fontWeight: 'bold', marginLeft: 5 }}>Photo</Text>
                          </View>
                        }

                        {splitmessage[1] == "pdf" &&
                          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
                            <Icon name="file-pdf" type="FontAwesome5" color="white" style={{ fontSize: 16, color: 'gray', }} />
                            <Text style={{ fontSize: 11, color: 'gray', fontWeight: 'bold', marginLeft: 5 }} >File</Text>
                          </View>
                        }

                        {splitmessage[1] != "jpg" && splitmessage[1] != "pdf" &&
                          <Text style={styles.Age} numberOfLines={1} ellipsizeMode="tail">{chat_message.length > 40 ? ((chat_message.substring(0, 40 - 3)) + '...') : chat_message}</Text>
                        }

                      </View>
                      {disable == 'false' ?
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: 'bold' }}>{time}</Text>
                        :
                        <Text style={{ color: 'green', fontSize: 12, fontWeight: 'bold' }}>Completed</Text>
                      }
                    </View>
                  </View>

                  <View style={{ width: width / 1 - 30, alignSelf: 'center', borderBottomWidth: 1, borderColor: 'lightgray' }}></View>
                </TouchableOpacity>
              }

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



  dd = () => {
    console.log("hhh")
    this.getchatlist()
  }


  render() {




    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor="#EEEEF6" barStyle="light-content" />


        <View style={{ paddingHorizontal: 15, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 13, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#EEEEF6' }}>

          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Chats</Text>


        </View>

        {this.state.skalton == true ?

          <SkeletonPlaceholder>
            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>

            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>



            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>



            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>



            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>



            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>



            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>



            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>



            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5 }}></View>



            <View style={styles.FriendListView}>
              <View style={{ width: 63, height: 63, borderWidth: 3, borderColor: '#e1e8ee', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 55, height: 55, borderRadius: 60 }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: '#e1e8ee', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0, bottom: -3 }}>
                  <View style={{ width: 9, height: 9, borderRadius: 50, backgroundColor: 'lightgreen' }}></View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '78%' }}>
                <View style={{ flexDirection: 'column', width: '80%' }}>
                  <View style={{ width: 120, height: 17, borderRadius: 10 }}></View>
                  <View style={{ width: 90, height: 15, borderRadius: 10, marginTop: 7 }}></View>
                </View>

                <View style={{ width: 50, height: 15, borderRadius: 10 }}></View>
              </View>
            </View>
            <View style={{ width: width / 1 - 30, alignSelf: 'center', height: 2, borderRadius: 5, marginBottom: 60 }}></View>
          </SkeletonPlaceholder>


          :

          <ScrollView >

            <View style={{ width: width / 1.1, marginTop: 20, height: 50, alignSelf: 'center' }} >
              <TextInput allowFontScaling={false} onChangeText={name => this.setState({ name })} style={{ marginTop: 10, width: width / 1.1, height: 40, backgroundColor: '#EEEEF6', paddingLeft: 38, borderRadius: 6, alignSelf: 'center', color: '#60606C', fontWeight: '600', }} placeholder="Search in Chat" placeholderTextColor='gray' />

              <Icon name="search1" type="AntDesign" style={{ color: '#60606C', fontSize: 15, position: 'absolute', left: 5, bottom: 2, marginLeft: 10, marginBottom: 10 }} />
            </View>
            {/* <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, paddingHorizontal: 20, marginTop: 20 }}>Messages</Text> */}
            <Text style={{ color: 'gray', fontSize: 14, paddingHorizontal: 20, marginBottom: 10, marginTop: 10 }}>RECENT</Text>

            <TouchableOpacity onPress={() => Actions.Chatroom()} activeOpacity={0.8}
              style={{ paddingVertical: 10, marginTop: 10, paddingHorizontal: 10, alignSelf: 'center', flexDirection: 'row', marginBottom: 10, width: width / 1.1, backgroundColor: 'white', borderRadius: 8, marginLeft: 7, justifyContent: 'space-between', }}>

              <Image style={{ width: 50, height: 50, borderRadius: 40 }} source={require('../assets/Mother.png')} />

              <View style={{ width: '85%' }}>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
                  <View>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', }}>Dr. Jane Fernandes Dcosta</Text>
                    <Text style={{ fontSize: 12, color: 'gray', maxWidth: '92%' }} numberOfLines={2} >Thanks doctor</Text>

                  </View>
                  <Text style={{ color: 'gray', fontSize: 10, fontWeight: 'bold' }}>09:00 AM</Text>
                </View>

              </View>

            </TouchableOpacity>




            <TouchableOpacity onPress={() => Actions.Chatroom()} activeOpacity={0.8}
              style={{ paddingVertical: 10, paddingHorizontal: 10, alignSelf: 'center', flexDirection: 'row', marginBottom: 10, width: width / 1.1, backgroundColor: 'white', borderRadius: 8, marginLeft: 7, justifyContent: 'space-between', }}>

              <Image style={{ width: 50, height: 50, borderRadius: 40 }} source={require('../assets/Mother.png')} />

              <View style={{ width: '85%' }}>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
                  <View>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', }}>Dr. Karima Dize</Text>
                    <Text style={{ fontSize: 12, color: 'gray', maxWidth: '92%' }} numberOfLines={2} >Thanks doctor</Text>

                  </View>
                  <Text style={{ color: 'gray', fontSize: 10, fontWeight: 'bold' }}>09:00 AM</Text>
                </View>

              </View>

            </TouchableOpacity>





            <TouchableOpacity onPress={() => Actions.Chatroom()} activeOpacity={0.8}
              style={{ paddingVertical: 10, paddingHorizontal: 10, alignSelf: 'center', flexDirection: 'row', marginBottom: 10, width: width / 1.1, backgroundColor: 'white', borderRadius: 8, marginLeft: 7, justifyContent: 'space-between', }}>

              <Image style={{ width: 50, height: 50, borderRadius: 40 }} source={require('../assets/Mother.png')} />

              <View style={{ width: '85%' }}>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
                  <View>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', }}>Dr. Jane Fernandes Dcosta</Text>
                    <Text style={{ fontSize: 12, color: 'gray', maxWidth: '92%' }} numberOfLines={2} >Thanks doctor</Text>

                  </View>
                  <Text style={{ color: 'gray', fontSize: 10, fontWeight: 'bold' }}>09:00 AM</Text>
                </View>

              </View>

            </TouchableOpacity>

            {/* {this.state.data1 == "" ?
              <View style={{ alignItems: 'center', justifyContent: 'center', height: height / 1.5 }}>
                <Text style={{}}>
                  You don't have any chat.
                </Text>
              </View>
              :
              <View style={{ paddingBottom: 20, paddingHorizontal: 15, marginTop: 5 }}>
                {this.createtable1()}
              </View>
            }   */}
          </ScrollView>
        }



      </View>



    );
  }
}


const styles = StyleSheet.create({

  logo1: {
    width: 60,
    height: 60,
    borderRadius: 50
  },

  Age: {
    color: 'gray',
    fontSize: 12,
    marginTop: 1
  },
  Text: {
    fontSize: 17,
    maxWidth: '70%',
    fontWeight: 'bold'
  },
  FriendListView: {
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: 15,
    marginTop: 15
  },
});


export default chat;