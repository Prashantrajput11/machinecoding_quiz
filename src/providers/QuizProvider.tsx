import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";
import questions from "../questions";
import { Question } from "../types";

type QuizContext = {
	question?: Question;
	currentIndex: number;
	isQuizFinished: boolean;
	selectedOption?: string;
	setSelectedOption: (option: string) => void;
	handleNext: () => void;
	handleRestart: () => void;
	score: number;
};
export const QuizContext = createContext<QuizContext>({
	currentIndex: 0,
	isQuizFinished: false,
	handleNext: () => {},
	setSelectedOption: () => {},
	handleRestart: () => {},
	score: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [selectedOption, setSelectedOption] = useState<undefined | string>();
	const [score, setScore] = useState(0);

	const question = questions[currentIndex];

	const isQuizFinished = currentIndex >= questions.length;

	const handleNext = () => {
		if (!isQuizFinished) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		}
		if (selectedOption === question?.correctAnswer) {
			setScore((score) => score + 1);
		}
	};

	const handleRestart = () => {
		setCurrentIndex(0);
	};

	return (
		<QuizContext.Provider
			value={{
				currentIndex,
				question,
				handleNext,
				handleRestart,
				isQuizFinished,
				selectedOption,
				setSelectedOption,
				score,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

// helper hook

export const useQuizContext = () => {
	const context = useContext(QuizContext);
	if (!context) {
		throw new Error("useQuizContext must be used within a QuizProvider");
	}
	return context;
};

const styles = StyleSheet.create({});
