import { CONTACT } from "../../../constants/api";
import { useFetch } from "../../../hooks/useFetch";
import { ContainerMessage, StyleMessage } from "../../layout/StyleDashboard";

export default function MessagesList() {
	const { data } = useFetch(CONTACT);

	return (
		<div>
			{data.map((message) => {
				return (
					<ContainerMessage>
						<StyleMessage>
						    <p>Name: {message.column_7}</p>
						    <p>E-mail: {message.column_8}</p>
						    <p>Message: {message.column_9}</p>
						</StyleMessage>
					</ContainerMessage>
				);
			})}
		</div>
	);
}