import {
	Button,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";

const QuizScreen = () => {
	const question = questions[3];
	return (
		<SafeAreaView style={styles.page}>
			<View style={styles.container}>
				<View>
					<Text>Question 1/ 5</Text>
				</View>

				<View>
					<QuestionCard question={question} />

					<Text style={styles.time}>20 sec</Text>
				</View>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Next </Text>

					<FontAwesome6
						name="arrow-right-long"
						size={16}
						color="white"
						style={styles.buttonIcon}
					/>
				</Pressable>
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
	button: {
		backgroundColor: "#005055",
		padding: 20,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
	},
	buttonIcon: {
		position: "absolute",
		right: 20,
	},
});
