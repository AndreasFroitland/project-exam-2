import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

export default function PostList() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/posts");
				console.log("response", response);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>Loading posts...</div>;

	if (error) return <div>{}</div>;

	return (
		<ul className="posts">
			{posts.map((media) => {
				return (
					<li key={media.id}>
						<Link to={`/dashboard/posts/edit/${media.id}`}>{media.title.rendered}</Link>
					</li>
				);
			})}
		</ul>
	);
}