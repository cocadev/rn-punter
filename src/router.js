import React, { PureComponent } from 'react'
import { Image, StatusBar, View, StyleSheet } from 'react-native'
import { images } from './Config/images'
import { KeyboardAvoidingView, Platform, Dimensions, AsyncStorage } from 'react-native'
import * as Font from 'expo-font'
import * as ROUTER from './Components/routers'
import Cache from "./Config/cache"
import FlashMessage from "react-native-flash-message";
import { p } from './Config/normalize';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
  

export default class Router extends PureComponent {

    constructor() {
        super();
        this.state = {
            fontLoaded: false,
            authed: 0
        };
    }

    async componentDidMount() {
        console.log('Cache.COMPANY_ID', Cache.COMPANY_ID)
        await this._loadAssets();
        // this._retrieveData()
    }

    _retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('TOKEN');
            if (token !== null) {
                Cache.ACCESS_TOKEN = token;
                this.setState({ authed: 2 })
            } else {
                this.setState({ authed: 1 })
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    async _loadAssets() {
        await Font.loadAsync({
            // 'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        });
        console.log('fonts loaded!');
        this.setState({ fontLoaded: true });
    }

    async loggedIn(res) {
        Cache.ACCESS_TOKEN = res.success.access_token;
        Cache.COMPANY_ID = res.success.company_id;
        Cache.EMAIL = res.success.email;
        Cache.ID = res.success.id;
        try {
            await AsyncStorage.setItem('TOKEN', res.success.access_token);
            await AsyncStorage.setItem('EMAIL', res.success.email);
        } catch (error) {
            console.log('** **', error)
        }
        this.setState({ authed: 2 })
    }

    async logOut() {
        try {
            await AsyncStorage.clear();
        } catch (error) {

        }
        this.setState({ authed: 1 })
    }

    render() {

        const { fontLoaded, authed } = this.state

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{ flex: 1 }}>

                <MyStatusBar backgroundColor="#2699FB" barStyle="light-content" />
                {fontLoaded == true ? (
                    authed == 2 ? <ROUTER.MainPage signOut={() => this.logOut()} /> : <ROUTER.AuthPage logIn={(res) => this.loggedIn(res)} />
                )
                : <Image source={images.splash} style={{ width, height }} />}
                <FlashMessage position={{ bottom: p(0)}} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    statusBar: {
      height: 24,
    },
    content: {
      flex: 1,
      backgroundColor: '#2699FB',
    },
  });