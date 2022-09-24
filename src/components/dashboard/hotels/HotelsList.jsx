import { ESTABLISHMENTS } from "../../../constants/api";
import { useFetch } from "../../../hooks/useFetch";

export default function HotelsList() {
	const { data } = useFetch(ESTABLISHMENTS);

	return (
		<ul>
			{data.map((establishment) => {
				return (
					<li key={establishment.id}>
						{establishment.hotel_name}
					</li>
				);
			})}
		</ul>
	);
}