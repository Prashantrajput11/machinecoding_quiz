import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Options from "./Options";
import { Question } from "../types";

type QuestionCard = {
	question: Question;
};
const QuestionCard = ({ question }: QuestionCard) => {
	const selectedOption = question.options[3];

	const onOptionSelected = (option: string) => {
		console.warn("hello ");
	};
	return (
		<View style={styles.questionCard}>
			<Text style={styles.question}>{question.title}</Text>

			<View style={styles.optionContainer}>
				{question.options.map((option) => (
					<Options
						key={option}
						option={option}
						isSelected={selectedOption === option}
						onPress={() => onOptionSelected(option)}
					/>
				))}
			</View>
		</View>
	);
};

export default QuestionCard;

const styles = StyleSheet.create({
	questionCard: {
		backgroundColor: "#fff",
		paddingVertical: 40,
		paddingHorizontal: 10,
		boxShadow: "5 4 20 0 rgba(140, 127, 127, 0.5)",
		borderRadius: 10,
	},
	question: {
		fontSize: 24,
		fontWeight: "500",
	},
	optionContainer: {
		gap: 20,
	},
});
