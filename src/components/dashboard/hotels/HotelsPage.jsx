import DashboardPage from "../DashboardPage";
import HotelsList from "./HotelsList";
import { ContainerAddHotel, StyleAddHotel } from "../../layout/styles/StyleDashboard";

export default function HotelsPage() {
	return (
		<DashboardPage>
			<StyleAddHotel to="/dashboard/hotels/add">
				<ContainerAddHotel>Add hotel
				</ContainerAddHotel>
			</StyleAddHotel>
			    <HotelsList />
		</DashboardPage>
	);
}