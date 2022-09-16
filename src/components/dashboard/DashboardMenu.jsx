import { StyleMenu, StyleLink } from "../layout/StyleDashboard";

export default function DashboardMenu() {
	return (
		<nav className="dashboard">
			<StyleLink to="/dashboard/hotels">
				<StyleMenu>Hotels
				</StyleMenu>
			</StyleLink>
			<StyleLink to="/dashboard/messages">
				<StyleMenu>Messages
				</StyleMenu>
			</StyleLink>
			<StyleLink to="/dashboard/enquiries">
				<StyleMenu>Enquiries
				</StyleMenu>
			</StyleLink>
		</nav>
	);
}