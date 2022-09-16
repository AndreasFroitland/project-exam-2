import { Link } from "react-router-dom";
import DashboardPage from "../DashboardPage";
import HotelsList from "./HotelsList";

export default function HotelsPage() {
	return (
		<DashboardPage>
			<div>
				<Link to="/dashboard/hotels/add">Add hotel</Link>
			</div>
			    <HotelsList />
		</DashboardPage>
	);
}