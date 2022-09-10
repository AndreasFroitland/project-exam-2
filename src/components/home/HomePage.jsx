import Heading from "../layout/Heading";
import { ContainerPage } from "../layout/Container";

export default function HomePage() {
	return (
		<>
		  <ContainerPage>
			<Heading content="Home" />
			<div className="container"></div>
		  </ContainerPage>
		</>
	);
}