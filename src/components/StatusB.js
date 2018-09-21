import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Constants } from 'expo';

export default props => {
	return (
		<View>
	        <View style={{ backgroundColor: '#000000', height: Constants.statusBarHeight }} />
	        <Text>aaa</Text>
			<TabBar {...props} />
		</View>
	);
}