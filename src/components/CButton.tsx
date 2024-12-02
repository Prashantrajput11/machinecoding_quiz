import {
	Pressable,
	StyleSheet,
	Text,
	View,
	PressableProps,
} from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type CButton = {
	title: string;
	rightIcon: React.ReactNode;
} & PressableProps;

// spread additional props props
// title and rightIcon are  our own custom props
const CButton = ({ title, rightIcon, ...pressableProps }: CButton) => {
	console.log(pressableProps);

	return (
		<Pressable
			style={styles.button}
			// onPress={onPress}
			// onLongPress={onLongPress}
			{...pressableProps}
		>
			<Text style={styles.buttonText}>{title} </Text>
			<View style={styles.buttonIcon}>{rightIcon}</View>
		</Pressable>
	);
};

export default CButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#005055",
		padding: 20,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
	},
	buttonIcon: {
		position: "absolute",
		right: 20,
	},
});
