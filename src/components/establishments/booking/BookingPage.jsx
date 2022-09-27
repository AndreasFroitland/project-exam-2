import Heading from "../../layout/Heading";
import BookingForm from "./BookingForm";
import { ContainerPage } from "../../layout/Container";
import { ContainerHeader } from "../../layout/styles/StyleForm";

export default function BookingPage() {
	return (
		<>
		    <ContainerPage>
			    <ContainerHeader>
			        <Heading content="Booking" />
			    </ContainerHeader>
			        <BookingForm />
		    </ContainerPage>
		</>
	);
}