
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    AlertIOS,
    PixelRatio,
    Image
} from 'react-native';

// import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
// import HomeScreen from './pages/HomePage';
// import MineScreen from './pages/MinePage';


import YMHomeList from './YMHomeListController'


export default class YMHomeController extends Component<{}> {

    constructor(props, context) {
        super(props, context);
        this._onPressed = this._onPressed.bind(this);
    }

    _onPressed(){
        // AlertIOS.alert("点击了")
        this.props.navigator.push({
            component: YMHomeList,
            title: '列表信息',
            passProps: {name: 'Mid'},
            leftButtonTitle: "＜返回",
            onLeftButtonPress: ()=>{
                this.props.navigator.pop()
            }, //左侧按钮点击事件
        })
    }

    render(){

        return (
            <View style={styles.container}>
                <Image style={styles.PixelRatioImage} source={require('../YMImage/aliyun.jpg')}/>



                <TouchableOpacity onPress={this._onPressed} activeOpacity={1}>
                    <Text style={styles.welcome}>
                        跳转list
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        alignContent: 'center',
        height:45,
        width:80,
        margin:10,
        backgroundColor: 'yellow',
    },
    PixelRatioImage:{
        // height:100/PixelRatio.get(),//获取当前屏幕的值
        // width:100/PixelRatio.get(),
        height:PixelRatio.getPixelSizeForLayoutSize(100),//为布局大小获取像素大小（dp转化为px）
        width:PixelRatio.getPixelSizeForLayoutSize(100),
        // height:PixelRatio.roundToNearestPixel(100),//转到最近的像素
        // width:PixelRatio.roundToNearestPixel(100),
        // height:PixelRatio.getFontScale(100),//字体规模（在安卓上面实现的，iOS中返回默认）
        // width:PixelRatio.getFontScale(100),
    },
});