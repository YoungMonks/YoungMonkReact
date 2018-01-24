
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    AlertIOS,
    Alert,
    ActionSheetIOS,
    Image,
    TextInput,
    PixelRatio,
    ImageBackground,



} from 'react-native';


import YMHomeController from './YMHome/YMHomeController'


export default class YMLogin extends Component<{}> {

    constructor(props, context) {
        super(props, context);
        this._onPressed = this._onPressed.bind(this);
        this.onPush = this.onPush.bind(this);
        this.state = {text: ''};

    }


    _onPressed(){

        //alert的使用方法
        // AlertIOS.alert("登录成功了")
        // AlertIOS.alert("请注意\n账号或密码错误")
        // Alert.alert('登录成功了')
        Alert.alert('请注意\n账号或密码错误')
        // this.props.navigator.push({
        //     component: YMHomeController,
        //     leftButtonTitle: " ",
        //     onLeftButtonPress: ()=> {
        //
        //     },
        //     title: '首页',
        // })
    }
    onPush(){
        // if(this.state.nameT){
        //
        // }
        this.props.navigator.push({
            component: YMHomeController,
            leftButtonTitle: " ",
            onLeftButtonPress: ()=> {

            },
            title: '首页',
        })
}

    //弹出表格
    onSheet(){

        ActionSheetIOS.showActionSheetWithOptions({
            options: [
                '第一个',
                '第二个',
                '第三个',
                '删除',
                '取消',

            ],
            title:'YoungMonk',//标题

            cancelButtonIndex: 4,//取消按钮的位置
            destructiveButtonIndex: 3//删除按钮的位置
        },function(index){
            Alert.alert('刚才点击的是：\n第' + index+'个');//弹出框
        })
    }
    //弹出分享框
    onShare() {
        ActionSheetIOS.showShareActionSheetWithOptions({
            url: 'http://www.baidu.com',
        },function(error){
            // alert(error)
        },function(e){
            // alert(e);
        })
    }

    render(){

        return (


            <View  style={{flex: 1}}>
                <ImageBackground style={styles.container} source={require('./YMImage/loginImage.png')} resizeMode='cover'>

                    <View  style={{height:150,justifyContent: 'center',alignItems: 'center',backgroundColor: 'transparent',}} >
                        <Text style={{fontSize: 40,flex:1,color:'white',}}> 滴  水  助  学 </Text>
                    </View>
                    <View  style={styles.loginView} >

                        <ImageBackground style={styles.loginView} source={require('./YMImage/icon_logo_textbg.png')} resizeMode='cover'>
                            <View  style={styles.loginView} >

                                <TextInput
                                    style={styles.textStyle}
                                    placeholder="请输入用户名或手机号"
                                    ref="nameText"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(text) => this.setState({text})}
                                />

                                <TextInput
                                    style={styles.textStyle}
                                    placeholder="请输入您的密码"
                                    ref="passText"
                                    underlineColorAndroid="transparent"
                                    secureTextEntry={true}
                                    onChangeText={(text) => this.setState({text})}
                                />
                            </View>

                        </ImageBackground>

                        <TouchableOpacity style={styles.loginPush} onPress={this.onPush} activeOpacity={1}>
                            <Image style={{height:52,width:52,}} source={require('./YMImage/iconLogin.png')}/>
                        </TouchableOpacity>
                        <Text style={{height:1,position: 'absolute',left:10,right:30,top:50,backgroundColor:'#BEBEBE',}}></Text>
                        <Image style={{height:23,width:20,position: 'absolute',left:10,top:14}} source={require('./YMImage/loginName.png')}/>
                        <Image style={{height:23,width:20,position: 'absolute',left:10,top:62}} source={require('./YMImage/loginPass.png')}/>
                    </View>
                    <View  style={styles.bgView} >


                        <Text style={{height:1,width:100,position: 'absolute',left:10,bottom:15,backgroundColor:'white',}}></Text>

                        <TouchableOpacity onPress={this.onSheet} activeOpacity={1} style={styles.button3} >
                            <Text style={{fontSize: 20,textAlign: 'center',alignContent: 'center',color:'white',}} > 注册 </Text>
                        </TouchableOpacity>

                        <Text style={{height:1,width:100,position: 'absolute',right:10,bottom:15,backgroundColor:'white',}}></Text>

                        {/*<TouchableOpacity onPress={this.onSheet} activeOpacity={1}>*/}
                            {/*<Text style={styles.button1} >*/}
                                {/*弹出*/}
                            {/*</Text>*/}
                        {/*</TouchableOpacity>*/}
                        {/*<TouchableHighlight onPress={this._onPressed} activeOpacity={1}>*/}
                            {/*<Text style={styles.button2}>*/}
                                {/*登录*/}
                            {/*</Text>*/}
                        {/*</TouchableHighlight>*/}

                        {/*<Button*/}
                            {/*onPress={this.onShare} title="分享" color="red" style={styles.button3}*/}
                        {/*/>*/}

                    </View>
                </ImageBackground>
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
    loginView: {
        height:100,
        width:250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
        loginPush: {
        height:52,
        width:52,
            borderRadius:26,
        backgroundColor: 'white',
        position: 'absolute',
        right:-26,
        top:24
    },
    bgView: {
        height:100,
        width:320,
        // position: 'absolute',
        // left:10,
        // // top:14,
        // right:10,
        // bottom:300,

        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    PixelRatioImage:{
        // height:100/PixelRatio.get(),//
        // width:100/PixelRatio.get(),
        // height:PixelRatio.getPixelSizeForLayoutSize(100),//为布局大小获取像素大小（dp转化为px）
        // width:PixelRatio.getPixelSizeForLayoutSize(100),
        height:PixelRatio.roundToNearestPixel(100),//转到最近的像素
        width:PixelRatio.roundToNearestPixel(100),
        // height:PixelRatio.getFontScale(100),//字体规模（在安卓上面实现的，iOS中返回默认）
        // width:PixelRatio.getFontScale(100),
    },
    textStyle: {
        fontSize: 16,
        height:50,
        width:170,
        textAlign: 'left',
        // backgroundColor: 'white',
        // borderColor:'red',
        // borderWidth:1,
        // borderRadius:5,
    },

    button1: {
        fontSize: 20,
        textAlign: 'center',
        height:50,
        width:80,
        margin: 5,
        paddingTop:12,
        backgroundColor: 'red',
    },
    button2: {
        fontSize: 20,
        textAlign: 'center',
        alignContent: 'center',
        height:45,
        width:80,
        margin: 10,
        paddingTop: 12,

        backgroundColor: 'yellow',
    },
    button3: {
        height:30,
        position: 'absolute',
        right:110,
        left:110,
        backgroundColor: 'transparent',
        bottom:0
    },

    item:{
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'blue',
        textAlign:'center'
    },


});