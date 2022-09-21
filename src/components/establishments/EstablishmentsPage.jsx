import Heading from "../layout/Heading";
import { StyleHeading } from "../layout/Heading"
import EstablishmentsList from "./EstablishmentsList";
import { ContainerPage } from "../layout/Container";

export default function EstablishmentsPage() {
	return (
		<>
		  <ContainerPage>
			<StyleHeading>
		        <Heading content="Establishments" />
			</StyleHeading>
			    <EstablishmentsList />
		  </ContainerPage>
		</>
	);
}