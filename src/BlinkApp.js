import React, { Component } from 'react';
import { Text, View } from 'react-native';

// class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { showText: true };
//
//         // 每1000毫秒对showText状态做一次取反操作
//         setInterval(() => {
//             this.setState(previousState => {
//                 return { showText: !previousState.showText };
//             });
//         }, 500);
//     }
//
//     render() {
//         // 根据当前showText的值决定是否显示text内容
//         let display = this.state.showText ? this.props.text : '湖南米酒 纯粮酿造';
//         return (
//             <Text>{display}</Text>
//         );
//     }
// }
class Verificat extends Component{

    constructor(props){
        super(props);
        this.state = { pushText:true };

        setInterval(()=> {
            this.setState(previouState => {
                return {pushText: !previouState.pushText};
            });
        }, 500);
    }
    render(){
        let display = this.state.pushText ? this.props.text : '你好吗';
        return (
            <Text>{display}</Text>
        )
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>

                <Verificat text='欢迎光临 本直播间' />

            </View>
        );
    }
}