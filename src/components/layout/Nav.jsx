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
		 NavbarLogo } from "./styles/StyleNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightToBracket, faComments, faHotel, faCogs } from '@fortawesome/free-solid-svg-icons'
import Search from "../establishments/search/EstablishmentsSearch";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const navigate = useNavigate();

	function logout() {
		setAuth(null);
		navigate("/");
	}

	return (
		<div>
		    <ContainerNav>
			    <ContainerNavbar>
				    <ContainerLogo>
					    <NavbarLogo src={require('./images/Holidaze-logo.png')} alt="Holidaze logo" />
				    </ContainerLogo>
				
			    <NavbarLink to="/">
					<ContainerLink>
						<FontAwesomeIcon icon={faHouse} /> Home
					</ContainerLink>
				</NavbarLink>
				
			    <NavbarLink to="/establishments">
					<ContainerLink>
						<FontAwesomeIcon icon={faHotel} /> Booking
					</ContainerLink>
				</NavbarLink>
				
			    <NavbarLink to="/contact">
					<ContainerLink>
						<FontAwesomeIcon icon={faComments} /> Contact
					</ContainerLink>
				</NavbarLink>
				
			    {auth ? (
				    <>
					<NavbarLink to="/dashboard">
						<ContainerLink>
							<FontAwesomeIcon icon={faCogs} /> Dashboard
						</ContainerLink>
					</NavbarLink>
					
					<ContainerButton>
					    <NavbarButton onClick={logout}><FontAwesomeIcon icon={faRightToBracket} /> Logout</NavbarButton>
					</ContainerButton>
				    </>
			    ) : (
				    <NavbarLink to="/login">
						<ContainerLink>
							<FontAwesomeIcon icon={faRightToBracket} /> Login
						</ContainerLink>
					</NavbarLink>
			    )}
			    </ContainerNavbar>
		    </ContainerNav>
		        <Search />
		</div>
	);
}

export default Nav;