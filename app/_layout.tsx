import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import '../global.css';

const RootLayout = () => {
	return (
		<>
			<Text className="pb-12 w-full h-20 bg-gray-200"></Text>
			<View className="flex-1">
				<Slot />
			</View>
		</>
	);
};

export default RootLayout;

const styles = StyleSheet.create({});
