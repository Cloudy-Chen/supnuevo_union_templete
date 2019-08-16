import React, {Component} from 'react'import {    StyleSheet,    View,    Text,    ScrollView,    TouchableOpacity,    TouchableHighlight,    Dimensions,    TextInput,    Alert,    Platform,    WebView} from 'react-native'import constants from '../MapConstants';import colors from '../../../../resources/colors';import {SCREEN_WIDTH} from "../../../../utils/tools";const patchPostMessageFunction = function() {    var originalPostMessage = window.postMessage;    var patchedPostMessage = function(message, targetOrigin, transfer) {        originalPostMessage(message, targetOrigin, transfer);    };    patchedPostMessage.toString = function() {        return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');    };    window.postMessage = patchedPostMessage;};const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';export default class MicrosoftMap extends Component {    constructor(props) {        super(props);        this.state = {            loaded: false,            pin: {                title:'Laprida 2843',                longitude:'-58.493737',                latitude:'-34.542982',            },        };        this._handleMessage = this._handleMessage.bind(this);    }    render() {        return (            <View style={styles.container}>                <View style={styles.mapContainer}>                    <WebView                        ref={ref => this._microsoftMap = ref}                        style={{flex: 1}}                        source={Platform.OS === 'ios'?require('./mmap.html'):{uri:'file:///android_asset/map_view.html'}}                        domStorageEnabled={true}                        javaScriptEnabled={true}                        onMessage={(event) => {this._handleMessage(event)}}                        onLoad={()=>this._onLoad()}                        injectedJavaScript={patchPostMessageJsCode}                    />                </View>            </View>        )    }    _onLoad = () => {        if(this.state.loaded) return;        // webView 加载地图完毕后，发送超市地点的地理经纬度        const {merchants, edges} = this.props;        const mapData = {merchants:merchants,edges:edges};        this._postMessage(constants.POI,mapData);        this.setState({loaded: true})    }    _postMessage = (command,data) => this._microsoftMap.postMessage(JSON.stringify({        command:command,        data:data,    }))    _handleMessage = (event) => {        const msgData = JSON.parse(event.nativeEvent.data)        switch (msgData.command) {            case constants.POI:break;            case constants.CLICK:                if(msgData.data)this.setState({pin:msgData.data});                break;        }    }    _showPinInfo = (pin) => {if(pin)return pin.title + ':(' + pin.latitude + ',' + pin.longitude + ')'}}const styles = StyleSheet.create({    container: {        flex: 1,        flexDirection: 'column',        width: SCREEN_WIDTH,        padding:10,    },    mapContainer: {        flex:1,        borderWidth: 1,        borderColor: colors.primaryGray,    },    mapMarker: {        position: 'absolute',        width: constants.ICON_WIDTH,        height: constants.ICON_HEIGHT,        alignItems: 'center',        justifyContent: 'center'    },    pinText: {        fontSize:14,    }})