import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import { ContainerForm, ContainerHeader, StyleForm, StyleInput, StyleTextarea, StyleButton, StyleFieldset } from "../../layout/styles/StyleForm";

const schema = yup.object().shape({
	hotel_name: yup.string().required("Please enter the hotel name"),
	hotel_description: yup.string().required("Please enter a hotel description"),
	hotel_short_description: yup.string().required("Please enter a hotel short description"),
	hotel_price: yup.string().required("Please enter hotel price"),
	hotel_rating: yup.string().required("Please enter hotel rating"),
	hotel_reviews: yup.string().required("Please enter number of reviews"),
	hotel_featured_image: yup.string().required("Please enter a url for the featured image"),
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

		console.log(data);

		const addHotels = {
			status: "publish",
			hotel_name: data.hotel_name,
			hotel_description: data.hotel_description,
			hotel_short_description: data.hotel_short_description,
			hotel_price: data.hotel_price,
			hotel_rating: data.hotel_rating,
			hotel_reviews: data.hotel_reviews,
			hotel_featured_image: data.hotel_featured_image.guid,
		}

		try {
			const response = await http.post("wp/v2/hotel", addHotels);
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
			<ContainerForm>
				<ContainerHeader>
			        <Heading content="Add hotel" />
			    </ContainerHeader>
			<StyleForm onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
				<StyleFieldset disabled={submitting}>

					<div>
						<p>Hotel name:</p>
						<StyleInput name="hotel_name" placeholder="hotel name..." {...register("hotel_name")} />
						{errors.hotel_name && <FormError>{errors.hotel_name?.message}</FormError>}
					</div>

					<div>
						<p>Hotel featured image:</p>
						<StyleInput name="hotel_featured_image" placeholder="hotel featured image..." {...register("hotel_featured_image")} />
						{errors.hotel_featured_image && <FormError>{errors.hotel_featured_image?.message}</FormError>}
					</div>

					<div>
						<p>Hotel short description:</p>
						<StyleTextarea name="hotel_short_description" placeholder="hotel description..." rows="5" {...register("hotel_short_description")} />
						{errors.hotel_short_description && <FormError>{errors.hotel_short_description?.message}</FormError>}
					</div>

					<div>
						<p>Hotel description:</p>
						<StyleTextarea name="hotel_description" placeholder="hotel description..." rows="7" {...register("hotel_description")} />
						{errors.hotel_description && <FormError>{errors.hotel_description?.message}</FormError>}
					</div>

					<div>
						<p>Hotel Price:</p>
						<StyleInput name="hotel_price" placeholder="hotel price..." {...register("hotel_price")} />
						{errors.hotel_price && <FormError>{errors.hotel_price?.message}</FormError>}
					</div>

					<div>
						<p>Hotel Rating:</p>
						<StyleInput name="hotel_rating" placeholder="hotel rating..." {...register("hotel_rating")} />
						{errors.hotel_rating && <FormError>{errors.hotel_rating?.message}</FormError>}
					</div>

					<div>
						<p>Hotel reviews:</p>
						<StyleInput name="hotel_reviews" placeholder="hotel reviews..." {...register("hotel_reviews")} />
						{errors.hotel_reviews && <FormError>{errors.hotel_reviews?.message}</FormError>}
					</div>

					<StyleButton>{submitting ? "Submitting..." : "Submit"}</StyleButton>
				</StyleFieldset>
			</StyleForm>
			</ContainerForm>
		</DashboardPage>
	);
}