import Heading from "../layout/Heading";
import { StyleHeading } from "../layout/Heading"
import { ContainerPage } from "../layout/Container";
import EstablishmentsFeatured from "./HomeFeatured";
import { StyleHeadingTwo } from "../layout/styles/StyleHome";

export default function HomePage() {
	return (
		<>
		    <ContainerPage>
			    <StyleHeading>
			        <Heading content="Home" />
			    </StyleHeading>
				    <StyleHeadingTwo>&#10095; Featured establishments</StyleHeadingTwo>
			        <EstablishmentsFeatured />
		    </ContainerPage>
		</>
	);
}