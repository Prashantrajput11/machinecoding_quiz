import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Option = {
	option: string;
	isSelected?: boolean;
	onPress: () => void;
};
const Options = ({ option, isSelected, onPress }: Option) => {
	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.optionContainer,
				isSelected ? { backgroundColor: isSelected ? "red" : "purple" } : null,
				// { backgroundColor: isSelected ? "red" : "purple" },
			]}
		>
			<Text>{option}</Text>
		</Pressable>
	);
};

export default Options;

const styles = StyleSheet.create({
	optionContainer: {
		backgroundColor: "yellow",
		borderWidth: 2,
		borderColor: "lightgray",
		// gap: 10,
		paddingVertical: 12,
		paddingHorizontal: 6,
		borderRadius: 100,
	},
});
