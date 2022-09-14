import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import HotelsList from "./HotelsList";
import { StyleHeading } from "../../layout/Heading"

export default function HotelsPage() {
	return (
		<DashboardPage>
			<StyleHeading>
			    <Heading size="3" content="Hotels" />
			</StyleHeading>
			<p>
				<Link to="/dashboard/hotels/add">Add hotel</Link>
			</p>
			<HotelsList />
		</DashboardPage>
	);
}