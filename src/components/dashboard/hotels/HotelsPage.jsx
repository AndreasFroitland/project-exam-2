import { Link } from "react-router-dom";
import DashboardPage from "../DashboardPage";
import HotelsList from "./HotelsList";

export default function HotelsPage() {
	return (
		<DashboardPage>
			<p>
				<Link to="/dashboard/hotels/add">Add hotel</Link>
			</p>
			<HotelsList />
		</DashboardPage>
	);
}