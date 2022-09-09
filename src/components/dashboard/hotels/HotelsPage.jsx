import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import HotelsList from "./HotelsList";

export default function HotelsPage() {
	return (
		<DashboardPage>
			<Heading size="3" content="Hotels" />
			<p>
				<Link to="/dashboard/hotels/add">Add hotel</Link>
			</p>
			<HotelsList />
		</DashboardPage>
	);
}