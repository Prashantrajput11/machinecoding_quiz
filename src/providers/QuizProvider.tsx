import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";
import questions from "../questions";
import { Question } from "../types";

type QuizContext = {
	question?: Question;
	currentIndex: number;
};
export const QuizContext = createContext<QuizContext>({
	currentIndex: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
	const [currentIndex, setCurrentIndex] = useState(1);

	const question = questions[currentIndex];
	return (
		<QuizContext.Provider value={{ currentIndex, question }}>
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
