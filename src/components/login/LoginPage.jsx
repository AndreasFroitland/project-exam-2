import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import { ContainerPage } from "../layout/Container";
import { ContainerHeader } from "../layout/styles/StyleForm";

export default function LoginPage() {
	return (
		<>
		    <ContainerPage>
			    <ContainerHeader>
			        <Heading content="Login" />
			    </ContainerHeader>
			        <LoginForm />
		    </ContainerPage>
		</>
	);
}