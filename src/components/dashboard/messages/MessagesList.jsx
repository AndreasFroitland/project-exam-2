import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import { ContainerMessage, StyleMessage } from "../../layout/StyleDashboard";

export default function MessagesList() {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function getMessages() {
			try {
				const response = await axios.get(BASE_URL + "mo/v1/contactform", {
					headers: {
						'Content-type': 'multipart/form-data'
					}
				});
				console.log("response", response);
				setMessages(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMessages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>Loading messages...</div>;

	if (error) return <div>{}</div>;

	return (
		<div>
			{messages.map((data) => {
				return (
					<ContainerMessage>
						<StyleMessage>
						    <p>Name: {data.column_7}</p>
						    <p>E-mail: {data.column_8}</p>
						    <p>Message: {data.column_9}</p>
						</StyleMessage>
					</ContainerMessage>
				);
			})}
		</div>
	);
}