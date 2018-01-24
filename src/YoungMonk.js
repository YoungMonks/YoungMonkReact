import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
export default class YoungMonk extends Component<{}> {


    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{width: 480,alignItems: 'center',justifyContent: 'center', backgroundColor: 'yellow',}}>

                {/*props属性的使用*/}
                <Text>欢迎光临 本直播间 {this.props.name}</Text>

                <Image source={pic} style={{width: 193, height: 110}} />

                <Text style={{justifyContent: 'center', height: 50,textAlign:'center',margin: 10,}}> 天心米酒</Text>

            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});