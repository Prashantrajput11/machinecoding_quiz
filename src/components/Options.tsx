import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Option = {
	option: string;
	isSelected?: boolean;
};
const Options = ({ option, isSelected }: Option) => {
	return (
		<View
			style={[
				styles.optionContainer,
				isSelected ? { backgroundColor: isSelected ? "red" : "purple" } : null,
				// { backgroundColor: isSelected ? "red" : "purple" },
			]}
		>
			<Text>{option}</Text>
		</View>
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
