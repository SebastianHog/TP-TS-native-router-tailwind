import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function App() {
	return (
		<View className="w-full h-full items-center justify-center">
			<Text className="font-bold text-5xl">Index page</Text>
			<Link href="/about">about</Link>
		</View>
	);
}
