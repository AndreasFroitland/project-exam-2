import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/api"
import { ContainerEnquiries, StyleEnquiries } from "../../layout/StyleDashboard";

export default function EnquiriesList() {
	const [enquiries, setEnquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function getEnquiries() {
			try {
				const response = await axios.get(BASE_URL + "mo/v1/bookingform");
				console.log("response", response);
				setEnquiries(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getEnquiries();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>Loading enquiries...</div>;

	if (error) return <div>{}</div>;

	return (
		<div>
			{enquiries.map((enquiry) => {
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