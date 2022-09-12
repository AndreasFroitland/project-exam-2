import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import { ContainerHotels, StyleHotels } from "../layout/StyleHotels";

export default function HotelsList() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        async function getHotels() {
            try {
                const response = await fetch(BASE_URL + "wp/v2/hotel");
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
                    <ContainerHotels key={hotel.id}>
                        <StyleHotels>
                            <img src={hotel.hotel_featured_image.guid} alt={hotel.hotel_name}/>
                            <h1>{hotel.hotel_name}</h1>
                            <p>Price range from {hotel.hotel_price}$</p>
                            <p>Hotel rating: {hotel.hotel_rating}</p>
                            <p>Hotel reviews: {hotel.hotel_reviews}</p>
                            <Link to={`details/${hotel.id}`} key={hotel.id}>
                                <p>Read more</p>
                            </Link>
                        </StyleHotels>
                    </ContainerHotels>
                );
			})}
        </div>
	);
}

