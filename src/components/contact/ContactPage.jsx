import Heading from "../layout/Heading";
import ContactForm from "./ContactForm";
import { ContainerPage } from "../layout/Container";
import { ContainerHeader } from "../layout/StyleForm";

export default function ContactPage() {
	return (
		<>
		  <ContainerPage>
			<ContainerHeader>
			  <Heading content="Contact" />
			</ContainerHeader>
			<ContactForm />
		  </ContainerPage>
		</>
	);
}