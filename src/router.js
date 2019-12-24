import React, { PureComponent } from 'react'
import { StatusBar, View, StyleSheet, Image, Dimensions } from 'react-native'
import { KeyboardAvoidingView, Platform, AsyncStorage } from 'react-native'
import { p } from './Config/normalize';
import Cache from "./Config/cache"
import FlashMessage from "react-native-flash-message";
import * as ROUTER from './Components/routers'
import { images } from './Config/images';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default class Router extends PureComponent {

    constructor() {
        super();
        this.state = {
            authed: 0
        };
    }

    componentDidMount() {
        this._retrieveData()
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

    render() {

        const { authed } = this.state

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null} enabled
                style={{ flex: 1 }}
            >
                <MyStatusBar backgroundColor="#2699FB" barStyle="light-content" />
                  {
                    authed == 0
                        ? (<Image source={images.splash} style={{ width, height}}/>)
                        : (authed == 2
                            ? <ROUTER.MainPage logout={()=>this.setState({ authed: 1 })}/>
                            : <ROUTER.AuthPage login={()=>this.setState({ authed: 2 })}/>)
                  }
                <FlashMessage position={{ bottom: 0 }} />
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
        backgroundColor: '#2699FC',
    },
});