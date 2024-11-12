import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import { Slot } from 'expo-router';
import '../global.css';

export function RootLayout() {
	return (
		<>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ headerShown: false }}
				/>
			</Stack>
		</>
	);
}

export default Slot;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#369aec',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
