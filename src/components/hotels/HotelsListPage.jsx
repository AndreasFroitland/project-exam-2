import Heading from "../layout/Heading";
import HotelsList from "./HotelsList";
import { ContainerPage } from "../layout/Container";

export default function HotelsPage() {
	return (
		<>
		  <ContainerPage>
		    <Heading content="Hotels" />
			<HotelsList />
		  </ContainerPage>
		</>
	);
}