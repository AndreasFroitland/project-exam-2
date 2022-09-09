import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { ContainerNav,
	     ContainerNavbar,
		 NavbarLink,
		 ContainerLink,
		 ContainerButton,
		 NavbarButton,
		 ContainerLogo,
		 NavbarLogo } from "../layout/StyleNav";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const navigate = useNavigate();

	function logout() {
		setAuth(null);
		navigate("/");
	}

	return (
		<ContainerNav>
			<ContainerNavbar>
				<ContainerLogo>
					<NavbarLogo src={require('../images/Holidaze-logo.png')} alt="Holidaze logo" />
				</ContainerLogo>
				<ContainerLink>
			        <NavbarLink to="/">Home</NavbarLink>
				</ContainerLink>
				<ContainerLink>
			        <NavbarLink to="/hotels">Hotels</NavbarLink>
				</ContainerLink>
				<ContainerLink>
			        <NavbarLink to="/contact">Contact</NavbarLink>
				</ContainerLink>
			    {auth ? (
				    <>
					<ContainerLink>
					    <NavbarLink to="/dashboard">Dashboard</NavbarLink>
					</ContainerLink>
					<ContainerButton>
					    <NavbarButton onClick={logout}>Logout</NavbarButton>
					</ContainerButton>
				    </>
			    ) : (
					<ContainerLink>
				        <NavbarLink to="/login">Login</NavbarLink>
					</ContainerLink>
			    )}
			</ContainerNavbar>
		</ContainerNav>
	);
}

export default Nav;