import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import { ContainerEstablishments, StyleEstablishments, StyleImage, StyleRating, StyleLink } from "../layout/StyleEstablishments";

export default function EstablishmentsList() {
    const [establishments, setEstablishments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        async function getEstablishments() {
            try {
                const response = await fetch(BASE_URL + "wp/v2/hotel");
                const json = await response.json();

                setEstablishments(json);

            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        getEstablishments();
    }, []);

    if (loading) return <div>Loading establishments...</div>;

	if (error) return <div>{}</div>;

    return (
        <div className="establishments">
            {establishments.map((establishments) => {
                return (
                    <ContainerEstablishments key={establishments.id}>
                        <StyleEstablishments>
                            <StyleImage src={establishments.hotel_featured_image.guid} alt={establishments.hotel_name}/>
                        </StyleEstablishments>
                        <StyleEstablishments>
                            <h1>{establishments.hotel_name}</h1>
                            <StyleRating>{establishments.hotel_rating}</StyleRating>
                            <p>Price range from {establishments.hotel_price}$</p>
                            <StyleLink to={`details/${establishments.id}`} key={establishments.id}>
                                Read more
                            </StyleLink>
                        </StyleEstablishments>
                    </ContainerEstablishments>
                );
			})}
        </div>
	);
}

