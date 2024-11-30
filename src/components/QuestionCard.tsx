import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Options from "./Options";

type QuestionProps = {
	question: {
		title: string;
		options: string[];
	};
};
const QuestionCard = ({ question }: QuestionProps) => {
	return (
		<View style={styles.questionCard}>
			<Text style={styles.question}>{question.title}</Text>

			<View style={styles.optionContainer}>
				<Options option={question.options[0]} />
				<Options option={question.options[1]} />
				<Options option={question.options[2]} />
				<Options option={question.options[3]} />
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