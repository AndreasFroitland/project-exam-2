import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

export default function MessagesList() {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMessages() {
			try {
				const response = await http.get("wp/v2/messages");
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
			{messages.map((message) => {
				return (
					<div key={message.id}>
						{message.fullname}
                        <div>
                        {message.message}
                        </div>
					</div>
				);
			})}
		</ul>
	);
}