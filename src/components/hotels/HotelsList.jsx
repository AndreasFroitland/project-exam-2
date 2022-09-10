import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import { ContainerHotels, StyleHotelsLeft, StyleHotelsRight } from "../layout/StyleHotels";

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
                    <ContainerHotels key={hotel.id}>
                        <StyleHotelsLeft>
                          <h1>{hotel.title.rendered}</h1>
                            <Link to={`details/${hotel.id}`} key={hotel.id}>
                                <p>Read more</p>
                            </Link>
                        </StyleHotelsLeft>
                        <StyleHotelsRight>
                            <img src={hotel.better_featured_image.source_url} alt={hotel.title.rendered}/>
                        </StyleHotelsRight>
                    </ContainerHotels>
                );
			})}
        </div>
	);
}

