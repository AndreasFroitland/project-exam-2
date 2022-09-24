import { ESTABLISHMENTS } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";
import { ContainerEstablishments,
         StyleEstablishments,
         StyleImage,
         StyleRating,
         StyleLink } from "../layout/StyleEstablishments";

export default function EstablishmentsList() {
    const { data } = useFetch(ESTABLISHMENTS);

    return (
        <div className="establishments">
            {data.map((establishments) => {
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

