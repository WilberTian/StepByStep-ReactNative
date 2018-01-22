import React, { PureComponent } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    PixelRatio
} from 'react-native';

export default class Demo01 extends PureComponent {
	static navigationOptions = ({ navigation }) => {
	    const { params } = navigation.state;

	    return {
	        title: params.title,
	        headerRight: <Button title="Alert" onPress={() => { alert('Button clicked!'); }}/>
	    };
	};

	render() {
		return (
            <View style={styles.container}>
                <Text>
                	Hello Demo01
                </Text>
            </View>
        );
	}
}

const styles = StyleSheet.create({
    container: {
    }
});
