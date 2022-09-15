import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

export default function EnquiriesList() {
	const [enquiries, setEnquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getEnquiries() {
			try {
				const response = await http.get("wp/v2/enquiry");
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
		<ul className="enquiries__list">
			{enquiries.map((enquiry) => {
				return (
					<div key={enquiry.id}>
                        {enquiry.full_name}
                        <div>
                        {enquiry.hotel_name}
                        </div>
					</div>
				);
			})}
		</ul>
	);
}