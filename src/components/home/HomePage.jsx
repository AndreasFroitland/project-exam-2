import Heading from "../layout/Heading";
import { StyleHeading } from "../layout/Heading"
import { ContainerPage } from "../layout/Container";

export default function HomePage() {
	return (
		<>
		  <ContainerPage>
			<StyleHeading>
			    <Heading content="Home" />
			</StyleHeading>
		  </ContainerPage>
		</>
	);
}