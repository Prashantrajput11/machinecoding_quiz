import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuizContext } from "../providers/QuizProvider";

type Option = {
	option: string;
};

const Options = ({ option }: Option) => {
	const { selectedOption, setSelectedOption } = useQuizContext();

	const isSelected = option === selectedOption;
	return (
		<Pressable
			onPress={() => setSelectedOption(option)}
			style={[
				styles.optionContainer,
				isSelected ? styles.selectedOption : styles.defaultOption,
			]}
		>
			<Text style={[styles.optionText, isSelected && styles.selectedText]}>
				{option}
			</Text>
		</Pressable>
	);
};

export default Options;

const styles = StyleSheet.create({
	optionContainer: {
		paddingVertical: 14,
		paddingHorizontal: 16,
		borderRadius: 25,
		marginVertical: 8,
		borderWidth: 2,
		borderColor: "lightgray",
		alignItems: "center",
	},
	defaultOption: {
		backgroundColor: "white",
	},
	selectedOption: {
		backgroundColor: "red",
		borderColor: "red",
	},
	optionText: {
		fontSize: 16,
		fontWeight: "500",
		color: "black",
	},
	selectedText: {
		color: "white",
	},
});
