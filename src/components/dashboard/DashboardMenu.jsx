import { Link } from "react-router-dom";

export default function DashboardMenu() {
	return (
		<nav className="dashboard">
			Sections: <Link to="/dashboard/hotels">Hotels</Link> , <Link to="/dashboard/messages">Messages</Link> , <Link to="/dashboard/enquiries">Enquiries</Link>
		</nav>
	);
}