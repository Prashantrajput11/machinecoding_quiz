import {
	Button,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useContext, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";
import Card from "../components/Card";
import CButton from "../components/CButton";
import { QuizContext, useQuizContext } from "../providers/QuizProvider";

const QuizScreen = () => {
	// const [currentIndex, setCurrentIndex] = useState(0);

	const { question, currentIndex } = useQuizContext();

	// // derived state
	// const question = questions[currentIndex];

	const isQuizFinished = currentIndex >= questions.length;

	const handleNext = () => {
		// if (!isQuizFinished) {
		// 	setCurrentIndex((prevIndex) => prevIndex + 1);
		// }
	};
	return (
		<SafeAreaView style={styles.page}>
			<View style={styles.container}>
				{!isQuizFinished && (
					<View>
						<Text>
							Question {currentIndex + 1} / {questions.length}
						</Text>
					</View>
				)}

				{!isQuizFinished ? (
					<View>
						<QuestionCard question={question} />

						<Text style={styles.time}>20 sec</Text>
					</View>
				) : (
					<Card title="Quiz Finished">
						<Text style={{ gap: 10 }}>{currentIndex}</Text>
					</Card>
				)}

				<CButton
					onPress={handleNext}
					onLongPress={() => console.log("long pressed")}
					title="Next"
					rightIcon={
						<FontAwesome6
							name="arrow-right-long"
							size={16}
							color="white"
							// style={styles.buttonIcon}
						/>
					}
				/>
			</View>
		</SafeAreaView>
	);
};

export default QuizScreen;

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	container: {
		backgroundColor: "#fff",
		flex: 1,
		justifyContent: "space-between",
		padding: 20,
	},
	time: {
		textAlign: "center",
		marginTop: 15,
		color: "green",
	},
});
