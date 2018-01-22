/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';

import {
    Platform,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import MainView from './src/MainView/MainView';
import DemoListConfig from './src/config/DemoListConfig';

const RouteConfigs = {
    Main: {
        screen: MainView, 
        navigationOptions: {
            title: 'RNStarter'
        }
    }
};

DemoListConfig.forEach((item) => {
    RouteConfigs[item.title] = {
        screen: item.component
    }
});

const App = StackNavigator(RouteConfigs, {
    initialRouteName: 'Main',
    mode: 'card',                                                   // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen',                                           // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: () => { console.log('transition start'); },  // 回调
    onTransitionEnd: () => { console.log('transition end'); }       // 回调
});

export default App;
