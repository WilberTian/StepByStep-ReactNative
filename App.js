/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    PixelRatio
} from 'react-native';

import Dimensions from 'Dimensions';

import FaIcon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('window');
const pixel = 1 / PixelRatio.get();

const items = [
    {
        title: '01',
        icon: 'cogs'
    },
    {
        title: '02',
        icon: 'cogs'
    },
    {
        title: '03',
        icon: 'cogs'
    },
    {
        title: '04',
        icon: 'cogs'
    },
    {
        title: '05',
        icon: 'cogs'
    }
];

const iconSize = 24;

export default class App extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                {items.map((item, index) => {
                    const styleList = [styles.item, styles.brBorder];

                    if (index < 3) {
                        styleList.push(styles.tBorder);
                    }

                    return (
                        <View style={styleList} key={index}>
                            <Text>
                                {item.title}
                            </Text>
                            <FaIcon  style={styles.iconStyle} name={item.icon} size={iconSize} />
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 63,
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'flex-start',
        backgroundColor: '#e1e1e1'

    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: width / 3,
        height: width / 3
    },
    brBorder: {
        borderBottomWidth: pixel,
        borderRightWidth: pixel,
        borderColor: '#d7d7d7'
    },
    tBorder: {
        borderTopWidth: pixel,
        borderColor: '#d7d7d7'
    },
    iconStyle: {
        padding: 8
    }
});
