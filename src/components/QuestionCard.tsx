import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Options from "./Options";
import { Question } from "../types";
import Card from "./Card";

type QuestionCard = {
	question: Question;
};
const QuestionCard = ({ question }: QuestionCard) => {
	const selectedOption = question.options[3];

	const onOptionSelected = (option: string) => {
		console.warn("hello ");
	};
	return (
		<Card title={question.title}>
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
		</Card>
	);
};

export default QuestionCard;

const styles = StyleSheet.create({
	optionContainer: {
		gap: 20,
	},
});
