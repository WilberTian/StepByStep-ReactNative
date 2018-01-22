import React, { PureComponent } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    PixelRatio
} from 'react-native';

import Dimensions from 'Dimensions';

import FaIcon from 'react-native-vector-icons/FontAwesome';

import DemoListConfig from '../config/DemoListConfig';

const { width, height } = Dimensions.get('window');
const pixel = 1 / PixelRatio.get();

const iconSize = 24;

export default class MainView extends PureComponent {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                {DemoListConfig.map((item, index) => {
                    const styleList = [styles.item, styles.brBorder];

                    if (index < 3) {
                        styleList.push(styles.tBorder);
                    }

                    return (
                        <TouchableHighlight key={index} onPress={() => navigate(item.title, item) }>
                            <View style={styleList}>
                                <Text>
                                    {item.title}
                                </Text>
                                <FaIcon style={styles.iconStyle} name={item.icon} size={iconSize} />
                            </View>
                        </TouchableHighlight>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
