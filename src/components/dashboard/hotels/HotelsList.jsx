import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

export default function HotelsList() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/hotel");
				console.log("response", response);
				setHotels(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>Loading hotels...</div>;

	if (error) return <div>{}</div>;

	return (
		<ul className="product__list">
			{hotels.map((media) => {
				return (
					<li key={media.id}>
						{media.hotel_name}
					</li>
				);
			})}
		</ul>
	);
}