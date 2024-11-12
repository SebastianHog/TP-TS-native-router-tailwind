import { View, Text } from 'react-native';
import { Link } from 'expo-router';

function About() {
	return (
		<View className="w-full h-full items-center justify-center">
			<Text className="font-bold text-5xl">About page</Text>
			<Link href="/">index</Link>
		</View>
	);
}

export default About;
