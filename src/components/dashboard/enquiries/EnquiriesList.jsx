import { ENQUIRIES } from "../../../constants/api";
import { useFetch } from "../../../hooks/useFetch";
import { ContainerEnquiries, StyleEnquiries } from "../../layout/StyleDashboard";

export default function EnquiriesList() {
	const { data } = useFetch(ENQUIRIES);

	return (
		<div>
			{data.map((enquiry) => {
				return (
					<ContainerEnquiries>
						<StyleEnquiries>
                            <p>Name: {enquiry.column_3}</p>
                            <p>E-mail: {enquiry.column_4}</p>
						    <p>Hotel: {enquiry.column_5}</p>
						    <p>Date: {enquiry.column_6}</p>
                        </StyleEnquiries>
					</ContainerEnquiries>
				);
			})}
		</div>
	);
}