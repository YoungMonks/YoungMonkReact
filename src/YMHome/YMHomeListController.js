import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';
export default class YMHomeListController extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    传参: {this.props.name}
                </Text>
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
        margin: 10,
    },
});
