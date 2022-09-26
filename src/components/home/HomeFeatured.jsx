import { ESTABLISHMENTS } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";
import { ContainerEstablishments,
         StyleEstablishments,
         StyleImage,
         StyleLink } from "../layout/styles/StyleFeatured";
import {Link} from "react-router-dom";

const FeaturedEstablishments = () => {
const { data } = useFetch(ESTABLISHMENTS);
          
    return (
        <div>
        {
        // eslint-disable-next-line
        data.map((establishments) => {
            if (establishments.hotel_featured === "1") {
            return (
                <ContainerEstablishments key={establishments.id}>
                    <StyleEstablishments>
                    <Link to={`establishments/details/${establishments.id}`} key={establishments.id}>
                        <StyleImage src={establishments.hotel_featured_image.guid} alt={establishments.hotel_name}/>
                    </Link>
                    </StyleEstablishments>
                    <StyleEstablishments>
                        <StyleLink to={`establishments/details/${establishments.id}`} key={establishments.id}>
                            Read more
                        </StyleLink>
                    </StyleEstablishments>
                </ContainerEstablishments>
                );
            }
          })
        }
        </div>
    );       
};
      
export default FeaturedEstablishments;