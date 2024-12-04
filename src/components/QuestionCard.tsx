import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Options from "./Options";
import { Question } from "../types";
import Card from "./Card";
import { useQuizContext } from "../providers/QuizProvider";

type QuestionCard = {
	question: Question;
};
const QuestionCard = ({ question }: QuestionCard) => {
	// const selectedOption = question.options[3];

	return (
		<Card title={question.title}>
			<View style={styles.optionContainer}>
				{question.options.map((option) => (
					<Options key={option} option={option} />
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
