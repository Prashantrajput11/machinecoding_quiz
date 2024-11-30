import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Option = {
	option: string;
};
const Options = ({ option }: Option) => {
	return (
		<View style={styles.optionContainer}>
			<Text>{option}</Text>
		</View>
	);
};

export default Options;

const styles = StyleSheet.create({
	optionContainer: {
		borderWidth: 2,
		borderColor: "lightgray",
		// gap: 10,
		paddingVertical: 12,
		paddingHorizontal: 6,
		borderRadius: 100,
	},
});
