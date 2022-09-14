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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightToBracket, faComments, faHotel } from '@fortawesome/free-solid-svg-icons'

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
			        <NavbarLink to="/"><FontAwesomeIcon icon={faHouse} /> Home</NavbarLink>
				</ContainerLink>
				<ContainerLink>
			        <NavbarLink to="/hotels"><FontAwesomeIcon icon={faHotel} /> Hotels</NavbarLink>
				</ContainerLink>
				<ContainerLink>
			        <NavbarLink to="/contact"><FontAwesomeIcon icon={faComments} /> Contact</NavbarLink>
				</ContainerLink>
			    {auth ? (
				    <>
					<ContainerLink>
					    <NavbarLink to="/dashboard">Dashboard</NavbarLink>
					</ContainerLink>
					<ContainerButton>
					    <NavbarButton onClick={logout}><FontAwesomeIcon icon={faRightToBracket} /> Logout</NavbarButton>
					</ContainerButton>
				    </>
			    ) : (
					<ContainerLink>
				        <NavbarLink to="/login"><FontAwesomeIcon icon={faRightToBracket} /> Login</NavbarLink>
					</ContainerLink>
			    )}
			</ContainerNavbar>
		</ContainerNav>
	);
}

export default Nav;