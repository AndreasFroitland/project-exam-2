import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { BASE_URL } from "../../../constants/api"

export default function MessagesList() {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMessages() {
			try {
				const response = await http.get(BASE_URL + "contact-form-7/v1/contact-forms/136", {
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
		<ul className="messages__list">
			{messages.map((data) => {
				return (
					<div>
						{data.properties.form.content}
					</div>
				);
			})}
		</ul>
	);
}