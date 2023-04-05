import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Alert,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    BackHandler,
    SafeAreaView,
    AsyncStorage,
    AppState
} from "react-native";


import {
    Container,
    Header,
    Content,
    Icon,
    Footer,
    FooterTab,
    Badge,
    Right,
    Picker,
    Left,
    Button,
} from "native-base";


import Vendor_Home from "./Vendor_Home";
import Vendor_All_Orders from "./Vendor_All_Orders";
import Chat from "./Chat";
import Vendor_Profile from "./Vendor_Profile";


class Patient_Tab_Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedbtn: "1", name: "", id: "",
            appState: AppState.currentState



        };
    }










    render() {
        let AppComponent = null;


        if (this.state.selectedbtn == "1") {
            AppComponent = Vendor_Home;
        }

        if (this.state.selectedbtn == "2") {
            AppComponent = Vendor_All_Orders;
        }
        if (this.state.selectedbtn == "3") {
            AppComponent = Chat;
        }
        if (this.state.selectedbtn == "4") {
            AppComponent = Vendor_Profile;
        }
        // if (this.state.selectedbtn == "5") {
        //     AppComponent = Patient_Orders;
        // }

        return (
            <>

                <StatusBar backgroundColor="#8F49DE" barStyle="light-content" />
                <View style={styles.container}>


                    <Content contentContainerStyle={{ flex: 1 }}>
                        <AppComponent />
                    </Content>
                    <Footer>
                        <FooterTab style={styles.footer}>
                            <Button
                                vertical
                                style={
                                    this.state.selectedbtn == "1"
                                        ? styles.btnactive
                                        : styles.btnsegment
                                }
                                onPress={() => this.setState({ selectedbtn: "1" })}
                            >
                                <Icon
                                    style={
                                        this.state.selectedbtn == "1"
                                            ? styles.activeicone
                                            : styles.inactiveicone
                                    }
                                    name="home-sharp"
                                    type="Ionicons"
                                />
                                <Text numberOfLines={1}
                                    style={
                                        this.state.selectedbtn == "1"
                                            ? styles.activeText
                                            : styles.inactiveText
                                    }
                                >Home</Text>
                            </Button>
                            <Button
                                vertical
                                style={
                                    this.state.selectedbtn == "2"
                                        ? styles.btnactive
                                        : styles.btnsegment
                                }
                                onPress={() => this.setState({ selectedbtn: "2" })}
                            >
                                <Icon
                                    style={
                                        this.state.selectedbtn == "2"
                                            ? styles.activeicone
                                            : styles.inactiveicone
                                    }
                                    name="calendar-check"
                                    type="FontAwesome5"
                                />
                                <Text numberOfLines={1}
                                    style={
                                        this.state.selectedbtn == "2"
                                            ? styles.activeText
                                            : styles.inactiveText
                                    }
                                >My Orders</Text>

                            </Button>
                            <Button
                                verticalstyle={
                                    this.state.selectedbtn == "3"
                                        ? styles.btnactive
                                        : styles.btnsegment
                                }
                                onPress={() => this.setState({ selectedbtn: "3" })}
                            >
                                <Icon
                                    style={
                                        this.state.selectedbtn == "3"
                                            ? styles.activeicone
                                            : styles.inactiveicone
                                    }
                                    name="chatbubble-ellipses"
                                    type="Ionicons"
                                />
                                <Text numberOfLines={1}
                                    style={
                                        this.state.selectedbtn == "3"
                                            ? styles.activeText
                                            : styles.inactiveText
                                    }
                                >Chat</Text>

                            </Button>
                            {/* 
                            <Button
                                verticalstyle={
                                    this.state.selectedbtn == "5"
                                        ? styles.btnactive
                                        : styles.btnsegment
                                }
                                onPress={() => this.setState({ selectedbtn: "5" })}
                            >
                                <Icon
                                    style={
                                        this.state.selectedbtn == "5"
                                            ? styles.activeicone
                                            : styles.inactiveicone
                                    }
                                    name="clipboard-list" type="FontAwesome5"
                                />
                                <Text numberOfLines={1}
                                    style={
                                        this.state.selectedbtn == "5"
                                            ? styles.activeText
                                            : styles.inactiveText
                                    }
                                >Orders</Text>

                            </Button> */}
                            <Button
                                verticalstyle={
                                    this.state.selectedbtn == "4"
                                        ? styles.btnactive
                                        : styles.btnsegment
                                }
                                onPress={() => this.setState({ selectedbtn: "4" })}
                            >
                                <Icon
                                    style={
                                        this.state.selectedbtn == "4"
                                            ? styles.activeicone
                                            : styles.inactiveicone
                                    }
                                    name="more-horiz" type="MaterialIcons"
                                />
                                <Text numberOfLines={1}
                                    style={
                                        this.state.selectedbtn == "4"
                                            ? styles.activeText
                                            : styles.inactiveText
                                    }
                                >More</Text>

                            </Button>


                        </FooterTab>
                    </Footer>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },

    inactiveicone: {
        color: "gray",
        fontSize: 22,
    },
    activeicone: {
        color: "#8F49DE",
        fontSize: 25,
    },
    footer: {
        backgroundColor: "white",
        paddingVertical: 3
    },
    icon: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 40,
        color: "white",
    },
    name: {
        alignSelf: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 50,
        color: "white",
    },

    inactiveText: {
        color: "lightgray",
        fontSize: 11,
        fontWeight: 'bold',
        maxWidth: "100%",
    },
    activeText: {
        color: "#8F49DE",
        fontSize: 11,
        maxWidth: "100%",
        fontWeight: 'bold',
    },
});



export default Patient_Tab_Screen;

