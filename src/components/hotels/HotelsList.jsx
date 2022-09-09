import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

export default function HotelsList() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        async function getHotels() {
            try {
                const response = await fetch(BASE_URL + "wp/v2/product");
                const json = await response.json();

                setHotels(json);

            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        getHotels();
    }, []);

    if (loading) return <div>Loading hotels...</div>;

	if (error) return <div>{}</div>;

    return (
        <div className="hotels">
            {hotels.map((hotel) => {
                return (
                    <div key={hotel.id}>
                    <Link to={`details/${hotel.id}`} key={hotel.id}>
                        <p>{hotel.title.rendered}</p>
                    </Link>
                    </div>
                );
			})}
        </div>
	);
}

