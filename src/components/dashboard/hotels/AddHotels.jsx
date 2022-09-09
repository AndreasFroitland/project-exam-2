import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import MediaDropdown from "../media/MediaDropdown";
import DashboardPage from "../DashboardPage";

const schema = yup.object().shape({
	title: yup.string().required("please enter title"),
	content: yup.string().required("please enter content"),
	featured_media: yup.string().required("please select image")
});

export default function AddHotels() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const navigate = useNavigate();
	const http = useAxios();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		
		data.status = "publish";

		if(data.featured_media === ""){
			data.featured_media = null
		}

		console.log(data);

		const addHotels = {
			title: data.title,
			content: data.content,
			status: "publish",
			featured_media: data.featured_media,
		}

		try {
			const response = await http.post("wp/v2/product", addHotels);
			console.log("response:", response.data);
			navigate("/dashboard/hotels");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<DashboardPage>
			<Heading content="Add hotel" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
				<fieldset disabled={submitting}>
					<div>
						<input name="title" placeholder="Title" {...register("title")} />
						{errors.title && <FormError>{errors.title?.message}</FormError>}
					</div>

					<div>
						<textarea name="content" placeholder="Content" {...register("content")} />
					</div>

					<div>
						<MediaDropdown register={register} />
					</div>
					<button>{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>
			</form>
		</DashboardPage>
	);
}