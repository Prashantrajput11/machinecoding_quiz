import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";

// two ways to add types for children

type Card = PropsWithChildren<{
	title: string;
}>;

// type Card = {
// 	title: string;
// 	children: React.ReactNode;
// };
const Card = ({ title, children }: Card) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{children}
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		paddingVertical: 40,
		paddingHorizontal: 10,
		boxShadow: "5 4 20 0 rgba(140, 127, 127, 0.5)",
		borderRadius: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		paddingVertical: 12,
	},
});
